---
title: 院校名录
---

<script setup>
import { ref, computed } from 'vue'

const searchQuery = ref('')
const activeFilter = ref('all')

const universities = [
  // 第一梯队
  { name: '北京大学', tags: ['985', '第一梯队'], majors: ['文艺学', '语言学及应用语言学', '汉语言文字学'], deadline: '9月7日16:00', link: '/universities/北京大学', officialLink: 'https://www.pku.edu.cn' },
  { name: '清华大学', tags: ['985', '第一梯队'], majors: ['中国语言文学', '比较文学', '语言学'], deadline: '9月5日17:00', link: '/universities/清华大学', officialLink: 'https://www.tsinghua.edu.cn' },
  { name: '复旦大学', tags: ['985', '第一梯队'], majors: ['文艺学', '中国古代文学', '中国现当代文学'], deadline: '9月15日24:00', link: '/universities/复旦大学', officialLink: 'https://www.fudan.edu.cn' },
  { name: '南京大学', tags: ['985', '第一梯队'], majors: ['中国古代文学', '中国现当代文学', '文艺学'], deadline: '9月20日18:00', link: '/universities/南京大学', officialLink: 'https://www.nju.edu.cn' },
  { name: '浙江大学', tags: ['985', '第一梯队'], majors: ['中国古代文学', '中国现当代文学', '文艺学'], deadline: '9月12日16:00', link: '/universities/浙江大学', officialLink: 'https://www.zju.edu.cn' },
  { name: '中国科学技术大学', tags: ['985', '第一梯队'], majors: ['科学技术史', '科技哲学', '科学技术传播'], deadline: '9月15日17:00', link: '/universities/中国科学技术大学', officialLink: 'https://www.ustc.edu.cn' },
  { name: '上海交通大学', tags: ['985', '第一梯队'], majors: ['中国语言文学', '比较文学', '语言学'], deadline: '9月10日17:00', link: '/universities/上海交通大学', officialLink: 'https://www.sjtu.edu.cn' },
  // 第二梯队
  { name: '武汉大学', tags: ['985', '第二梯队'], majors: ['中国古代文学', '中国现当代文学', '文艺学'], deadline: '9月18日17:00', link: '/universities/武汉大学', officialLink: 'https://www.whu.edu.cn' },
  { name: '中国人民大学', tags: ['985', '第二梯队'], majors: ['文艺学', '中国古代文学', '中国现当代文学'], deadline: '9月10日16:00', link: '/universities/中国人民大学', officialLink: 'https://www.ruc.edu.cn' },
  { name: '北京师范大学', tags: ['985', '第二梯队'], majors: ['中国古代文学', '中国现当代文学', '文艺学'], deadline: '9月15日17:00', link: '/universities/北京师范大学', officialLink: 'https://www.bnu.edu.cn' },
  { name: '华东师范大学', tags: ['985', '第二梯队'], majors: ['中国古代文学', '中国现当代文学', '文艺学'], deadline: '9月20日18:00', link: '/universities/华东师范大学', officialLink: 'https://www.ecnu.edu.cn' },
  { name: '南开大学', tags: ['985', '第二梯队'], majors: ['中国古代文学', '中国现当代文学', '文艺学'], deadline: '9月22日17:00', link: '/universities/南开大学', officialLink: 'https://www.nankai.edu.cn' },
  { name: '中山大学', tags: ['985', '第二梯队'], majors: ['中国古代文学', '中国现当代文学', '文艺学'], deadline: '9月18日16:00', link: '/universities/中山大学', officialLink: 'https://www.sysu.edu.cn' },
  { name: '四川大学', tags: ['985', '第二梯队'], majors: ['中国古代文学', '中国现当代文学', '文艺学'], deadline: '9月20日17:00', link: '/universities/四川大学', officialLink: 'https://www.scu.edu.cn' },
  { name: '哈尔滨工业大学', tags: ['985', '第二梯队'], majors: ['中国语言文学', '社会学', '法学'], deadline: '9月10日17:00', link: '/universities/哈尔滨工业大学', officialLink: 'https://www.hit.edu.cn' },
  { name: '西安交通大学', tags: ['985', '第二梯队'], majors: ['中国语言文学', '社会学', '法学'], deadline: '9月20日18:00', link: '/universities/西安交通大学', officialLink: 'https://www.xjtu.edu.cn' },
  { name: '同济大学', tags: ['985', '第二梯队'], majors: ['中国语言文学', '哲学', '社会学'], deadline: '9月15日17:00', link: '/universities/同济大学', officialLink: 'https://www.tongji.edu.cn' },
  { name: '天津大学', tags: ['985', '第二梯队'], majors: ['中国语言文学', '教育学', '艺术设计'], deadline: '9月16日17:00', link: '/universities/天津大学', officialLink: 'https://www.tju.edu.cn' },
  { name: '东南大学', tags: ['985', '第二梯队'], majors: ['中国语言文学', '哲学', '社会学'], deadline: '9月20日18:00', link: '/universities/东南大学', officialLink: 'https://www.seu.edu.cn' },
  { name: '中南大学', tags: ['985', '第二梯队'], majors: ['中国古代文学', '中国现当代文学', '文艺学'], deadline: '9月22日17:00', link: '/universities/中南大学', officialLink: 'https://www.csu.edu.cn' },
  { name: '北京航空航天大学', tags: ['985', '第二梯队'], majors: ['中国语言文学', '哲学', '法学'], deadline: '9月15日17:00', link: '/universities/北京航空航天大学', officialLink: 'https://www.buaa.edu.cn' },
  { name: '北京理工大学', tags: ['985', '第二梯队'], majors: ['中国语言文学', '法学', '教育学'], deadline: '9月20日17:00', link: '/universities/北京理工大学', officialLink: 'https://www.bit.edu.cn' },
  { name: '华中科技大学', tags: ['985', '第二梯队'], majors: ['中国古代文学', '中国现当代文学', '文艺学'], deadline: '9月20日17:00', link: '/universities/华中科技大学', officialLink: 'https://www.hust.edu.cn' },
  // 第三梯队 985
  { name: '厦门大学', tags: ['985', '第三梯队'], majors: ['中国古代文学', '中国现当代文学', '文艺学'], deadline: '9月25日18:00', link: '/universities/厦门大学', officialLink: 'https://www.xmu.edu.cn' },
  { name: '山东大学', tags: ['985', '第三梯队'], majors: ['中国古代文学', '中国现当代文学', '文艺学'], deadline: '9月22日17:00', link: '/universities/山东大学', officialLink: 'https://www.sdu.edu.cn' },
  { name: '吉林大学', tags: ['985', '第三梯队'], majors: ['中国古代文学', '中国现当代文学', '文艺学'], deadline: '9月20日16:00', link: '/universities/吉林大学', officialLink: 'https://www.jlu.edu.cn' },
  { name: '大连理工大学', tags: ['985', '第三梯队'], majors: ['中国语言文学', '新闻传播学', '哲学'], deadline: '9月25日17:00', link: '/universities/大连理工大学', officialLink: 'https://www.dlut.edu.cn' },
  { name: '重庆大学', tags: ['985', '第三梯队'], majors: ['中国语言文学', '新闻传播学', '哲学'], deadline: '9月26日18:00', link: '/universities/重庆大学', officialLink: 'https://www.cqu.edu.cn' },
  { name: '电子科技大学', tags: ['985', '第三梯队'], majors: ['中国语言文学', '新闻传播学', '哲学'], deadline: '9月22日17:00', link: '/universities/电子科技大学', officialLink: 'https://www.uestc.edu.cn' },
  { name: '西北工业大学', tags: ['985', '第三梯队'], majors: ['中国语言文学', '法学', '哲学'], deadline: '9月24日17:00', link: '/universities/西北工业大学', officialLink: 'https://www.nwpu.edu.cn' },
  { name: '华南理工大学', tags: ['985', '第三梯队'], majors: ['中国语言文学', '新闻传播学', '哲学'], deadline: '9月22日17:00', link: '/universities/华南理工大学', officialLink: 'https://www.scut.edu.cn' },
  { name: '东北大学', tags: ['985', '第三梯队'], majors: ['中国语言文学', '哲学', '社会学'], deadline: '9月26日18:00', link: '/universities/东北大学', officialLink: 'https://www.neu.edu.cn' },
  { name: '湖南大学', tags: ['985', '第三梯队'], majors: ['中国古代文学', '中国现当代文学', '文艺学'], deadline: '9月20日17:00', link: '/universities/湖南大学', officialLink: 'https://www.hnu.edu.cn' },
  { name: '西北农林科技大学', tags: ['985', '第三梯队'], majors: ['中国语言文学', '社会学', '法学'], deadline: '9月28日17:00', link: '/universities/西北农林科技大学', officialLink: 'https://www.nwafu.edu.cn' },
  { name: '兰州大学', tags: ['985', '第三梯队'], majors: ['中国古代文学', '中国现当代文学', '文艺学'], deadline: '9月25日18:00', link: '/universities/兰州大学', officialLink: 'https://www.lzu.edu.cn' },
  { name: '中国农业大学', tags: ['985', '第三梯队'], majors: ['中国语言文学', '社会学', '法学'], deadline: '9月25日17:00', link: '/universities/中国农业大学', officialLink: 'https://www.cau.edu.cn' },
  { name: '中央民族大学', tags: ['985', '第三梯队'], majors: ['中国古代文学', '中国现当代文学', '语言学及应用语言学'], deadline: '9月22日17:00', link: '/universities/中央民族大学', officialLink: 'https://www.muc.edu.cn' },
  { name: '中国海洋大学', tags: ['985', '第三梯队'], majors: ['中国语言文学', '文艺学', '汉语言文字学'], deadline: '9月26日18:00', link: '/universities/中国海洋大学', officialLink: 'https://www.ouc.edu.cn' },
  { name: '国防科技大学', tags: ['985', '第三梯队'], majors: ['中国语言文学', '哲学', '社会学'], deadline: '9月20日17:00', link: '/universities/国防科技大学', officialLink: 'https://www.nudt.edu.cn' },
  // 211高校
  { name: '苏州大学', tags: ['211', '第三梯队'], majors: ['中国古代文学', '中国现当代文学', '文艺学'], deadline: '9月25日17:00', link: '/universities/苏州大学', officialLink: 'https://www.suda.edu.cn' },
  { name: '南京师范大学', tags: ['211', '第三梯队'], majors: ['中国古代文学', '中国现当代文学', '文艺学'], deadline: '9月22日18:00', link: '/universities/南京师范大学', officialLink: 'https://www.njnu.edu.cn' },
  { name: '华中师范大学', tags: ['211', '第三梯队'], majors: ['中国古代文学', '中国现当代文学', '文艺学'], deadline: '9月20日17:00', link: '/universities/华中师范大学', officialLink: 'https://www.ccnu.edu.cn' },
  { name: '陕西师范大学', tags: ['211', '第三梯队'], majors: ['中国古代文学', '中国现当代文学', '文艺学'], deadline: '9月24日17:00', link: '/universities/陕西师范大学', officialLink: 'https://www.snnu.edu.cn' },
  { name: '上海大学', tags: ['211', '第三梯队'], majors: ['中国古代文学', '中国现当代文学', '文艺学'], deadline: '9月26日18:00', link: '/universities/上海大学', officialLink: 'https://www.shu.edu.cn' },
  { name: '暨南大学', tags: ['211', '第三梯队'], majors: ['中国古代文学', '中国现当代文学', '文艺学'], deadline: '9月21日17:00', link: '/universities/暨南大学', officialLink: 'https://www.jnu.edu.cn' },
  { name: '西南大学', tags: ['211', '第三梯队'], majors: ['中国古代文学', '中国现当代文学', '文艺学'], deadline: '9月23日17:00', link: '/universities/西南大学', officialLink: 'https://www.swu.edu.cn' },
  { name: '湖南师范大学', tags: ['211', '第三梯队'], majors: ['中国古代文学', '中国现当代文学', '文艺学'], deadline: '9月25日17:00', link: '/universities/湖南师范大学', officialLink: 'https://www.hunnu.edu.cn' },
  { name: '华南师范大学', tags: ['211', '第三梯队'], majors: ['中国古代文学', '中国现当代文学', '文艺学'], deadline: '9月24日18:00', link: '/universities/华南师范大学', officialLink: 'https://www.scnu.edu.cn' }
]

