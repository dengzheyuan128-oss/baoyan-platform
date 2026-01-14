# Vercel 部署指南 🚀

## 前置条件

1. ✅ 已有 GitHub 账号
2. ✅ 已有 Vercel 账号（可用 GitHub 账号登录）
3. ✅ 项目代码已提交到 Git

## 步骤 1：创建 GitHub 仓库并推送代码

### 1.1 在 GitHub 创建新仓库

1. 访问 [GitHub](https://github.com)
2. 点击右上角 **"+"** → **"New repository"**
3. 填写仓库信息：
   - **Repository name**: `baoyan-platform`
   - **Description**: `文苑推免指南 - 基于VitePress的保研信息平台`
   - **Visibility**: ✅ Public（公开）
   - ❌ 不要勾选 "Add a README file"
   - ❌ 不要勾选 ".gitignore"
4. 点击 **"Create repository"**

### 1.2 推送代码到 GitHub

复制并运行以下命令（**替换 `YOUR_USERNAME` 为你的 GitHub 用户名**）：

```bash
# 添加远程仓库
git remote add origin https://github.com/YOUR_USERNAME/baoyan-platform.git

# 重命名分支为 main
git branch -M main

# 推送代码到 GitHub
git push -u origin main
```

**示例**（如果你的用户名是 `zhangsan`）：
```bash
git remote add origin https://github.com/zhangsan/baoyan-platform.git
git branch -M main
git push -u origin main
```

## 步骤 2：部署到 Vercel

### 2.1 登录 Vercel

1. 访问 [vercel.com](https://vercel.com)
2. 点击 **"Sign Up"** 或 **"Login"**
3. 选择 **"Continue with GitHub"**（推荐）
4. 授权 Vercel 访问你的 GitHub

### 2.2 导入项目

1. 登录后，点击 **"Add New Project"**
2. 在 "Import Git Repository" 列表中找到 `baoyan-platform`
3. 点击 **"Import"**

### 2.3 配置项目

Vercel 会自动检测配置，但请确认以下设置：

| 设置项 | 值 |
|--------|-----|
| **Project Name** | `baoyan-platform`（或自定义） |
| **Framework Preset** | Vite |
| **Build Command** | `npm run build` |
| **Output Directory** | `docs/.vitepress/dist` |
| **Install Command** | `npm install` |

### 2.4 开始部署

1. 检查配置无误后，点击 **"Deploy"**
2. 等待部署完成（通常 1-2 分钟）
3. 部署成功后会看到 ✅ 标记

## 步骤 3：获取部署链接

部署成功后，你会获得：

- **默认域名**: `https://baoyan-platform.vercel.app`
- **或**: `https://your-project-name.vercel.app`

你也可以在 Vercel 控制台中：
1. 进入项目设置
2. 选择 **"Domains"**
3. 添加自定义域名（可选）

## 步骤 4：验证部署

1. 访问你的 Vercel 链接
2. 检查页面是否正常显示
3. 测试以下功能：
   - ✅ 首页加载
   - ✅ 院校列表显示
   - ✅ 搜索功能
   - ✅ 筛选功能
   - ✅ 收藏功能

## 自动部署

配置完成后，每次你推送新代码到 GitHub 的 `main` 分支时，Vercel 会：

1. 自动检测到新的提交
2. 拉取最新代码
3. 运行 `npm install` 安装依赖
4. 运行 `npm run build` 构建项目
5. 自动部署到生产环境

## 更新网站

### 修改内容后更新

```bash
# 1. 修改文件
# 2. 提交更改
git add .
git commit -m "描述你的更改"

# 3. 推送到 GitHub
git push origin main

# 4. Vercel 会自动部署！
```

### 添加新学校

```bash
# 1. 在 js/data.js 添加学校数据
# 2. 运行转换脚本
npm run convert

# 3. 提交并推送
git add docs/universities/
git commit -m "feat: 添加新学校"
git push origin main
```

## 常见问题

### Q: 部署失败怎么办？

1. 检查 Vercel 的部署日志
2. 确保 `package.json` 中的脚本正确
3. 确认所有依赖都已安装

### Q: 如何查看部署日志？

1. 进入 Vercel 项目
2. 点击 **"Deployments"**
3. 选择一个部署记录
4. 查看 "Build Logs"

### Q: 如何回滚到之前的版本？

1. 进入 **"Deployments"**
2. 找到之前的成功部署
3. 点击 **"Promote to Production"**

### Q: 如何添加自定义域名？

1. 进入项目设置
2. 选择 **"Domains"**
3. 点击 **"Add"**
4. 输入你的域名并按提示配置 DNS

## 性能优化建议

Vercel 默认已优化：
- ✅ 自动 CDN 分发
- ✅ 图片优化
- ✅ 代码分割
- ✅ 缓存策略

## 费用

- **个人项目**: 完全免费
- **限制**: 100GB 带宽/月（足够使用）
- **升级**: 可选升级到 Pro 计划

## 总结

完成以上步骤后，你的网站将：

1. ✅ 自动部署到全球 CDN
2. ✅ 支持 HTTPS 安全连接
3. ✅ 推送代码自动更新
4. ✅ 极快的访问速度
5. ✅ 完全免费托管

---

**需要帮助？** 查看 [Vercel 官方文档](https://vercel.com/docs)

**祝保研顺利！** 🎓
