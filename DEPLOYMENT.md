# 部署指南 🚀

本文档指导如何将文苑推免指南部署到 GitHub 和 Supabase。

## 📋 部署步骤

### 步骤 1：创建 GitHub 仓库

1. 访问 [GitHub](https://github.com/) 并登录
2. 点击右上角的 "+" → "New repository"
3. 填写仓库信息：
   - **Repository name**: `baoyan-platform`
   - **Description**: 文苑推免指南 - 基于VitePress的保研信息平台
   - **Visibility**: Public（公开）
   - **不要**勾选 "Add a README file"
4. 点击 "Create repository"

### 步骤 2：推送代码到 GitHub

在你的本地项目目录运行：

```bash
# 添加远程仓库（替换 YOUR_USERNAME 为你的 GitHub 用户名）
git remote add origin https://github.com/YOUR_USERNAME/baoyan-platform.git

# 推送代码到 GitHub
git branch -M main
git push -u origin main
```

### 步骤 3：创建 Supabase 项目

1. 访问 [Supabase](https://supabase.com/) 并登录
2. 点击 "New Project"
3. 填写项目信息：
   - **Name**: `baoyan-platform`
   - **Database Password**: 设置一个强密码
   - **Region**: 选择离你最近的区域
4. 等待项目创建完成（约 2 分钟）

### 步骤 4：配置 Supabase 数据库

在 Supabase 项目中：

1. 进入 "Table Editor"
2. 创建新表 `universities`：

```sql
CREATE TABLE universities (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  tags TEXT[],
  majors TEXT[],
  duration VARCHAR(50),
  assessment TEXT,
  english_requirement TEXT,
  application_period VARCHAR(100),
  deadline VARCHAR(100),
  requirements TEXT,
  official_link TEXT,
  search_keyword TEXT,
  tier VARCHAR(50),
  created_at TIMESTAMP DEFAULT NOW()
);
```

3. 创建新表 `favorites`（用于用户收藏）：

```sql
CREATE TABLE favorites (
  id SERIAL PRIMARY KEY,
  user_id UUID DEFAULT auth.uid(),
  university_id INTEGER REFERENCES universities(id),
  created_at TIMESTAMP DEFAULT NOW()
);

-- 创建索引
CREATE INDEX idx_favorites_user_id ON favorites(user_id);
```

### 步骤 5：连接 GitHub 到 Supabase

1. 在 Supabase 项目中，进入 "Settings" → "GitHub"
2. 点击 "Connect GitHub"
3. 授权 Supabase 访问你的 GitHub 仓库
4. 选择 `baoyan-platform` 仓库
5. 配置部署设置：
   - **Branch**: `main`
   - **Build Command**: `npm run build`
   - **Publish Directory**: `docs/.vitepress/dist`

### 步骤 6：配置自定义域名（可选）

1. 在 Supabase 项目中，进入 "Settings" → "Domain"
2. 点击 "Add custom domain"
3. 输入你的域名（例如：`baoyan.yourdomain.com`）
4. 按照提示配置 DNS 记录

## 🎉 完成！

部署完成后，你的网站将可以通过以下方式访问：

- **Supabase 提供的域名**: `https://your-project.supabase.co`
- **自定义域名**（如果配置）: `https://baoyan.yourdomain.com`
- **GitHub Pages**（可选）: `https://YOUR_USERNAME.github.io/baoyan-platform`

## 🔄 自动部署

现在，每次你推送代码到 GitHub 的 `main` 分支时，Supabase 会自动：

1. 拉取最新代码
2. 运行 `npm run build` 构建项目
3. 部署到生产环境

## 📊 监控部署

- 在 Supabase 项目的 "Deployments" 页面查看部署历史
- 查看部署日志以排查问题

## 🐛 常见问题

### 部署失败

1. 检查构建日志中的错误信息
2. 确保所有依赖都在 `package.json` 中
3. 检查构建命令是否正确

### 数据库连接失败

1. 检查 Supabase 项目是否正常运行
2. 验证数据库凭证是否正确
3. 确保 RLS (Row Level Security) 策略配置正确

### 自定义域名不工作

1. 检查 DNS 记录是否正确配置
2. 等待 DNS 传播（最多 48 小时）
3. 在 Supabase 控制台中验证域名状态

## 📚 更多资源

- [VitePress 部署文档](https://vitepress.dev/guide/deploy.html)
- [Supabase 部署文档](https://supabase.com/docs/guides/hosting)
- [GitHub Pages 文档](https://docs.github.com/en/pages)

---

如有问题，请查看 [GitHub Issues](https://github.com/YOUR_USERNAME/baoyan-platform/issues)
