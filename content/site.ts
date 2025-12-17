export type Language = 'zh' | 'en';

export const taglines = {
  zh: '把修行變成日常，把日常變成修行。',
  en: 'Practice daily. Live gently. Stay grounded.',
};

export const guideIntro = {
  zh: 'Liv Jaijot Kaur（Sonia Chen）陪你把修行放進生活。用可操作的呼吸、節氣感與覺察練習，讓身體與心在可持續的節奏裡醒著，不急、不飄、也不逃避。',
  en: 'Liv Jaijot Kaur (Sonia Chen) invites you to fold practice into daily life. Grounded breathwork, seasonal awareness, and compassionate routines keep the body and heart awake without rushing or drifting.',
};

export const navLinks = [
  { href: '/', key: 'home', zh: '入口', en: 'Home' },
  { href: '/practice', key: 'daily', zh: '每日練習', en: 'Daily Practice' },
  { href: '/solar-terms', key: 'solar', zh: '節氣', en: 'Solar Terms' },
  { href: '/library', key: 'library', zh: '練習庫', en: 'Library' },
  { href: '/writing', key: 'writing', zh: '修行筆記', en: 'Writing' },
  { href: '/about', key: 'about', zh: '關於 Liv', en: 'About' },
  { href: '/contact', key: 'contact', zh: '聯絡', en: 'Contact' },
];

export const methodSteps = [
  {
    key: 'observe',
    zh: { title: 'Observe', description: '先聽見呼吸、姿勢與節氣的訊號，記下它們在身上的位置與溫度。' },
    en: { title: 'Observe', description: 'Notice breath, posture, and seasonal cues; note where they land in the body and how warm they feel.' },
  },
  {
    key: 'regulate',
    zh: { title: 'Regulate', description: '用簡單的調息與伸展微調節奏，讓神經系統有緩衝，而不是逼迫。' },
    en: { title: 'Regulate', description: 'Use simple breath and stretch to tune the cadence, giving the nervous system cushioning instead of pressure.' },
  },
  {
    key: 'integrate',
    zh: { title: 'Integrate', description: '把體感寫下，與生活作息或工作節奏對應，讓練習不離地。' },
    en: { title: 'Integrate', description: 'Write the sensations down and map them to routines or work rhythms so practice stays practical.' },
  },
  {
    key: 'return',
    zh: { title: 'Return', description: '回到呼吸，回到腳底，允許自己在下一個節氣前，用更輕的方式循環。' },
    en: { title: 'Return', description: 'Return to breath, return to your feet, and let yourself cycle softly before the next solar term arrives.' },
  },
];

export const aboutSections = [
  {
    title: '我如何走向修行',
    body:
      '從專案管理與系統設計出發，我習慣把複雜流程拆解成可走的節奏。十年的瑜珈與冥想累積，讓我確定「身體記得一切」，也讓我願意把抽象的修行說清楚。',
  },
  {
    title: '我如何把修行變成日常',
    body:
      '練習必須可操作。每一個呼吸、伸展、觀照提示，都要能嵌進通勤、會議前、睡前的 5–15 分鐘。節氣是時間的錨點，讓我們緩慢而持續地調頻。',
  },
  {
    title: '我如何陪伴初學者',
    body:
      '我提供引導與方法，卻尊重個人節奏：不診斷、不替代醫療與心理治療、不做不必要的情緒挖掘。我守護安全感，讓你在清晰界線內探索。',
  },
];

export const aboutBackground = {
  title: '我的背景',
  body: 'PM ／ 系統 ／ 自動化。熟悉專案節奏、流程拆解與溝通，讓修行的方法論也能被管理與傳遞。',
};
