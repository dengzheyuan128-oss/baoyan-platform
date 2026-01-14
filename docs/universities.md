---
title: 院校名录
---

<script setup>
import { ref, computed, onMounted } from 'vue'

const searchQuery = ref('')
const activeFilter = ref('all')
const sortOrder = ref('asc')

// 院校数据 - 包含学位类型和友好的截止时间显示
const universities = [
  { id: 1, name: '北京大学', tier: '第一梯队', degreeType: '学硕、直博', majors: ['汉语言文学', '语言学及应用语言学', '汉语言文字学'], deadlineDisplay: '2024年10月中旬', link: '/universities/北京大学', officialLink: 'https://chinese.pku.edu.cn/' },
  { id: 2, name: '清华大学', tier: '第一梯队', degreeType: '学硕、专硕', majors: ['中国语言文学', '汉语国际教育'], deadlineDisplay: '2024年10月初', link: '/universities/清华大学', officialLink: 'https://www.tsinghua.edu.cn' },
  { id: 3, name: '复旦大学', tier: '第一梯队', degreeType: '学硕、专硕', majors: ['汉语言文学', '语言学'], deadlineDisplay: '2024年10月初', link: '/universities/复旦大学', officialLink: 'https://www.fudan.edu.cn' },
  { id: 4, name: '南京大学', tier: '第一梯队', degreeType: '学硕、专硕', majors: ['汉语言文学', '语言学'], deadlineDisplay: '2024年10月初', link: '/universities/南京大学', officialLink: 'https://www.nju.edu.cn' },
  { id: 5, name: '浙江大学', tier: '第一梯队', degreeType: '学硕、专硕', majors: ['汉语言文学', '语言学'], deadlineDisplay: '2024年10月初', link: '/universities/浙江大学', officialLink: 'https://www.zju.edu.cn' },
  { id: 6, name: '华东师范大学', tier: '第一梯队', degreeType: '学硕、专硕', majors: ['汉语言文学', '语言学'], deadlineDisplay: '2024年10月初', link: '/universities/华东师范大学', officialLink: 'https://www.ecnu.edu.cn' },
  { id: 7, name: '武汉大学', tier: '第一梯队', degreeType: '学硕、专硕、直博', majors: ['汉语言文学', '语言学'], deadlineDisplay: '2024年10月初', link: '/universities/武汉大学', officialLink: 'https://www.whu.edu.cn' },
  { id: 8, name: '中国人民大学', tier: '第一梯队', degreeType: '学硕、专硕', majors: ['汉语言文学', '语言学'], deadlineDisplay: '2024年10月初', link: '/universities/中国人民大学', officialLink: 'https://www.ruc.edu.cn' },
  // 第二梯队
  { id: 9, name: '北京师范大学', tier: '第二梯队', degreeType: '学硕、专硕', majors: ['汉语言文学', '语言学'], deadlineDisplay: '2024年10月中旬', link: '/universities/北京师范大学', officialLink: 'https://www.bnu.edu.cn' },
  { id: 10, name: '南开大学', tier: '第二梯队', degreeType: '学硕、专硕', majors: ['汉语言文学', '语言学'], deadlineDisplay: '2024年10月中旬', link: '/universities/南开大学', officialLink: 'https://www.nankai.edu.cn' },
  { id: 11, name: '中山大学', tier: '第二梯队', degreeType: '学硕、专硕', majors: ['汉语言文学', '语言学'], deadlineDisplay: '2024年10月中旬', link: '/universities/中山大学', officialLink: 'https://www.sysu.edu.cn' },
  { id: 12, name: '四川大学', tier: '第二梯队', degreeType: '学硕、专硕', majors: ['汉语言文学', '语言学'], deadlineDisplay: '2024年10月中旬', link: '/universities/四川大学', officialLink: 'https://www.scu.edu.cn' },
  { id: 13, name: '厦门大学', tier: '第二梯队', degreeType: '学硕、专硕', majors: ['汉语言文学', '语言学'], deadlineDisplay: '2024年10月中旬', link: '/universities/厦门大学', officialLink: 'https://www.xmu.edu.cn' },
  { id: 14, name: '山东大学', tier: '第二梯队', degreeType: '学硕、专硕', majors: ['汉语言文学', '语言学'], deadlineDisplay: '2024年10月中旬', link: '/universities/山东大学', officialLink: 'https://www.sdu.edu.cn' },
  { id: 15, name: '同济大学', tier: '第二梯队', degreeType: '学硕、专硕', majors: ['汉语言文学', '语言学'], deadlineDisplay: '2024年10月中旬', link: '/universities/同济大学', officialLink: 'https://www.tongji.edu.cn' },
  // 第三梯队
  { id: 16, name: '吉林大学', tier: '第三梯队', degreeType: '学硕、专硕', majors: ['汉语言文学', '语言学'], deadlineDisplay: '2024年10月下旬', link: '/universities/吉林大学', officialLink: 'https://www.jlu.edu.cn' },
  { id: 17, name: '苏州大学', tier: '第三梯队', degreeType: '学硕、专硕', majors: ['汉语言文学', '语言学'], deadlineDisplay: '2024年10月下旬', link: '/universities/苏州大学', officialLink: 'https://www.suda.edu.cn' },
  { id: 18, name: '南京师范大学', tier: '第三梯队', degreeType: '学硕、专硕', majors: ['汉语言文学', '语言学'], deadlineDisplay: '2024年10月下旬', link: '/universities/南京师范大学', officialLink: 'https://www.njnu.edu.cn' },
  { id: 19, name: '华中师范大学', tier: '第三梯队', degreeType: '学硕、专硕', majors: ['汉语言文学', '语言学'], deadlineDisplay: '2024年10月下旬', link: '/universities/华中师范大学', officialLink: 'https://www.ccnu.edu.cn' },
  { id: 20, name: '陕西师范大学', tier: '第三梯队', degreeType: '学硕、专硕', majors: ['汉语言文学', '语言学'], deadlineDisplay: '2024年10月下旬', link: '/universities/陕西师范大学', officialLink: 'https://www.snnu.edu.cn' },
  { id: 21, name: '上海大学', tier: '第三梯队', degreeType: '学硕、专硕', majors: ['汉语言文学', '语言学'], deadlineDisplay: '2024年10月下旬', link: '/universities/上海大学', officialLink: 'https://www.shu.edu.cn' },
  { id: 22, name: '暨南大学', tier: '第三梯队', degreeType: '学硕、专硕', majors: ['汉语言文学', '语言学'], deadlineDisplay: '2024年10月下旬', link: '/universities/暨南大学', officialLink: 'https://www.jnu.edu.cn' },
  { id: 23, name: '西南大学', tier: '第三梯队', degreeType: '学硕、专硕', majors: ['汉语言文学', '语言学'], deadlineDisplay: '2024年10月下旬', link: '/universities/西南大学', officialLink: 'https://www.swu.edu.cn' },
  // 第四、五梯队示例
  { id: 24, name: '湖南师范大学', tier: '第四梯队', degreeType: '学硕、专硕', majors: ['汉语言文学', '语言学'], deadlineDisplay: '2024年11月初', link: '/universities/湖南师范大学', officialLink: 'https://www.hunnu.edu.cn' },
  { id: 25, name: '华南师范大学', tier: '第四梯队', degreeType: '学硕、专硕', majors: ['汉语言文学', '语言学'], deadlineDisplay: '2024年11月初', link: '/universities/华南师范大学', officialLink: 'https://www.scnu.edu.cn' },
  { id: 26, name: '西北大学', tier: '第五梯队', degreeType: '学硕、专硕', majors: ['汉语言文学', '语言学'], deadlineDisplay: '2024年11月中旬', link: '/universities/西北大学', officialLink: 'https://www.nwu.edu.cn' },
  { id: 27, name: '郑州大学', tier: '第五梯队', degreeType: '学硕、专硕', majors: ['汉语言文学', '语言学'], deadlineDisplay: '2024年11月中旬', link: '/universities/郑州大学', officialLink: 'https://www.zzu.edu.cn' }
]

