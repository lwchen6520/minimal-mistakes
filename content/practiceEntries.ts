export type PracticeEntry = {
  id: string;
  season: { zh: string; en: string };
  focus: { zh: string; en: string };
  keywords: string[];
  summary: { zh: string; en: string };
};

export const practiceEntries: PracticeEntry[] = [
  {
    id: 'lichun-breath',
    season: { zh: '立春', en: 'Beginning of Spring' },
    focus: { zh: '肩頸開展 × 清晨呼吸', en: 'Shoulder opening × morning breath' },
    keywords: ['呼吸', '節奏', '覺察'],
    summary: {
      zh: '冬季的僵硬還在，清晨用四拍吸四拍吐，讓肩胛骨慢慢解凍。',
      en: 'Winter stiffness lingers; use 4-count inhale/4-count exhale at dawn to thaw the shoulder blades.',
    },
  },
  {
    id: 'jingzhe-ground',
    season: { zh: '驚蟄', en: 'Awakening of Insects' },
    focus: { zh: '腳底著地 × 醒腦', en: 'Feet grounded × alert mind' },
    keywords: ['穩定', '腳跟', '專注'],
    summary: {
      zh: '雷聲初響，散步時刻意感受腳跟落地，讓意識回到下盤。',
      en: 'As thunder returns, feel each heel strike during walks to bring attention to your base.',
    },
  },
  {
    id: 'qingming-soft',
    season: { zh: '清明', en: 'Clear and Bright' },
    focus: { zh: '柔軟胸口 × 呼吸延展', en: 'Soft chest × extended breath' },
    keywords: ['開展', '胸腔', '慢速'],
    summary: {
      zh: '在公園做貓牛式，配合 6-6 呼吸，胸口打開，眼神清亮。',
      en: 'Cat–cow in the park with 6-6 breathing opens the chest and clears the gaze.',
    },
  },
  {
    id: 'guyu-pause',
    season: { zh: '谷雨', en: 'Grain Rain' },
    focus: { zh: '雨聲中的暫停', en: 'Pause inside rainfall' },
    keywords: ['傾聽', '停頓', '安定'],
    summary: {
      zh: '工作間隙關掉通知，聽雨五分鐘，讓 nervous system 重置。',
      en: 'Mute notifications, listen to rain for five minutes, and let the nervous system reset.',
    },
  },
  {
    id: 'lixia-balance',
    season: { zh: '立夏', en: 'Start of Summer' },
    focus: { zh: '熱度管理 × 水分節奏', en: 'Heat pacing × hydration rhythm' },
    keywords: ['補水', '節奏', '散熱'],
    summary: {
      zh: '午后以薄荷水調節熱度，下午安排一段 10 分鐘的陰瑜珈。',
      en: 'Cool midday with mint water; add a 10-minute yin yoga block in the afternoon.',
    },
  },
  {
    id: 'mangzhong-core',
    season: { zh: '芒種', en: 'Grain in Ear' },
    focus: { zh: '核心穩定 × 敏捷', en: 'Stable core × agility' },
    keywords: ['核心', '敏捷', '呼吸'],
    summary: {
      zh: '以 20 秒平板撐開啟身體，配合鼻吸鼻吐，保持節奏而不爆衝。',
      en: 'Start with a 20-second plank, keeping nasal inhale/exhale steady to avoid overdrive.',
    },
  },
  {
    id: 'xiazhi-calm',
    season: { zh: '夏至', en: 'Summer Solstice' },
    focus: { zh: '晚風行走 × 心率調頻', en: 'Evening walk × heart-rate tuning' },
    keywords: ['步行', '心率', '放鬆'],
    summary: {
      zh: '傍晚步行 20 分鐘，注意步伐與呼吸同頻，心跳落在舒適區。',
      en: 'Walk 20 minutes at dusk, syncing steps and breath to keep heart rate in the comfort zone.',
    },
  },
  {
    id: 'chushu-integration',
    season: { zh: '處暑', en: 'End of Heat' },
    focus: { zh: '收斂散熱 × 肌肉放鬆', en: 'Gather heat × soften muscles' },
    keywords: ['拉伸', '呼吸', '放鬆'],
    summary: {
      zh: '用泡棉滾筒放鬆腿後側，搭配 4-7-8 呼吸，讓熱氣慢慢散去。',
      en: 'Roll hamstrings with a foam roller plus 4-7-8 breathing to release lingering heat.',
    },
  },
  {
    id: 'bailu-scan',
    season: { zh: '白露', en: 'White Dew' },
    focus: { zh: '身體掃描 × 早睡', en: 'Body scan × early sleep' },
    keywords: ['掃描', '睡眠', '節律'],
    summary: {
      zh: '睡前做 5 分鐘身體掃描，觀察緊繃與放鬆，提醒自己早睡。',
      en: 'Do a five-minute body scan before bed, noting tension and ease; cue yourself to sleep early.',
    },
  },
  {
    id: 'shuangjiang-rhythm',
    season: { zh: '霜降', en: 'Frost Descent' },
    focus: { zh: '鼻吸鼻吐 × 保暖', en: 'Nasal breathing × staying warm' },
    keywords: ['保暖', '穩定', '呼吸'],
    summary: {
      zh: '氣溫驟降，維持鼻吸鼻吐，穿著保暖並縮短戶外訓練時間。',
      en: 'As temperature drops, keep nasal breathing, layer up, and shorten outdoor training.',
    },
  },
];
