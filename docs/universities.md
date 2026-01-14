---
title: 院校名录
<script setup>
import { ref, computed, onMounted } from 'vue'

// 学校数据（从 frontmatter 传递）
const props = defineProps({
  universities: Array
})

const searchQuery = ref('')
const activeFilter = ref('all')
const sortAscending = ref(true)

// 筛选选项
const filters = [
  { value: 'all', label: '全部' },
  { value: '985', label: '985高校' },
  { value: '211', label: '211高校' },
  { value: 'tier-1', label: '第一梯队' },
  { value: 'tier-2', label: '第二梯队' },
  { value: 'tier-3', label: '第三梯队' }
]

// 所有学校数据（手动导入）
const allUniversities = [
  // 第一梯队
  { name: '北京大学', tags: ['985', '第一梯队'], majors: ['文艺学', '语言学及应用语言学', '汉语言文字学'], duration: '3年', deadline: '2025年9月7日16:00', link: '/universities/北京大学.md' },
  { name: '清华大学', tags: ['985', '第一梯队'], majors: ['中国语言文学', '比较文学', '语言学'], duration: '3年', deadline: '2025年9月5日17:00', link: '/universities/清华大学.md' },
  { name: '复旦大学', tags: ['985', '第一梯队'], majors: ['文艺学', '中国古代文学', '中国现当代文学'], duration: '3年', deadline: '2025年9月15日24:00', link: '/universities/复旦大学.md' },
  { name: '南京大学', tags: ['985', '第一梯队'], majors: ['中国古代文学', '中国现当代文学', '文艺学'], duration: '3年', deadline: '2025年9月20日18:00', link: '/universities/南京大学.md' },
  { name: '浙江大学', tags: ['985', '第一梯队'], majors: ['中国古代文学', '中国现当代文学', '文艺学'], duration: '3年', deadline: '2025年9月12日16:00', link: '/universities/浙江大学.md' },
  { name: '中国科学技术大学', tags: ['985', '第一梯队'], majors: ['科学技术史', '科技哲学', '科学技术传播'], duration: '3年', deadline: '2025年9月15日17:00', link: '/universities/中国科学技术大学.md' },
  { name: '上海交通大学', tags: ['985', '第一梯队'], majors: ['中国语言文学', '比较文学', '语言学'], duration: '3年', deadline: '2025年9月10日17:00', link: '/universities/上海交通大学.md' },
  // 第二梯队
  { name: '武汉大学', tags: ['985', '第二梯队'], majors: ['中国古代文学', '中国现当代文学', '文艺学'], duration: '3年', deadline: '2025年9月18日17:00', link: '/universities/武汉大学.md' },
  { name: '中国人民大学', tags: ['985', '第二梯队'], majors: ['文艺学', '中国古代文学', '中国现当代文学'], duration: '3年', deadline: '2025年9月10日16:00', link: '/universities/中国人民大学.md' },
  { name: '北京师范大学', tags: ['985', '第二梯队'], majors: ['中国古代文学', '中国现当代文学', '文艺学'], duration: '3年', deadline: '2025年9月15日17:00', link: '/universities/北京师范大学.md' },
  { name: '华东师范大学', tags: ['985', '第二梯队'], majors: ['中国古代文学', '中国现当代文学', '文艺学'], duration: '3年', deadline: '2025年9月20日18:00', link: '/universities/华东师范大学.md' },
  { name: '南开大学', tags: ['985', '第二梯队'], majors: ['中国古代文学', '中国现当代文学', '文艺学'], duration: '3年', deadline: '2025年9月22日17:00', link: '/universities/南开大学.md' },
  { name: '中山大学', tags: ['985', '第二梯队'], majors: ['中国古代文学', '中国现当代文学', '文艺学'], duration: '3年', deadline: '2025年9月18日16:00', link: '/universities/中山大学.md' },
  { name: '四川大学', tags: ['985', '第二梯队'], majors: ['中国古代文学', '中国现当代文学', '文艺学'], duration: '3年', deadline: '2025年9月20日17:00', link: '/universities/四川大学.md' },
  { name: '哈尔滨工业大学', tags: ['985', '第二梯队'], majors: ['中国语言文学', '社会学', '法学'], duration: '3年', deadline: '2025年9月10日17:00', link: '/universities/哈尔滨工业大学.md' },
  { name: '西安交通大学', tags: ['985', '第二梯队'], majors: ['中国语言文学', '社会学', '法学'], duration: '3年', deadline: '2025年9月20日18:00', link: '/universities/西安交通大学.md' },
  { name: '同济大学', tags: ['985', '第二梯队'], majors: ['中国语言文学', '哲学', '社会学'], duration: '3年', deadline: '2025年9月15日17:00', link: '/universities/同济大学.md' },
  { name: '天津大学', tags: ['985', '第二梯队'], majors: ['中国语言文学', '教育学', '艺术设计'], duration: '3年', deadline: '2025年9月16日17:00', link: '/universities/天津大学.md' },
  { name: '东南大学', tags: ['985', '第二梯队'], majors: ['中国语言文学', '哲学', '社会学'], duration: '3年', deadline: '2025年9月20日18:00', link: '/universities/东南大学.md' },
  { name: '中南大学', tags: ['985', '第二梯队'], majors: ['中国古代文学', '中国现当代文学', '文艺学'], duration: '3年', deadline: '2025年9月22日17:00', link: '/universities/中南大学.md' },
  { name: '北京航空航天大学', tags: ['985', '第二梯队'], majors: ['中国语言文学', '哲学', '法学'], duration: '3年', deadline: '2025年9月15日17:00', link: '/universities/北京航空航天大学.md' },
  { name: '北京理工大学', tags: ['985', '第二梯队'], majors: ['中国语言文学', '法学', '教育学'], duration: '3年', deadline: '2025年9月20日17:00', link: '/universities/北京理工大学.md' },
  { name: '华中科技大学', tags: ['985', '第二梯队'], majors: ['中国古代文学', '中国现当代文学', '文艺学'], duration: '3年', deadline: '2025年9月20日17:00', link: '/universities/华中科技大学.md' },
  // 第三梯队
  { name: '厦门大学', tags: ['985', '第三梯队'], majors: ['中国古代文学', '中国现当代文学', '文艺学'], duration: '3年', deadline: '2025年9月25日18:00', link: '/universities/厦门大学.md' },
  { name: '山东大学', tags: ['985', '第三梯队'], majors: ['中国古代文学', '中国现当代文学', '文艺学'], duration: '3年', deadline: '2025年9月22日17:00', link: '/universities/山东大学.md' },
  { name: '吉林大学', tags: ['985', '第三梯队'], majors: ['中国古代文学', '中国现当代文学', '文艺学'], duration: '3年', deadline: '2025年9月20日16:00', link: '/universities/吉林大学.md' },
  { name: '大连理工大学', tags: ['985', '第三梯队'], majors: ['中国语言文学', '新闻传播学', '哲学'], duration: '3年', deadline: '2025年9月25日17:00', link: '/universities/大连理工大学.md' },
  { name: '重庆大学', tags: ['985', '第三梯队'], majors: ['中国语言文学', '新闻传播学', '哲学'], duration: '3年', deadline: '2025年9月26日18:00', link: '/universities/重庆大学.md' },
  { name: '电子科技大学', tags: ['985', '第三梯队'], majors: ['中国语言文学', '新闻传播学', '哲学'], duration: '3年', deadline: '2025年9月22日17:00', link: '/universities/电子科技大学.md' },
  { name: '西北工业大学', tags: ['985', '第三梯队'], majors: ['中国语言文学', '法学', '哲学'], duration: '3年', deadline: '2025年9月24日17:00', link: '/universities/西北工业大学.md' },
  { name: '华南理工大学', tags: ['985', '第三梯队'], majors: ['中国语言文学', '新闻传播学', '哲学'], duration: '3年', deadline: '2025年9月22日17:00', link: '/universities/华南理工大学.md' },
  { name: '东北大学', tags: ['985', '第三梯队'], majors: ['中国语言文学', '哲学', '社会学'], duration: '3年', deadline: '2025年9月26日18:00', link: '/universities/东北大学.md' },
  { name: '湖南大学', tags: ['985', '第三梯队'], majors: ['中国古代文学', '中国现当代文学', '文艺学'], duration: '3年', deadline: '2025年9月20日17:00', link: '/universities/湖南大学.md' },
  { name: '西北农林科技大学', tags: ['985', '第三梯队'], majors: ['中国语言文学', '社会学', '法学'], duration: '3年', deadline: '2025年9月28日17:00', link: '/universities/西北农林科技大学.md' },
  { name: '兰州大学', tags: ['985', '第三梯队'], majors: ['中国古代文学', '中国现当代文学', '文艺学'], duration: '3年', deadline: '2025年9月25日18:00', link: '/universities/兰州大学.md' },
  { name: '中国农业大学', tags: ['985', '第三梯队'], majors: ['中国语言文学', '社会学', '法学'], duration: '3年', deadline: '2025年9月25日17:00', link: '/universities/中国农业大学.md' },
  { name: '中央民族大学', tags: ['985', '第三梯队'], majors: ['中国古代文学', '中国现当代文学', '语言学及应用语言学'], duration: '3年', deadline: '2025年9月22日17:00', link: '/universities/中央民族大学.md' },
  { name: '中国海洋大学', tags: ['985', '第三梯队'], majors: ['中国语言文学', '文艺学', '汉语言文字学'], duration: '3年', deadline: '2025年9月26日18:00', link: '/universities/中国海洋大学.md' },
  { name: '国防科技大学', tags: ['985', '第三梯队'], majors: ['中国语言文学', '哲学', '社会学'], duration: '3年', deadline: '2025年9月20日17:00', link: '/universities/国防科技大学.md' },
  // 211高校
  { name: '苏州大学', tags: ['211', '第三梯队'], majors: ['中国古代文学', '中国现当代文学', '文艺学'], duration: '3年', deadline: '2025年9月25日17:00', link: '/universities/苏州大学.md' },
  { name: '南京师范大学', tags: ['211', '第三梯队'], majors: ['中国古代文学', '中国现当代文学', '文艺学'], duration: '3年', deadline: '2025年9月22日18:00', link: '/universities/南京师范大学.md' },
  { name: '华中师范大学', tags: ['211', '第三梯队'], majors: ['中国古代文学', '中国现当代文学', '文艺学'], duration: '3年', deadline: '2025年9月20日17:00', link: '/universities/华中师范大学.md' },
  { name: '陕西师范大学', tags: ['211', '第三梯队'], majors: ['中国古代文学', '中国现当代文学', '文艺学'], duration: '3年', deadline: '2025年9月24日17:00', link: '/universities/陕西师范大学.md' },
  { name: '上海大学', tags: ['211', '第三梯队'], majors: ['中国古代文学', '中国现当代文学', '文艺学'], duration: '3年', deadline: '2025年9月26日18:00', link: '/universities/上海大学.md' },
  { name: '暨南大学', tags: ['211', '第三梯队'], majors: ['中国古代文学', '中国现当代文学', '文艺学'], duration: '3年', deadline: '2025年9月21日17:00', link: '/universities/暨南大学.md' },
  { name: '西南大学', tags: ['211', '第三梯队'], majors: ['中国古代文学', '中国现当代文学', '文艺学'], duration: '3年', deadline: '2025年9月23日17:00', link: '/universities/西南大学.md' },
  { name: '湖南师范大学', tags: ['211', '第三梯队'], majors: ['中国古代文学', '中国现当代文学', '文艺学'], duration: '3年', deadline: '2025年9月25日17:00', link: '/universities/湖南师范大学.md' },
  { name: '华南师范大学', tags: ['211', '第三梯队'], majors: ['中国古代文学', '中国现当代文学', '文艺学'], duration: '3年', deadline: '2025年9月24日18:00', link: '/universities/华南师范大学.md' }
]

