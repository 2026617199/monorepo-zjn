<template>
  <div class="drug-query-view">
    <!-- 动态背景 -->
    <div class="bg-layer">
      <div class="gradient-orb orb-1"></div>
      <div class="gradient-orb orb-2"></div>
      <div class="gradient-orb orb-3"></div>
      <div class="grid-pattern"></div>
    </div>

    <!-- 顶部导航栏 -->
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
          >
            {{ link.name }}
          </router-link>
        </nav>
      </div>
    </header>

    <!-- 主要内容区域 -->
    <main class="main-content">
      <div class="container">
        <!-- 页面标题 -->
        <section class="page-header">
          <div class="header-content">
            <div class="header-icon">
              <span>🔍</span>
            </div>
            <div class="header-text">
              <h1 class="page-title">药品查询</h1>
              <p class="page-description">
                输入药物名称，AI智能分析药物详细信息，包括药理作用、副作用、禁忌症等
              </p>
            </div>
          </div>
        </section>

        <!-- 搜索区域 -->
        <section class="search-section">
          <div class="search-container">
            <div class="search-input-wrapper">
              <span class="search-icon">💊</span>
              <input
                v-model="searchQuery"
                type="text"
                class="search-input"
                placeholder="输入药物名称，如：阿司匹林、布洛芬、青霉素..."
                @keyup.enter="handleSearch"
                :disabled="loading"
              />
              <button 
                class="search-btn"
                @click="handleSearch"
                :disabled="loading || !searchQuery.trim()"
              >
                <span v-if="!loading">查询</span>
                <span v-else class="loading-spinner"></span>
              </button>
            </div>
            
            <!-- 快捷标签 -->
            <div class="quick-tags" v-if="!loading && !searchResult">
              <span class="tags-label">快捷查询：</span>
              <button 
                v-for="drug in quickTags" 
                :key="drug"
                class="quick-tag"
                @click="searchQuery = drug; handleSearch()"
                :disabled="loading"
              >
                {{ drug }}
              </button>
            </div>
          </div>

          <!-- 验证提示 -->
          <div class="validation-hint" v-if="validationHint">
            <span class="hint-icon">ℹ️</span>
            {{ validationHint }}
          </div>
        </section>

        <!-- 查询结果区域 -->
        <section class="result-section" v-if="searchResult || error">
          <!-- 错误提示 -->
          <div class="error-card" v-if="error">
            <div class="error-icon">⚠️</div>
            <div class="error-content">
              <h3 class="error-title">查询失败</h3>
              <p class="error-message">{{ error }}</p>
            </div>
            <button class="retry-btn" @click="handleSearch">重试</button>
          </div>

          <!-- 成功结果 -->
          <div class="result-card" v-if="searchResult">
            <div class="card-header">
              <div class="drug-title">
                <span class="drug-icon">💊</span>
                <div class="drug-name">
                  <h2>{{ searchResult.name }}</h2>
                  <span class="generic-name" v-if="searchResult.genericName">
                    通用名：{{ searchResult.genericName }}
                  </span>
                </div>
              </div>
              <div class="source-badge" :class="searchResult.source">
                {{ searchResult.source === 'ai' ? 'AI分析' : '数据库' }}
              </div>
            </div>

            <div class="card-body">
              <!-- 基础信息 -->
              <div class="info-section">
                <div class="info-item">
                  <span class="info-label">药物分类</span>
                  <span class="info-value">{{ searchResult.category || '未知' }}</span>
                </div>
                <div class="info-item">
                  <span class="info-label">描述</span>
                  <span class="info-value">{{ searchResult.description || '暂无描述' }}</span>
                </div>
              </div>

              <!-- 副作用 -->
              <div class="detail-section" v-if="searchResult.sideEffects?.length">
                <h3 class="section-title">⚠️ 常见副作用</h3>
                <div class="tag-list">
                  <span 
                    class="detail-tag" 
                    v-for="(effect, index) in searchResult.sideEffects" 
                    :key="index"
                  >
                    {{ effect }}
                  </span>
                </div>
              </div>

              <!-- 禁忌症 -->
              <div class="detail-section" v-if="searchResult.contraindications?.length">
                <h3 class="section-title">🚫 禁忌症</h3>
                <div class="tag-list">
                  <span 
                    class="detail-tag tag-warning" 
                    v-for="(item, index) in searchResult.contraindications" 
                    :key="index"
                  >
                    {{ item }}
                  </span>
                </div>
              </div>

              <!-- 用法用量 -->
              <div class="detail-section" v-if="searchResult.dosage">
                <h3 class="section-title">📋 用法用量</h3>
                <p class="dosage-text">{{ searchResult.dosage }}</p>
              </div>

              <!-- AI详细分析 -->
              <div class="ai-analysis-section" v-if="searchResult.aiAnalysis">
                <div class="ai-header" @click="toggleAiAnalysis">
                  <h3 class="section-title">🧠 AI 详细分析</h3>
                  <span class="expand-icon" :class="{ expanded: showAiAnalysis }">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </span>
                </div>
                <div class="ai-content" v-show="showAiAnalysis">
                  <div class="analysis-text">{{ searchResult.aiAnalysis }}</div>
                </div>
              </div>
            </div>

            <div class="card-footer">
              <button class="action-btn btn-secondary" @click="clearResult">
                清除结果
              </button>
              <button 
                class="action-btn btn-primary" 
                @click="saveToDatabase"
                :disabled="saving"
              >
                <span v-if="!saving">💾 保存到药物库</span>
                <span v-else class="loading-spinner small"></span>
              </button>
            </div>
          </div>
        </section>

        <!-- 历史记录 -->
        <section class="history-section" v-if="history.length > 0 && !searchResult && !loading">
          <h3 class="history-title">📜 历史查询</h3>
          <div class="history-list">
            <button 
              class="history-item" 
              v-for="(item, index) in history" 
              :key="index"
              @click="searchQuery = item; handleSearch()"
            >
              <span class="history-icon">💊</span>
              <span class="history-name">{{ item }}</span>
              <span class="history-time">{{ getTimeAgo(index) }}</span>
            </button>
          </div>
          <button class="clear-history-btn" @click="clearHistory">清除历史记录</button>
        </section>

        <!-- 空白状态 -->
        <section class="empty-state" v-if="!loading && !searchResult && !error && history.length === 0">
          <div class="empty-icon">🔍</div>
          <h3 class="empty-title">开始查询药物</h3>
          <p class="empty-description">
            输入任意药物名称，系统将调用AI分析该药物的详细信息，包括药理作用、副作用、禁忌症等
          </p>
          <div class="empty-tips">
            <div class="tip-item">
              <span class="tip-icon">💡</span>
              <span>支持处方药、非处方药、中药等</span>
            </div>
            <div class="tip-item">
              <span class="tip-icon">⚡</span>
              <span>AI实时分析，秒级响应</span>
            </div>
            <div class="tip-item">
              <span class="tip-icon">🔒</span>
              <span>分析结果可保存到药物库</span>
            </div>
          </div>
        </section>
      </div>
    </main>

    <!-- Toast 提示 -->
    <Teleport to="body">
      <div class="toast-container">
        <TransitionGroup name="toast">
          <div 
            v-for="toast in toasts" 
            :key="toast.id" 
            class="toast"
            :class="toast.type"
          >
            {{ toast.message }}
          </div>
        </TransitionGroup>
      </div>
    </Teleport>

    <!-- 页脚 -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-brand">
            <span class="footer-logo">DrugSafe<span class="logo-accent">AI</span></span>
            <p class="footer-tagline">智能药物安全分析平台</p>
          </div>
          <div class="footer-disclaimer">
            <p>⚠️ 本系统仅供参考，不作为医疗诊断或用药建议依据</p>
            <p>如有用药疑问，请咨询专业医师或药师</p>
          </div>
        </div>
        <div class="footer-bottom">
          <p>© 2024 DrugSafeAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { drugApi } from '@/api/drug'
