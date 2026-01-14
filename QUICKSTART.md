# 快速开始指南 🚀

## 当前状态

✅ VitePress 项目已成功创建
✅ 48 所学校数据已转换为 Markdown 文件
✅ 自定义主题和样式已配置
✅ 搜索、筛选、排序功能已实现
✅ Git 仓库已初始化并提交
✅ 开发服务器正在运行：http://localhost:5173

## 下一步操作

### 1. 在浏览器中查看网站

打开浏览器访问：**http://localhost:5173**

你现在应该能看到：
- 🏠 精美的首页
- 📚 48 所高校的完整信息
- 🔍 搜索和筛选功能
- 💾 收藏功能

### 2. 创建 GitHub 仓库并推送代码

```bash
# 1. 在 GitHub 上创建新仓库（名为 baoyan-platform）
# 2. 然后运行以下命令（替换 YOUR_USERNAME）：

git remote add origin https://github.com/YOUR_USERNAME/baoyan-platform.git
git branch -M main
git push -u origin main
```

### 3. 部署到 Supabase（或 Vercel/Netlify）

#### 选项 A：Supabase（推荐）

1. 访问 [Supabase](https://supabase.com/)
2. 创建新项目
3. 连接 GitHub 仓库
4. Supabase 会自动部署

详细步骤见 [DEPLOYMENT.md](./DEPLOYMENT.md)

#### 选项 B：Vercel（最简单）

1. 访问 [Vercel](https://vercel.com/)
2. 点击 "New Project"
3. 导入你的 GitHub 仓库
4. Vercel 会自动检测 VitePress 并部署

#### 选项 C：GitHub Pages（免费）

1. 在 GitHub 仓库设置中启用 GitHub Pages
2. 选择来源为 "GitHub Actions"
3. 创建 `.github/workflows/deploy.yml`：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: docs/.vitepress/dist
```

### 4. 构建生产版本

```bash
npm run build
```

构建后的文件在 `docs/.vitepress/dist` 目录

### 5. 预览生产版本

```bash
npm run preview
```

## 📝 常用命令

```bash
# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产构建
npm run preview

# 转换数据为 Markdown
npm run convert
```

## 🎨 自定义

### 修改主题颜色

编辑 `docs/.vitepress/theme/custom.css`：

```css
:root {
  --vp-c-brand: #1e40af;  /* 主色调 */
}
```

### 添加新学校

1. 在 `js/data.js` 中添加学校数据
2. 运行 `npm run convert` 生成 Markdown 文件

### 修改首页内容

编辑 `docs/index.md`

## 📦 项目结构

```
baoyan-platform/
├── docs/
│   ├── .vitepress/
│   │   ├── config.ts          # 配置文件
│   │   └── theme/             # 自定义主题
│   ├── universities/          # 院校数据（48个 MD 文件）
│   ├── index.md              # 首页
│   ├── about.md              # 关于
│   └── guide.md              # 推免指南
├── scripts/
│   └── convert-to-markdown.js # 数据转换脚本
└── package.json
```

## 🌟 特性

- ✅ **48 所高校数据**：全部转换为 Markdown
- ✅ **搜索功能**：按学校名称和专业方向搜索
- ✅ **筛选功能**：按 985/211、梯队筛选
- ✅ **排序功能**：按拼音排序
- ✅ **收藏功能**：本地存储收藏列表
- ✅ **响应式设计**：完美适配各种设备
- ✅ **快速构建**：基于 VitePress

## 🎯 技术栈

- **VitePress** - 静态站点生成器
- **Vue 3** - 前端框架
- **TypeScript** - 类型支持
- **Markdown** - 内容管理

## 📚 相关文档

- [README.md](./README.md) - 项目说明
- [DEPLOYMENT.md](./DEPLOYMENT.md) - 部署指南
- [VitePress 文档](https://vitepress.dev/)

## 🎉 完成！

现在你可以：

1. 在浏览器中查看本地网站：http://localhost:5173
2. 推送代码到 GitHub
3. 部署到 Supabase/Vercel/Netlify
4. 分享你的网站链接！

祝保研顺利！🎓

---

Made with ❤️ using [VitePress](https://vitepress.dev/) and [Claude Code](https://claude.ai/code)
