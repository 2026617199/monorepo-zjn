# ========================================
# 阶段1: 安装依赖并构建
# ========================================
FROM node:24-alpine AS builder

WORKDIR /app

# 安装 pnpm
RUN corepack enable && corepack prepare pnpm@9.15.0 --activate

# 复制 workspace 配置文件
COPY package.json pnpm-workspace.yaml pnpm-lock.yaml ./
COPY packages ./packages
COPY apps/frontend/package.json ./apps/frontend/
COPY apps/backend/package.json ./apps/backend/

# 安装所有依赖
RUN pnpm install --frozen-lockfile

# 复制源码
COPY apps/frontend ./apps/frontend
COPY apps/backend ./apps/backend

# 构建前端
RUN pnpm --filter @drug-interaction/frontend build

# ========================================
# 阶段2: 生产镜像
# ========================================
FROM node:24-alpine AS production

WORKDIR /app

# 安装 pnpm
RUN corepack enable && corepack prepare pnpm@9.15.0 --activate

# 创建非 root 用户
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001

# 复制 workspace 配置（用于 pnpm deploy）
COPY package.json pnpm-workspace.yaml pnpm-lock.yaml ./
COPY packages ./packages
COPY apps/backend/package.json ./apps/backend/

# 仅安装后端生产依赖
RUN pnpm install --frozen-lockfile --filter @drug-interaction/backend --prod && \
    pnpm store prune

# 复制后端源码
COPY --from=builder /app/apps/backend/src ./apps/backend/src

# 从构建阶段复制前端产物到后端 public 目录
COPY --from=builder /app/apps/frontend/dist ./apps/backend/public

# 创建日志目录并设置权限
RUN mkdir -p /app/apps/backend/logs && \
    chown -R nodejs:nodejs /app

# 切换到非 root 用户
USER nodejs

WORKDIR /app/apps/backend

# 设置环境变量
ENV NODE_ENV=production
ENV PORT=3000

# 暴露端口
EXPOSE 3000

# 健康检查
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD node -e "require('http').get('http://localhost:3000/health', (res) => { process.exit(res.statusCode === 200 ? 0 : 1) }).on('error', () => process.exit(1))"

# 启动应用
CMD ["node", "src/index.js"]
