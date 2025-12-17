export type Language = 'zh' | 'en';

export const taglines = {
  zh: '把修行變成日常，把日常變成修行。',
  en: 'Practice daily. Live gently. Stay grounded.',
};

export const howIWork = [
  {
    key: 'observe',
    zh: { title: 'Observe', description: '先陪你看見呼吸、姿勢、節氣帶來的訊號，記錄現況而不批判。' },
    en: {
      title: 'Observe',
      description: 'Notice breath, posture, and seasonal cues without judgment; hold a clear snapshot of now.',
    },
  },
  {
    key: 'regulate',
    zh: { title: 'Regulate', description: '用短呼吸與身體微動作穩住系統，讓神經可以回到可回應的狀態。' },
    en: {
      title: 'Regulate',
      description: 'Stabilize with short breaths and gentle movements so the nervous system can respond, not react.',
    },
  },
  {
    key: 'integrate',
    zh: {
      title: 'Integrate',
      description: '把練習放進日常節奏：會議前 3 分鐘、節氣轉換的一週，累積可重複的儀式。',
    },
    en: {
      title: 'Integrate',
      description: 'Place practice into routine: three minutes before meetings, a week around each solar term, repeatable rituals.',
    },
  },
  {
    key: 'return',
    zh: {
      title: 'Return',
      description: '回到身體的可信度：以筆記與反思複盤，確認節奏可持續，而不是一次性的激情。',
    },
    en: {
      title: 'Return',
      description: 'Return to bodily trust: debrief with notes so rhythm stays sustainable instead of one-off intensity.',
    },
  },
];

export const aboutSections = {
  zh: [
    {
      title: '我如何走向修行',
      body:
        '在專案管理的強度中，身體曾經緊到睡不著。瑜珈與冥想讓我看見：調息與覺察是一條回家的路。從此，我不再把修行當成逃避，而是與生活並行。',
    },
    {
      title: '我如何把修行變成日常',
      body:
        '以節氣為節拍、呼吸為尺標，設計 3–15 分鐘可實做的步驟：呼吸、觀照、筆記。就像管理專案一樣，設定可追蹤的 ritural 與復盤，讓練習可持續。',
    },
    {
      title: '我如何陪伴初學者',
      body:
        '我陪你建立自己的步驟，重點是「可被身體接受」。不診斷、不替代醫療，只提供可操作的呼吸與觀照提示，並尊重你的界線與步調。',
    },
  ],
  en: [
    {
      title: 'How I walked into practice',
      body:
        'Project pressure once tightened my body so much that sleep was scarce. Breathwork and meditation showed me a way home. Practice became a parallel track to life, not an escape.',
    },
    {
      title: 'How I turn practice into daily life',
      body:
        'Using solar terms as cadence and breath as a ruler, I design 3–15 minute steps: breathe, notice, jot. Like project management, I set traceable rituals and retros so practice is sustainable.',
    },
    {
      title: 'How I hold beginners',
      body:
        'I co-design steps your body can accept. No diagnoses, no replacing medical care—just actionable breath and awareness cues that respect your pace and boundaries.',
    },
  ],
};

export const timeline = [
  {
    year: '2014',
    zh: '開始接觸瑜珈與正念，發現呼吸是讓身體開口的語言。',
    en: 'Discovered yoga and mindfulness; breath became the language my body trusted.',
  },
  {
    year: '2017',
    zh: '進修節氣與臟腑學，開始以季節記錄身心變化，練習以日記復盤。',
    en: 'Studied solar terms and organ patterns; began logging seasonal body shifts and nightly reflections.',
  },
  {
    year: '2019',
    zh: '受訓成為正念呼吸與初階冥想帶領者，開始帶小型社群練習。',
    en: 'Trained to guide mindful breathing and intro meditation, leading small community circles.',
  },
  {
    year: '2022',
    zh: '將節氣練習與專案節奏結合，設計「今日練習卡」模板，讓同事能自己選擇節奏。',
    en: 'Merged solar-term practice with project cadences, designing “daily practice cards” teammates could self-select.',
  },
  {
    year: 'Now',
    zh: '以 Liv Jaijot Kaur (Sonia Chen) 的身份陪伴初學者，讓修行與日常互相滋養。',
    en: 'Now accompanying beginners as Liv Jaijot Kaur (Sonia Chen), letting practice and daily life nourish each other.',
  },
];

export const navLinks = [
  { href: '/', key: 'home', zh: '首頁', en: 'Home' },
  { href: '/daily-practice', key: 'daily-practice', zh: '每日練習', en: 'Daily Practice' },
  { href: '/solar-terms', key: 'solar-terms', zh: '節氣', en: 'Solar Terms' },
  { href: '/practice-library', key: 'practice-library', zh: '練習庫', en: 'Practice Library' },
  { href: '/writing', key: 'writing', zh: '修行筆記', en: 'Writing' },
  { href: '/about', key: 'about', zh: '關於', en: 'About' },
  { href: '/contact', key: 'contact', zh: '聯絡', en: 'Contact' },
];
