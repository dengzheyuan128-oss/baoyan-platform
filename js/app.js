// 全局状态
let currentFilter = 'all';
let currentSearchTerm = '';
let sortAscending = true;

// DOM 元素
const universityGrid = document.getElementById('universityGrid');
const universityCount = document.getElementById('universityCount');
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.filter-btn');
const sortBtn = document.getElementById('sortBtn');
const modal = document.getElementById('detailModal');
const closeModalBtn = document.getElementById('closeModal');

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    renderUniversities();
    setupEventListeners();
    updateUniversityCount();
});

// 设置事件监听器
function setupEventListeners() {
    // 搜索功能
    searchInput.addEventListener('input', (e) => {
        currentSearchTerm = e.target.value.toLowerCase();
        renderUniversities();
        updateUniversityCount();
    });

    // 筛选按钮
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            renderUniversities();
            updateUniversityCount();
        });
    });

    // 排序按钮
    sortBtn.addEventListener('click', () => {
        sortAscending = !sortAscending;
        renderUniversities();
    });

    // 模态框关闭
    closeModalBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // ESC 键关闭模态框
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // 底部标识关闭
    const badgeClose = document.querySelector('.badge-close');
    const footerBadge = document.querySelector('.footer-badge');
    badgeClose.addEventListener('click', () => {
        footerBadge.style.display = 'none';
    });
}

