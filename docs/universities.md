---
title: 院校名录
---

<script setup>
import { ref, computed } from 'vue'

const searchQuery = ref('')
const activeFilter = ref('all')

const universities = [
  // 第一梯队
  { name: '北京大学', tags: ['985', '第一梯队'], majors: ['文艺学', '语言学及应用语言学', '汉语言文字学'], deadline: '9月7日16:00', link: '/universities/北京大学.md' },
  { name: '清华大学', tags: ['985', '第一梯队'], majors: ['中国语言文学', '比较文学', '语言学'], deadline: '9月5日17:00', link: '/universities/清华大学.md' },
  { name: '复旦大学', tags: ['985', '第一梯队'], majors: ['文艺学', '中国古代文学', '中国现当代文学'], deadline: '9月15日24:00', link: '/universities/复旦大学.md' },
  { name: '南京大学', tags: ['985', '第一梯队'], majors: ['中国古代文学', '中国现当代文学', '文艺学'], deadline: '9月20日18:00', link: '/universities/南京大学.md' },
  { name: '浙江大学', tags: ['985', '第一梯队'], majors: ['中国古代文学', '中国现当代文学', '文艺学'], deadline: '9月12日16:00', link: '/universities/浙江大学.md' },
  { name: '中国科学技术大学', tags: ['985', '第一梯队'], majors: ['科学技术史', '科技哲学', '科学技术传播'], deadline: '9月15日17:00', link: '/universities/中国科学技术大学.md' },
  { name: '上海交通大学', tags: ['985', '第一梯队'], majors: ['中国语言文学', '比较文学', '语言学'], deadline: '9月10日17:00', link: '/universities/上海交通大学.md' },
  // 第二梯队
  { name: '武汉大学', tags: ['985', '第二梯队'], majors: ['中国古代文学', '中国现当代文学', '文艺学'], deadline: '9月18日17:00', link: '/universities/武汉大学.md' },
  { name: '中国人民大学', tags: ['985', '第二梯队'], majors: ['文艺学', '中国古代文学', '中国现当代文学'], deadline: '9月10日16:00', link: '/universities/中国人民大学.md' },
  { name: '北京师范大学', tags: ['985', '第二梯队'], majors: ['中国古代文学', '中国现当代文学', '文艺学'], deadline: '9月15日17:00', link: '/universities/北京师范大学.md' },
  { name: '华东师范大学', tags: ['985', '第二梯队'], majors: ['中国古代文学', '中国现当代文学', '文艺学'], deadline: '9月20日18:00', link: '/universities/华东师范大学.md' },
  { name: '南开大学', tags: ['985', '第二梯队'], majors: ['中国古代文学', '中国现当代文学', '文艺学'], deadline: '9月22日17:00', link: '/universities/南开大学.md' },
  { name: '中山大学', tags: ['985', '第二梯队'], majors: ['中国古代文学', '中国现当代文学', '文艺学'], deadline: '9月18日16:00', link: '/universities/中山大学.md' },
  { name: '四川大学', tags: ['985', '第二梯队'], majors: ['中国古代文学', '中国现当代文学', '文艺学'], deadline: '9月20日17:00', link: '/universities/四川大学.md' },
  { name: '哈尔滨工业大学', tags: ['985', '第二梯队'], majors: ['中国语言文学', '社会学', '法学'], deadline: '9月10日17:00', link: '/universities/哈尔滨工业大学.md' },
  { name: '西安交通大学', tags: ['985', '第二梯队'], majors: ['中国语言文学', '社会学', '法学'], deadline: '9月20日18:00', link: '/universities/西安交通大学.md' },
  { name: '同济大学', tags: ['985', '第二梯队'], majors: ['中国语言文学', '哲学', '社会学'], deadline: '9月15日17:00', link: '/universities/同济大学.md' },
  { name: '天津大学', tags: ['985', '第二梯队'], majors: ['中国语言文学', '教育学', '艺术设计'], deadline: '9月16日17:00', link: '/universities/天津大学.md' },
  { name: '东南大学', tags: ['985', '第二梯队'], majors: ['中国语言文学', '哲学', '社会学'], deadline: '9月20日18:00', link: '/universities/东南大学.md' },
  { name: '中南大学', tags: ['985', '第二梯队'], majors: ['中国古代文学', '中国现当代文学', '文艺学'], deadline: '9月22日17:00', link: '/universities/中南大学.md' },
  { name: '北京航空航天大学', tags: ['985', '第二梯队'], majors: ['中国语言文学', '哲学', '法学'], deadline: '9月15日17:00', link: '/universities/北京航空航天大学.md' },
  { name: '北京理工大学', tags: ['985', '第二梯队'], majors: ['中国语言文学', '法学', '教育学'], deadline: '9月20日17:00', link: '/universities/北京理工大学.md' },
  { name: '华中科技大学', tags: ['985', '第二梯队'], majors: ['中国古代文学', '中国现当代文学', '文艺学'], deadline: '9月20日17:00', link: '/universities/华中科技大学.md' },
  // 第三梯队 985
  { name: '厦门大学', tags: ['985', '第三梯队'], majors: ['中国古代文学', '中国现当代文学', '文艺学'], deadline: '9月25日18:00', link: '/universities/厦门大学.md' },
  { name: '山东大学', tags: ['985', '第三梯队'], majors: ['中国古代文学', '中国现当代文学', '文艺学'], deadline: '9月22日17:00', link: '/universities/山东大学.md' },
  { name: '吉林大学', tags: ['985', '第三梯队'], majors: ['中国古代文学', '中国现当代文学', '文艺学'], deadline: '9月20日16:00', link: '/universities/吉林大学.md' },
  { name: '大连理工大学', tags: ['985', '第三梯队'], majors: ['中国语言文学', '新闻传播学', '哲学'], deadline: '9月25日17:00', link: '/universities/大连理工大学.md' },
  { name: '重庆大学', tags: ['985', '第三梯队'], majors: ['中国语言文学', '新闻传播学', '哲学'], deadline: '9月26日18:00', link: '/universities/重庆大学.md' },
  { name: '电子科技大学', tags: ['985', '第三梯队'], majors: ['中国语言文学', '新闻传播学', '哲学'], deadline: '9月22日17:00', link: '/universities/电子科技大学.md' },
  { name: '西北工业大学', tags: ['985', '第三梯队'], majors: ['中国语言文学', '法学', '哲学'], deadline: '9月24日17:00', link: '/universities/西北工业大学.md' },
  { name: '华南理工大学', tags: ['985', '第三梯队'], majors: ['中国语言文学', '新闻传播学', '哲学'], deadline: '9月22日17:00', link: '/universities/华南理工大学.md' },
  { name: '东北大学', tags: ['985', '第三梯队'], majors: ['中国语言文学', '哲学', '社会学'], deadline: '9月26日18:00', link: '/universities/东北大学.md' },
  { name: '湖南大学', tags: ['985', '第三梯队'], majors: ['中国古代文学', '中国现当代文学', '文艺学'], deadline: '9月20日17:00', link: '/universities/湖南大学.md' },
  { name: '西北农林科技大学', tags: ['985', '第三梯队'], majors: ['中国语言文学', '社会学', '法学'], deadline: '9月28日17:00', link: '/universities/西北农林科技大学.md' },
  { name: '兰州大学', tags: ['985', '第三梯队'], majors: ['中国古代文学', '中国现当代文学', '文艺学'], deadline: '9月25日18:00', link: '/universities/兰州大学.md' },
  { name: '中国农业大学', tags: ['985', '第三梯队'], majors: ['中国语言文学', '社会学', '法学'], deadline: '9月25日17:00', link: '/universities/中国农业大学.md' },
  { name: '中央民族大学', tags: ['985', '第三梯队'], majors: ['中国古代文学', '中国现当代文学', '语言学及应用语言学'], deadline: '9月22日17:00', link: '/universities/中央民族大学.md' },
  { name: '中国海洋大学', tags: ['985', '第三梯队'], majors: ['中国语言文学', '文艺学', '汉语言文字学'], deadline: '9月26日18:00', link: '/universities/中国海洋大学.md' },
  { name: '国防科技大学', tags: ['985', '第三梯队'], majors: ['中国语言文学', '哲学', '社会学'], deadline: '9月20日17:00', link: '/universities/国防科技大学.md' },
  // 211高校
  { name: '苏州大学', tags: ['211', '第三梯队'], majors: ['中国古代文学', '中国现当代文学', '文艺学'], deadline: '9月25日17:00', link: '/universities/苏州大学.md' },
  { name: '南京师范大学', tags: ['211', '第三梯队'], majors: ['中国古代文学', '中国现当代文学', '文艺学'], deadline: '9月22日18:00', link: '/universities/南京师范大学.md' },
  { name: '华中师范大学', tags: ['211', '第三梯队'], majors: ['中国古代文学', '中国现当代文学', '文艺学'], deadline: '9月20日17:00', link: '/universities/华中师范大学.md' },
  { name: '陕西师范大学', tags: ['211', '第三梯队'], majors: ['中国古代文学', '中国现当代文学', '文艺学'], deadline: '9月24日17:00', link: '/universities/陕西师范大学.md' },
  { name: '上海大学', tags: ['211', '第三梯队'], majors: ['中国古代文学', '中国现当代文学', '文艺学'], deadline: '9月26日18:00', link: '/universities/上海大学.md' },
  { name: '暨南大学', tags: ['211', '第三梯队'], majors: ['中国古代文学', '中国现当代文学', '文艺学'], deadline: '9月21日17:00', link: '/universities/暨南大学.md' },
  { name: '西南大学', tags: ['211', '第三梯队'], majors: ['中国古代文学', '中国现当代文学', '文艺学'], deadline: '9月23日17:00', link: '/universities/西南大学.md' },
  { name: '湖南师范大学', tags: ['211', '第三梯队'], majors: ['中国古代文学', '中国现当代文学', '文艺学'], deadline: '9月25日17:00', link: '/universities/湖南师范大学.md' },
  { name: '华南师范大学', tags: ['211', '第三梯队'], majors: ['中国古代文学', '中国现当代文学', '文艺学'], deadline: '9月24日18:00', link: '/universities/华南师范大学.md' }
]

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

