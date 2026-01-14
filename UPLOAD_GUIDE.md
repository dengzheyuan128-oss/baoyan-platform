# 🚀 GitHub 上传指南（网络问题备用方案）

由于当前网络无法直接连接到 GitHub，这里提供几个解决方案：

## 方案 1：使用 GitHub 网页端上传（推荐）

### 步骤：

1. **访问你的 GitHub 仓库**
   - 网址：https://github.com/dengzheyuan128-oss/baoyan-platform

2. **上传整个项目**
   - 点击 "uploading an existing file"
   - 或者在仓库创建时选择 "upload a file"

3. **打包你的项目文件夹**
   - 将整个 `c:\Users\86191\baoyan-platform` 文件夹压缩为 ZIP
   - 但要注意，需要排除 `node_modules` 和 `.git` 文件夹

4. **或者手动创建文件**
   - 在 GitHub 网页端手动创建主要文件
   - 这种方法比较繁琐，不推荐

## 方案 2：使用 GitHub Desktop（推荐）

### 步骤：

1. **下载 GitHub Desktop**
   - 网址：https://desktop.github.com/
   - 安装并登录你的 GitHub 账号

2. **克隆你的仓库**
   - 在 GitHub Desktop 中选择 "File" → "Clone Repository"
   - 选择 `baoyan-platform` 仓库
   - 选择本地路径

3. **复制文件**
   - 将你当前项目的所有文件（除了 `node_modules` 和 `.git`）
   - 复制到 GitHub Desktop 克隆的文件夹中

4. **提交和推送**
   - 在 GitHub Desktop 中查看更改
   - 填写提交信息
   - 点击 "Publish branch" 或 "Push origin"

## 方案 3：配置代理

如果你有代理或 VPN：

### Windows 命令行：
```bash
# 设置代理（根据你的代理端口修改）
git config --global http.proxy http://127.0.0.1:7890
git config --global https.proxy http://127.0.0.1:7890

# 然后推送
cd c:\Users\86191\baoyan-platform
git push -u origin main
```

### 取消代理（如果需要）：
```bash
git config --global --unset http.proxy
git config --global --unset https.proxy
```

## 方案 4：使用 SSH 密钥

### 步骤：

1. **生成 SSH 密钥**
```bash
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

2. **添加 SSH 密钥到 GitHub**
   - 复制 `~/.ssh/id_rsa.pub` 的内容
   - 访问：https://github.com/settings/keys
   - 点击 "New SSH key"
   - 粘贴密钥内容

3. **修改远程仓库 URL**
```bash
cd c:\Users\86191\baoyan-platform
git remote set-url origin git@github.com:dengzheyuan128-oss/baoyan-platform.git
git push -u origin main
```

## 方案 5：切换网络

1. **使用手机热点**
   - 开启手机热点
   - 电脑连接热点
   - 重新尝试推送

2. **使用其他网络**
   - 公司/学校网络
   - 咖啡店 WiFi
   - 朋友家网络

## 当前文件列表

你的项目包含以下重要文件：

### 必须上传的文件：
- ✅ `docs/` - 所有文档和学校数据
- ✅ `scripts/convert-to-markdown.js` - 数据转换脚本
- ✅ `js/data.js` - 原始数据
- ✅ `package.json` - 项目配置
- ✅ `vercel.json` - Vercel 部署配置
- ✅ `README.md` - 项目说明
- ✅ `.gitignore` - Git 忽略规则

### 不需要上传的文件：
- ❌ `node_modules/` - 依赖包（可通过 npm install 安装）
- ❌ `.git/` - Git 仓库数据
- ❌ `docs/.vitepress/cache/` - VitePress 缓存

## 推荐步骤（按优先级）

### 1️⃣ 最简单：GitHub Desktop
- 下载安装 GitHub Desktop
- 图形界面操作，不需要命令行
- 最适合网络不稳定的情况

### 2️⃣ 备选：切换网络
- 使用手机热点
- 重新运行推送命令

### 3️⃣ 高级：配置代理
- 如果你有稳定的代理
- 配置 Git 使用代理

## 验证上传成功

上传成功后，访问：
```
https://github.com/dengzheyuan128-oss/baoyan-platform
```

你应该能看到：
- ✅ 所有文件已上传
- ✅ README.md 正常显示
- ✅ 48 个学校的 Markdown 文件

## 上传成功后的下一步

1. **部署到 Vercel**
   - 访问 https://vercel.com
   - 导入 GitHub 仓库
   - 自动部署

2. **获取网站链接**
   - Vercel 会提供公网链接
   - 格式：`https://baoyan-platform.vercel.app`

---

**需要帮助？** 选择最适合你的方案，或者告诉我你遇到的具体问题。
