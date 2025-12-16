export type Language = 'zh' | 'en';

export const taglines = {
  zh: '讓理性的系統清楚透明，也讓內在的修行落在日常。',
  en: 'Make systems transparent and keep practice grounded in daily life.',
};

export const howIWork = [
  {
    key: 'discover',
    zh: { title: 'Discover', description: '與決策者、工程師與使用者共筆問題陳述，讓語言先對齊。' },
    en: {
      title: 'Discover',
      description: 'Co-write the problem with leaders, engineers, and users so language is aligned first.',
    },
  },
  {
    key: 'design',
    zh: { title: 'Design', description: '畫出流程、資料與權限的節奏，也標注專注與覺察需要被維護的點。' },
    en: {
      title: 'Design',
      description: 'Map process, data, and permissions, noting where focus and awareness must be protected.',
    },
  },
  {
    key: 'deliver',
    zh: {
      title: 'Deliver',
      description: '敏捷迭代導入自動化與儀表板，同步安排團隊節奏與覺察練習。',
    },
    en: {
      title: 'Deliver',
      description: 'Ship automation and dashboards in agile loops while setting team rituals for awareness.',
    },
  },
  {
    key: 'debrief',
    zh: {
      title: 'Debrief',
      description: '複盤決策、記錄例外與感受，讓系統與人都能在可持續的節奏中呼吸。',
    },
    en: {
      title: 'Debrief',
      description: 'Review decisions, document exceptions and sensations, so systems and people breathe sustainably.',
    },
  },
];

export const aboutSections = {
  zh: [
    {
      title: '橋接理性與修行',
      body:
        '我是一位橫跨理性系統與內在修行的橋接者。科技不只是工具，靈性也不是逃避；兩邊都需要耐心與紀律，才能被整合進日常工作與生活。',
    },
    {
      title: '專業與方法',
      body:
        '關心 SAP、RPA、Power BI、AI 認證與系統導入，問的總是「為什麼這樣設計」「可否擴充」「管理層如何理解」。重視可交付物、節奏與里程碑，也重視語言是否讓不同角色真正聽懂。',
    },
    {
      title: '節氣與覺知',
      body:
        '對時間、節氣、身體與意識敏銳，關注 24 節氣、臟腑、呼吸、瑜珈與藏傳佛教次第。不是浪漫式收集，而是要求結構化、可實修、可落地，讓練習能被日常承載。',
    },
  ],
  en: [
    {
      title: 'Bridge systems and practice',
      body:
        'A bridge between rational systems and inner work. Technology is more than tools and spirituality is not an escape—both need patience and discipline to live in daily work.',
    },
    {
      title: 'Methods and delivery',
      body:
        'Focused on SAP, RPA, Power BI, and AI rollouts, always asking “why this design,” “can it scale,” and “will leadership understand.” I care about deliverables, cadence, and milestones—and making sure every role truly hears each other.',
    },
    {
      title: 'Seasonal awareness',
      body:
        'Sensitive to time, solar terms, body, and awareness. I study the 24 solar terms, organs, breathwork, yoga, and Tibetan Buddhist progressions—not as romantic collecting but as structured, practicable routines that daily life can hold.',
    },
  ],
};

export const timeline = [
  {
    year: '2016',
    zh: '在大型製造業擔任 PM，負責 SAP 模組整合，體會到流程與語言一致的重要性。',
    en: 'PM at a major manufacturer, aligning SAP modules and seeing how process clarity relies on shared language.',
  },
  {
    year: '2019',
    zh: '帶領跨部門導入 RPA 與報表自動化，設計例外與權限治理，讓月結時間縮短 30%。',
    en: 'Led cross-functional RPA and reporting automation with exception and permission design, cutting month-end by 30%.',
  },
  {
    year: '2021',
    zh: '建立 Power BI 語意層與資料治理框架，協助管理層理解指標的血緣與可信度。',
    en: 'Built Power BI semantic layers and governance, helping leadership trust metric lineage and credibility.',
  },
  {
    year: '2023',
    zh: '研究生成式 AI 在文件與流程的落地，設計小型代理與回饋 loop，讓協作有責任界線。',
    en: 'Explored generative AI for documents and workflows, designing lightweight agents and feedback loops with clear accountability.',
  },
  {
    year: '修行路',
    zh: '十年瑜珈與靜心練習，研究藏傳佛教次第，也帶領週末覺察小組，讓節奏回到呼吸與生活。',
    en: 'Ten years of yoga and mindfulness, studying Tibetan Buddhist progressions and leading awareness circles so rhythm returns to breath and daily life.',
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
