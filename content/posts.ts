export type Post = {
  id: string;
  title: string;
  category: 'Product' | 'Automation' | 'Data' | 'Mindfulness';
  summary: string;
};

export const posts: Post[] = [
  {
    id: 'product-bridges',
    title: '產品決策的「橋接」練習',
    category: 'Product',
    summary: '如何在高層願景與現場現實之間搭橋，寫出被理解的 PRD。',
  },
  {
    id: 'automation-guardrails',
    title: 'RPA 導入的護欄設計',
    category: 'Automation',
    summary: '在例外處理與權限治理上先下功夫，讓自動化活得久。',
  },
  {
    id: 'data-semantics',
    title: '語意層：比工具更難也更值得',
    category: 'Data',
    summary: '如何讓不同部門共享指標定義，避免「數字戰爭」。',
  },
  {
    id: 'mindfulness-breath',
    title: '呼吸是最小可行的專注肌肉',
    category: 'Mindfulness',
    summary: '用四拍呼吸作為日常開機，讓思緒回到身體。',
  },
  {
    id: 'product-story',
    title: '故事結構化：從用戶旅程到決策切面',
    category: 'Product',
    summary: '用旅程拆解需求，再用決策表處理複雜度。',
  },
  {
    id: 'automation-measure',
    title: '衡量自動化：不只看節省人力',
    category: 'Automation',
    summary: '回顧錯誤率、例外處理時間與團隊情緒，才是真的 ROI。',
  },
  {
    id: 'data-visual',
    title: '儀表板的閱讀體驗設計',
    category: 'Data',
    summary: '用顏色與留白引導注意力，讓決策節奏更穩。',
  },
  {
    id: 'mindfulness-integration',
    title: '把練習放進行程表，而非待辦清單',
    category: 'Mindfulness',
    summary: '在日程中預留空檔，呼吸、伸展、寫下觀察。',
  },
];