import type { AnalyzeDrugResult } from '@/api/drug'

const router = useRouter()

// 导航链接
const navLinks = [
  { name: '冲突检测', path: '/conflict-detection' },
  { name: '药物图谱', path: '/drug-graph' },
  { name: '药物库', path: '/drug-database' },
  { name: '药品查询', path: '/drug-query' },
  { name: 'AI问答', path: '/ai-chat' }
]

// 快捷查询标签
const quickTags = ['阿司匹林', '布洛芬', '青霉素', '头孢', '二甲双胍']

// 响应式数据
const searchQuery = ref('')
const loading = ref(false)
const saving = ref(false)
const searchResult = ref<AnalyzeDrugResult | null>(null)
const error = ref<string | null>(null)
const validationHint = ref<string | null>(null)
const showAiAnalysis = ref(false)
const history = ref<string[]>([])
const toasts = ref<Array<{ id: number; message: string; type: string }>>([])

// Toast 相关
let toastId = 0
const showToast = (message: string, type: string = 'info') => {
  const id = ++toastId
  toasts.value.push({ id, message, type })
  setTimeout(() => {
    toasts.value = toasts.value.filter(t => t.id !== id)
  }, 3000)
}

// 导航函数
const navigateTo = (path: string) => {
  router.push(path)
}

