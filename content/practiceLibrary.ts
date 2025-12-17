export type PracticeCategory = '呼吸' | '身體掃描' | '慈心' | '專注' | '睡前';

export interface LibraryPractice {
  id: string;
  title: string;
  category: PracticeCategory;
  duration: string;
  difficulty: '入門' | '穩定' | '深化';
  scene: string;
  cautions: string;
  tags: string[];
}

export const practiceLibrary: LibraryPractice[] = [
  {
    id: 'breath-soften',
    title: '4-6 溫柔呼吸',
    category: '呼吸',
    duration: '5 分鐘',
    difficulty: '入門',
    scene: '工作轉場、情緒緊繃時',
    cautions: '鼻塞時改為自然呼吸，不要強迫屏息。',
    tags: ['安定', '平衡自律神經'],
  },
  {
    id: 'breath-box',
    title: '方形呼吸配筆記',
    category: '專注',
    duration: '8 分鐘',
    difficulty: '穩定',
    scene: '專注前、會議前 reset',
    cautions: '屏息時間因人而異，若頭暈立即縮短。',
    tags: ['專注', '腦袋清理'],
  },
  {
    id: 'scan-micro',
    title: '微感身體掃描',
    category: '身體掃描',
    duration: '10 分鐘',
    difficulty: '入門',
    scene: '睡前、午休',
    cautions: '腰痠者可改為側躺；過程若冒出情緒，回到呼吸。',
    tags: ['放鬆', '睡前'],
  },
  {
    id: 'scan-warm',
    title: '暖腰背掃描',
    category: '身體掃描',
    duration: '12 分鐘',
    difficulty: '穩定',
    scene: '長時間久坐後',
    cautions: '若腰椎不適，枕頭墊高膝蓋，避免過度拉扯。',
    tags: ['腰背', '開展'],
  },
  {
    id: 'metta-mini',
    title: '3 句慈心',
    category: '慈心',
    duration: '7 分鐘',
    difficulty: '入門',
    scene: '情緒起伏、社交前',
    cautions: '若句子引起抗拒，可改成「願我保持穩定」的語句。',
    tags: ['情緒多', '柔軟'],
  },
  {
    id: 'metta-extended',
    title: '四向慈心',
    category: '慈心',
    duration: '15 分鐘',
    difficulty: '深化',
    scene: '需要和解或放下時',
    cautions: '過程中情緒波動大可暫停喝水，之後再回來。',
    tags: ['釋放', '邊界'],
  },
  {
    id: 'focus-candle',
    title: '燭光凝視',
    category: '專注',
    duration: '6 分鐘',
    difficulty: '入門',
    scene: '心浮氣躁、需要收心',
    cautions: '眼睛乾澀時閉眼休息，避免硬撐。',
    tags: ['專注', '安定'],
  },
  {
    id: 'sleep-landing',
    title: '落地睡前儀式',
    category: '睡前',
    duration: '10 分鐘',
    difficulty: '入門',
    scene: '睡前心思多、身體緊',
    cautions: '避免在吃飽後立即躺下，若胃脹改為坐姿練習。',
    tags: ['睡前', '放鬆'],
  },
];