// 筛选后的学校列表
const filteredUniversities = computed(() => {
  let filtered = [...allUniversities]

  // 应用筛选
  if (activeFilter.value === '985') {
    filtered = filtered.filter(u => u.tags.includes('985'))
  } else if (activeFilter.value === '211') {
    filtered = filtered.filter(u => u.tags.includes('211'))
  } else if (activeFilter.value.startsWith('tier-')) {
    const tier = activeFilter.value.replace('tier-', '')
    const tierMap = { '1': '第一梯队', '2': '第二梯队', '3': '第三梯队' }
    filtered = filtered.filter(u => u.tags.includes(tierMap[tier]))
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
    return sortAscending.value
      ? a.name.localeCompare(b.name, 'zh-CN')
      : b.name.localeCompare(a.name, 'zh-CN')
  })

  return filtered
})

// 统计数据
const stats = computed(() => ({
  total: allUniversities.length,
  show: filteredUniversities.value.length,
  tier985: allUniversities.filter(u => u.tags.includes('985')).length,
  tier211: allUniversities.filter(u => u.tags.includes('211')).length
}))
</script>

# 院校名录

<div class="universities-page">

## 📊 数据概览

<div class="stats-grid">
  <div class="stat-card">
    <div class="stat-number">{{ stats.show }}</div>
    <div class="stat-label">显示院校</div>
  </div>
  <div class="stat-card">
    <div class="stat-number">{{ stats.total }}</div>
    <div class="stat-label">收录总数</div>
  </div>
  <div class="stat-card">
    <div class="stat-number">{{ stats.tier985 }}</div>
    <div class="stat-label">985高校</div>
  </div>
  <div class="stat-card">
    <div class="stat-number">{{ stats.tier211 }}</div>
    <div class="stat-label">211高校</div>
  </div>