// 收藏功能
const favorites = ref(new Set())

onMounted(() => {
  const saved = localStorage.getItem('favoriteUniversities')
  if (saved) {
    favorites.value = new Set(JSON.parse(saved))
  }
})

const isFavorite = (id) => favorites.value.has(id)

const toggleFavorite = (id) => {
  if (favorites.value.has(id)) {
    favorites.value.delete(id)
  } else {
    favorites.value.add(id)
  }
  localStorage.setItem('favoriteUniversities', JSON.stringify([...favorites.value]))
}

// 筛选逻辑
const filteredUniversities = computed(() => {
  let filtered = universities

  if (activeFilter.value !== 'all') {
    const tierMap = {
      'tier-1': '第一梯队',
      'tier-2': '第二梯队',
      'tier-3': '第三梯队',
      'tier-4': '第四梯队',
      'tier-5': '第五梯队'
    }
    filtered = filtered.filter(u => u.tier === tierMap[activeFilter.value])
  }

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(u => {
      return u.name.toLowerCase().includes(query) ||
             u.majors.some(m => m.toLowerCase().includes(query))
    })
  }

  return filtered
})

// 排序逻辑
const sortedUniversities = computed(() => {
  const sorted = [...filteredUniversities.value]
  sorted.sort((a, b) => {
    return sortOrder.value === 'asc'
      ? a.name.localeCompare(b.name, 'zh-CN')
      : b.name.localeCompare(a.name, 'zh-CN')
  })
  return sorted
})

