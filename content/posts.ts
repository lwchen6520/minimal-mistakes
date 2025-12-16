export type Post = {
  id: string;
  title: { zh: string; en: string };
  category: 'Product' | 'Automation' | 'Data' | 'Mindfulness';
  summary: { zh: string; en: string };
};

export const posts: Post[] = [
  {
    id: 'product-bridges',
    title: { zh: '產品決策的「橋接」練習', en: 'Bridgework in product decisions' },
    category: 'Product',
    summary: {
      zh: '如何在高層願景與現場現實之間搭橋，寫出被理解的 PRD。',
      en: 'How to bridge vision and reality so PRDs land with every stakeholder.',
    },
  },
  {
    id: 'automation-guardrails',
    title: { zh: 'RPA 導入的護欄設計', en: 'Designing guardrails for RPA' },
    category: 'Automation',
    summary: {
      zh: '在例外處理與權限治理上先下功夫，讓自動化活得久。',
      en: 'Invest first in exceptions and permissions so bots stay healthy.',
    },
  },
  {
    id: 'data-semantics',
    title: { zh: '語意層：比工具更難也更值得', en: 'Semantic layers are hard and worth it' },
    category: 'Data',
    summary: {
      zh: '如何讓不同部門共享指標定義，避免「數字戰爭」。',
      en: 'Sharing metric definitions across teams to avoid number wars.',
    },
  },
  {
    id: 'mindfulness-breath',
    title: { zh: '呼吸是最小可行的專注肌肉', en: 'Breath as the smallest focus muscle' },
    category: 'Mindfulness',
    summary: {
      zh: '用四拍呼吸作為日常開機，讓思緒回到身體。',
      en: 'Use four-count breathing as a daily boot sequence to return to the body.',
    },
  },
  {
    id: 'product-story',
    title: { zh: '故事結構化：從用戶旅程到決策切面', en: 'Structured stories from journey to decision' },
    category: 'Product',
    summary: {
      zh: '用旅程拆解需求，再用決策表處理複雜度。',
      en: 'Break down needs with journeys, then manage complexity with decision tables.',
    },
  },
  {
    id: 'automation-measure',
    title: { zh: '衡量自動化：不只看節省人力', en: 'Measuring automation beyond headcount' },
    category: 'Automation',
    summary: {
      zh: '回顧錯誤率、例外處理時間與團隊情緒，才是真的 ROI。',
      en: 'Track error rate, exception time, and team morale to see true ROI.',
    },
  },
  {
    id: 'data-visual',
    title: { zh: '儀表板的閱讀體驗設計', en: 'Reading experience for dashboards' },
    category: 'Data',
    summary: {
      zh: '用顏色與留白引導注意力，讓決策節奏更穩。',
      en: 'Use color and whitespace to guide attention and steady decision rhythm.',
    },
  },
  {
    id: 'mindfulness-integration',
    title: { zh: '把練習放進行程表，而非待辦清單', en: 'Schedule practice, not just list it' },
    category: 'Mindfulness',
    summary: {
      zh: '在日程中預留空檔，呼吸、伸展、寫下觀察。',
      en: 'Reserve calendar pockets for breath, stretch, and notes—beyond a to-do list.',
    },
  },
];
