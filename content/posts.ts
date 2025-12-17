import type { Language } from './site';

type Category = '節氣筆記' | '呼吸與覺察' | '修行困惑' | '生活整合';

export interface Post {
  id: string;
  category: Category;
  title: Record<Language, string>;
  summary: Record<Language, string>;
  tags: string[];
  readTime: string;
}

export const posts: Post[] = [
  {
    id: 'spring-breath',
    category: '節氣筆記',
    title: { zh: '立春：把怒氣變行動的 3 步', en: 'Beginning of Spring: three steps to turn frustration into action' },
    summary: {
      zh: '從肩帶鬆開、膽經拍打到短筆記，記錄我如何在立春安頓暴衝感。',
      en: 'Softening shoulders, tapping the gallbladder meridian, and quick journaling to steady the rush of Spring.',
    },
    tags: ['立春', '肝', '轉換'],
    readTime: '6 分鐘',
  },
  {
    id: 'rainy-focus',
    category: '呼吸與覺察',
    title: { zh: '雨水：濕氣重的日子，呼吸要慢', en: 'Rain Water: slower breath on damp days' },
    summary: {
      zh: '分享 10 分鐘暖胃調息的節奏，並附上濕冷時容易忽略的注意事項。',
      en: 'A 10-minute warm-belly breath rhythm with reminders for damp, cold mornings.',
    },
    tags: ['雨水', '脾胃', '調息'],
    readTime: '5 分鐘',
  },
  {
    id: 'doubt-path',
    category: '修行困惑',
    title: { zh: '當覺察變得很用力時，我怎麼停下來', en: 'When awareness feels forceful, how I pause' },
    summary: {
      zh: '記錄一次練習過度用力的經驗，以及我如何回到「Observe → Regulate → Integrate → Return」。',
      en: 'A story of over-efforting in practice and returning to Observe → Regulate → Integrate → Return.',
    },
    tags: ['調節', '溫柔提醒'],
    readTime: '7 分鐘',
  },
  {
    id: 'desk-integration',
    category: '生活整合',
    title: { zh: '辦公桌旁的 5 分鐘修行角落', en: 'A 5-minute practice corner by the desk' },
    summary: {
      zh: '用一張椅子、一杯溫水與一支筆，串起日常可重複的修行節奏。',
      en: 'Chair, warm water, and a pen—building a repeatable practice rhythm next to the laptop.',
    },
    tags: ['日常', '儀式感'],
    readTime: '4 分鐘',
  },
  {
    id: 'sleep-gentle',
    category: '呼吸與覺察',
    title: { zh: '睡前心浮的夜晚，如何落地', en: 'Grounding floaty nights before sleep' },
    summary: {
      zh: '分享「落地睡前儀式」的 10 分鐘腳本，包含呼吸、身體掃描與結束語。',
      en: 'The 10-minute bedtime ritual script with breath, body scan, and gentle closing words.',
    },
    tags: ['睡前', '落地', '心浮'],
    readTime: '5 分鐘',
  },
];

export const categories: Category[] = ['節氣筆記', '呼吸與覺察', '修行困惑', '生活整合'];