const toggleSort = () => {
  sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc'
}

// 统计
const totalCount = computed(() => universities.length)
const displayCount = computed(() => sortedUniversities.value.length)
</script>

<!-- 页面标题区 -->
<div class="page-title-section">
  <p class="page-subtitle">2025年最新收录 · 985/211高校</p>
  <h1 class="page-main-title">
    <span class="title-dark">文苑</span>
    <span class="title-blue">推免指南</span>
  </h1>
  <p class="page-description">汇集全国顶尖高校文学院/中文系推免硕士考核通知，助您在学术之路上，寻得理想归处。</p>
</div>

<!-- 搜索和筛选区 -->
<div class="search-filter-section">
  <div class="search-bar-wrapper">
    <svg class="search-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="9" cy="9" r="7"/>
      <path d="M14 14L19 19"/>
    </svg>
    <input
      v-model="searchQuery"
      type="text"
      class="search-input"
      placeholder="搜索高校名称或专业..."
    />
  </div>

  <div class="filter-buttons-wrapper">
    <button
      v-for="filter in [
        { label: '全部', value: 'all' },
        { label: '第一梯队', value: 'tier-1' },
        { label: '第二梯队', value: 'tier-2' },
        { label: '第三梯队', value: 'tier-3' },
        { label: '第四梯队', value: 'tier-4' },
        { label: '第五梯队', value: 'tier-5' }
      ]"
      :key="filter.value"
      :class="['filter-btn', { active: activeFilter === filter.value }]"
      @click="activeFilter = filter.value"
    >
      {{ filter.label }}
    </button>
  </div>
</div>

<!-- 院校名录区 -->
<div class="university-section">
  <div class="section-header">
    <div class="section-title">
      <svg width="24" height="24" viewBox="0 0 20 20" fill="#1e40af">
        <path d="M4 2H16V4H4V2ZM2 6H18V8H2V6ZM3 10H17V12H3V10ZM3 14H17V16H3V14ZM5 18H15V20H5V18Z"/>
      </svg>
      <span>院校名录</span>
      <span class="count">共收录 <strong>{{ displayCount }}</strong> 所高校</span>
    </div>
    <button class="sort-btn" @click="toggleSort">
      按拼音排序
      <svg :style="{ transform: sortOrder === 'desc' ? 'rotate(180deg)' : 'none' }" width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
        <path d="M5 7L10 12L15 7H5Z"/>
      </svg>
    </button>
  </div>

  <!-- 院校卡片网格 -->
  <div class="university-grid">
    <div
      v-for="university in sortedUniversities"
      :key="university.id"
      class="university-card"
      @click="window.location.href = university.link"
    >
      <!-- 卡片头部：名称 + 收藏按钮 -->
      <div class="card-header">
        <div class="header-left">
          <div class="university-name">{{ university.name }}</div>
          <div class="university-meta">
            <span class="tier-tag">{{ university.tier }}</span>
            <span class="degree-type">{{ university.degreeType }}</span>
          </div>
        </div>
        <button
          class="favorite-btn"
          :class="{ active: isFavorite(university.id) }"
          @click.stop="toggleFavorite(university.id)"
          title="收藏"
        >
          <svg viewBox="0 0 20 20">
            <path d="M10 2L8.5 5.5L5 6L7.5 8.5L7 12L10 10.5L13 12L12.5 8.5L15 6L11.5 5.5L10 2Z"/>
          </svg>
        </button>
      </div>

      <!-- 专业方向 -->
      <div class="card-info">
        <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M4 4H16V16H4V4Z"/>
        </svg>
        {{ university.majors.slice(0, 2).join('、') }} 等
      </div>

      <!-- 截止时间 -->
      <div class="card-deadline">
        <svg width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="3" y="4" width="14" height="12" rx="2"/>
          <path d="M3 8H17"/>
          <path d="M8 2V6"/>
          <path d="M12 2V6"/>
        </svg>
        {{ university.deadlineDisplay }}
      </div>

      <!-- 卡片底部 -->
      <div class="card-footer">
        <span class="degree-type-label">{{ university.degreeType }}</span>
        <span class="view-details">
          查看详情
          <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12H14M12 15L15 12L12 9M15 12H9"/>
          </svg>
        </span>
      </div>
    </div>
  </div>

  <!-- 无结果提示 -->
  <div v-if="sortedUniversities.length === 0" class="no-results">
    <svg width="64" height="64" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="10" cy="10" r="8"/>
      <path d="M10 6V10M10 14H10.01"/>
    </svg>
    <p class="no-results-title">未找到匹配的院校信息</p>
    <p class="no-results-desc">请尝试其他搜索关键词或筛选条件</p>
  </div>
