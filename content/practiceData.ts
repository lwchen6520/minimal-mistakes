export type Duration = 5 | 10 | 15;
export type Purpose = '安定' | '提神' | '放鬆' | '專注' | '睡前';
export type BodyState = '緊' | '疲憊' | '心浮' | '情緒多' | '頭腦過載';

export const durationOptions: Duration[] = [5, 10, 15];
export const purposeOptions: Purpose[] = ['安定', '提神', '放鬆', '專注', '睡前'];
export const bodyStateOptions: BodyState[] = ['緊', '疲憊', '心浮', '情緒多', '頭腦過載'];

const prepMap: Record<Purpose, string> = {
  安定: '找一個背部有支撐的座位，雙腳踏地，手心貼大腿外側。先慢慢吐氣，讓下巴微收。',
  提神: '站立或坐姿皆可，脊椎拉長，肩胛往下，讓鎖骨微微打開。',
  放鬆: '躺下或側坐，用薄毯墊在腰後，讓腹部有空間。',
  專注: '準備一張紙或筆記工具，將手機靜音。脊椎立起但不僵硬。',
  睡前: '調暗燈光，右側臥或仰躺，讓膝下墊枕頭，減少腰部緊繃。',
};

const breathMap: Record<Purpose, string> = {
  安定: '以 4-6 的比例呼吸：吸氣 4 拍、吐氣 6 拍，重點是吐長而穩。',
  提神: '做 3 組 30 秒的鼻吸鼻吐，節奏略快但保持鼻腔柔軟。',
  放鬆: '鼻吸 4 拍，停 2 拍，鼻吐 6 拍，想像肩膀向地板融化。',
  專注: '用方形呼吸：吸 4、停 4、吐 4、停 4，整體保持平穩。',
  睡前: '採 4-7-8 呼吸：吸 4、停 7、吐 8。嘴唇微張，讓吐氣像輕嘆。',
};

const awarenessMap: Record<BodyState, string> = {
  緊: '覺察肩頸、下顎與手指是否握緊；每次吐氣時讓這三個部位鬆一點點。',
  疲憊: '把注意力放在腳底與小腿，感受重量往下。吸氣時讓背部微微膨脹。',
  心浮: '將視線放柔，專注在胸骨中央；每一次吸氣，默念「在這裡」。',
  情緒多: '承認此刻的情緒名稱，放在心口，呼吸時想像情緒有顏色，吐氣時讓顏色變淡。',
  頭腦過載: '把注意力放到鼻尖與下腹之間的連線，吸氣到鼻尖，吐氣到丹田。',
};

const wrapUpMap: Record<Duration, string> = {
  5: '把手心覆在肋骨，深吐一口氣，感謝自己留了 5 分鐘給身體。',
  10: '在結束前伸展手臂與腳踝，寫下一句今日觀察，留下一個提醒貼紙。',
  15: '做一次緩慢的前彎或嬰兒式，讓背部完全放鬆，再起身喝一口溫水。',
};

const notes: Record<Purpose, string> = {
  安定: '若頭暈，調慢節奏。身體不需要「做到完美」，只是陪伴緊張慢慢鬆動。',
  提神: '避免憋氣或過度用力。能量提升來自節奏穩定，而非強行加速。',
  放鬆: '若想睡著可隨順，但保持呼吸細長。不要勉強壓抑情緒或雜念。',
  專注: '若分心，先記下念頭再回呼吸。專注不是緊繃，而是溫柔地對準。',
  睡前: '任何不適立即停止，讓身體回到最舒適的姿勢，並保持燈光柔和。',
};

export function generateDailyPractice(duration: Duration, purpose: Purpose, state: BodyState) {
  return {
    preparation: prepMap[purpose],
    breath: breathMap[purpose],
    awareness: awarenessMap[state],
    closing: wrapUpMap[duration],
    caution: notes[purpose],
  };
}

