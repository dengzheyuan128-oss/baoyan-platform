const fs = require('fs');
const path = require('path');

// 读取数据文件
const dataPath = path.join(__dirname, '../js/data.js');
const dataContent = fs.readFileSync(dataPath, 'utf-8');

// 提取 universitiesData 数组
const arrayMatch = dataContent.match(/const universitiesData = (\[.*?\]);/s);
if (!arrayMatch) {
  console.error('无法找到 universitiesData 数组');
  process.exit(1);
}

const universitiesData = eval(arrayMatch[1]);

// 创建输出目录
const outputDir = path.join(__dirname, '../docs/universities');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// 生成 Markdown 文件
universitiesData.forEach(university => {
  const fileName = `${university.name.toLowerCase().replace(/\s+/g, '-')}.md`;
  const filePath = path.join(outputDir, fileName);

  // 生成拼音用于排序
  const pinyin = university.name.split('').map(char => char.charCodeAt(0)).join('-');

  const markdown = `---
title: ${university.name}
id: ${university.id}
tags: ${JSON.stringify(university.tags)}
tier: ${university.tags.find(t => t.includes('梯队')) || '未分类'}
degree: ${university.tags.find(t => t.includes('学位')) || '学术学位'}
majors: ${JSON.stringify(university.majors)}
duration: ${university.duration}
assessment: ${university.assessment}
englishRequirement: ${university.englishRequirement}
applicationPeriod: ${university.applicationPeriod}
deadline: ${university.deadline}
officialLink: ${university.officialLink}
searchKeyword: ${university.searchKeyword}
pinyin: ${pinyin}
---

# ${university.name}

## 基本信息

| 项目 | 内容 |
|------|------|
| **院校层次** | ${university.tags.join(' / ')} |
| **学制** | ${university.duration} |
| **考核形式** | ${university.assessment} |
| **英语要求** | ${university.englishRequirement} |
| **申请时间** | ${university.applicationPeriod} |
| **截止时间** | ${university.deadline} |

## 专业方向

${university.majors.map(major => `- ${major}`).join('\n')}

## 申请要求

${university.requirements}

## 官方信息

- [官方通知](${university.officialLink})
- [百度搜索](https://www.baidu.com/s?wd=${encodeURIComponent(university.searchKeyword)})
`;

  fs.writeFileSync(filePath, markdown, 'utf-8');
  console.log(`✅ 已创建: ${fileName}`);
});

// 生成索引文件
const indexMarkdown = `---
title: 院校名录
---

# 院校名录

本平台收录了全国${universitiesData.length}所985/211高校的保研信息。

## 按梯队分类

### 第一梯队（顶尖名校）
${universitiesData.filter(u => u.tags.includes('第一梯队')).map(u => `- [${u.name}](./${u.name.toLowerCase().replace(/\s+/g, '-')}.md)`).join('\n')}

### 第二梯队（重点名校）
${universitiesData.filter(u => u.tags.includes('第二梯队')).map(u => `- [${u.name}](./${u.name.toLowerCase().replace(/\s+/g, '-')}.md)`).join('\n')}

### 第三梯队（优质高校）
${universitiesData.filter(u => u.tags.includes('第三梯队')).map(u => `- [${u.name}](./${u.name.toLowerCase().replace(/\s+/g, '-')}.md)`).join('\n')}

## 按类型分类

### 985高校（39所）
${universitiesData.filter(u => u.tags.includes('985')).map(u => `- [${u.name}](./${u.name.toLowerCase().replace(/\s+/g, '-')}.md)`).join('\n')}

### 211高校（24所）
${universitiesData.filter(u => u.tags.includes('211')).map(u => `- [${u.name}](./${u.name.toLowerCase().replace(/\s+/g, '-')}.md)`).join('\n')}
`;

fs.writeFileSync(path.join(outputDir, 'index.md'), indexMarkdown, 'utf-8');
console.log(`✅ 已创建索引文件`);

console.log(`\n🎉 转换完成！共生成 ${universitiesData.length} 个学校 Markdown 文件`);