</div>

## 🔍 搜索与筛选

### 搜索框
<input
  v-model="searchQuery"
  type="text"
  placeholder="搜索学校名称或专业方向..."
  class="search-input"
/>

### 筛选按钮
<div class="filter-buttons">
  <button
    v-for="filter in filters"
    :key="filter.value"
    :class="['filter-btn', { active: activeFilter === filter.value }]"
    @click="activeFilter = filter.value"
  >
    {{ filter.label }}
  </button>
</div>

### 排序
<button class="sort-btn" @click="sortAscending = !sortAscending">
  {{ sortAscending ? '↓ 按拼音升序' : '↑ 按拼音降序' }}
</button>

## 📚 院校列表

<div class="universities-grid">
  <div
    v-for="university in filteredUniversities"
    :key="university.name"
    class="university-card"
  >
    <h3>{{ university.name }}</h3>

    <div class="tags">
      <span
        v-for="tag in university.tags"
        :key="tag"
        :class="['tag', `tag-${tag}`]"
      >
        {{ tag }}
      </span>
    </div>

    <div class="info">
      <p><strong>专业方向：</strong>{{ university.majors.slice(0, 3).join('、') }}等</p>
      <p><strong>学制：</strong>{{ university.duration }}</p>
      <p><strong>截止时间：</strong>{{ university.deadline }}</p>
    </div>

    <a :href="university.link" class="detail-btn">查看详情 →</a>
  </div>
