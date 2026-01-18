# ========================================
# 阶段1: 构建阶段 (Builder)
# ========================================
FROM node:24-alpine AS builder

WORKDIR /app

# 启用 pnpm
RUN corepack enable && corepack prepare pnpm@9.15.0 --activate

# 1. 复制所有包管理文件
# 这样利用 Docker 缓存：只要依赖定义不变，就不会重新安装
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml turbo.json ./
COPY packages ./packages
COPY apps/frontend/package.json ./apps/frontend/
COPY apps/backend/package.json ./apps/backend/

# 2. 安装所有依赖 (包括构建前端所需的 devDependencies)
RUN pnpm install --frozen-lockfile

# 3. 复制完整的源代码
COPY . .

# 4. 构建前端
# 构建产物将生成在 apps/frontend/dist
RUN pnpm --filter @drug-interaction/frontend build

# ========================================
# 阶段2: 运行阶段 (Runner)
# ========================================
FROM node:24-alpine AS runner

WORKDIR /app

# 设置环境变量
ENV NODE_ENV=production
ENV PORT=3000

# 启用 pnpm
RUN corepack enable && corepack prepare pnpm@9.15.0 --activate

# 创建非 root 用户安全性
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 koa

# 1. 再次复制包配置，用于仅安装生产依赖
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY packages ./packages
COPY apps/backend/package.json ./apps/backend/

# 2. 仅安装后端生产依赖
# 使用 --prod 过滤掉 devDependencies，减小镜像体积
RUN pnpm install --frozen-lockfile --prod --filter @drug-interaction/backend

# 3. 复制后端源代码
COPY apps/backend ./apps/backend

# 4. 【关键步骤】将构建阶段生成的前端 dist 复制到后端的 public 目录
# 这样 Koa 的 koa-static 中间件就能直接托管这些静态文件
COPY --from=builder /app/apps/frontend/dist ./apps/backend/public

# 设置权限
RUN chown -R koa:nodejs /app

# 切换到非 root 用户
USER koa

# 暴露端口
EXPOSE 3000

# 切换到后端目录启动
WORKDIR /app/apps/backend

# 启动命令
CMD ["node", "src/index.js"]
