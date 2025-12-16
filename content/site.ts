export type Language = 'zh' | 'en';

export const taglines = {
  zh: '把複雜系統做得清楚，把內在修行做得日常。',
  en: 'Build clear systems. Practice grounded presence.',
};

export const howIWork = [
  {
    key: 'discover',
    zh: { title: 'Discover', description: '與團隊一起把問題講清楚，釐清現狀、意圖與限制。' },
    en: { title: 'Discover', description: 'Clarify the question with stakeholders and surface constraints early.' },
  },
  {
    key: 'design',
    zh: { title: 'Design', description: '用系統化方法拆解，畫出流程、資料與人的節奏。' },
    en: { title: 'Design', description: 'Structure the flow of process, data, and people with pragmatic blueprints.' },
  },
  {
    key: 'deliver',
    zh: { title: 'Deliver', description: '敏捷迭代，導入自動化與儀表板，讓真實使用者參與。' },
    en: { title: 'Deliver', description: 'Iterate with real users, automate what matters, and keep dashboards honest.' },
  },
  {
    key: 'debrief',
    zh: { title: 'Debrief', description: '收斂學習、複盤決策，讓成果被繼承，也讓節奏可持續。' },
    en: { title: 'Debrief', description: 'Harvest learnings, document choices, and keep the pace sustainable.' },
  },
];

export const aboutSections = {
  zh: [
    {
      title: '我做什麼',
      body:
        '我是一名橋接者，熟悉企業流程優化、系統導入與資料視覺化，也長期練習正念與瑜珈。我擅長把複雜需求翻譯成清晰的路線圖，讓決策者、工程師與一線使用者能夠用同一套語言對話。',
    },
    {
      title: '我相信什麼',
      body:
        '我相信系統與修行都需要可驗證的節奏：每個流程都該能被觀察、每個習慣都該能被實踐。科技工具可以把透明度與公正帶到決策現場，而身心練習讓人在高壓下保持清明與柔軟。',
    },
    {
      title: '我如何學習',
      body:
        '我喜歡把學到的知識拆成模組：流程設計、資料結構、呼吸與專注的肌肉記憶。無論是導入 RPA 還是帶領靜心，我都會先觀察現場，再設計可持續的小步迭代，讓成果能被團隊接手。',
    },
  ],
  en: [
    {
      title: 'What I do',
      body:
        'A bridge between business systems and grounded practice. I translate complex requirements into clear roadmaps so leaders, engineers, and frontlines can align and deliver.',
    },
    {
      title: 'What I believe',
      body:
        'Systems and practice both need observable rhythms. Tools bring transparency to decisions; mindful routines keep us steady under pressure.',
    },
    {
      title: 'How I learn',
      body:
        'I break things into modules: process design, data shape, breath and focus as muscle memory. Every rollout starts with observation, then small iterations the team can inherit.',
    },
  ],
};

export const timeline = [
  {
    year: '2016',
    zh: '在某大型製造業擔任 PM，負責 SAP 模組整合，開始著迷於流程優化。',
    en: 'PM at a major manufacturer, aligning SAP modules and falling in love with process clarity.',
  },
  {
    year: '2019',
    zh: '帶領跨部門導入 RPA 與報表自動化，讓月結時間縮短 30%。',
    en: 'Led RPA and reporting automation, cutting month-end closing by 30%.',
  },
  {
    year: '2021',
    zh: '投入 Power BI 生態系，建立資料治理與自助分析框架。',
    en: 'Built Power BI governance and self-service analytics patterns.',
  },
  {
    year: '2023',
    zh: '研究生成式 AI 在文件與流程的落地，用小型代理協助團隊決策。',
    en: 'Explored generative AI for documents and workflows, prototyping lightweight agents.',
  },
  {
    year: '修行路',
    zh: '十年瑜珈與靜心練習，帶領週末覺察小組，讓節奏回到呼吸與生活。',
    en: 'Ten years of yoga and mindfulness circles, keeping rhythm with breath and daily life.',
  },
];

export const navLinks = [
  { href: '/', key: 'home', zh: '首頁', en: 'Home' },
  { href: '/work', key: 'work', zh: 'Systems', en: 'Systems' },
  { href: '/practice', key: 'practice', zh: 'Practice', en: 'Practice' },
  { href: '/writing', key: 'writing', zh: 'Writing', en: 'Writing' },
  { href: '/about', key: 'about', zh: '關於', en: 'About' },
  { href: '/contact', key: 'contact', zh: '聯絡', en: 'Contact' },
];
