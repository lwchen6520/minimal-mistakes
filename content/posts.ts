export type Post = {
  id: string;
  title: string;
  category: '節氣筆記' | '呼吸與覺察' | '修行困惑' | '生活整合';
  summary: string;
  readTime: string;
  tags: string[];
};

export const posts: Post[] = [
  {
    id: 'lichun-journal',
    title: '立春日記：慢醒的肩頸與心',
    category: '節氣筆記',
    summary: '記錄第一縷春風時，如何用四拍呼吸解凍肩頸，並允許自己只做 70% 的力道。',
    readTime: '6 分鐘',
    tags: ['肩頸', '四拍呼吸', '慢醒'],
  },
  {
    id: 'breath-floor',
    title: '當情緒很滿時，從哪裡開始呼吸',
    category: '呼吸與覺察',
    summary: '分享 3 個最小可行的呼吸起手式，適合焦慮、心浮或腦袋過載的時刻。',
    readTime: '5 分鐘',
    tags: ['焦慮', '起手式', '安定'],
  },
  {
    id: 'practice-doubts',
    title: '練習半途而廢，是不是我不夠自律',
    category: '修行困惑',
    summary: '檢視「中斷」背後的訊號，設計可回頭的節奏，而不是用罪惡感逼自己。',
    readTime: '7 分鐘',
    tags: ['自律', '節奏', '回頭路'],
  },
  {
    id: 'seasonal-schedule',
    title: '用節氣排出工作與休息週期',
    category: '生活整合',
    summary: '示範如何把 24 節氣當作提醒，調整衝刺與收斂，讓專案與身心都不過熱。',
    readTime: '8 分鐘',
    tags: ['節奏', '工作', '節氣'],
  },
  {
    id: 'night-landing',
    title: '睡前的「收心五步」',
    category: '呼吸與覺察',
    summary: '泡腳、掃描、呼吸、書寫、熄燈，讓身體知道可以安全地停下來。',
    readTime: '4 分鐘',
    tags: ['睡前', '掃描', '儀式感'],
  },
  {
    id: 'gentle-boundary',
    title: '陪伴他人練習時，如何不越界',
    category: '修行困惑',
    summary: '界線提醒：我不診斷、不替代醫療，只提供可以自己實作的覺察與呼吸工具。',
    readTime: '5 分鐘',
    tags: ['界線', '陪伴', '安全'],
  },
  {
    id: 'body-journal',
    title: '把身體掃描寫進筆記的格式',
    category: '生活整合',
    summary: '提供一個簡單模板：部位、感受、強度、可能原因、可行的下一步。',
    readTime: '6 分鐘',
    tags: ['身體掃描', '模板', '記錄'],
  },
  {
    id: 'qingming-grief',
    title: '清明的哀傷與呼吸通道',
    category: '節氣筆記',
    summary: '當思念湧上來，如何用胸腔開展與 6-6 呼吸讓情緒有出口。',
    readTime: '7 分鐘',
    tags: ['清明', '胸腔', '哀傷'],
  },
];
