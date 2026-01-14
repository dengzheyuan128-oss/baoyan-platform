<template>
  <div class="filter-section">
    <button
      v-for="filter in filters"
      :key="filter.value"
      :class="['filter-btn', { active: modelValue === filter.value }]"
      @click="$emit('update:modelValue', filter.value)"
    >
      {{ filter.label }}
    </button>
  </div>
</template>

<script setup>
defineProps({
  modelValue: {
    type: String,
    default: 'all'
  }
})

defineEmits(['update:modelValue'])

const filters = [
  { label: '全部', value: 'all' },
  { label: '985高校', value: '985' },
  { label: '211高校', value: '211' },
  { label: '第一梯队', value: 'tier-1' },
  { label: '第二梯队', value: 'tier-2' },
  { label: '第三梯队', value: 'tier-3' }
]
</script>

<style scoped>
/* 组件使用 custom.css 中定义的全局样式 */
</style>
