<template>
  <div class="search-section">
    <div class="search-wrapper">
      <input
        :value="modelValue"
        type="text"
        class="search-input"
        placeholder="搜索学校名称或专业方向..."
        @input="$emit('update:modelValue', ($event.target.value))"
      />
      <span class="search-icon">🔍</span>
      <button
        v-if="modelValue"
        class="search-clear show"
        @click="$emit('update:modelValue', '')"
        title="清除搜索"
      >
        ×
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  modelValue: {
    type: String,
    default: ''
  }
})

defineEmits(['update:modelValue'])
</script>

<style scoped>
/* 组件使用 custom.css 中定义的全局样式 */
</style>
