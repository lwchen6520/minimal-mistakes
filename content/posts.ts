export type Post = {
  id: string;
  title: { zh: string; en: string };
  category: '節氣筆記' | '呼吸與覺察' | '修行困惑' | '生活整合';
  summary: { zh: string; en: string };
  readTime: string;
  tags: string[];
};

export const posts: Post[] = [
  {
    id: 'spring-light-notes',
    title: { zh: '立春：像種子那樣慢慢醒', en: 'Start of Spring: waking like a seed' },
    category: '節氣筆記',
    summary: {
      zh: '記錄立春的側身呼吸、日光量與心情變化，附上 5 分鐘短版練習卡。',
      en: 'Side-body breath, sunlight dosage, and mood notes for Start of Spring, plus a 5-minute card.',
    },
    readTime: '6 分鐘',
    tags: ['立春', '側身呼吸', '啟動'],
  },
  {
    id: 'thunder-calm',
    title: { zh: '驚蟄：雷聲裡的安定方法', en: 'Awakening of Insects: steady through thunder' },
    category: '節氣筆記',
    summary: {
      zh: '春雷時怎麼拍打胸口、調整呼吸節奏，避免過度亢奮。',
      en: 'How chest tapping and slower breath help during early spring storms.',
    },
    readTime: '5 分鐘',
    tags: ['驚蟄', '胸口開展', '神經調節'],
  },
  {
    id: 'short-breath-lab',
    title: { zh: '3 種 4-4 呼吸變化', en: 'Three ways to soften 4-4 breathing' },
    category: '呼吸與覺察',
    summary: {
      zh: '坐著、站著、走路時的 4-4 呼吸操作細節，以及常見的撐胸錯誤。',
      en: 'How to use 4-4 breathing while sitting, standing, walking—and avoid chest bracing.',
    },
    readTime: '4 分鐘',
    tags: ['呼吸', '安定', '日常練習'],
  },
  {
    id: 'focus-drift',
    title: { zh: '專注不起來？先看神經系統', en: 'When focus slips, check your nervous system first' },
    category: '修行困惑',
    summary: {
      zh: '為何越想集中越做不到？用身體訊號判斷是「過快」還是「過慢」。',
      en: 'Why forcing focus backfires—use body cues to see if you are too fast or too slow.',
    },
    readTime: '7 分鐘',
    tags: ['專注', '身體訊號', '調節'],
  },
  {
    id: 'meta-practice-diary',
    title: { zh: '把練習寫下來：三行日記模板', en: 'Write your practice: a three-line diary' },
    category: '生活整合',
    summary: {
      zh: '用三行紀錄呼吸、身體、心情，避免練習只停在腦袋。',
      en: 'Capture breath, body, and mood in three lines so practice leaves the head.',
    },
    readTime: '3 分鐘',
    tags: ['書寫', '日常', '覺察'],
  },
  {
    id: 'soft-boundaries',
    title: { zh: '界線不是冷漠：慈心的保護層', en: 'Boundaries are warmth with edges' },
    category: '修行困惑',
    summary: {
      zh: '分享慈心練習如何幫助說「不」，並保持對自己的善意。',
      en: 'How loving-kindness practice supports saying no while staying gentle with yourself.',
    },
    readTime: '6 分鐘',
    tags: ['慈心', '界線', '人際'],
  },
  {
    id: 'seasonal-scan',
    title: { zh: '用節氣做身體掃描', en: 'Use solar terms as body scan checkpoints' },
    category: '生活整合',
    summary: {
      zh: '每個節氣挑一個身體部位檢查，建立即時維護清單。',
      en: 'Pick one body area each solar term to inspect and maintain.',
    },
    readTime: '5 分鐘',
    tags: ['節氣', '身體掃描', '自我維護'],
  },
  {
    id: 'sleep-edge',
    title: { zh: '睡前練習：不用完美，也能安靜入睡', en: 'Bedtime practice without perfection' },
    category: '生活整合',
    summary: {
      zh: '介紹 4-7-8 溫柔版與「重腳入睡法」，面對腦袋過載的夜晚。',
      en: 'A gentler 4-7-8 and heavy-leg resting to meet overloaded nights.',
    },
    readTime: '4 分鐘',
    tags: ['睡眠', '安定', '呼吸'],
  },
  {
    id: 'emotion-weather',
    title: { zh: '把情緒當天氣，而不是身分', en: 'Treat emotions like weather, not identity' },
    category: '呼吸與覺察',
    summary: {
      zh: '用呼吸與書寫觀察情緒的停留時間，避免被它定義。',
      en: 'Use breath and brief notes to watch emotions pass without turning into identity.',
    },
    readTime: '5 分鐘',
    tags: ['情緒', '書寫', '觀照'],
  },
  {
    id: 'micro-move-day',
    title: { zh: '一天 6 次微行動，讓練習黏在生活', en: 'Six micro-actions to stitch practice into your day' },
    category: '生活整合',
    summary: {
      zh: '從起床到睡前的六個時間點，各放入 1 分鐘的可操作練習。',
      en: 'Six one-minute practices woven from waking to bedtime.',
    },
    readTime: '4 分鐘',
    tags: ['微練習', '日常', '習慣'],
  },
];