// 搜索处理
const handleSearch = async () => {
  if (!searchQuery.value.trim() || loading.value) return

  // 清空之前的结果
  error.value = null
  searchResult.value = null
  showAiAnalysis.value = false
  validationHint.value = null

  loading.value = true

  try {
    const response = await drugApi.analyzeDrug(searchQuery.value.trim())
    
    if (response.success && response.data) {
      searchResult.value = response.data as AnalyzeDrugResult
      addToHistory(searchQuery.value.trim())
      showToast('查询成功', 'success')
    } else {
      error.value = response.error?.message || '查询失败，请稍后重试'
    }
  } catch (err: any) {
    console.error('查询药物失败:', err)
    error.value = err.message || '查询失败，请稍后重试'
  } finally {
    loading.value = false
  }
}

// 保存到数据库
const saveToDatabase = async () => {
  if (!searchResult.value || saving.value) return

  saving.value = true

  try {
    const drugData = {
      name: searchResult.value.name,
      genericName: searchResult.value.genericName,
      description: searchResult.value.description || '',
      category: searchResult.value.category || '',
      sideEffects: searchResult.value.sideEffects || [],
      contraindications: searchResult.value.contraindications || [],
      dosage: searchResult.value.dosage,
      aiAnalysis: searchResult.value.aiAnalysis,
      source: 'ai' as const
    }

    const response = await drugApi.saveDrug(drugData)

    if (response.success) {
      showToast('已保存到药物库', 'success')
    } else {
      showToast(response.error?.message || '保存失败', 'error')
    }
  } catch (err: any) {
    console.error('保存药物失败:', err)
    showToast(err.message || '保存失败', 'error')
  } finally {
    saving.value = false
  }
}

// 清除结果
const clearResult = () => {
  searchResult.value = null
  error.value = null
  searchQuery.value = ''
}

// 展开/收起AI分析
const toggleAiAnalysis = () => {
  showAiAnalysis.value = !showAiAnalysis.value
}

// 历史记录管理
const addToHistory = (name: string) => {
  const newHistory = [name, ...history.value.filter(h => h !== name)].slice(0, 10)
  history.value = newHistory
  localStorage.setItem('drugQueryHistory', JSON.stringify(newHistory))
}

const clearHistory = () => {
  history.value = []
  localStorage.removeItem('drugQueryHistory')
  showToast('历史记录已清除', 'info')
}

const getTimeAgo = (index: number) => {
  // 简化的相对时间显示
  return index === 0 ? '刚刚' : `${index + 1}次前`
}

// 加载历史记录
onMounted(() => {
  const savedHistory = localStorage.getItem('drugQueryHistory')
  if (savedHistory) {
    try {
      history.value = JSON.parse(savedHistory)
    } catch (e) {
      console.error('解析历史记录失败:', e)
    }
  }
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Noto+Sans+SC:wght@400;500;600;700&display=swap');

.drug-query-view {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #0a0a0f;
  color: #e4e4e7;
  font-family: 'Noto Sans SC', 'Space Grotesk', sans-serif;
  position: relative;
  overflow-x: hidden;
}

/* 动态背景 */
.bg-layer {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.gradient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.4;
  animation: float 20s ease-in-out infinite;
}

.orb-1 {
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(245, 158, 11, 0.3) 0%, transparent 70%);
  top: -200px;
  right: -100px;
  animation-delay: 0s;
}

.orb-2 {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%);
  bottom: -150px;
  left: -100px;
  animation-delay: -7s;
}

.orb-3 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, transparent 70%);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation-delay: -14s;
}

@keyframes float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  25% { transform: translate(30px, -30px) scale(1.05); }
  50% { transform: translate(-20px, 20px) scale(0.95); }
  75% { transform: translate(20px, 30px) scale(1.02); }
}

.grid-pattern {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
  background-size: 60px 60px;
}

