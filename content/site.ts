export type Language = 'zh' | 'en';

export const taglines = {
  zh: '把修行變成日常，把日常變成修行。',
  en: 'Practice daily. Live gently. Stay grounded.',
};

export const navLinks = [
  { href: '/', key: 'home', zh: '首頁', en: 'Home' },
  { href: '/daily-practice', key: 'daily', zh: '每日練習', en: 'Daily practice' },
  { href: '/solar-terms', key: 'solar', zh: '節氣', en: 'Solar terms' },
  { href: '/practice-library', key: 'library', zh: '練習庫', en: 'Library' },
  { href: '/writing', key: 'writing', zh: '修行筆記', en: 'Writing' },
  { href: '/about', key: 'about', zh: '關於', en: 'About' },
  { href: '/contact', key: 'contact', zh: '聯絡', en: 'Contact' },
];

export const methodFlow = [
  {
    key: 'observe',
    zh: { title: 'Observe 觀', description: '先停一停，感受呼吸、體表溫度、節氣的細微變化，讓訊號浮出來。' },
    en: { title: 'Observe', description: 'Pause for breath, surface sensations, and seasonal shifts so signals appear.' },
  },
  {
    key: 'regulate',
    zh: { title: 'Regulate 調', description: '用最小可行的呼吸與伸展，讓神經系統回到舒適區，再決定下一步。' },
    en: { title: 'Regulate', description: 'Use minimal breath and stretch to bring the nervous system home before acting.' },
  },
  {
    key: 'integrate',
    zh: { title: 'Integrate 融', description: '把練習放進行程與習慣堆疊，讓覺察與工作、家務、社交並行。' },
    en: { title: 'Integrate', description: 'Stack practice onto routines so awareness travels with work, chores, and community.' },
  },
  {
    key: 'return',
    zh: { title: 'Return 回', description: '以溫柔的檢視收尾，允許遺漏，記下訊號，明天再回來。' },
    en: { title: 'Return', description: 'Close gently, allow misses, log signals, and return tomorrow.' },
  },
];

export const aboutStory = {
  zh: [
    {
      title: '我如何走向修行',
      body:
        '從企業系統與專案管理走進瑜珈、冥想與節氣觀修，我學會把龐雜的方法拆成可被日常承載的小步。沒有華麗的轉折，只有一次次回到呼吸、回到身體。',
    },
    {
      title: '我如何把修行變成日常',
      body:
        '用議程、提醒與節奏設計，讓練習變成 5–15 分鐘的可執行模組。觀察－調節－整合－回顧，就像專案節點，也像日常的呼吸流。',
    },
    {
      title: '我如何陪伴初學者',
      body:
        '不診斷、不替代醫療；我提供溫柔且清晰的指引，協助你找到身體與情緒的可操作線索，並設計練習邊界，避免過度努力或自責。',
    },
  ],
  en: [
    {
      title: 'How I arrived',
      body:
        'From enterprise systems into yoga, meditation, and seasonal study, I learned to slice huge methods into daily steps—always returning to breath and body.',
    },
    {
      title: 'How I keep it daily',
      body:
        'Agendas, reminders, and cadence design turn practice into 5–15 minute modules. Observe–Regulate–Integrate–Return becomes both project rhythm and breathwork.',
    },
    {
      title: 'How I accompany beginners',
      body:
        'No diagnosis, no replacing medical care. I offer gentle, precise cues so you can act on body and emotion signals, with boundaries that prevent over-effort or blame.',
    },
  ],
};

export const backgroundNote = {
  zh: '背景：PM / 系統 / 自動化。善於把複雜流程拆解成可復用的節奏，也在禪修與瑜珈中累積十年以上，重視可觀察與可持續。',
  en: 'PM / systems / automation background—skilled at modularizing complex flows, with 10+ years in meditation and yoga focused on observability and sustainability.',
};
