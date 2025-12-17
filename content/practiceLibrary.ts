export type PracticeItem = {
  id: string;
  title: string;
  category: '呼吸' | '身體掃描' | '慈心' | '專注' | '睡前';
  duration: string;
  difficulty: '入門' | '溫和' | '進階';
  context: string;
  caution: string;
  tags: string[];
};

export const practiceLibrary: PracticeItem[] = [
  {
    id: 'soft-44-breath',
    title: '4-4 平穩呼吸',
    category: '呼吸',
    duration: '5 分鐘',
    difficulty: '入門',
    context: '開會前、通勤中、需要讓心跳放慢時',
    caution: '鼻吸鼻吐，若頭暈改回自然呼吸',
    tags: ['安定', '日常', '短練習'],
  },
  {
    id: 'box-breath-focus',
    title: '方形呼吸清晰腦袋',
    category: '呼吸',
    duration: '8 分鐘',
    difficulty: '溫和',
    context: '專案整理、寫作前，想讓注意力收回',
    caution: '若有血壓問題，保留更短的閉氣時間',
    tags: ['專注', '神經調節'],
  },
  {
    id: 'micro-body-scan',
    title: '微身體掃描',
    category: '身體掃描',
    duration: '6 分鐘',
    difficulty: '入門',
    context: '長時間久坐後、睡前，快速檢查身體訊號',
    caution: '頸部不適者，視情況縮短仰臥時間',
    tags: ['放鬆', '睡前', '覺察'],
  },
  {
    id: 'shoulder-release-flow',
    title: '肩頸鬆動三步',
    category: '身體掃描',
    duration: '10 分鐘',
    difficulty: '溫和',
    context: '電腦視訊後，想把肩頸重量放下',
    caution: '維持 70% 力道，避免強硬壓迫',
    tags: ['釋放緊繃', '辦公室'],
  },
  {
    id: 'metta-short',
    title: '三句慈心祝福',
    category: '慈心',
    duration: '7 分鐘',
    difficulty: '入門',
    context: '情緒糾結或與人起衝突後，想回到善意',
    caution: '不必強求情緒轉變，先把聲音放柔',
    tags: ['情緒調節', '心的練習'],
  },
  {
    id: 'metta-boundaries',
    title: '慈心與界線',
    category: '慈心',
    duration: '12 分鐘',
    difficulty: '進階',
    context: '與家人或團隊有界線議題時，先讓心穩定再溝通',
    caution: '若情緒過強，改做短版並搭配書寫',
    tags: ['界線', '溝通', '安定'],
  },
  {
    id: 'laser-focus',
    title: '光點專注',
    category: '專注',
    duration: '9 分鐘',
    difficulty: '溫和',
    context: '需要進入深度工作前，收斂感官訊號',
    caution: '眼睛乾者可閉眼，改以鼻尖或呼吸聲作為光點',
    tags: ['專注', '工作前'],
  },
  {
    id: 'task-landing',
    title: '任務落地清單呼吸',
    category: '專注',
    duration: '6 分鐘',
    difficulty: '入門',
    context: '切換任務時，用呼吸與書寫落地，避免心浮',
    caution: '避免在強烈飢餓或過飽時進行',
    tags: ['轉換', '日常'],
  },
  {
    id: 'soft-sleep',
    title: '睡前 4-7-8 溫柔版',
    category: '睡前',
    duration: '10 分鐘',
    difficulty: '入門',
    context: '想放鬆入睡或半夜醒來重新安定',
    caution: '若有呼吸道不適，縮短閉氣時間或改自然呼吸',
    tags: ['睡眠', '放鬆'],
  },
  {
    id: 'heavy-legs-rest',
    title: '重腳入睡法',
    category: '睡前',
    duration: '12 分鐘',
    difficulty: '溫和',
    context: '腦袋過載時，讓重心回到腿與腳，安定神經系統',
    caution: '孕期後期請減少仰臥時間，可改側躺',
    tags: ['頭腦過載', '睡前', '安定'],
  },
];
