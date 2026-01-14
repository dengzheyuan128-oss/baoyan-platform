@echo off
echo ========================================
echo 需要上传的文件清单
echo ========================================
echo.

echo [必传文件 1/3] vercel.json
echo 位置: c:\Users\86191\baoyan-platform\vercel.json
echo.

echo [必传文件 2/3] docs/universities.md
echo 位置: c:\Users\86191\baoyan-platform\docs\universities.md
echo.

echo [必传文件 3/3] MIGRATION_CHECKLIST.md
echo 位置: c:\Users\86191\baoyan-platform\MIGRATION_CHECKLIST.md
echo.

echo ========================================
echo 手动上传步骤：
echo ========================================
echo.
echo 1. 访问 GitHub 仓库:
echo    https://github.com/dengzheyuan128-oss/baoyan-platform
echo.
echo 2. 点击 "Add file" → "Create new file"
echo.
echo 3. 按顺序创建以下文件:
echo.
echo    第一个文件:
echo    - 文件名: vercel.json
echo    - 内容: 从本地复制 c:\Users\86191\baoyan-platform\vercel.json
echo.
echo    第二个文件:
echo    - 文件名: docs/universities.md
echo    - 内容: 从本地复制 c:\Users\86191\baoyan-platform\docs\universities.md
echo.
echo    第三个文件:
echo    - 文件名: MIGRATION_CHECKLIST.md
echo    - 内容: 从本地复制 c:\Users\86191\baoyan-platform\MIGRATION_CHECKLIST.md
echo.
echo 4. 提交更改后，Vercel 会自动部署
echo.
echo ========================================
echo.

echo 按任意键打开这些文件的位置...
pause > nul

explorer c:\Users\86191\baoyan-platform

echo.
echo 文件夹已打开，请手动复制文件内容到 GitHub
echo.
pause
