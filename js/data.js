// 高校数据示例
// 说明：
// - officialLink: 直接指向官方推免/夏令营通知的具体链接（优先使用）
// - searchKeyword: 如果没有具体链接，点击按钮将搜索此关键词
//
// 建议每年更新 officialLink 为最新的预推免/夏令营通知链接
// 可在各大学文学院官网或研究生院官网获取最新通知
const universitiesData = [
    {
        id: 1,
        name: "北京大学",
        tags: ["985", "第一梯队", "学术学位"],
        majors: ["文艺学", "语言学及应用语言学", "汉语言文字学", "中国古典文献学", "中国古代文学", "中国现当代文学", "比较文学与世界文学"],
        duration: "3年",
        assessment: "科研论文考核+面试",
        englishRequirement: "CET-6 ≥426分或同等水平",
        applicationPeriod: "9月1日-9月7日",
        deadline: "2025年9月7日16:00",
        requirements: "申请者须获得推荐免试资格，学业成绩优秀。考核包括科研论文考核（30分）和面试（70分），总分100分。所需材料：报名表、个人陈述、2封专家推荐信、成绩单、获奖证书、外语水平证明、学术成果等。",
        // 北京大学中文系2025年接收推荐免试研究生的通知
        officialLink: "https://chinese.pku.edu.cn/jyjx/zsxx/dd08a8b95ab64c07ab1df34bc8468603.htm",
        searchKeyword: "北京大学 中国语言文学系 推免 通知 2025"
    },
    {
        id: 2,
        name: "清华大学",
        tags: ["985", "第一梯队", "学术学位"],
        majors: ["中国语言文学", "比较文学", "语言学", "中国古典文献学", "中国现当代文学"],
        duration: "3年",
        assessment: "材料审核+综合面试",
        englishRequirement: "CET-6 ≥450分或托福≥90分",
        applicationPeriod: "8月20日-9月5日",
        deadline: "2025年9月5日17:00",
        requirements: "学业成绩名列前茅，有较强的科研能力。需提交研究计划书、代表性学术成果。面试包括专业知识考核和综合素质考察。",
        // 清华大学人文学院2025年硕士推免生考核及录取办法
        officialLink: "https://yzbm.tsinghua.edu.cn/publish/s01/s0101/detail/89889214-6e26-44aa-a84f-d713e8980ae5?yxsdm=069",
        searchKeyword: "清华大学 人文学院 推免 通知"
    },
    {
        id: 3,
        name: "复旦大学",
        tags: ["985", "第一梯队", "学术学位"],
        majors: ["文艺学", "中国古代文学", "中国现当代文学", "世界文学", "汉语言文字学"],
        duration: "3年",
        assessment: "笔试+面试",
        englishRequirement: "CET-6 ≥426分",
        applicationPeriod: "9月1日-9月15日",
        deadline: "2025年9月15日24:00",
        requirements: "专业排名前30%，需提供学术论文1-2篇。笔试考核专业基础，面试考察综合素养和科研潜力。",
        // 复旦大学2025年推免生招生预选拔活动报名须知
        officialLink: "https://gsao.fudan.edu.cn/8a/a3/c15014a690851/page.htm",
        searchKeyword: "复旦大学 中国语言文学系 推免 通知"
    },
    {
        id: 4,
        name: "南京大学",
        tags: ["985", "第一梯队", "学术学位"],
        majors: ["中国古代文学", "中国现当代文学", "文艺学", "汉语言文字学", "比较文学"],
        duration: "3年",
        assessment: "综合面试",
        englishRequirement: "CET-6 ≥426分",
        applicationPeriod: "9月10日-9月20日",
        deadline: "2025年9月20日18:00",
        requirements: "学业优秀，专业基础扎实。面试包括专业问题回答、科研设想陈述和英语口语测试。",
        // 南京大学文学院2025年接收推荐免试研究生预报名通知
        officialLink: "https://chin.nju.edu.cn/tzgg/yjs/20240807/i272833.html",
        searchKeyword: "南京大学 文学院 推免 通知"
    },
    {
        id: 5,
        name: "浙江大学",
        tags: ["985", "第一梯队", "学术学位"],
        majors: ["中国古代文学", "中国现当代文学", "文艺学", "汉语言文字学", "世界文学"],
        duration: "3年",
        assessment: "材料审核+面试",
        englishRequirement: "CET-6 ≥426分",
        applicationPeriod: "9月5日-9月12日",
        deadline: "2025年9月12日16:00",
        requirements: "专业排名前25%，需有学术成果或科研项目经历。面试重点考察科研能力和创新思维。",
        // 浙江大学文学院2025年推荐免试研究生招生复试通知
        officialLink: "http://www.lit.zju.edu.cn/2024/0918/c64557a2963465/page.htm",
        searchKeyword: "浙江大学 文学院 推免 通知 2025"
    },
    {
        id: 6,
        name: "武汉大学",
        tags: ["985", "第二梯队", "学术学位"],
        majors: ["中国古代文学", "中国现当代文学", "文艺学", "汉语言文字学", "比较文学"],
        duration: "3年",
        assessment: "笔试+面试",
        englishRequirement: "CET-6 ≥426分",
        applicationPeriod: "9月8日-9月18日",
        deadline: "2025年9月18日17:00",
        requirements: "专业基础扎实，成绩优秀。笔试涵盖文学史和语言学基础，面试考察综合素质。",
        // 武汉大学文学院官网（需手动查找最新推免通知）
        officialLink: "https://chinese.whu.edu.cn/",
        searchKeyword: "武汉大学 文学院 推免 通知 2025"
    },
    {
        id: 7,
        name: "中国人民大学",
        tags: ["985", "第二梯队", "学术学位"],
        majors: ["文艺学", "中国古代文学", "中国现当代文学", "汉语言文字学", "比较文学"],
        duration: "3年",
        assessment: "综合面试",
        englishRequirement: "CET-6 ≥450分",
        applicationPeriod: "9月1日-9月10日",
        deadline: "2025年9月10日16:00",
        requirements: "专业排名前30%，具有科研潜力。面试包括专业知识、研究计划和英语能力测试。",
        // 中国人民大学2025年文学院推免生接收办法
        officialLink: "http://wenxueyuan.ruc.edu.cn/xwgg/gg/4f2d0c8b01e14642b931c80a9e208bcc.htm",
        searchKeyword: "中国人民大学 文学院 推免 通知"
    },
    {
        id: 8,
        name: "北京师范大学",
        tags: ["985", "第二梯队", "学术学位"],
        majors: ["中国古代文学", "中国现当代文学", "文艺学", "汉语言文字学", "比较文学"],
        duration: "3年",
        assessment: "材料审核+笔试+面试",
        englishRequirement: "CET-6 ≥426分",
        applicationPeriod: "9月5日-9月15日",
        deadline: "2025年9月15日17:00",
        requirements: "专业成绩优秀，有学术研究经历。笔试考核专业基础，面试考察综合素养。",
        // 北京师范大学文学院2025年硕士研究生推免招生复试通知
        officialLink: "https://wxy.bnu.edu.cn/zsxx/ccfe22f94666438f9b45f045b94b4363.htm",
        searchKeyword: "北京师范大学 文学院 推免 通知"
    },
    {
        id: 9,
        name: "华东师范大学",
        tags: ["985", "第二梯队", "学术学位"],
        majors: ["中国古代文学", "中国现当代文学", "文艺学", "汉语言文字学", "比较文学"],
        duration: "3年",
        assessment: "综合面试",
        englishRequirement: "CET-6 ≥426分",
        applicationPeriod: "9月10日-9月20日",
        deadline: "2025年9月20日18:00",
        requirements: "学业优秀，专业排名前30%。面试注重考察科研能力和学术潜力。",
        // 华东师范大学中国语言文学系2025年接收推免生实施细则
        officialLink: "https://zhwx.ecnu.edu.cn/9d/15/c28583a630037/page.htm",
        searchKeyword: "华东师范大学 中国语言文学系 推免 通知"
    },
    {
        id: 10,
        name: "南开大学",
        tags: ["985", "第二梯队", "学术学位"],
        majors: ["中国古代文学", "中国现当代文学", "文艺学", "汉语言文字学"],
        duration: "3年",
        assessment: "面试",
        englishRequirement: "CET-6 ≥426分",
        applicationPeriod: "9月12日-9月22日",
        deadline: "2025年9月22日17:00",
        requirements: "专业基础扎实，成绩优秀。面试包括专业问答和学术设想阐述。",
        // 南开大学文学院接收2025级推免生拟录取流程
        officialLink: "https://wxy.nankai.edu.cn/2024/0927/c34294a551897/page.htm",
        searchKeyword: "南开大学 文学院 推免 通知"
    },
    {
        id: 11,
        name: "中山大学",
        tags: ["985", "第二梯队", "学术学位"],
        majors: ["中国古代文学", "中国现当代文学", "文艺学", "汉语言文字学", "比较文学"],
        duration: "3年",
        assessment: "材料审核+面试",
        englishRequirement: "CET-6 ≥426分",
        applicationPeriod: "9月8日-9月18日",
        deadline: "2025年9月18日16:00",
        requirements: "专业排名前35%，需提供学术成果。面试考察专业知识和科研潜力。",
        // 中山大学中国语言文学系2025年推荐免试研究生接收办法
        officialLink: "https://chinese.sysu.edu.cn/article/2094",
        searchKeyword: "中山大学 中国语言文学系 推免 通知"
    },
    {
        id: 12,
        name: "四川大学",
        tags: ["985", "第二梯队", "学术学位"],
        majors: ["中国古代文学", "中国现当代文学", "文艺学", "汉语言文字学"],
        duration: "3年",
        assessment: "笔试+面试",
        englishRequirement: "CET-6 ≥426分",
        applicationPeriod: "9月10日-9月20日",
        deadline: "2025年9月20日17:00",
        requirements: "成绩优秀，专业基础扎实。笔试考核文学基础，面试考察综合素养。",
        // 四川大学文学与新闻学院2025年接收推免生通知
        officialLink: "https://lj.scu.edu.cn/info/1035/7215.htm",
        searchKeyword: "四川大学 文学与新闻学院 推免 通知"
    },
    {
        id: 13,
        name: "厦门大学",
        tags: ["985", "第三梯队", "学术学位"],
        majors: ["中国古代文学", "中国现当代文学", "文艺学", "汉语言文字学"],
        duration: "3年",
        assessment: "综合面试",
        englishRequirement: "CET-6 ≥426分",
        applicationPeriod: "9月15日-9月25日",
        deadline: "2025年9月25日18:00",
        requirements: "专业成绩优秀，具有研究潜力。面试注重考察学术思维能力。",
        // 厦门大学2025年接收推荐免试研究生工作办法
        officialLink: "https://zs.xmu.edu.cn/info/1055/30931.htm",
        searchKeyword: "厦门大学 人文学院 推免 通知 2025"
    },
    {
        id: 14,
        name: "山东大学",
        tags: ["985", "第三梯队", "学术学位"],
        majors: ["中国古代文学", "中国现当代文学", "文艺学", "汉语言文字学"],
        duration: "3年",
        assessment: "面试",
        englishRequirement: "CET-6 ≥426分",
        applicationPeriod: "9月12日-9月22日",
        deadline: "2025年9月22日17:00",
        requirements: "专业排名前40%，学业成绩良好。面试考察专业知识和综合素质。",
        // 山东大学文学院关于2026年接收推荐免试硕士研究生和本科直博生工作
        officialLink: "https://www.lit.sdu.edu.cn/info/1048/5004.htm",
        searchKeyword: "山东大学 文学院 推免 通知"
    },
    {
        id: 15,
        name: "吉林大学",
        tags: ["985", "第三梯队", "学术学位"],
        majors: ["中国古代文学", "中国现当代文学", "文艺学", "汉语言文字学"],
        duration: "3年",
        assessment: "综合面试",
        englishRequirement: "CET-6 ≥426分",
        applicationPeriod: "9月10日-9月20日",
        deadline: "2025年9月20日16:00",
        requirements: "成绩优秀，专业基础扎实。面试包括专业问题和研究计划。",
        // 吉林大学文学院2025年预推免复试及录取工作办法
        officialLink: "https://wxy.jlu.edu.cn/info/1344/19852.htm",
        searchKeyword: "吉林大学 文学院 推免 通知"
    },
    {
        id: 16,
        name: "苏州大学",
        tags: ["211", "第三梯队", "学术学位"],
        majors: ["中国古代文学", "中国现当代文学", "文艺学", "汉语言文字学"],
        duration: "3年",
        assessment: "面试",
        englishRequirement: "CET-6 ≥426分",
        applicationPeriod: "9月15日-9月25日",
        deadline: "2025年9月25日17:00",
        requirements: "专业排名前40%，成绩良好。面试考察专业基础和科研潜力。",
        // 苏州大学2025年接收推免研究生预报名通知
        officialLink: "https://yjszs.suda.edu.cn/info/1035/7404.htm",
        searchKeyword: "苏州大学 文学院 推免 通知"
    },
    {
        id: 17,
        name: "南京师范大学",
        tags: ["211", "第三梯队", "学术学位"],
        majors: ["中国古代文学", "中国现当代文学", "文艺学", "汉语言文字学"],
        duration: "3年",
        assessment: "综合面试",
        englishRequirement: "CET-6 ≥426分",
        applicationPeriod: "9月12日-9月22日",
        deadline: "2025年9月22日18:00",
        requirements: "学业成绩优秀，专业基础扎实。面试注重考察综合素质。",
        // 南京师范大学2026年推免生接收预报名通知（文学院）
        officialLink: "http://wxy.njnu.edu.cn/info/1105/12506.htm",
        searchKeyword: "南京师范大学 文学院 推免 通知"
    },
    {
        id: 18,
        name: "华中师范大学",
        tags: ["211", "第三梯队", "学术学位"],
        majors: ["中国古代文学", "中国现当代文学", "文艺学", "汉语言文字学"],
        duration: "3年",
        assessment: "笔试+面试",
        englishRequirement: "CET-6 ≥426分",
        applicationPeriod: "9月10日-9月20日",
        deadline: "2025年9月20日17:00",
        requirements: "专业排名前40%，成绩良好。笔试考核专业基础，面试考察综合素养。",
        // 华中师范大学文学院2026年接收推免生通知
        officialLink: "https://chinese.ccnu.edu.cn/info/1035/15267.htm",
        searchKeyword: "华中师范大学 文学院 推免 通知"
    },
    {
        id: 19,
        name: "陕西师范大学",
        tags: ["211", "第三梯队", "学术学位"],
        majors: ["中国古代文学", "中国现当代文学", "文艺学", "汉语言文字学"],
        duration: "3年",
        assessment: "综合面试",
        englishRequirement: "CET-6 ≥426分",
        applicationPeriod: "9月14日-9月24日",
        deadline: "2025年9月24日17:00",
        requirements: "成绩优秀，专业基础扎实。面试考察专业知识和科研潜力。",
        // 陕西师范大学2026年招收推免攻读研究生章程
        officialLink: "https://yz.snnu.edu.cn/info/1009/7731.htm",
        searchKeyword: "陕西师范大学 文学院 推免 通知"
    },
    {
        id: 20,
        name: "上海大学",
        tags: ["211", "第三梯队", "学术学位"],
        majors: ["中国古代文学", "中国现当代文学", "文艺学", "汉语言文字学"],
        duration: "3年",
        assessment: "面试",
        englishRequirement: "CET-6 ≥426分",
        applicationPeriod: "9月16日-9月26日",
        deadline: "2025年9月26日18:00",
        requirements: "专业排名前45%，成绩良好。面试注重考察学术研究能力。",
        // 上海大学文学院2025年推免生招生复试工作实施方案
        officialLink: "https://cla.shu.edu.cn/info/1017/49098.htm",
        searchKeyword: "上海大学 文学院 推免 通知"
    },
    {
        id: 21,
        name: "暨南大学",
        tags: ["211", "第三梯队", "学术学位"],
        majors: ["中国古代文学", "中国现当代文学", "文艺学", "汉语言文字学"],
        duration: "3年",
        assessment: "综合面试",
        englishRequirement: "CET-6 ≥426分",
        applicationPeriod: "9月11日-9月21日",
        deadline: "2025年9月21日17:00",
        requirements: "成绩优秀，具有科研潜力。面试考察专业素质和创新能力。",
        // 暨南大学接收2025年推免生复试公告
        officialLink: "https://yz.jnu.edu.cn/2024/0918/c33059a820958/page.htm",
        searchKeyword: "暨南大学 文学院 推免 通知"
    },
    {
        id: 22,
        name: "西南大学",
        tags: ["211", "第三梯队", "学术学位"],
        majors: ["中国古代文学", "中国现当代文学", "文艺学", "汉语言文字学"],
        duration: "3年",
        assessment: "笔试+面试",
        englishRequirement: "CET-6 ≥426分",
        applicationPeriod: "9月13日-9月23日",
        deadline: "2025年9月23日17:00",
        requirements: "专业成绩良好，基础扎实。笔试考核专业基础，面试考察综合素质。",
        // 西南大学文学院关于接收2026年推免生预报名通知
        officialLink: "https://chinese.swu.edu.cn/info/1087/5434.htm",
        searchKeyword: "西南大学 文学院 推免 通知"
    },
    {
        id: 23,
        name: "湖南师范大学",
        tags: ["211", "第三梯队", "学术学位"],
        majors: ["中国古代文学", "中国现当代文学", "文艺学", "汉语言文字学"],
        duration: "3年",
        assessment: "综合面试",
        englishRequirement: "CET-6 ≥426分",
        applicationPeriod: "9月15日-9月25日",
        deadline: "2025年9月25日17:00",
        requirements: "学业成绩优秀，专业基础扎实。面试注重考察综合能力。",
        // 湖南师范大学2026年招收推免攻读研究生简章
        officialLink: "https://yjsy.hunnu.edu.cn/info/1027/15918.htm",
        searchKeyword: "湖南师范大学 文学院 推免 通知"
    },
    {
        id: 24,
        name: "华南师范大学",
        tags: ["211", "第三梯队", "学术学位"],
        majors: ["中国古代文学", "中国现当代文学", "文艺学", "汉语言文字学"],
        duration: "3年",
        assessment: "面试",
        englishRequirement: "CET-6 ≥426分",
        applicationPeriod: "9月14日-9月24日",
        deadline: "2025年9月24日18:00",
        requirements: "专业排名前45%，成绩良好。面试考察专业知识和研究潜力。",
        // 华南师范大学文学院2025年接收推免攻读研究生公告
        officialLink: "http://wxy.scnu.edu.cn/tongzhigonggao/yanjiushengjiaoyutz/2024/0920/3555.html",
        searchKeyword: "华南师范大学 文学院 推免 通知"
    },
    // ===== 剩余24所985高校 =====
    {
        id: 25,
        name: "中国科学技术大学",
        tags: ["985", "第一梯队", "学术学位"],
        majors: ["科学技术史", "科技哲学", "科学技术传播", "人文社会科学"],
        duration: "3年",
        assessment: "综合面试",
        englishRequirement: "CET-6 ≥460分或托福≥90分",
        applicationPeriod: "9月1日-9月15日",
        deadline: "2025年9月15日17:00",
        requirements: "学业成绩优秀，具有科研潜力。需提供科研成果或研究计划。面试考察综合素养和学术潜力。",
        // 中国科学技术大学2026年推免生接收办法
        officialLink: "https://yz.ustc.edu.cn/article/2793",
        searchKeyword: "中国科学技术大学 人文学院 推免 通知"
    },
    {
        id: 26,
        name: "哈尔滨工业大学",
        tags: ["985", "第二梯队", "学术学位"],
        majors: ["中国语言文学", "社会学", "法学", "经济学"],
        duration: "3年",
        assessment: "材料审核+面试",
        englishRequirement: "CET-6 ≥426分",
        applicationPeriod: "8月25日-9月10日",
        deadline: "2025年9月10日17:00",
        requirements: "专业成绩良好，具有科研潜力。面试重点考察专业知识。",
        // 哈尔滨工业大学人文社科学部2026年推免生报名通知
        officialLink: "https://rwskxb.hit.edu.cn/2025/0720/c20438a374400/page.htm",
        searchKeyword: "哈尔滨工业大学 人文社科学部 推免 通知"
    },
    {
        id: 27,
        name: "西安交通大学",
        tags: ["985", "第二梯队", "学术学位"],
        majors: ["中国语言文学", "社会学", "法学", "哲学"],
        duration: "3年",
        assessment: "综合面试",
        englishRequirement: "CET-6 ≥426分",
        applicationPeriod: "9月5日-9月20日",
        deadline: "2025年9月20日18:00",
        requirements: "学业优秀，专业基础扎实。面试注重考察综合素质。",
        // 西安交通大学人文学院2026年招收推荐免试研究生工作实施细则
        officialLink: "https://rwxy.xjtu.edu.cn/info/1065/10303.htm",
        searchKeyword: "西安交通大学 人文学院 推免 通知"
    },
    {
        id: 28,
        name: "同济大学",
        tags: ["985", "第二梯队", "学术学位"],
        majors: ["中国语言文学", "哲学", "社会学", "艺术设计"],
        duration: "3年",
        assessment: "综合面试",
        englishRequirement: "CET-6 ≥426分",
        applicationPeriod: "9月1日-9月15日",
        deadline: "2025年9月15日17:00",
        requirements: "专业排名前35%，需提供学术成果。面试考察专业知识和创新能力。",
        // 同济大学2025年接收推免研究生预报名通知
        officialLink: "https://yz.tongji.edu.cn/info/1010/3638.htm",
        searchKeyword: "同济大学 人文学院 推免 通知"
    },
    {
        id: 29,
        name: "天津大学",
        tags: ["985", "第二梯队", "学术学位"],
        majors: ["中国语言文学", "教育学", "艺术设计"],
        duration: "3年",
        assessment: "材料审核+面试",
        englishRequirement: "CET-6 ≥426分",
        applicationPeriod: "9月2日-9月16日",
        deadline: "2025年9月16日17:00",
        requirements: "成绩良好，具有科研潜力。面试注重考察综合素质。",
        // 天津大学人文艺术学院2025级推荐免试攻读硕士学位研究生接收办法
        officialLink: "https://rwys.tju.edu.cn/info/1015/2301.htm",
        searchKeyword: "天津大学 人文艺术学院 推免 通知"
    },
    {
        id: 30,
        name: "东南大学",
        tags: ["985", "第二梯队", "学术学位"],
        majors: ["中国语言文学", "哲学", "社会学", "旅游管理"],
        duration: "3年",
        assessment: "笔试+面试",
        englishRequirement: "CET-6 ≥426分",
        applicationPeriod: "9月5日-9月20日",
        deadline: "2025年9月20日18:00",
        requirements: "专业排名前35%，成绩优秀。笔试考核专业基础，面试考察综合能力。",
        // 东南大学人文学院2025年推免报名工作通知
        officialLink: "https://rwxy.seu.edu.cn/2025/0826/c12624a537176/page.htm",
        searchKeyword: "东南大学 人文学院 推免 通知"
    },
    {
        id: 31,
        name: "中南大学",
        tags: ["985", "第二梯队", "学术学位"],
        majors: ["中国古代文学", "中国现当代文学", "文艺学", "汉语言文字学"],
        duration: "3年",
        assessment: "综合面试",
        englishRequirement: "CET-6 ≥426分",
        applicationPeriod: "9月8日-9月22日",
        deadline: "2025年9月22日17:00",
        requirements: "学业成绩优秀，专业基础扎实。面试注重考察科研能力和学术潜力。",
        // 中南大学人文学院2025年接收推荐免试攻读硕士学位研究生工作的通知
        officialLink: "https://clj.csu.edu.cn/info/1053/6793.htm",
        searchKeyword: "中南大学 人文学院 推免 通知"
    },
    {
        id: 32,
        name: "大连理工大学",
        tags: ["985", "第三梯队", "学术学位"],
        majors: ["中国语言文学", "新闻传播学", "哲学"],
        duration: "3年",
        assessment: "综合面试",
        englishRequirement: "CET-6 ≥426分",
        applicationPeriod: "9月10日-9月25日",
        deadline: "2025年9月25日17:00",
        requirements: "专业排名前40%，成绩良好。面试考察专业知识和研究潜力。",
        // 大连理工大学人文学院2026年接收推荐免试研究生预报名开放
        officialLink: "https://fhss.dlut.edu.cn/info/1411/35401.htm",
        searchKeyword: "大连理工大学 人文学院 推免 通知"
    },
    {
        id: 33,
        name: "重庆大学",
        tags: ["985", "第三梯队", "学术学位"],
        majors: ["中国语言文学", "新闻传播学", "哲学"],
        duration: "3年",
        assessment: "面试",
        englishRequirement: "CET-6 ≥426分",
        applicationPeriod: "9月12日-9月26日",
        deadline: "2025年9月26日18:00",
        requirements: "成绩优秀，专业基础扎实。面试注重考察综合能力。",
        // 重庆大学2026年推荐免试研究生招生预报名公告
        officialLink: "https://yz.cqu.edu.cn/news/2025-07/2357.html",
        searchKeyword: "重庆大学 人文学院 推免 通知"
    },
    {
        id: 34,
        name: "电子科技大学",
        tags: ["985", "第三梯队", "学术学位"],
        majors: ["中国语言文学", "新闻传播学", "哲学"],
        duration: "3年",
        assessment: "综合面试",
        englishRequirement: "CET-6 ≥426分",
        applicationPeriod: "9月8日-9月22日",
        deadline: "2025年9月22日17:00",
        requirements: "专业排名前40%，成绩良好。面试注重考察综合素质。",
        // 电子科技大学公共管理学院官网
        officialLink: "https://www.uestc.edu.cn/",
        searchKeyword: "电子科技大学 人文学院 推免 通知"
    },
    {
        id: 35,
        name: "西北工业大学",
        tags: ["985", "第三梯队", "学术学位"],
        majors: ["中国语言文学", "法学", "哲学"],
        duration: "3年",
        assessment: "材料审核+面试",
        englishRequirement: "CET-6 ≥426分",
        applicationPeriod: "9月10日-9月24日",
        deadline: "2025年9月24日17:00",
        requirements: "成绩优秀，具有科研潜力。面试考察专业知识和创新能力。",
        // 西北工业大学公共政策与管理学院官网
        officialLink: "https://www.nwpu.edu.cn/",
        searchKeyword: "西北工业大学 人文学院 推免 通知"
    },
    {
        id: 36,
        name: "华南理工大学",
        tags: ["985", "第三梯队", "学术学位"],
        majors: ["中国语言文学", "新闻传播学", "哲学"],
        duration: "3年",
        assessment: "综合面试",
        englishRequirement: "CET-6 ≥426分",
        applicationPeriod: "9月8日-9月22日",
        deadline: "2025年9月22日17:00",
        requirements: "专业排名前40%，成绩良好。面试注重考察科研能力和学术潜力。",
        // 华南理工大学新闻与传播学院2026年接收推荐免试研究生预报名通知
        officialLink: "https://www2.scut.edu.cn/communication/2025/0905/c34222a601020/page.htm",
        searchKeyword: "华南理工大学 新闻与传播学院 推免 通知"
    },
    {
        id: 37,
        name: "东北大学",
        tags: ["985", "第三梯队", "学术学位"],
        majors: ["中国语言文学", "哲学", "社会学"],
        duration: "3年",
        assessment: "面试",
        englishRequirement: "CET-6 ≥426分",
        applicationPeriod: "9月12日-9月26日",
        deadline: "2025年9月26日18:00",
        requirements: "成绩优秀，专业基础扎实。面试考察专业知识和综合素质。",
        // 东北大学文法学院官网
        officialLink: "https://www.neu.edu.cn/",
        searchKeyword: "东北大学 文法学院 推免 通知"
    },
    {
        id: 38,
        name: "湖南大学",
        tags: ["985", "第三梯队", "学术学位"],
        majors: ["中国古代文学", "中国现当代文学", "文艺学", "汉语言文字学"],
        duration: "3年",
        assessment: "笔试+面试",
        englishRequirement: "CET-6 ≥426分",
        applicationPeriod: "9月5日-9月20日",
        deadline: "2025年9月20日17:00",
        requirements: "专业排名前35%，成绩优秀。笔试考核专业基础，面试考察综合素养。",
        // 湖南大学中国语言文学学院2025年接收推荐免试研究生预报名通知
        officialLink: "https://wxy.hnu.edu.cn/info/1041/5351.htm",
        searchKeyword: "湖南大学 中国语言文学学院 推免 通知"
    },
    {
        id: 39,
        name: "西北农林科技大学",
        tags: ["985", "第三梯队", "学术学位"],
        majors: ["中国语言文学", "社会学", "法学"],
        duration: "3年",
        assessment: "综合面试",
        englishRequirement: "CET-6 ≥426分",
        applicationPeriod: "9月15日-9月28日",
        deadline: "2025年9月28日17:00",
        requirements: "成绩良好，专业基础扎实。面试注重考察综合素质。",
        // 西北农林科技大学人文社会发展学院官网
        officialLink: "https://www.nwsuaf.edu.cn/",
        searchKeyword: "西北农林科技大学 人文学院 推免 通知"
    },
    {
        id: 40,
        name: "兰州大学",
        tags: ["985", "第三梯队", "学术学位"],
        majors: ["中国古代文学", "中国现当代文学", "文艺学", "汉语言文字学"],
        duration: "3年",
        assessment: "综合面试",
        englishRequirement: "CET-6 ≥426分",
        applicationPeriod: "9月10日-9月25日",
        deadline: "2025年9月25日18:00",
        requirements: "学业成绩优秀，专业基础扎实。面试考察专业知识和研究潜力。",
        // 兰州大学文学院2026年推免生复试录取工作实施细则
        officialLink: "https://chinese.lzu.edu.cn/tongzhigonggao/2025/0910/318484.html",
        searchKeyword: "兰州大学 文学院 推免 通知"
    },
    {
        id: 41,
        name: "北京航空航天大学",
        tags: ["985", "第二梯队", "学术学位"],
        majors: ["中国语言文学", "哲学", "法学"],
        duration: "3年",
        assessment: "材料审核+面试",
        englishRequirement: "CET-6 ≥450分",
        applicationPeriod: "9月1日-9月15日",
        deadline: "2025年9月15日17:00",
        requirements: "专业排名前30%，成绩优秀。面试重点考察科研能力和创新思维。",
        // 北京航空航天大学人文社会科学学院官网
        officialLink: "https://www.buaa.edu.cn/",
        searchKeyword: "北京航空航天大学 人文学院 推免 通知"
    },
    {
        id: 42,
        name: "北京理工大学",
        tags: ["985", "第二梯队", "学术学位"],
        majors: ["中国语言文学", "法学", "教育学"],
        duration: "3年",
        assessment: "综合面试",
        englishRequirement: "CET-6 ≥426分",
        applicationPeriod: "9月5日-9月20日",
        deadline: "2025年9月20日17:00",
        requirements: "成绩优秀，专业基础扎实。面试注重考察综合素质。",
        // 北京理工大学人文学院官网
        officialLink: "https://www.bit.edu.cn/",
        searchKeyword: "北京理工大学 人文学院 推免 通知"
    },
    {
        id: 43,
        name: "中国农业大学",
        tags: ["985", "第三梯队", "学术学位"],
        majors: ["中国语言文学", "社会学", "法学"],
        duration: "3年",
        assessment: "材料审核+面试",
        englishRequirement: "CET-6 ≥426分",
        applicationPeriod: "9月10日-9月25日",
        deadline: "2025年9月25日17:00",
        requirements: "专业排名前40%，成绩良好。面试考察专业知识和科研潜力。",
        // 中国农业大学人文与发展学院官网
        officialLink: "https://cohd.cau.edu.cn/",
        searchKeyword: "中国农业大学 人文与发展学院 推免 通知"
    },
    {
        id: 44,
        name: "中央民族大学",
        tags: ["985", "第三梯队", "学术学位"],
        majors: ["中国古代文学", "中国现当代文学", "语言学及应用语言学", "中国少数民族语言文学"],
        duration: "3年",
        assessment: "综合面试",
        englishRequirement: "CET-6 ≥426分",
        applicationPeriod: "9月8日-9月22日",
        deadline: "2025年9月22日17:00",
        requirements: "学业成绩优秀，专业基础扎实。面试注重考察综合素质和民族特色。",
        // 中央民族大学文学院官网
        officialLink: "https://www.muc.edu.cn/",
        searchKeyword: "中央民族大学 文学院 推免 通知"
    },
    {
        id: 45,
        name: "中国海洋大学",
        tags: ["985", "第三梯队", "学术学位"],
        majors: ["中国语言文学", "文艺学", "汉语言文字学"],
        duration: "3年",
        assessment: "面试",
        englishRequirement: "CET-6 ≥426分",
        applicationPeriod: "9月12日-9月26日",
        deadline: "2025年9月26日18:00",
        requirements: "专业排名前40%，成绩良好。面试考察专业知识和综合素质。",
        // 中国海洋大学文学与新闻传播学院官网
        officialLink: "https://www.ouc.edu.cn/",
        searchKeyword: "中国海洋大学 文学院 推免 通知"
    },
    {
        id: 46,
        name: "国防科技大学",
        tags: ["985", "第三梯队", "学术学位"],
        majors: ["中国语言文学", "哲学", "社会学"],
        duration: "3年",
        assessment: "材料审核+综合面试+政审",
        englishRequirement: "CET-6 ≥426分",
        applicationPeriod: "9月5日-9月20日",
        deadline: "2025年9月20日17:00",
        requirements: "政治审查合格，成绩优秀，具有科研潜力。需要通过政治审查和体能测试。",
        // 国防科技大学文理学院官网
        officialLink: "https://www.nudt.edu.cn/",
        searchKeyword: "国防科技大学 人文学院 推免 通知"
    },
    {
        id: 47,
        name: "上海交通大学",
        tags: ["985", "第一梯队", "学术学位"],
        majors: ["中国语言文学", "比较文学", "语言学", "中国古典文献学"],
        duration: "3年",
        assessment: "材料审核+综合面试",
        englishRequirement: "CET-6 ≥450分或托福≥90分",
        applicationPeriod: "8月25日-9月10日",
        deadline: "2025年9月10日17:00",
        requirements: "学业成绩名列前茅，有较强的科研能力。需提交研究计划书、代表性学术成果。",
        // 上海交通大学人文学院2026年招收优秀应届本科毕业生免试攻读研究生
        officialLink: "https://shss.sjtu.edu.cn/Web/Show/11126",
        searchKeyword: "上海交通大学 人文学院 推免 通知"
    },
    {
        id: 48,
        name: "华中科技大学",
        tags: ["985", "第二梯队", "学术学位"],
        majors: ["中国古代文学", "中国现当代文学", "文艺学", "汉语言文字学"],
        duration: "3年",
        assessment: "笔试+面试",
        englishRequirement: "CET-6 ≥426分",
        applicationPeriod: "9月5日-9月20日",
        deadline: "2025年9月20日17:00",
        requirements: "专业排名前30%，成绩优秀。笔试考核专业基础，面试考察综合素养和科研潜力。",
        // 华中科技大学人文学院官网
        officialLink: "https://shss.hust.edu.cn/",
        searchKeyword: "华中科技大学 人文学院 推免 通知"
    }
];

// 从 localStorage 加载收藏列表
function loadFavorites() {
    const favorites = localStorage.getItem('baoyan_favorites');
    return favorites ? JSON.parse(favorites) : [];
}

// 保存收藏列表到 localStorage
function saveFavorites(favorites) {
    localStorage.setItem('baoyan_favorites', JSON.stringify(favorites));
}

// 切换收藏状态
function toggleFavorite(universityId) {
    let favorites = loadFavorites();
    const index = favorites.indexOf(universityId);

    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(universityId);
    }

    saveFavorites(favorites);
    return favorites.includes(universityId);
}

// 检查是否已收藏
function isFavorite(universityId) {
    const favorites = loadFavorites();
    return favorites.includes(universityId);
}
