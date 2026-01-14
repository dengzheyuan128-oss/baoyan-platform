<script setup lang="ts">
import { ref, computed } from 'vue'

const emit = defineEmits(['filter', 'search'])

const searchQuery = ref('')
const activeFilter = ref('all')

const filters = [
  { value: 'all', label: '全部' },
  { value: '985', label: '985高校' },
  { value: '211', label: '211高校' },
  { value: 'tier-1', label: '第一梯队' },
  { value: 'tier-2', label: '第二梯队' },
  { value: 'tier-3', label: '第三梯队' }
]

const handleSearch = () => {
  emit('search', searchQuery.value)
}

const setFilter = (filter: string) => {
  activeFilter.value = filter
  emit('filter', filter)
}
</script>

<template>
  <div class="filters-section">
    <div class="search-container">
      <input
        v-model="searchQuery"
        type="text"
        class="search-input"
        placeholder="搜索学校名称或专业方向..."
        @input="handleSearch"
      />
    </div>

    <div class="filter-container">
      <button
        v-for="filter in filters"
        :key="filter.value"
        class="filter-button"
        :class="{ active: activeFilter === filter.value }"
        @click="setFilter(filter.value)"
      >
        {{ filter.label }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.filters-section {
  margin-bottom: 2rem;
}
</style>