const setFilter = (filter) => {
  activeFilter.value = filter
}
</script>

# 院校名录

本平台收录了全国 **48所** 985/211 高校的保研信息。

## 搜索与筛选

<div class="search-section">
  <input
    v-model="searchQuery"
    type="text"
    placeholder="搜索学校名称或专业方向..."
    class="search-input"
  />
</div>

<div class="filter-section">
  <button
    @click="setFilter('all')"
    :class="['filter-btn', { active: activeFilter === 'all' }]"
  >
    全部
  </button>
  <button
    @click="setFilter('985')"
    :class="['filter-btn', { active: activeFilter === '985' }]"
  >
    985高校
  </button>
  <button
    @click="setFilter('211')"
    :class="['filter-btn', { active: activeFilter === '211' }]"
  >
    211高校
  </button>
  <button
    @click="setFilter('tier-1')"
    :class="['filter-btn', { active: activeFilter === 'tier-1' }]"
  >
    第一梯队
  </button>
  <button
    @click="setFilter('tier-2')"
    :class="['filter-btn', { active: activeFilter === 'tier-2' }]"
  >
    第二梯队
  </button>
  <button
    @click="setFilter('tier-3')"
    :class="['filter-btn', { active: activeFilter === 'tier-3' }]"
  >
    第三梯队
  </button>
