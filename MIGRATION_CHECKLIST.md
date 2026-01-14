# GitHub 文件迁移清单

## 问题：Vercel 部署失败

错误：`npm error code ENOENT` - 表示 `package.json` 文件在 GitHub 仓库中缺失

## 必须上传到 GitHub 的文件

### 根目录文件

1. **package.json** ⭐ 最重要
```json
{
  "name": "baoyan-platform",
  "version": "2.0.0",
  "description": "文苑推免指南 - 基于VitePress的保研信息平台",
  "type": "module",
  "scripts": {
    "dev": "vitepress dev docs",
    "build": "vitepress build docs",
    "preview": "vitepress preview docs"
  },
  "keywords": ["vitepress", "保研", "推免"],
  "author": "",
  "license": "MIT",
  "devDependencies": {
    "vitepress": "^1.6.4"
  },
  "dependencies": {
    "vue": "^3.5.26"
  }
}
```

2. **package-lock.json** ⭐ 必需
   - 文件较大，直接从本地复制
   - 位置：`c:\Users\86191\baoyan-platform\package-lock.json`

3. **vercel.json** ⭐ 必需
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "docs/.vitepress/dist",
  "installCommand": "npm install"
}
```

4. **README.md**（可选但推荐）
5. **.gitignore**（可选但推荐）

### docs 目录

必须包含整个 `docs/` 目录及其所有子目录：

```
docs/
├── .vitepress/
│   ├── config.ts
│   └── theme/
│       ├── index.ts
│       ├── custom.css
│       └── components/
│           ├── UniversityGrid.vue
│           └── UniversityFilters.vue
├── universities/
│   ├── index.md
│   ├── 北京大学.md
│   ├── 清华大学.md
│   └── ... (所有48个学校文件)
├── index.md
├── about.md
└── guide.md
```

## 快速修复步骤

### 方法 1：使用 GitHub 网页界面逐个添加

1. 访问：https://github.com/dengzheyuan128-oss/baoyan-platform
2. 点击 "Add file" → "Create new file"
3. 按照以下顺序添加：

**第一步：添加 package.json**
- 文件名：`package.json`
- 复制上面的 JSON 内容

**第二步：添加 vercel.json**
- 文件名：`vercel.json`
- 复制上面的 JSON 内容

**第三步：添加 package-lock.json**
- 这个文件很大，建议从本地复制整个文件内容
- 或者：可以跳过这个文件，让 Vercel 重新生成（但会有警告）

**第四步：在 Vercel 重新部署**
- 提交这些文件后
- 在 Vercel 点击 "Redeploy"

### 方法 2：删除仓库重新创建（最彻底）

1. 在 GitHub 设置中删除当前仓库
2. 重新创建空仓库
3. 使用 GitHub Desktop 或其他工具完整上传

### 方法 3：使用 Git 命令（如果网络可用）

```bash
cd c:\Users\86191\baoyan-platform

# 提交本地更改
git add vercel.json
git commit -m "fix: 更新 vercel 配置"

# 尝试推送（如果网络恢复）
git push origin main
```

## 验证步骤

添加文件后，在 GitHub 仓库页面检查：

1. ✅ 根目录有 `package.json`
2. ✅ 根目录有 `vercel.json`
3. ✅ `docs/` 目录存在
4. ✅ `docs/.vitepress/config.ts` 存在

然后在 Vercel 重新部署。

## 如果仍然失败

检查 Vercel 构建日志中的具体错误信息，可能是：

1. TypeScript 配置问题
2. 依赖安装失败
3. 构建命令错误

根据具体错误信息再进行调试。
