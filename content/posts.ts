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
  {
    id: 'sap-rpa-bridge',
    title: { zh: 'SAP × RPA：橋接舊系統與新節奏', en: 'SAP × RPA: Bridging legacy and new cadence' },
    category: 'Automation',
    summary: {
      zh: '在既有權限與例外規則中設計機器人，避免自動化變成另一種技術債。',
      en: 'Design bots inside existing permissions and exceptions so automation avoids becoming new tech debt.',
    },
  },
  {
    id: 'powerbi-lineage',
    title: { zh: 'Power BI 血緣設計：讓語意層站得住', en: 'Power BI lineage that keeps the semantic layer honest' },
    category: 'Data',
    summary: {
      zh: '從資料來源到度量指標畫出血緣，讓管理層理解「這個數字為何可信」。',
      en: 'Trace lineage from sources to measures so leaders know why a number can be trusted.',
    },
  },
  {
    id: 'ai-governance-rules',
    title: { zh: '生成式 AI 的工作規則', en: 'Working rules for generative AI' },
    category: 'Product',
    summary: {
      zh: '定義輸入輸出範圍、回饋 loop 與審核責任，讓 AI 協作有章可循。',
      en: 'Define input/output bounds, feedback loops, and review accountability so AI collaboration is governed.',
    },
  },
  {
    id: 'breath-during-reviews',
    title: { zh: '評審會議裡的呼吸節奏', en: 'Breath patterns inside review meetings' },
    category: 'Mindfulness',
    summary: {
      zh: '用 4-6-8 呼吸在會前穩定神經系統，讓理性討論不被情緒帶走。',
      en: 'Use 4-6-8 breathing before reviews to steady the nervous system so rational debates stay calm.',
    },
  },
  {
    id: 'delivery-rituals',
    title: { zh: '交付儀式：節奏讓透明度成習慣', en: 'Delivery rituals turn transparency into habit' },
    category: 'Product',
    summary: {
      zh: '以週會節奏、決策記錄與可視化看板，避免專案只剩催進度。',
      en: 'Weekly cadences, decision logs, and visual boards keep projects from devolving into pure chasing.',
    },
  },
  {
    id: 'automation-handover',
    title: { zh: '自動化的交接腳本', en: 'Handover scripts for automation' },
    category: 'Automation',
    summary: {
      zh: '寫下故障排除清單與權限矩陣，讓團隊能在無顧問時也能維運。',
      en: 'Document runbooks and permission matrices so teams can operate without consultants on call.',
    },
  },
  {
    id: 'mindful-observability',
    title: { zh: '把可觀測性用在人與系統', en: 'Observability for both systems and people' },
    category: 'Data',
    summary: {
      zh: '建立 log、metrics 與儀表板，同時也留意團隊的專注與疲勞信號。',
      en: 'Build logs, metrics, and dashboards while watching team focus and fatigue signals.',
    },
  },
  {
    id: 'seasonal-planning',
    title: { zh: '以節氣規劃專案節奏', en: 'Plan projects by the seasonal cadence' },
    category: 'Mindfulness',
    summary: {
      zh: '以節氣提醒自己調整衝刺與收斂，避免長期燃燒。',
      en: 'Use solar terms to alternate between sprint and consolidation to avoid long-term burnout.',
    },
  },
  {
    id: 'leadership-language',
    title: { zh: '讓領導聽懂技術，讓工程師聽懂策略', en: 'Translate strategy for engineers and tech for leaders' },
    category: 'Product',
    summary: {
      zh: '用決策表與路線圖翻譯各方語言，減少誤會與反覆返工。',
      en: 'Decision tables and roadmaps translate across roles, cutting misalignment and rework.',
    },
  },
  {
    id: 'resonant-data-stories',
    title: { zh: '會說話的儀表板', en: 'Dashboards that speak in stories' },
    category: 'Data',
    summary: {
      zh: '把指標與實際現場的故事連結，讓數據不只是圖表而是行動指引。',
      en: 'Tie metrics to frontline stories so charts turn into guidance, not decoration.',
    },
  },
];