export type SolarTerm = {
  slug: string;
  name: string;
  timeframe: string;
  bodyTheme: string;
  emotionTheme: string;
  rhythm: string;
  miniPractice: string;
  duration: '3-5 分鐘' | '5-10 分鐘';
  card: {
    climate: string;
    bodySignals: string[];
    heartSignals: string[];
    practiceShort: string[];
    practiceLong: string[];
    reminders: string[];
  };
};

export const solarTerms: SolarTerm[] = [
  {
    slug: 'lichun',
    name: '立春',
    timeframe: '2 月初 · 冬盡春啟',
    bodyTheme: '肝木甦醒，胸肋易漲',
    emotionTheme: '想往外動，但情緒浮動',
    rhythm: '調慢行程，拉長早晨伸展，讓身體先知道「可以動，但不必急」。',
    miniPractice: '3 分鐘站樁＋側彎，呼吸時感受肋骨打開。',
    duration: '3-5 分鐘',
    card: {
      climate: '寒意未散，風開始多，身體會有想展開的衝動。',
      bodySignals: ['兩肋脹悶', '肩頸緊，想伸懶腰', '眼睛乾澀、想眨眼'],
      heartSignals: ['期待新計畫但心緒易亂', '情緒起伏快', '容易急躁或批判自己'],
      practiceShort: ['站立，雙腳與髖同寬，吸氣雙手上舉，吐氣向右側彎；換邊', '做 3 組 4-6 呼吸，吐氣時想像肋骨打開'],
      practiceLong: ['5 分鐘行走冥想：走 10 步吸，10 步吐，覺察腳底滾動', '3 分鐘肩頸滾動與手臂環繞，讓血流回暖'],
      reminders: ['不要急著定年度目標，先讓身體回到伸展感', '若感到煩躁，先記錄再行動，避免自責'],
    },
  },
  {
    slug: 'yushui',
    name: '雨水',
    timeframe: '2 月中 · 雨氣回潤',
    bodyTheme: '脾胃需要溫暖',
    emotionTheme: '想安定又想冒險',
    rhythm: '飲食以溫軟為主，安排短休息，讓身體先吸收水分與節奏。',
    miniPractice: '手心覆腹，做 4-7-8 呼吸 3 回合。',
    duration: '3-5 分鐘',
    card: {
      climate: '雨水增多，濕氣回來。身體需要穩住中軸。',
      bodySignals: ['胃口忽大忽小', '下背緊、易寒', '手腳冰冷'],
      heartSignals: ['想做新嘗試但又擔心失敗', '容易分心', '對未來不確定感上升'],
      practiceShort: ['坐姿，雙手覆在腹部，吸氣腹部微鼓，吐氣時長舒口氣', '想像溫熱從手心進入脾胃，做 5 次'],
      practiceLong: ['10 分鐘暖身序列：貓牛式、嬰兒式、胸椎扭轉各 1 分鐘', '4 分鐘靜坐，聽雨聲或白噪音，讓思緒沉澱'],
      reminders: ['濕冷時避免冰飲，照顧消化', '動作不求大幅度，先守住溫暖感'],
    },
  },
  {
    slug: 'jingzhe',
    name: '驚蟄',
    timeframe: '3 月初 · 雷動萌芽',
    bodyTheme: '肝膽解凍，筋膜彈性',
    emotionTheme: '行動力被喚醒',
    rhythm: '安排短跑步或快走，搭配深長吐氣，讓多餘能量有出口。',
    miniPractice: '快走 5 分鐘，步伐對齊呼吸：四步吸、四步吐。',
    duration: '5-10 分鐘',
    card: {
      climate: '氣溫回升，偶有雷聲。身體像被叫醒，需要出口。',
      bodySignals: ['早醒、身體想伸展', '腿部痠癢或想動', '肋骨區域敏感'],
      heartSignals: ['計畫變多，心思跳動快', '易衝動下決定', '對規則有抗拒感'],
      practiceShort: ['原地踏步 2 分鐘，讓心率升高', '再做 3 組肩膀繞圈，配合 4-6 呼吸'],
      practiceLong: ['行走或慢跑 8 分鐘，專注腳掌三點落地', '結束後做 2 分鐘前彎，讓肝經放鬆'],
      reminders: ['行動前先寫下最小可行步驟，避免過度用力', '能量過高時，把注意力放到腳底'],
    },
  },
  {
    slug: 'chunfen',
    name: '春分',
    timeframe: '3 月中 · 晝夜平衡',
    bodyTheme: '肝脾協調，平衡左右',
    emotionTheme: '需要定錨、避免失衡',
    rhythm: '左右側練習與交替鼻吸，有助平衡情緒與決策。',
    miniPractice: '交替鼻吸 3 分鐘：右手拇指閉右鼻、無名指閉左鼻，交替吸吐。',
    duration: '5-10 分鐘',
    card: {
      climate: '光線明顯，晝夜平均。需要刻意尋找平衡。',
      bodySignals: ['左右肩緊繃不一', '血糖或情緒忽高忽低', '頭暈或眼壓變化'],
      heartSignals: ['在意公平與界線', '容易陷入比較', '決策猶豫'],
      practiceShort: ['坐姿穩定，脊椎立起，做 6 組交替鼻吸', '雙手放膝，做 1 分鐘身體左右側微晃，找平衡感'],
      practiceLong: ['5 分鐘拜日式，配合呼吸', '4 分鐘靜坐，觀察心跳與呼吸同步'],
      reminders: ['避免熬夜與爆食，維持血糖穩定', '碰到比較心時回到呼吸數拍，而非責備自己'],
    },
  },
  {
    slug: 'guyu',
    name: '穀雨',
    timeframe: '4 月中 · 雨生百穀',
    bodyTheme: '脾胃吸收，肌肉需要養分',
    emotionTheme: '想實作、想落地',
    rhythm: '補充足夠蛋白質與睡眠，安排安靜的專注時段。',
    miniPractice: '用 5 分鐘寫下三件想完成的小事，搭配方形呼吸。',
    duration: '5-10 分鐘',
    card: {
      climate: '雨水滋養，植物加速生長。身體也需要穩定的補給。',
      bodySignals: ['胃口增加', '腿部沉重或水腫', '肩膀想放鬆'],
      heartSignals: ['專案想推進但怕過載', '容易在多工中迷失', '需要被看見成效'],
      practiceShort: ['寫下當天 3 件最小步驟，完成一件就深呼吸一次', '方形呼吸 3 分鐘，保持節奏'],
      practiceLong: ['10 分鐘身體掃描，從腳趾到頭頂，觀察飢餓與飽足感', '再做 3 分鐘貓牛式與胸椎扭轉'],
      reminders: ['補水與規律進食，避免低血糖引發焦慮', '別一次承擔太多，保持可收尾的任務'],
    },
  },
  {
    slug: 'xiaoman',
    name: '小滿',
    timeframe: '5 月中 · 漸熱且濕',
    bodyTheme: '心火漸升，易煩躁',
    emotionTheme: '成就與休息的拉扯',
    rhythm: '讓心率有上有下：白天短段流汗，夜晚拉長吐氣。',
    miniPractice: '午間 3 分鐘靠牆站，腳跟微離地，配合長吐氣。',
    duration: '3-5 分鐘',
    card: {
      climate: '氣溫升高，濕熱開始。心火容易上行。',
      bodySignals: ['口乾想喝冰', '肩頸緊、睡眠淺', '手心發熱'],
      heartSignals: ['對成果焦躁', '難以放鬆或入睡', '情緒易爆'],
      practiceShort: ['靠牆站立，腳跟微離地 10 秒、放下 10 秒，重複 6 次', '吐氣拉長到 7 拍，鎖骨放鬆'],
      practiceLong: ['10 分鐘陰瑜珈：蝴蝶式、半鸚鵡式各 3 分鐘', '躺下做 4-7-8 呼吸 4 回合'],
      reminders: ['少量多次補水，冰飲減半', '情緒起時先走到戶外呼吸 2 分鐘，再回來對話'],
    },
  },
  {
    slug: 'xiazhi',
    name: '夏至',
    timeframe: '6 月底 · 日最長',
    bodyTheme: '心小腸經旺，睡眠需守',
    emotionTheme: '容易過度投入',
    rhythm: '午間休息與傍晚慢行，幫助心火下降。',
    miniPractice: '傍晚 5 分鐘慢走，步伐配合 4-6 呼吸，感受腳底溫度。',
    duration: '5-10 分鐘',
    card: {
      climate: '陽氣最盛，日長夜短。',
      bodySignals: ['口舌生熱', '入睡慢、淺眠', '肩膀緊、心跳偏快'],
      heartSignals: ['想完成更多、停不下來', '對小事易怒', '難以聽完他人表達'],
      practiceShort: ['冷靜呼吸：吸氣 4，吐氣 8，做 5 回合', '拍打手臂內側與腋下，放鬆心包經'],
      practiceLong: ['10 分鐘腿部拉伸與橋式，幫助血流回心', '3 分鐘坐姿前彎，眼睛閉合休息'],
      reminders: ['睡前遠離螢幕 30 分鐘', '心跳快時先慢走，不必硬撐'],
    },
  },
  {
    slug: 'chushu',
    name: '處暑',
    timeframe: '8 月底 · 暑退微涼',
    bodyTheme: '肺氣開始收斂',
    emotionTheme: '收束與告別',
    rhythm: '清晨吸新涼、夜晚緩慢收尾，讓身心準備進入收斂期。',
    miniPractice: '早晨 3 分鐘胸腔擴張呼吸，雙臂打開配合吐氣。',
    duration: '3-5 分鐘',
    card: {
      climate: '暑氣漸退，早晚涼。',
      bodySignals: ['鼻腔敏感', '皮膚乾或出汗減少', '容易嘆氣'],
      heartSignals: ['捨不得夏天的速度', '對未完成事項焦慮', '想整理又怕空'],
      practiceShort: ['站姿，吸氣抬手至肩高，吐氣向後畫圓，重複 8 次', '做 3 組 4-6 呼吸，感受胸口放鬆'],
      practiceLong: ['10 分鐘呼吸覺察，專注鼻尖與胸口', '再做 2 分鐘頸部伸展與肩胛擴張'],
      reminders: ['減少冷氣直吹，保護鼻腔', '整理時以「留一半」原則，避免過度丟棄後懊悔'],
    },
  },
  {
    slug: 'bailu',
    name: '白露',
    timeframe: '9 月初 · 露凝而涼',
    bodyTheme: '肺與皮毛需要潤',
    emotionTheme: '易感傷、想慢',
    rhythm: '增加鼻呼吸與前彎，讓呼氣帶走情緒，補足水分與油脂。',
    miniPractice: '坐姿前彎 3 分鐘，配合鼻吸鼻吐。',
    duration: '3-5 分鐘',
    card: {
      climate: '晨晚有露，溫差大。',
      bodySignals: ['喉嚨乾癢', '皮膚緊繃', '呼吸變淺'],
      heartSignals: ['對離別或季節轉換敏感', '想慢下來', '容易回想過去'],
      practiceShort: ['坐姿前彎，鼻吸 4、鼻吐 6，保持背部放鬆', '手指輕敲胸骨 1 分鐘，幫助肺氣流動'],
      practiceLong: ['8 分鐘全身伸展：貓牛、側彎、鴿子式', '4 分鐘寫下今日三個感恩片刻'],
      reminders: ['睡前塗抹護手油或乳液', '情緒來時允許自己落淚，不需壓抑'],
    },
  },
  {
    slug: 'hanlu',
    name: '寒露',
    timeframe: '10 月初 · 寒氣上升',
    bodyTheme: '肺腎皆需保溫',
    emotionTheme: '收斂、內觀',
    rhythm: '提早入睡，晨間做暖身與腎部按摩，保持呼吸溫潤。',
    miniPractice: '雙拳敲打腰眼 1 分鐘，接著 4-7-8 呼吸 3 回合。',
    duration: '3-5 分鐘',
    card: {
      climate: '涼意明顯，空氣乾冷。',
      bodySignals: ['腰部緊或酸', '手腳冰涼', '早起咳嗽'],
      heartSignals: ['想宅在家，社交意願降低', '容易感到孤單', '需要安靜與陪伴的平衡'],
      practiceShort: ['按摩腰眼 1 分鐘後，手心覆在下腹，做 4-7-8 呼吸', '坐姿扭轉 1 分鐘，讓脊椎暖起來'],
      practiceLong: ['10 分鐘腿後側伸展與貓牛式，維持筋膜彈性', '3 分鐘安靜坐，聽呼吸聲'],
      reminders: ['外出加圍巾護頸', '孤單時與朋友語音，不必強迫外出'],
    },
  },
  {
    slug: 'dongzhi',
    name: '冬至',
    timeframe: '12 月底 · 陽生於陰',
    bodyTheme: '腎陽與骨髓補充',
    emotionTheme: '內縮、等待光',
    rhythm: '早睡、晨起緩慢，用沉穩的下腹呼吸守住能量。',
    miniPractice: '坐姿或臥姿，手心覆在丹田，做 5 組 4-7-8 呼吸。',
    duration: '5-10 分鐘',
    card: {
      climate: '夜長日短，寒冷明顯。需要收藏能量。',
      bodySignals: ['下背或膝蓋痠', '手腳冰冷', '睡眠想拉長'],
      heartSignals: ['想冬眠，不想社交', '對光線渴望', '情緒趨於平穩但低動機'],
      practiceShort: ['仰躺，膝下墊枕頭，手心覆腹，4-7-8 呼吸 5 回合', '腳趾抓地 10 次，喚醒腳底'],
      practiceLong: ['10 分鐘腿部與背部的陰瑜珈，如半鴿子、龍式', '3 分鐘寫下想保留的習慣與想慢慢啟動的願望'],
      reminders: ['不要強迫高強度運動，先維持溫暖與充足睡眠', '情緒低時以光與熱感安撫，而非責備'],
    },
  },
];