/* 头部样式 */
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(10, 10, 15, 0.8);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.header .container {
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

.nav-link:hover, .nav-link.router-link-active {
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

.nav-link:hover::after, .nav-link.router-link-active::after {
  width: 100%;
}

/* 主要内容 */
.main-content {
  flex: 1;
  position: relative;
  z-index: 1;
  padding: 3rem 0;
}

/* 页面标题 */
.page-header {
  text-align: center;
  margin-bottom: 3rem;
  animation: fadeInUp 0.6s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
}

.header-icon {
  width: 64px;
  height: 64px;
  background: linear-gradient(135deg, rgba(245, 158, 11, 0.2), rgba(245, 158, 11, 0.1));
  border: 1px solid rgba(245, 158, 11, 0.3);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
}

.header-text {
  text-align: left;
}

.page-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
}

.page-description {
  font-size: 1rem;
  color: #a1a1aa;
}

/* 搜索区域 */
.search-section {
  margin-bottom: 3rem;
  animation: fadeInUp 0.6s ease-out 0.1s both;
}

.search-container {
  max-width: 700px;
  margin: 0 auto;
}

.search-input-wrapper {
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 6px;
  transition: all 0.3s;
}

.search-input-wrapper:focus-within {
  border-color: rgba(245, 158, 11, 0.5);
  box-shadow: 0 0 20px rgba(245, 158, 11, 0.15);
}

.search-icon {
  padding-left: 1rem;
  font-size: 1.25rem;
}

.search-input {
  flex: 1;
  background: transparent;
  border: none;
  padding: 1rem;
  font-size: 1rem;
  color: #fff;
  outline: none;
}

.search-input::placeholder {
  color: #71717a;
}

.search-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: linear-gradient(135deg, #f59e0b, #d97706);
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
}

.search-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 4px 20px rgba(245, 158, 11, 0.4);
}

.search-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* 快捷标签 */
.quick-tags {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: 1rem;
  flex-wrap: wrap;
  justify-content: center;
}

.tags-label {
  font-size: 0.875rem;
  color: #71717a;
}

.quick-tag {
  padding: 6px 14px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 100px;
  color: #a1a1aa;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s;
}

.quick-tag:hover {
  background: rgba(245, 158, 11, 0.1);
  border-color: rgba(245, 158, 11, 0.3);
  color: #f59e0b;
}

/* 验证提示 */
.validation-hint {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 1rem;
  font-size: 0.875rem;
  color: #f59e0b;
}

/* 加载动画 */
.loading-spinner {
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

.loading-spinner.small {
  width: 16px;
  height: 16px;
  border-width: 2px;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* 结果区域 */
.result-section {
  animation: fadeInUp 0.4s ease-out;
}

.error-card {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  max-width: 600px;
  margin: 0 auto;
  padding: 1.5rem;
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.2);
  border-radius: 16px;
}

.error-icon {
  font-size: 2rem;
}

.error-content {
  flex: 1;
}

.error-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #f87171;
  margin-bottom: 0.25rem;
}

.error-message {
  font-size: 0.9rem;
  color: #a1a1aa;
}

.retry-btn {
  padding: 8px 16px;
  background: rgba(239, 68, 68, 0.2);
  border: 1px solid rgba(239, 68, 68, 0.3);
  border-radius: 8px;
  color: #f87171;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s;
}

.retry-btn:hover {
  background: rgba(239, 68, 68, 0.3);
}

/* 结果卡片 */
.result-card {
  max-width: 800px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  overflow: hidden;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1.5rem;
  background: linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, transparent 100%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.drug-title {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.drug-icon {
  font-size: 2.5rem;
}

.drug-name h2 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 0.25rem;
}

.generic-name {
  font-size: 0.9rem;
  color: #a1a1aa;
}

.source-badge {
  padding: 6px 14px;
  border-radius: 100px;
  font-size: 0.8rem;
  font-weight: 500;
}

.source-badge.ai {
  background: rgba(139, 92, 246, 0.2);
  color: #a78bfa;
  border: 1px solid rgba(139, 92, 246, 0.3);
}

.source-badge.database {
  background: rgba(16, 185, 129, 0.2);
  color: #34d399;
  border: 1px solid rgba(16, 185, 129, 0.3);
}

.card-body {
  padding: 1.5rem;
}

/* 基础信息 */
.info-section {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.info-label {
  font-size: 0.8rem;
  color: #71717a;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.info-value {
  font-size: 0.95rem;
  color: #e4e4e7;
  line-height: 1.5;
}

/* 详情区块 */
.detail-section {
  margin-bottom: 1.5rem;
}

.section-title {
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 0.75rem;
}

.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.detail-tag {
  padding: 6px 12px;
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 8px;
  font-size: 0.85rem;
  color: #60a5fa;
}

.detail-tag.tag-warning {
  background: rgba(239, 68, 68, 0.1);
  border-color: rgba(239, 68, 68, 0.2);
  color: #f87171;
}

.dosage-text {
  font-size: 0.95rem;
  color: #e4e4e7;
  line-height: 1.7;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 10px;
}

/* AI分析区域 */
.ai-analysis-section {
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  padding-top: 1.5rem;
  margin-top: 1.5rem;
}

.ai-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.expand-icon {
  transition: transform 0.3s;
}

.expand-icon.expanded {
  transform: rotate(180deg);
}

.ai-content {
  margin-top: 1rem;
}

.analysis-text {
  font-size: 0.95rem;
  color: #e4e4e7;
  line-height: 1.8;
  padding: 1.25rem;
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.05) 0%, transparent 100%);
  border: 1px solid rgba(139, 92, 246, 0.1);
  border-radius: 12px;
  white-space: pre-wrap;
}

