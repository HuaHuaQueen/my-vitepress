import {defineConfig} from 'vitepress'
import mathjax3 from 'markdown-it-mathjax3';

const title = "HuaHuaQueen-VitePress"

const nav = [
    {
        text: '首页',
        link: '/pages/home/index',
        activeMatch: '/pages/home/'
    },
    {
        text: '言语理解',
        link: '/pages/speech-comprehension/central-comprehension',
        activeMatch: '/pages/speech-comprehension/'
    },
    {
        text: '资料分析', link: '/pages/data-analysis/calculation-skills',
        activeMatch: '/pages/data-analysis/'
    },
    {
        text: '判断推理', link: '/pages/judgment-reasoning/graphic-reasoning',
        activeMatch: '/pages/judgment-reasoning/'
    },
    {
        text: '数量', link: '/pages/quantity/quantitative-relationship',
        activeMatch: '/pages/quantity/'
    },
    {
        text: '申论', link: '/pages/essay/index',
        activeMatch: '/pages/essay/'
    },
    {
        text: '团队', link: '/pages/team',
        activeMatch: '/pages/team'
    }
]

const socialLinks = [
    {icon: 'github', link: 'https://github.com/HuaHuaQueen'}
]

const sidebar = [
    {
        text: '言语理解',
        collapsed: true,
        items: [
            {text: '中心理解题', link: './pages/speech-comprehension/central-comprehension'},
            {text: '语句排序题', link: './pages/speech-comprehension/statement-order'},
            {text: '语句填空题', link: './pages/speech-comprehension/sentence-blanks'},
            {text: '接语选择题', link: './pages/speech-comprehension/conversation-pick-up'},
            {text: '扩展', link: './pages/speech-comprehension/expansion'}
        ]
    },
    {
        text: '资料分析',
        collapsed: true,
        items: [
            {text: '速算技巧', link: './pages/data-analysis/calculation-skills'},
            {text: '基期与现期', link: './pages/data-analysis/base-period-and-current-period'},
            {text: '常见术语', link: './pages/data-analysis/common-terms'},
            {text: '做题技巧', link: './pages/data-analysis/test-skills'},
            {text: '总结', link: './pages/data-analysis/summary'},
            {text: '扩展', link: './pages/data-analysis/expansion'},
        ]
    },
    {
        text: '判断推理',
        collapsed: true,
        items: [
            {text: '图形推理', link: './pages/judgment-reasoning/graphic-reasoning'},
            {text: '语义推理', link: './pages/judgment-reasoning/semantic-reasoning'},
            {text: '翻译推理', link: './pages/judgment-reasoning/translation-reasoning'},
        ]
    },
    {
        text: '数量',
        collapsed: true,
        items: [
            {text: '数量关系', link: './pages/quantity/quantitative-relationship'}
        ]
    },
    {
        text: '申论',
        collapsed: true,
        items: [
            {text: '申论', link: './pages/essay/index'}
        ]
    },
]

const search = {
    provider: 'local',
    miniSearch: {
        options: {
            extractField: (document, fieldName) => document[fieldName],
            tokenize: (text) => text.split(/[\s\-]+/),
            processTerm: (term) => term.toLowerCase(),
        },
        searchOptions: {
            fuzzy: 0.2,
            prefix: true,
            boost: {title: 4, text: 2, titles: 1}
        }
    }
}

const footer = {
    message: 'Released under the MIT License.',
    copyright: 'Copyright © 2025 HuaHuaQueen'
}

export default defineConfig({
    title,
    base: '/',
    lastUpdated: true, // 显示页面最后更新时间
    description: "公务员考试资料",
    themeConfig: {
        logo: '/logo.svg', // 左侧导航栏图标
        siteTitle: title, // 左侧导航栏标题
        outline: 'deep', // 在大纲中显示的标题级别
        outlineTitle: '快速导航', // 大纲的标题
        lastUpdated: true,
        nav,
        sidebar,
        socialLinks,
        search,
        footer
    },
    markdown: {
        config: (md) => {
            md.use(mathjax3);
        },
    },
})