// 筛选逻辑
const filteredUniversities = computed(() => {
  let filtered = universities

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

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(u => {
      return u.name.toLowerCase().includes(query) ||
             u.majors.some(m => m.toLowerCase().includes(query))
    })
  }

  return filtered
})

const sortOrder = ref('asc')

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

const toggleSort = (order) => {
  sortOrder.value = order
}
</script>

# 院校名录

本平台收录了全国 **48所** 985/211 高校的保研信息。

## 搜索与筛选

<UniversitySearch v-model="searchQuery" />

<UniversityFilters v-model="activeFilter" />

## 院校列表

<div class="stats-banner">
  <div class="stats-info">
    显示 <strong>{{ sortedUniversities.length }}</strong> 所院校
  </div>
  <div class="sort-controls">
    <button :class="['sort-btn', { active: sortOrder === 'asc' }]" @click="toggleSort('asc')">
      ↑ 按拼音升序
    </button>
    <button :class="['sort-btn', { active: sortOrder === 'desc' }]" @click="toggleSort('desc')">
      ↓ 按拼音降序
    </button>
  </div>
</div>

<div class="university-grid">
  <div v-for="university in sortedUniversities" :key="university.name" class="university-card">
    <div class="card-header">
      <h3 class="card-title">{{ university.name }}</h3>
      <button class="favorite-btn" :class="{ active: university.isFavorited }" @click="university.isFavorited = !university.isFavorited" :title="university.isFavorited ? '取消收藏' : '收藏'">
        <svg v-if="university.isFavorited" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
        <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      </button>
    </div>

    <div class="card-tags">
      <span v-for="tag in university.tags" :key="tag" :class="['tag', tag === '985' ? 'tag-985' : tag === '211' ? 'tag-211' : 'tag-tier']">
        {{ tag }}
      </span>
    </div>

    <div class="card-body">
      <div class="info-row">
        <span class="info-label">专业方向：</span>
        <span class="info-value">{{ university.majors.slice(0, 3).join('、') }}等</span>
      </div>
      <div class="info-row">
        <span class="info-label">截止时间：</span>
        <span class="info-value">{{ university.deadline }}</span>
      </div>
    </div>

    <div class="card-footer">
      <a :href="university.officialLink" class="card-btn card-btn-secondary" target="_blank" rel="noopener noreferrer">
        官方通知
      </a>
      <a :href="university.link" class="card-btn card-btn-primary">
        查看详情 →
      </a>
    </div>
  </div>
</div>

<div v-if="sortedUniversities.length === 0" class="no-results">
  <div class="no-results-icon">🔍</div>
  <div class="no-results-title">没有找到符合条件的院校</div>
  <div class="no-results-desc">请尝试调整搜索关键词或筛选条件</div>
</div>

<style>
/* 页面使用 custom.css 中定义的全局样式 */
</style>