/* 卡片底部 */
.card-footer {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  padding: 1.25rem 1.5rem;
  background: rgba(255, 255, 255, 0.02);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.action-btn {
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-secondary {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #a1a1aa;
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.25);
  color: #fff;
}

.btn-primary {
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  border: none;
  color: #fff;
}

.btn-primary:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.4);
}

.btn-primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* 历史记录 */
.history-section {
  max-width: 600px;
  margin: 0 auto;
  animation: fadeInUp 0.4s ease-out;
}

.history-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 1rem;
}

.history-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.history-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s;
}

.history-item:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.1);
}

.history-icon {
  font-size: 1.25rem;
}

.history-name {
  flex: 1;
  text-align: left;
  color: #e4e4e7;
}

.history-time {
  font-size: 0.8rem;
  color: #71717a;
}

.clear-history-btn {
  width: 100%;
  margin-top: 1rem;
  padding: 10px;
  background: transparent;
  border: 1px dashed rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  color: #71717a;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s;
}

.clear-history-btn:hover {
  border-color: rgba(239, 68, 68, 0.3);
  color: #f87171;
}

/* 空白状态 */
.empty-state {
  text-align: center;
  padding: 4rem 2rem;
  animation: fadeInUp 0.4s ease-out;
}

.empty-icon {
  font-size: 4rem;
  margin-bottom: 1.5rem;
}

.empty-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 0.75rem;
}

.empty-description {
  font-size: 1rem;
  color: #71717a;
  max-width: 500px;
  margin: 0 auto 2rem;
  line-height: 1.6;
}

.empty-tips {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
  margin: 0 auto;
}

.tip-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 12px;
}

.tip-icon {
  font-size: 1.25rem;
}

.tip-item span:last-child {
  font-size: 0.9rem;
  color: #a1a1aa;
}

/* Toast 样式 */
.toast-container {
  position: fixed;
  top: 90px;
  right: 20px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.toast {
  padding: 12px 20px;
  border-radius: 10px;
  font-size: 0.9rem;
  color: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.toast.success {
  background: linear-gradient(135deg, #10b981, #059669);
}

.toast.error {
  background: linear-gradient(135deg, #ef4444, #dc2626);
}

.toast.info {
  background: linear-gradient(135deg, #3b82f6, #2563eb);
}

.toast-enter-active, .toast-leave-active {
  transition: all 0.3s ease;
}

.toast-enter-from {
  opacity: 0;
  transform: translateX(100px);
}

.toast-leave-to {
  opacity: 0;
  transform: translateX(100px);
}

/* 页脚 */
.footer {
  position: relative;
  z-index: 1;
  background: rgba(0, 0, 0, 0.3);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  padding: 3rem 0 1.5rem;
  margin-top: auto;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.footer-brand {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer-logo {
  font-size: 1.25rem;
  font-weight: 700;
  color: #fff;
}

.footer-tagline {
  font-size: 0.875rem;
  color: #71717a;
}

.footer-disclaimer {
  text-align: right;
}

.footer-disclaimer p {
  font-size: 0.875rem;
  color: #71717a;
  line-height: 1.6;
}

.footer-bottom {
  text-align: center;
}

.footer-bottom p {
  font-size: 0.8rem;
  color: #52525b;
}

/* 响应式 */
@media (max-width: 768px) {
  .header .container {
    height: 60px;
  }

  .nav-links {
    gap: 1rem;
  }

  .nav-link {
    font-size: 0.85rem;
  }

  .page-title {
    font-size: 1.75rem;
  }

  .header-content {
    flex-direction: column;
    text-align: center;
  }

  .header-text {
    text-align: center;
  }

  .search-input-wrapper {
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
  }

  .search-input {
    width: 100%;
    text-align: center;
  }

  .search-btn {
    width: 100%;
    justify-content: center;
  }

  .quick-tags {
    justify-content: center;
  }

  .info-section {
    grid-template-columns: 1fr;
  }

  .card-header {
    flex-direction: column;
    gap: 1rem;
  }

  .card-footer {
    flex-direction: column;
  }

  .footer-content {
    flex-direction: column;
    gap: 1.5rem;
  }

  .footer-disclaimer {
    text-align: left;
  }
}
</style>