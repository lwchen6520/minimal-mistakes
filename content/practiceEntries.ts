export type PracticeEntry = {
  id: string;
  season: string;
  focus: string;
  keywords: string[];
  summary: string;
};

export const practiceEntries: PracticeEntry[] = [
  {
    id: 'lichun-breath',
    season: '立春',
    focus: '肩頸開展 × 清晨呼吸',
    keywords: ['呼吸', '節奏', '覺察'],
    summary: '冬季的僵硬還在，清晨用四拍吸四拍吐，讓肩胛骨慢慢解凍。',
  },
  {
    id: 'jingzhe-ground',
    season: '驚蟄',
    focus: '腳底著地 × 醒腦',
    keywords: ['穩定', '腳跟', '專注'],
    summary: '雷聲初響，散步時刻意感受腳跟落地，讓意識回到下盤。',
  },
  {
    id: 'qingming-soft',
    season: '清明',
    focus: '柔軟胸口 × 呼吸延展',
    keywords: ['開展', '胸腔', '慢速'],
    summary: '在公園做貓牛式，配合 6-6 呼吸，胸口打開，眼神清亮。',
  },
  {
    id: 'guyu-pause',
    season: '谷雨',
    focus: '雨聲中的暫停',
    keywords: ['傾聽', '停頓', '安定'],
    summary: '工作間隙關掉通知，聽雨五分鐘，讓 nervous system 重置。',
  },
  {
    id: 'lixia-balance',
    season: '立夏',
    focus: '熱度管理 × 水分節奏',
    keywords: ['補水', '節奏', '散熱'],
    summary: '午后以薄荷水調節熱度，下午安排一段 10 分鐘的陰瑜珈。',
  },
  {
    id: 'mangzhong-core',
    season: '芒種',
    focus: '核心穩定 × 敏捷',
    keywords: ['核心', '敏捷', '呼吸'],
    summary: '以 20 秒平板撐開啟身體，配合鼻吸鼻吐，保持節奏而不爆衝。',
  },
  {
    id: 'xiazhi-calm',
    season: '夏至',
    focus: '晚風行走 × 心率調頻',
    keywords: ['步行', '心率', '放鬆'],
    summary: '傍晚步行 20 分鐘，注意步伐與呼吸同頻，心跳落在舒適區。',
  },
  {
    id: 'chushu-integration',
    season: '處暑',
    focus: '收斂散熱 × 肌肉放鬆',
    keywords: ['拉伸', '呼吸', '放鬆'],
    summary: '用泡棉滾筒放鬆腿後側，搭配 4-7-8 呼吸，讓熱氣慢慢散去。',
  },
  {
    id: 'bailu-scan',
    season: '白露',
    focus: '身體掃描 × 早睡',
    keywords: ['掃描', '睡眠', '節律'],
    summary: '睡前做 5 分鐘身體掃描，觀察緊繃與放鬆，提醒自己早睡。',
  },
  {
    id: 'shuangjiang-rhythm',
    season: '霜降',
    focus: '鼻吸鼻吐 × 保暖',
    keywords: ['保暖', '穩定', '呼吸'],
    summary: '氣溫驟降，維持鼻吸鼻吐，穿著保暖並縮短戶外訓練時間。',
  },
];
