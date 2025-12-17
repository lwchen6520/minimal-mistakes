export type Practice = {
  id: string;
  title: string;
  category: '呼吸' | '身體掃描' | '慈心' | '專注' | '睡前';
  duration: string;
  difficulty: '入門' | '溫和' | '進階';
  context: string;
  cautions: string;
  tags: string[];
};

export const practices: Practice[] = [
  {
    id: 'soft-breath-5',
    title: '四拍平衡呼吸',
    category: '呼吸',
    duration: '5 分鐘',
    difficulty: '入門',
    context: '會議前或通勤時，需要把心率降到舒適區。',
    cautions: '若有鼻塞改用 3-3 節奏，避免憋氣。',
    tags: ['安定', '專注'],
  },
  {
    id: 'box-breath-10',
    title: '方形呼吸觀察',
    category: '呼吸',
    duration: '10 分鐘',
    difficulty: '溫和',
    context: '焦慮升高、思緒混亂時，重新掌握呼吸節奏。',
    cautions: '孕婦或心肺不適者縮短屏息時間。',
    tags: ['調節', '焦慮'],
  },
  {
    id: 'body-scan-short',
    title: '三段式身體掃描',
    category: '身體掃描',
    duration: '8 分鐘',
    difficulty: '入門',
    context: '下班後或睡前，想找到緊繃區域並放鬆。',
    cautions: '若有慢性痛點，以觀察為主不強行放鬆。',
    tags: ['放鬆', '睡前'],
  },
  {
    id: 'body-scan-full',
    title: '頭頂到腳底深度掃描',
    category: '身體掃描',
    duration: '15 分鐘',
    difficulty: '溫和',
    context: '週末早晨或練習日，用較長時間重新連接身體。',
    cautions: '保持環境溫暖，避免掃描時著涼。',
    tags: ['深度', '覺察'],
  },
  {
    id: 'metta-seed',
    title: '慈心種子句',
    category: '慈心',
    duration: '7 分鐘',
    difficulty: '入門',
    context: '與自己和解或情緒起伏時，種下友善的句子。',
    cautions: '若情緒強烈，先做呼吸調節再開始。',
    tags: ['情緒', '溫柔'],
  },
  {
    id: 'metta-circle',
    title: '慈心擴散圈',
    category: '慈心',
    duration: '12 分鐘',
    difficulty: '溫和',
    context: '想擴大對人的包容，或關係緊張後的收尾。',
    cautions: '過程中若出現抗拒，回到呼吸即可。',
    tags: ['連結', '修心'],
  },
  {
    id: 'focus-anchors',
    title: '三個專注錨點',
    category: '專注',
    duration: '6 分鐘',
    difficulty: '入門',
    context: '工作前快速收心，選擇呼吸、聆聽、觸感三個錨點。',
    cautions: '避免在開車或需要全神注意時進行。',
    tags: ['專注', '工作'],
  },
  {
    id: 'focus-gaze',
    title: '柔焦凝視',
    category: '專注',
    duration: '12 分鐘',
    difficulty: '進階',
    context: '長時間螢幕工作後，讓眼睛與心神同時放鬆再聚焦。',
    cautions: '若頭暈，改為閉眼呼吸再張眼。',
    tags: ['視覺', '放鬆'],
  },
  {
    id: 'sleep-landing',
    title: '睡前著陸',
    category: '睡前',
    duration: '10 分鐘',
    difficulty: '入門',
    context: '睡前太興奮或用手機後，讓神經系統降速。',
    cautions: '減少光線與刺激，躺在安全的地方。',
    tags: ['睡眠', '降速'],
  },
  {
    id: 'sleep-restorative',
    title: '溫柔修復序列',
    category: '睡前',
    duration: '15 分鐘',
    difficulty: '溫和',
    context: '連續忙碌數日後，睡前需要較完整的身心收束。',
    cautions: '練習過程保持保暖，如感到頭暈立即停下。',
    tags: ['修復', '深度休息'],
  },
];