export type PracticeLibraryItem = {
  id: string;
  title: string;
  type: '呼吸' | '身體掃描' | '慈心' | '專注' | '睡前';
  duration: string;
  difficulty: '初學' | '進階';
  context: string;
  cautions: string;
  tags: string[];
};

export const practiceLibrary: PracticeLibraryItem[] = [
  {
    id: 'grounded-breath',
    title: '腳底錨點呼吸',
    type: '呼吸',
    duration: '5 分鐘',
    difficulty: '初學',
    context: '通勤、會議前需要安定時',
    cautions: '若頭暈請放慢，孕期保持自然呼吸即可，不需強迫延長。',
    tags: ['安定', '白天', '無道具'],
  },
  {
    id: 'sunrise-scan',
    title: '晨起身體掃描',
    type: '身體掃描',
    duration: '10 分鐘',
    difficulty: '初學',
    context: '剛起床、睡眠品質不穩定時',
    cautions: '若腰部不適可彎膝躺姿，保持呼吸細長。',
    tags: ['柔軟', '睡前/晨起', '靜態'],
  },
  {
    id: 'tea-kindness',
    title: '一杯茶的慈心',
    type: '慈心',
    duration: '8 分鐘',
    difficulty: '初學',
    context: '情緒波動、需要對自己溫柔時',
    cautions: '當情緒強烈時，不必強求「愛」的感覺，只需陪伴呼吸與句子。',
    tags: ['情緒', '室內', '靜心'],
  },
  {
    id: 'laser-focus',
    title: '三段式專注鍛鍊',
    type: '專注',
    duration: '12 分鐘',
    difficulty: '進階',
    context: '需要進入深工作或考試準備前',
    cautions: '若頭壓增加，回到長吐氣，暫停眼睛聚焦練習。',
    tags: ['工作', '下午', '桌面'],
  },
  {
    id: 'night-landing',
    title: '夜間落地儀式',
    type: '睡前',
    duration: '15 分鐘',
    difficulty: '初學',
    context: '睡前想放鬆、關閉螢幕後的過度思緒',
    cautions: '若焦慮升高，可縮短到 8 分鐘並加入寫下煩惱清單。',
    tags: ['睡前', '安眠', '低光'],
  },
  {
    id: 'soft-backbend',
    title: '胸口開展與肩胛滑動',
    type: '身體掃描',
    duration: '7 分鐘',
    difficulty: '初學',
    context: '久坐、肩頸緊繃的下午',
    cautions: '肩部有傷請減少幅度，手臂可以放在牆上輔助。',
    tags: ['肩頸', '伸展', '辦公室'],
  },
  {
    id: 'evening-metta',
    title: '夜間慈心四句',
    type: '慈心',
    duration: '6 分鐘',
    difficulty: '初學',
    context: '與家人衝突後、需要軟化心的時刻',
    cautions: '若句子觸發反感，可先改為中性祝福，再慢慢靠近自己。',
    tags: ['家庭', '情緒', '靜態'],
  },
  {
    id: 'body-led-focus',
    title: '身體引導的專注滑動',
    type: '專注',
    duration: '9 分鐘',
    difficulty: '進階',
    context: '腦霧或資訊超載後，想重新聚焦',
    cautions: '避免在駕駛或需要高警覺場合進行，先找到安全環境。',
    tags: ['腦霧', '資訊過載', '重啟'],
  },
];