</div>

<style scoped>
/* 页面标题区 */
.page-title-section {
  text-align: center;
  margin-bottom: 40px;
}

.page-subtitle {
  font-size: 14px;
  color: #666;
  margin: 0 0 16px 0;
  letter-spacing: 2px;
}

.page-main-title {
  font-size: 48px;
  margin: 0 0 16px 0;
  font-weight: 700;
}

.title-dark {
  color: #1f2937;
}

.title-blue {
  color: #1e40af;
}

.page-description {
  font-size: 16px;
  color: #666;
  margin: 0;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

/* 搜索和筛选区 */
.search-filter-section {
  margin-bottom: 32px;
}

.search-bar-wrapper {
  position: relative;
  margin-bottom: 20px;
}

.search-icon {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: #9ca3af;
}

.search-input {
  width: 100%;
  padding: 14px 16px 14px 48px;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  font-size: 16px;
  transition: all 0.2s;
}

.search-input:focus {
  outline: none;
  border-color: #1e40af;
  box-shadow: 0 0 0 3px rgba(30, 64, 175, 0.1);
}

.filter-buttons-wrapper {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 8px 20px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background: white;
  color: #1f2937;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.filter-btn:hover {
  border-color: #1e40af;
  color: #1e40af;
}

.filter-btn.active {
  background: #1e40af;
  color: white;
  border-color: #1e40af;
}

/* 院校名录区 */
.university-section {
  margin-top: 40px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.section-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 18px;
  font-weight: 600;
  color: #1f2937;
}

.section-title .count {
  font-size: 14px;
  font-weight: 400;
  color: #666;
  margin-left: 8px;
}

.section-title .count strong {
  color: #1e40af;
}

.sort-btn {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 12px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  background: white;
  color: #666;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
}

.sort-btn:hover {
  border-color: #1e40af;
  color: #1e40af;
}

/* 院校卡片 */
.university-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 20px;
}

.university-card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 20px;
  cursor: pointer;
  transition: all 0.2s;
}

.university-card:hover {
  border-color: #1e40af;
  box-shadow: 0 4px 12px rgba(30, 64, 175, 0.1);
  transform: translateY(-2px);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;
}

.header-left {
  flex: 1;
}

.university-name {
  font-size: 18px;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 4px;
}

.university-meta {
  display: flex;
  gap: 8px;
  align-items: center;
}

.tier-tag {
  font-size: 12px;
  color: #666;
}

.degree-type {
  font-size: 12px;
  color: #999;
}

.favorite-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  color: #d1d5db;
  transition: color 0.2s;
}

.favorite-btn:hover {
  color: #fbbf24;
}

.favorite-btn.active {
  color: #fbbf24;
}

.favorite-btn svg {
  display: block;
  width: 20px;
  height: 20px;
}

.card-info {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #666;
  font-size: 14px;
  margin-bottom: 8px;
}

.card-info svg {
  flex-shrink: 0;
}

.card-deadline {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #666;
  font-size: 14px;
  margin-bottom: 12px;
}

.card-deadline svg {
  flex-shrink: 0;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 12px;
  border-top: 1px solid #f3f4f6;
}

.degree-type-label {
  font-size: 12px;
  color: #999;
}

.view-details {
  display: flex;
  align-items: center;
  gap: 4px;
  color: #1e40af;
  font-size: 14px;
  font-weight: 500;
}

.view-details svg {
  width: 16px;
  height: 16px;
}

/* 无结果 */
.no-results {
  text-align: center;
  padding: 60px 20px;
  color: #9ca3af;
}

.no-results svg {
  margin-bottom: 16px;
  opacity: 0.5;
}

.no-results-title {
  font-size: 16px;
  margin: 0 0 8px 0;
}

.no-results-desc {
  font-size: 14px;
  margin: 0;
}

/* 响应式 */
@media (max-width: 768px) {
  .page-main-title {
    font-size: 36px;
  }

  .university-grid {
    grid-template-columns: 1fr;
  }

  .filter-buttons-wrapper {
    flex-direction: column;
  }

  .filter-btn {
    width: 100%;
  }

  .section-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
}
</style>