</div>

<div class="stats">
  显示 <strong>{{ filteredUniversities.length }}</strong> 所院校
</div>

## 院校列表

<div class="university-grid">
  <div
    v-for="university in filteredUniversities"
    :key="university.name"
    class="university-card"
  >
    <div class="card-header">
      <h3>{{ university.name }}</h3>
      <div class="tags">
        <span
          v-for="tag in university.tags"
          :key="tag"
          :class="['tag', `tag-${tag.includes('梯队') ? 'tier' : tag}`]"
        >
          {{ tag }}
        </span>
      </div>
    </div>

    <div class="card-body">
      <div class="info-item">
        <span class="label">专业方向：</span>
        <span class="value">{{ university.majors.slice(0, 3).join('、') }}等</span>
      </div>
      <div class="info-item">
        <span class="label">截止时间：</span>
        <span class="value">{{ university.deadline }}</span>
      </div>
    </div>

    <div class="card-footer">
      <a :href="university.link" class="detail-link">
        查看详情 →
      </a>
    </div>
  </div>
</div>

<div v-if="filteredUniversities.length === 0" class="no-results">
  <p>没有找到符合条件的院校</p>
  <p>请尝试调整搜索关键词或筛选条件</p>
</div>

<style>
.search-section {
  margin: 30px 0;
}

.search-input {
  width: 100%;
  padding: 15px 20px;
  font-size: 16px;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  outline: none;
  transition: border-color 0.3s;
}

.search-input:focus {
  border-color: #1e40af;
}

.filter-section {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin: 20px 0;
}

.filter-btn {
  padding: 10px 20px;
  border: 2px solid #e0e0e0;
  background: white;
  border-radius: 25px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s;
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

.stats {
  margin: 20px 0;
  padding: 15px;
  background: #f0f4ff;
  border-radius: 8px;
  text-align: center;
  font-size: 16px;
  color: #1e40af;
}

.university-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;
  margin: 30px 0;
}

.university-card {
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.university-card:hover {
  border-color: #1e40af;
  box-shadow: 0 6px 20px rgba(30, 64, 175, 0.15);
  transform: translateY(-2px);
}

.card-header {
  padding: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.card-header h3 {
  margin: 0 0 12px 0;
  font-size: 20px;
}

.tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.tag {
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  background: rgba(255, 255, 255, 0.25);
}

.tag-985 {
  background: #e3f2fd;
  color: #1976d2;
}

.tag-211 {
  background: #fff3e0;
  color: #f57c00;
}

.tag-tier {
  background: #f3e5f5;
  color: #7b1fa2;
}

.card-body {
  padding: 20px;
}

.info-item {
  margin-bottom: 12px;
  font-size: 14px;
}

.info-item .label {
  color: #666;
  font-weight: 500;
}

.info-item .value {
  color: #333;
}

.card-footer {
  padding: 15px 20px;
  border-top: 1px solid #f0f0f0;
}

.detail-link {
  display: inline-block;
  width: 100%;
  padding: 12px;
  background: #1e40af;
  color: white;
  text-align: center;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 500;
  transition: background 0.3s;
}

.detail-link:hover {
  background: #1e3a8a;
}

.no-results {
  text-align: center;
  padding: 60px 20px;
  color: #999;
}

@media (max-width: 768px) {
  .university-grid {
    grid-template-columns: 1fr;
  }

  .filter-section {
    flex-direction: column;
  }

  .filter-btn {
    width: 100%;
  }
}
</style>
