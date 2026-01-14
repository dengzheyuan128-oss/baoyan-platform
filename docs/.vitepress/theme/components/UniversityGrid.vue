<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

interface University {
  title: string
  tags: string[]
  majors: string[]
  duration: string
  assessment: string
  englishRequirement: string
  applicationPeriod: string
  deadline: string
  officialLink: string
  tier: string
}

interface Props {
  universities: University[]
}

const props = defineProps<Props>()
const emit = defineEmits(['favorite'])

const currentFilter = ref('all')
const searchQuery = ref('')
const sortAscending = ref(true)
const favorites = ref<number[]>([])

onMounted(() => {
  // 从 localStorage 加载收藏
  const saved = localStorage.getItem('baoyan_favorites')
  if (saved) {
    favorites.value = JSON.parse(saved)
  }
})

const filteredUniversities = computed(() => {
  let filtered = [...props.universities]

  // 应用筛选
  if (currentFilter.value === '985') {
    filtered = filtered.filter((u: University) => u.tags.includes('985'))
  } else if (currentFilter.value === '211') {
    filtered = filtered.filter((u: University) => u.tags.includes('211'))
  } else if (currentFilter.value.startsWith('tier-')) {
    const tier = currentFilter.value.replace('tier-', '')
    const tierMap: Record<string, string> = {
      '1': '第一梯队',
      '2': '第二梯队',
      '3': '第三梯队'
    }
    filtered = filtered.filter((u: University) => u.tier === tierMap[tier])
  }

  // 应用搜索
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter((u: University) => {
      const nameMatch = u.title.toLowerCase().includes(query)
      const majorMatch = u.majors.some((m: string) => m.toLowerCase().includes(query))
      return nameMatch || majorMatch
    })
  }

  // 排序
  filtered.sort((a: University, b: University) => {
    return sortAscending.value
      ? a.title.localeCompare(b.title, 'zh-CN')
      : b.title.localeCompare(a.title, 'zh-CN')
  })

  return filtered
})

const toggleFavorite = (index: number) => {
  const idx = favorites.value.indexOf(index)
  if (idx > -1) {
    favorites.value.splice(idx, 1)
  } else {
    favorites.value.push(index)
  }
  localStorage.setItem('baoyan_favorites', JSON.stringify(favorites.value))
  emit('favorite', { index, isFavorited: favorites.value.includes(index) })
}

const isFavorited = (index: number) => {
  return favorites.value.includes(index)
}

const handleFilter = (filter: string) => {
  currentFilter.value = filter
}

const handleSearch = (query: string) => {
  searchQuery.value = query
}

const toggleSort = () => {
  sortAscending.value = !sortAscending.value
}

defineExpose({
  handleFilter,
  handleSearch,
  toggleSort
})
</script>

<template>
  <div>
    <div class="stats-info">
      <div class="stat-item">
        <span class="stat-number">{{ filteredUniversities.length }}</span>
        <span class="stat-label">显示院校</span>
      </div>
      <div class="stat-item">
        <span class="stat-number">{{ universities.filter(u => u.tags.includes('985')).length }}</span>
        <span class="stat-label">985高校</span>
      </div>
      <div class="stat-item">
        <span class="stat-number">{{ universities.filter(u => u.tags.includes('211')).length }}</span>
        <span class="stat-label">211高校</span>
      </div>
    </div>

    <button class="sort-button" @click="toggleSort">
      {{ sortAscending ? '↓ 按拼音升序' : '↑ 按拼音降序' }}
    </button>

    <div class="university-grid">
      <div
        v-for="(university, index) in filteredUniversities"
        :key="university.title"
        class="university-card"
        :class="{ favorited: isFavorited(index) }"
      >
        <button
          class="favorite-button"
          :class="{ favorited: isFavorited(index) }"
          @click="toggleFavorite(index)"
        >
          {{ isFavorited(index) ? '❤️' : '🤍' }}
        </button>

        <h3>{{ university.title }}</h3>

        <div class="university-tags">
          <span
            v-for="tag in university.tags"
            :key="tag"
            class="university-tag"
            :class="{
              'tag-985': tag === '985',
              'tag-211': tag === '211',
              'tag-tier': tag.includes('梯队')
            }"
          >
            {{ tag }}
          </span>
        </div>

        <div class="university-info">
          <p><strong>专业方向：</strong>{{ university.majors.slice(0, 3).join('、') }}等</p>
          <p><strong>学制：</strong>{{ university.duration }}</p>
          <p><strong>考核形式：</strong>{{ university.assessment }}</p>
          <p><strong>英语要求：</strong>{{ university.englishRequirement }}</p>
          <p><strong>申请时间：</strong>{{ university.applicationPeriod }}</p>
          <p><strong>截止时间：</strong>{{ university.deadline }}</p>
        </div>

        <div class="university-actions">
          <a :href="university.officialLink" target="_blank" class="action-button primary">
            官方通知
          </a>
          <a
            :href="`/universities/${university.title.toLowerCase().replace(/\s+/g, '-')}.html`"
            class="action-button secondary"
          >
            查看详情
          </a>
        </div>
      </div>
    </div>

    <div v-if="filteredUniversities.length === 0" class="no-results">
      <p>没有找到符合条件的院校</p>
    </div>
  </div>
</template>

<style scoped>
.stats-info {
  display: flex;
  gap: 2rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-number {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--vp-c-brand);
}

.stat-label {
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
}

.sort-button {
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  border: 1px solid var(--vp-c-border);
  border-radius: 6px;
  background: var(--vp-c-bg);
  cursor: pointer;
  transition: all 0.3s ease;
}

.sort-button:hover {
  border-color: var(--vp-c-brand);
  color: var(--vp-c-brand);
}

.university-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.university-card {
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  padding: 1.5rem;
  position: relative;
  transition: all 0.3s ease;
  cursor: pointer;
}

.university-card:hover {
  border-color: var(--vp-c-brand);
  box-shadow: 0 4px 12px rgba(30, 64, 175, 0.1);
  transform: translateY(-2px);
}

.university-card h3 {
  color: var(--vp-c-brand);
  margin: 0 0 0.5rem 0;
  padding-right: 2rem;
}

.university-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin: 0.5rem 0;
}

.university-tag {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
}

.university-tag.tag-985 {
  background-color: #dbeafe;
  color: #1e40af;
}

.university-tag.tag-211 {
  background-color: #fef3c7;
  color: #92400e;
}

.university-tag.tag-tier {
  background-color: #e0e7ff;
  color: #3730a3;
}

.university-info {
  margin: 1rem 0;
}

.university-info p {
  margin: 0.25rem 0;
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
}

.university-info strong {
  color: var(--vp-c-text-1);
}

.university-actions {
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
}

.action-button {
  flex: 1;
  padding: 0.5rem;
  border-radius: 6px;
  text-align: center;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.action-button.primary {
  background: var(--vp-c-brand);
  color: white;
}

.action-button.primary:hover {
  background: var(--vp-c-brand-dark);
}

.action-button.secondary {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  border: 1px solid var(--vp-c-border);
}

.action-button.secondary:hover {
  border-color: var(--vp-c-brand);
  color: var(--vp-c-brand);
}

.favorite-button {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  transition: transform 0.2s ease;
}

.favorite-button:hover {
  transform: scale(1.2);
}

.no-results {
  text-align: center;
  padding: 3rem;
  color: var(--vp-c-text-2);
}

@media (max-width: 768px) {
  .university-grid {
    grid-template-columns: 1fr;
  }

  .stats-info {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
