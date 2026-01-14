<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  universities: {
    type: Array,
    default: () => []
  }
})

const searchQuery = ref('')
const activeFilter = ref('all')
const sortOrder = ref('asc')

// 筛选和搜索逻辑
const filteredUniversities = computed(() => {
  let filtered = [...props.universities]

  // 应用筛选
  if (activeFilter.value === '985') {
    filtered = filtered.filter(u => u.tags.includes('985'))
  } else if (activeFilter.value === '211') {
    filtered = filtered.filter(u => u.tags.includes('211'))
  } else if (activeFilter.value === 'tier-1') {
    filtered = filtered.filter(u => u.tags.includes('第一梯队'))
  } else if (activeFilter.value === 'tier-2') {
    filtered = filtered.filter(u => u.tags.includes('第二梯队'))
  } else if (activeFilter.value === 'tier-3') {
    filtered = filtered.filter(u => u.tags.includes('第三梯队'))
  }

  // 应用搜索
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(u => {
      const nameMatch = u.name.toLowerCase().includes(query)
      const majorMatch = u.majors.some(m => m.toLowerCase().includes(query))
      return nameMatch || majorMatch
    })
  }

  // 排序
  filtered.sort((a, b) => {
    return sortOrder.value === 'asc'
      ? a.name.localeCompare(b.name, 'zh-CN')
      : b.name.localeCompare(a.name, 'zh-CN')
  })

  return filtered
})

// 切换排序
const toggleSort = (order) => {
  sortOrder.value = order
}

// 统计数据
const stats = computed(() => {
  return {
    total: filteredUniversities.value.length,
    all985: props.universities.filter(u => u.tags.includes('985')).length,
    all211: props.universities.filter(u => u.tags.includes('211')).length
  }
})
</script>

<template>
  <div>
    <!-- 统计横幅 -->
    <div class="stats-banner">
      <div class="stats-info">
        显示 <strong>{{ stats.total }}</strong> 所院校
      </div>
      <div class="sort-controls">
        <button
          :class="['sort-btn', { active: sortOrder === 'asc' }]"
          @click="toggleSort('asc')"
        >
          ↑ 按拼音升序
        </button>
        <button
          :class="['sort-btn', { active: sortOrder === 'desc' }]"
          @click="toggleSort('desc')"
        >
          ↓ 按拼音降序
        </button>
      </div>
    </div>

    <!-- 院校网格 -->
    <div class="university-grid">
      <div
        v-for="university in filteredUniversities"
        :key="university.name"
        class="university-card"
      >
        <div class="card-header">
          <h3 class="card-title">{{ university.name }}</h3>
          <button
            class="favorite-btn"
            :class="{ active: university.isFavorited }"
            @click="university.isFavorited = !university.isFavorited"
            :title="university.isFavorited ? '取消收藏' : '收藏'"
          >
            <svg v-if="university.isFavorited" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </button>
        </div>

        <div class="card-tags">
          <span
            v-for="tag in university.tags"
            :key="tag"
            :class="['tag', tag === '985' ? 'tag-985' : tag === '211' ? 'tag-211' : 'tag-tier']"
          >
            {{ tag }}
          </span>
        </div>

        <div class="card-body">
          <div class="info-row">
            <span class="info-label">专业方向：</span>
            <span class="info-value">
              {{ university.majors?.slice(0, 3).join('、') || '暂无信息' }}{{ university.majors?.length > 3 ? '等' : '' }}
            </span>
          </div>
          <div class="info-row">
            <span class="info-label">截止时间：</span>
            <span class="info-value">{{ university.deadline || '暂无信息' }}</span>
          </div>
        </div>

        <div class="card-footer">
          <a
            :href="university.officialLink"
            class="card-btn card-btn-secondary"
            @click.stop
            target="_blank"
            rel="noopener noreferrer"
          >
            官方通知
          </a>
          <a
            :href="university.link"
            class="card-btn card-btn-primary"
            @click.stop
          >
            查看详情 →
          </a>
        </div>
      </div>
    </div>

    <!-- 无结果提示 -->
    <div v-if="filteredUniversities.length === 0" class="no-results">
      <div class="no-results-icon">🔍</div>
      <div class="no-results-title">没有找到符合条件的院校</div>
      <div class="no-results-desc">请尝试调整搜索关键词或筛选条件</div>
    </div>
  </div>
</template>

<style scoped>
/* 组件使用 custom.css 中定义的全局样式 */
</style>
