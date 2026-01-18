<template>
  <header class="header">
    <div class="container">
      <div class="logo" @click="navigateTo('/')">
        <div class="logo-pill">
          <span class="pill-half pill-left"></span>
          <span class="pill-half pill-right"></span>
        </div>
        <span class="logo-text">DrugSafe<span class="logo-accent">AI</span></span>
      </div>
      <nav class="nav-links">
        <router-link 
          v-for="link in navLinks" 
          :key="link.path" 
          :to="link.path"
          class="nav-link"
          :class="{ active: isActive(link.path) }"
        >
          {{ link.name }}
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue'

const router = useRouter()
const route = useRoute()

// 导航链接配置
const navLinks = [
  { name: '药品查询', path: '/drug-query' },
  { name: '冲突检测', path: '/conflict-detection' },
  { name: '药物图谱', path: '/drug-graph' },
  { name: '药物库', path: '/drug-database' },
  { name: 'AI问答', path: '/ai-chat' }
]

// 判断当前路由是否激活
const isActive = (path: string) => {
  return route.path === path
}

// 导航到首页
const navigateTo = (path: string) => {
  router.push(path)
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Noto+Sans+SC:wght@400;500;600;700&display=swap');

.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(10, 10, 15, 0.8);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  transition: opacity 0.2s;
}

.logo:hover {
  opacity: 0.8;
}

.logo-pill {
  width: 32px;
  height: 16px;
  display: flex;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
}

.pill-half {
  flex: 1;
}

.pill-left {
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
}

.pill-right {
  background: linear-gradient(135deg, #f472b6, #ec4899);
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #fff;
}

.logo-accent {
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-link {
  color: #a1a1aa;
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  transition: color 0.2s;
  position: relative;
}

.nav-link:hover,
.nav-link.active {
  color: #fff;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #3b82f6, #8b5cf6);
  transition: width 0.3s;
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
}

/* 响应式 */
@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
    height: 64px;
  }

  .logo-text {
    font-size: 1.25rem;
  }

  .nav-links {
    display: none;
  }
}
</style>