// 渲染院校卡片
function renderUniversities() {
    let filteredData = universitiesData.filter(university => {
        // 筛选
        if (currentFilter !== 'all') {
            if (!university.tags.includes(currentFilter)) {
                return false;
            }
        }

        // 搜索
        if (currentSearchTerm) {
            const searchTerm = currentSearchTerm.toLowerCase();
            const nameMatch = university.name.toLowerCase().includes(searchTerm);
            const majorMatch = university.majors.some(major =>
                major.toLowerCase().includes(searchTerm)
            );
            if (!nameMatch && !majorMatch) {
                return false;
            }
        }

        return true;
    });

    // 排序
    filteredData.sort((a, b) => {
        const comparison = a.name.localeCompare(b.name, 'zh-CN');
        return sortAscending ? comparison : -comparison;
    });

    // 清空现有内容
    universityGrid.innerHTML = '';

    // 渲染卡片
    if (filteredData.length === 0) {
        universityGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; color: var(--text-gray);">
                <svg width="64" height="64" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" style="margin-bottom: 16px; opacity: 0.5;">
                    <circle cx="10" cy="10" r="8"/>
                    <path d="M10 6V10M10 14H10.01"/>
                </svg>
                <p style="font-size: 16px;">未找到匹配的院校信息</p>
                <p style="font-size: 14px; margin-top: 8px;">请尝试其他搜索关键词或筛选条件</p>
            </div>
        `;
        return;
    }

    filteredData.forEach(university => {
        const card = createUniversityCard(university);
        universityGrid.appendChild(card);
    });
}

// 创建院校卡片
function createUniversityCard(university) {
    const card = document.createElement('div');
    card.className = 'university-card';

    const isFav = isFavorite(university.id);
    const tags = university.tags.slice(0, 2).map(tag => {
        const is985 = tag === '985';
        return `<span class="tag ${is985 ? 'tag-985' : ''}">${tag}</span>`;
    }).join('');

    const firstTwoMajors = university.majors.slice(0, 2).join('、');
    const hasMore = university.majors.length > 2;

    card.innerHTML = `
        <div class="card-header">
            <div>
                <div class="university-name">${university.name}</div>
                <div class="card-tags">${tags}</div>
            </div>
            <button class="favorite-btn ${isFav ? 'active' : ''}" data-id="${university.id}" title="收藏">
                <svg viewBox="0 0 20 20">
                    <path d="M10 2L8.5 5.5L5 6L7.5 8.5L7 12L10 10.5L13 12L12.5 8.5L15 6L11.5 5.5L10 2Z"/>
                </svg>
            </button>
        </div>
        <div class="card-info">
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 4H16V16H4V4Z"/>
            </svg>
            ${firstTwoMajors}${hasMore ? ' 等' : ''}
        </div>
        <div class="card-deadline">
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="4" width="14" height="12" rx="2"/>
                <path d="M3 8H17"/>
                <path d="M8 2V6"/>
                <path d="M12 2V6"/>
            </svg>
            ${university.deadline}
        </div>
        <div class="card-footer">
            <span class="degree-type">${university.tags[university.tags.length - 1]}</span>
            <span class="view-details">
                查看详情
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M5 12H14M12 15L15 12L12 9M15 12H9"/>
                </svg>
            </span>
        </div>
    `;

    // 点击卡片显示详情
    card.addEventListener('click', (e) => {
        if (!e.target.closest('.favorite-btn')) {
            showUniversityDetail(university);
        }
    });

    // 收藏按钮
    const favoriteBtn = card.querySelector('.favorite-btn');
    favoriteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const newState = toggleFavorite(university.id);
        favoriteBtn.classList.toggle('active', newState);

        // 显示提示
        showToast(newState ? '已添加到收藏' : '已取消收藏');
    });

    return card;
}

// 显示院校详情
function showUniversityDetail(university) {
    const modalTitle = document.getElementById('modalUniversityName');
    const modalTags = document.getElementById('modalTags');
    const modalBody = document.getElementById('modalBody');
    const officialLink = document.getElementById('officialLink');

    // 设置标题
    modalTitle.textContent = university.name;

    // 设置标签
    modalTags.innerHTML = university.tags.map(tag => {
        const is985 = tag === '985';
        return `<span class="tag ${is985 ? 'tag-985' : ''}">${tag}</span>`;
    }).join('');

    // 设置内容
    modalBody.innerHTML = `
        <div class="section-title-small">
            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="4" width="14" height="12" rx="2"/>
                <path d="M3 8H17"/>
            </svg>
            专业方向
        </div>
        <div class="majors-grid">
            ${university.majors.map(major => `<span class="major-item">${major}</span>`).join('')}
        </div>

        <div class="section-title-small">
            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 12H5M15 12H11M9 8H5M15 8H11M9 16H5"/>
            </svg>
            项目详情
        </div>
        <div class="info-grid">
            <div class="info-label">学制</div>
            <div class="info-value">${university.duration}</div>

            <div class="info-label">考核形式</div>
            <div class="info-value">${university.assessment}</div>

            <div class="info-label">英语要求</div>
            <div class="info-value">${university.englishRequirement}</div>

            <div class="info-label">申请期间</div>
            <div class="info-value">${university.applicationPeriod}</div>

            <div class="info-label">截止时间</div>
            <div class="info-value">${university.deadline}</div>
        </div>

        <div class="section-title-small">
            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 12H5M15 12H11M9 8H5M15 8H11M9 16H5"/>
            </svg>
            推荐免试要求总结
        </div>
        <div class="requirements-box">
            ${university.requirements}
        </div>
    `;

    // 设置官方链接或搜索链接
    // 如果有具体的通知链接（officialLink），优先使用；否则使用搜索
    if (university.officialLink) {
        officialLink.href = university.officialLink;
        officialLink.target = '_blank';
        officialLink.innerHTML = `
            查看官方通知
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12H14M12 15L15 12L12 9M15 12H9"/>
            </svg>
        `;
    } else if (university.searchKeyword) {
        officialLink.href = `https://www.baidu.com/s?wd=${encodeURIComponent(university.searchKeyword)}`;
        officialLink.target = '_blank';
        officialLink.innerHTML = `
            搜索推免通知
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="9" cy="9" r="7"/>
                <path d="M14 14L19 19"/>
            </svg>
        `;
    } else {
        officialLink.href = '#';
        officialLink.target = '_self';
        officialLink.innerHTML = '暂无链接';
    }

    // 显示模态框
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// 关闭模态框
function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// 更新院校数量
function updateUniversityCount() {
    const count = universitiesData.filter(university => {
        if (currentFilter !== 'all' && !university.tags.includes(currentFilter)) {
            return false;
        }
        if (currentSearchTerm) {
            const searchTerm = currentSearchTerm.toLowerCase();
            const nameMatch = university.name.toLowerCase().includes(searchTerm);
            const majorMatch = university.majors.some(major =>
                major.toLowerCase().includes(searchTerm)
            );
            if (!nameMatch && !majorMatch) {
                return false;
            }
        }
        return true;
    }).length;

    universityCount.textContent = count;
}

// 显示提示消息
function showToast(message) {
    // 移除已存在的提示
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }

    // 创建新提示
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        top: 24px;
        left: 50%;
        transform: translateX(-50%);
        background: var(--text-dark);
        color: var(--white);
        padding: 12px 24px;
        border-radius: 8px;
        font-size: 14px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        animation: slideDown 0.3s ease-out;
    `;

    document.body.appendChild(toast);

    // 2秒后自动移除
    setTimeout(() => {
        toast.style.animation = 'slideUp 0.3s ease-out';
        setTimeout(() => toast.remove(), 300);
    }, 2000);
}

// 添加动画样式
const style = document.createElement('style');
style.textContent = `
    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateX(-50%) translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
    }

    @keyframes slideUp {
        from {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
        to {
            opacity: 0;
            transform: translateX(-50%) translateY(-20px);
        }
    }
`;
document.head.appendChild(style);