export type WritingEntry = {
  id: string;
  title: string;
  summary: string;
  category: '節氣筆記' | '呼吸與覺察' | '修行困惑' | '生活整合';
  readTime: string;
  tags: string[];
};

export const writingEntries: WritingEntry[] = [
  {
    id: 'spring-breath',
    title: '在立春裡調慢，讓身體先醒而不是心先跑',
    summary: '記錄立春的肋骨伸展、吐長吸短的呼吸，還有我如何避免在春天一次塞滿計畫。',
    category: '節氣筆記',
    readTime: '6 分鐘',
    tags: ['立春', '吐氣', '規劃'],
  },
  {
    id: 'sleep-gentle',
    title: '睡前練習不是 checklist，而是一種善待自己的節奏',
    summary: '分享 15 分鐘的夜間落地儀式，如何在焦慮升高時縮短，並保護安全感。',
    category: '生活整合',
    readTime: '5 分鐘',
    tags: ['睡前', '神經系統', '溫柔'],
  },
  {
    id: 'emotions-body',
    title: '當情緒多時，先找到它在身體裡的形狀',
    summary: '情緒不是壞東西。這篇記錄我如何用顏色、溫度與位置，陪伴它們而不被淹沒。',
    category: '修行困惑',
    readTime: '7 分鐘',
    tags: ['情緒', '慈心', '觀照'],
  },
  {
    id: 'breath-math',
    title: '4-7-8 與方形呼吸的差別，什麼時候用哪一個',
    summary: '用白話整理兩種常見呼吸節奏的效應、禁忌，還有我的日常使用案例。',
    category: '呼吸與覺察',
    readTime: '8 分鐘',
    tags: ['呼吸', '睡眠', '專注'],
  },
  {
    id: 'work-weave',
    title: '把練習編進工作：會議前 5 分鐘的覺察流程',
    summary: '分享我在企業會議前的 5 分鐘 SOP，如何調整姿勢、呼吸與界線，避免被議題拉走。',
    category: '生活整合',
    readTime: '6 分鐘',
    tags: ['工作', '界線', '日常'],
  },
];
