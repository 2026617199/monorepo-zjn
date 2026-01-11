# 药物相互作用查询系统

一个全栈Web应用，用于查询药物信息、检测药物相互作用，并通过AI提供智能分析。

## 技术栈

### 前端
- Vue 3 + Vite
- Vue Router
- Pinia
- Axios
- ECharts
- Prettier

### 后端
- Koa 2
- MongoDB + Mongoose
- DeepSeek AI (OpenAI兼容)
- Swagger

## 项目结构

```
drug-interaction-system/
├── frontend/          # 前端项目
│   ├── src/
│   │   ├── views/
│   │   ├── components/
│   │   ├── router/
│   │   ├── stores/
│   │   ├── api/
│   │   └── utils/
│   └── package.json
│
└── backend/           # 后端项目
    ├── src/
    │   ├── controllers/
    │   ├── services/
    │   ├── models/
    │   ├── routes/
    │   ├── middleware/
    │   └── config/
    └── package.json
```

## 快速开始

### 前端

```bash
cd frontend
npm install
npm run dev
```

前端将运行在 http://localhost:5173

### 后端

```bash
cd backend
npm install
npm run dev
```

后端将运行在 http://localhost:3000

API文档: http://localhost:3000/swagger

## 功能模块

1. **首页** - 系统介绍和导航
2. **冲突检测** - 检测多种药物之间的相互作用
3. **药物图谱** - 可视化展示药物关系网络
4. **药物库** - 浏览和搜索药物信息

## 环境变量

### 后端 (.env)

```
PORT=3000
MONGODB_URI=your_mongodb_connection_string
DEEPSEEK_API_KEY=your_deepseek_api_key
```

### 前端 (.env)

```
VITE_API_BASE_URL=http://localhost:3000/api
```
