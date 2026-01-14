<template>
  <div class="university-card" @click="handleCardClick">
    <div class="card-header">
      <h3 class="card-title">{{ university.name }}</h3>
      <button
        class="favorite-btn"
        :class="{ active: isFavorited }"
        @click.stop="toggleFavorite"
        :title="isFavorited ? '取消收藏' : '收藏'"
      >
        {{ isFavorited ? '' : '' }}
      </button>
    </div>

    <div class="card-tags">
      <span
        v-for="tag in university.tags"
        :key="tag"
        :class="['tag', getTagClass(tag)]"
      >
        {{ tag }}
      </span>
    </div>

    <div class="card-body">
      <div class="info-row">
        <span class="info-label">专业方向：</span>
        <span class="info-value">{{ formatMajors(university.majors) }}</span>
      </div>
      <div class="info-row">
        <span class="info-label">截止时间：</span>
        <span class="info-value">{{ university.deadline }}</span>
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
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  university: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['card-click'])

const isFavorited = ref(false)

// 从 localStorage 加载收藏状态
onMounted(() => {
  const favorites = JSON.parse(localStorage.getItem('favoriteUniversities') || '[]')
  isFavorited.value = favorites.includes(props.university.name)
})

// 切换收藏状态
const toggleFavorite = () => {
  isFavorited.value = !isFavorited.value

  let favorites = JSON.parse(localStorage.getItem('favoriteUniversities') || '[]')

  if (isFavorited.value) {
    if (!favorites.includes(props.university.name)) {
      favorites.push(props.university.name)
    }
  } else {
    favorites = favorites.filter(name => name !== props.university.name)
  }

  localStorage.setItem('favoriteUniversities', JSON.stringify(favorites))
}

// 获取标签样式类
const getTagClass = (tag) => {
  if (tag === '985') return 'tag-985'
  if (tag === '211') return 'tag-211'
  return 'tag-tier'
}

// 格式化专业列表
const formatMajors = (majors) => {
  if (!majors || majors.length === 0) return '暂无信息'
  if (majors.length <= 3) return majors.join('、')
  return `${majors.slice(0, 3).join('、')}等`
}

// 处理卡片点击
const handleCardClick = () => {
  emit('card-click', props.university)
}
</script>

<style scoped>
/* 组件使用 custom.css 中定义的全局样式 */
</style>
