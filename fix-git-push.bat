@echo off
echo ========================================
echo Git 推送问题诊断和修复工具
echo ========================================
echo.

cd /d c:\Users\86191\baoyan-platform

echo [1/5] 检查 Git 配置...
git config --global user.name
git config --global user.email
echo.

echo [2/5] 检查远程仓库...
git remote -v
echo.

echo [3/5] 测试网络连接...
ping github.com -n 2
echo.

echo [4/5] 当前分支状态...
git status
echo.

echo ========================================
echo 可能的解决方案：
echo ========================================
echo.
echo 方案 1: 使用 GitHub Desktop（推荐）
echo   1. 下载: https://desktop.github.com/
echo   2. 登录并克隆仓库
echo   3. 复制项目文件到克隆的文件夹
echo   4. 在 GitHub Desktop 中提交并推送
echo.
echo 方案 2: 配置 SSH 密钥
echo   1. 生成密钥: ssh-keygen -t rsa -b 4096
echo   2. 复制公钥到 GitHub Settings
echo   3. 修改远程仓库: git remote set-url origin git@github.com:dengzheyuan128-oss/baoyan-platform.git
echo   4. 推送: git push -u origin main
echo.
echo 方案 3: 切换网络
echo   - 使用手机热点
echo   - 使用其他 WiFi 网络
echo   - 尝试使用 VPN
echo.
echo 方案 4: 使用代理（如果有）
echo   git config --global http.proxy http://127.0.0.1:7890
echo   git config --global https.proxy http://127.0.0.1:7890
echo.
echo ========================================
echo.

echo 按任意键尝试自动推送...
pause > nul

echo.
echo [5/5] 尝试推送...
git push -u origin main

if %errorlevel% equ 0 (
    echo.
    echo ========================================
    echo 推送成功！
    echo ========================================
    echo.
    echo 下一步：访问 https://vercel.com 部署网站
    echo.
) else (
    echo.
    echo ========================================
    echo 推送失败，请使用上面的解决方案
    echo ========================================
    echo.
)

pause