</div>

<div v-if="filteredUniversities.length === 0" class="no-results">
  <p>没有找到符合条件的院校</p>
  <p>请尝试调整搜索关键词或筛选条件</p>
</div>

</div>

<style>
.universities-page {
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;
  margin: 30px 0;
}

.stat-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.stat-number {
  font-size: 2em;
  font-weight: bold;
  margin-bottom: 5px;
}

.stat-label {
  font-size: 0.9em;
  opacity: 0.9;
}

.search-input {
  width: 100%;
  padding: 12px 20px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 16px;
  margin-bottom: 20px;
  transition: border-color 0.3s;
}

.search-input:focus {
  outline: none;
  border-color: #667eea;
}

.filter-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
}

.filter-btn {
  padding: 8px 20px;
  border: 2px solid #e0e0e0;
  background: white;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s;
}

.filter-btn:hover {
  border-color: #667eea;
  color: #667eea;
}

.filter-btn.active {
  background: #667eea;
  color: white;
  border-color: #667eea;
}

.sort-btn {
  padding: 8px 20px;
  border: 2px solid #e0e0e0;
  background: white;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 20px;
  transition: all 0.3s;
}

.sort-btn:hover {
  border-color: #667eea;
  color: #667eea;
}

.universities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 30px;
}

.university-card {
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 20px;
  transition: all 0.3s;
}

.university-card:hover {
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
  border-color: #667eea;
}

.university-card h3 {
  color: #667eea;
  margin: 0 0 10px 0;
  font-size: 1.3em;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 15px;
}

.tag {
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.85em;
  font-weight: 600;
}

.tag-985 {
  background: #e3f2fd;
  color: #1976d2;
}

.tag-211 {
  background: #fff3e0;
  color: #f57c00;
}

.tag-第一梯队 {
  background: #f3e5f5;
  color: #7b1fa2;
}

.tag-第二梯队 {
  background: #e8f5e9;
  color: #388e3c;
}

.tag-第三梯队 {
  background: #fff9c4;
  color: #f9a825;
}

.info {
  margin-bottom: 15px;
}

.info p {
  margin: 5px 0;
  color: #666;
  font-size: 0.95em;
}

.detail-btn {
  display: inline-block;
  padding: 10px 20px;
  background: #667eea;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  transition: background 0.3s;
}

.detail-btn:hover {
  background: #5568d3;
}

.no-results {
  text-align: center;
  padding: 60px 20px;
  color: #999;
}

.no-results p {
  margin: 10px 0;
}

@media (max-width: 768px) {
  .universities-grid {
    grid-template-columns: 1fr;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
