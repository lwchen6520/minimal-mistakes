export type Language = 'zh' | 'en';

export const taglines = {
  zh: '把修行變成日常，把日常變成修行。',
  en: 'Practice daily. Live gently. Stay grounded.',
};

export const dailyReminder = {
  zh: '把手機放遠一點，先觀察一口自然的呼吸；肩頸放鬆，讓覺察從鼻尖走到腳底，再緩緩回來。你不需要完美，只需要在每一個平凡的片刻，把身體放進當下。',
  en: 'Place your phone farther away and notice one unforced breath. Soften the shoulders, let awareness travel from nose to soles, and return. You do not need to be perfect—only willing to let the body arrive in ordinary moments.',
};

export const methodSteps = [
  {
    key: 'observe',
    zh: { title: 'Observe', description: '先看見：呼吸的節奏、肌肉的緊與鬆、心念的起伏。' },
    en: { title: 'Observe', description: 'Notice breath rhythm, muscular tension, and the small rise and fall of thoughts.' },
  },
  {
    key: 'regulate',
    zh: { title: 'Regulate', description: '用簡單可重複的拍點與伸展，讓神經系統找到安全感。' },
    en: { title: 'Regulate', description: 'Use repeatable counts and gentle stretches so the nervous system finds safety.' },
  },
  {
    key: 'integrate',
    zh: { title: 'Integrate', description: '把覺察帶回日常任務：走路、回信、會議都能練習。' },
    en: { title: 'Integrate', description: 'Carry awareness into ordinary tasks—walking, replying, meeting.' },
  },
  {
    key: 'return',
    zh: { title: 'Return', description: '頻繁回來：三口呼吸、一杯水、睡前寫下今日的身心訊號。' },
    en: { title: 'Return', description: 'Return often: three breaths, a cup of water, and writing today’s signals before bed.' },
  },
];

export const navLinks = [
  { href: '/', key: 'home', zh: '首頁', en: 'Home' },
  { href: '/daily-practice', key: 'daily', zh: '今日練習', en: 'Daily Practice' },
  { href: '/solar-terms', key: 'solar', zh: '節氣修行', en: 'Solar Terms' },
  { href: '/practice-library', key: 'library', zh: '練習庫', en: 'Practice Library' },
  { href: '/writing', key: 'writing', zh: '修行筆記', en: 'Writing' },
  { href: '/about', key: 'about', zh: '關於', en: 'About' },
  { href: '/contact', key: 'contact', zh: '聯絡', en: 'Contact' },
];
