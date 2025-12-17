export type PracticeStep = {
  duration: string;
  steps: string[];
};

export type SolarTerm = {
  slug: string;
  name: string;
  range: string;
  bodyTheme: string;
  emotionTheme: string;
  rhythm: string;
  miniPractice: string;
  duration: number;
  climate: string;
  bodySignals: string[];
  heartSignals: string[];
  practices: PracticeStep[];
  cautions: string[];
  cardNote: string;
};

export const solarTerms: SolarTerm[] = [
  {
    slug: 'lichun',
    name: '立春',
    range: '2 月初，冬盡春啟',
    bodyTheme: '肝膽伸展感',
    emotionTheme: '煩躁轉行動',
    rhythm: '從收斂轉向展開，小步伸展與醒腦呼吸。',
    miniPractice: '3 分鐘拍打雙臂與肋骨，搭配 4-4 呼吸。',
    duration: 5,
    climate: '寒意未退，但陽光開始拉長，早晚溫差明顯。',
    bodySignals: ['早上肩頸僵硬，下午較鬆', '眼睛乾澀、想眨眼', '指甲易脆或縱紋明顯'],
    heartSignals: ['想展開但卡住', '容易對雜亂生氣', '期待新開始卻擔心失敗'],
    practices: [
      { duration: '5 分鐘', steps: ['站姿，雙腳踏地', '吸氣抬臂到肩，吐氣放下拍打雙臂外側 20 下', '雙手叉腰，畫 8 字旋轉骨盆 6 次', '閉眼 6 次深呼吸，吐氣時輕哈聲'] },
      {
        duration: '12 分鐘',
        steps: [
          '坐姿，2 分鐘腹式呼吸暖身',
          '站起，做 3 組開胸伸展：吸氣雙臂展開，吐氣抱胸',
          '側弓箭步左右各 8 次，注意膝蓋方向',
          '最後 3 分鐘交替鼻孔呼吸，平穩收尾',
        ],
      },
    ],
    cautions: ['避免一開始就做強烈後彎', '怒氣上來時先走路再談決策'],
    cardNote: '允許慢熱，讓第一口深呼吸把身體喚醒。',
  },
  {
    slug: 'yushui',
    name: '雨水',
    range: '2 月中下旬，濕潤漸增',
    bodyTheme: '脾胃暖化',
    emotionTheme: '期待與耐心',
    rhythm: '濕氣上升，放慢飲食速度，讓身體先暖後動。',
    miniPractice: '4 分鐘溫熱腹式，雙手交錯按壓胃部。',
    duration: 5,
    climate: '雨水開始增多，空氣有濕度，手腳可能偏冷。',
    bodySignals: ['胃口變小', '下肢易腫', '晨起嗜睡'],
    heartSignals: ['期待春天但懶散', '容易拖延', '心思飄散難聚焦'],
    practices: [
      {
        duration: '5 分鐘',
        steps: ['坐姿腹式呼吸 10 回', '雙掌搓熱，順時針按摩腹部 30 圈', '雙手沿大腿內側滑到膝蓋，吐氣時輕壓', '收尾做 6 次深呼吸'] },
      {
        duration: '10 分鐘',
        steps: [
          '跪坐，墊枕頭保護膝蓋，做貓牛式 10 回',
          '坐回腳跟，雙手拉提手肘上舉 8 次',
          '趴姿小嬰兒式 2 分鐘，專注鼻息',
          '坐起喝一口溫水，嘴中含 3 秒再吞',
        ],
      },
    ],
    cautions: ['避免冰飲與生冷', '若胃部不適，縮短按摩時間'],
    cardNote: '溫柔地暖胃，讓能量慢慢解凍。',
  },
  {
    slug: 'jingzhe',
    name: '驚蟄',
    range: '3 月上旬，陽氣初醒',
    bodyTheme: '肝木舒展',
    emotionTheme: '衝動與覺察',
    rhythm: '身體想動，使用節奏感練習把力道收放自如。',
    miniPractice: '5 分鐘敲擊膽經、搖晃四肢。',
    duration: 8,
    climate: '雷雨初響，氣壓變動，情緒起伏較明顯。',
    bodySignals: ['側腰緊繃', '睡眠易被聲音打斷', '筋膜痠痛'],
    heartSignals: ['想突破又怕冒進', '容易怒氣上升', '需要一個安全出口'],
    practices: [
      {
        duration: '6 分鐘',
        steps: ['站姿雙腳與肩同寬', '敲擊腿外側到腰際各 30 下', '雙臂甩動 1 分鐘，讓手腕鬆開', '收尾做 10 次 4-4 呼吸'] },
      {
        duration: '12 分鐘',
        steps: [
          '先做 2 分鐘搖晃全身，嘴巴放鬆發出輕音',
          '弓步扭轉左右各 10 次，吐氣時收腹',
          '坐下做交替鼻孔呼吸 3 分鐘，平衡左右能量',
          '閉眼 2 分鐘，感受心跳漸穩',
        ],
      },
    ],
    cautions: ['避免空腹激烈運動', '生氣時先走動呼吸，再回談話'],
    cardNote: '雷聲提醒我們：力量可以醒來，但要給它一個節奏。',
  },
  {
    slug: 'chunfen',
    name: '春分',
    range: '3 月中下旬，晝夜平分',
    bodyTheme: '肝脾協調',
    emotionTheme: '平衡與決斷',
    rhythm: '光線均衡的一天，適合做左右對稱練習，讓身心回到中線。',
    miniPractice: '5 分鐘左右交替站立平衡。',
    duration: 10,
    climate: '氣溫回暖，風仍在，鼻過敏者需留意。',
    bodySignals: ['肩頸左右緊度差異', '鼻過敏', '指尖冰冷'],
    heartSignals: ['猶豫拉扯', '想維持平穩', '害怕失衡'],
    practices: [
      { duration: '5 分鐘', steps: ['山式站立 1 分鐘感受腳底', '單腳站 5 次，另一隻腳貼小腿內側', '雙手合十於胸前，呼吸 10 回', '左右交換再做一次'] },
      {
        duration: '15 分鐘',
        steps: [
          '貓牛式 10 回暖背',
          '戰士二式左右各 8 呼吸，眼神柔焦',
          '側角伸展左右各 6 呼吸，感覺側腰拉長',
          '坐姿前彎 2 分鐘，吐氣放鬆後背',
        ],
      },
    ],
    cautions: ['平衡練習時靠牆避免跌倒', '鼻過敏時延長吐氣緩和'],
    cardNote: '把注意力放在兩腳同等用力，平衡會在腳底找到。',
  },
  {
    slug: 'guyu',
    name: '穀雨',
    range: '4 月下旬，雨生百穀',
    bodyTheme: '脾土養護',
    emotionTheme: '滋養與穩固',
    rhythm: '雨水滋潤萬物，適合慢踩步伐與腹式呼吸，累積腳底的穩定。',
    miniPractice: '3 分鐘赤腳踩地或腳底滾球。',
    duration: 6,
    climate: '空氣濕潤，可能覺得昏沉，飲食宜清爽溫暖。',
    bodySignals: ['下肢沉重', '嘴巴有黏膩感', '下午犯睏'],
    heartSignals: ['想安靜卻被催促', '內在需要被滋養', '想要慢但怕落後'],
    practices: [
      { duration: '6 分鐘', steps: ['光腳站立 1 分鐘', '腳底滾球或手指按壓湧泉穴 40 下', '吸氣抬腳跟，吐氣放下 20 次', '坐下腹式呼吸 10 回'] },
      {
        duration: '12 分鐘',
        steps: [
          '走路冥想 5 分鐘，腳跟-腳掌-腳尖分段踩地',
          '椅子上坐立交替 10 次，配合呼吸',
          '雙手抱膝前後滾動 8 次，按摩脊椎',
          '盤腿靜坐 2 分鐘，注意臀部重量',
        ],
      },
    ],
    cautions: ['足底疼痛者縮短滾球時間', '頭暈時改為坐姿練習'],
    cardNote: '把雨水想像成滋養，慢慢灌進腳底。',
  },
  {
    slug: 'xiaoman',
    name: '小滿',
    range: '5 月下旬，溫熱漸升',
    bodyTheme: '心胸開展',
    emotionTheme: '感恩與節制',
    rhythm: '能量逐漸飽滿，保持適度流汗與清晰界線，避免過度耗散。',
    miniPractice: '4 分鐘站姿擴胸＋手臂大圓。',
    duration: 8,
    climate: '氣溫升高，濕熱，容易煩躁或口渴。',
    bodySignals: ['胸口悶', '口苦口渴', '睡眠淺'],
    heartSignals: ['容易興奮衝動', '想分享很多', '怕失去節奏'],
    practices: [
      { duration: '6 分鐘', steps: ['站姿，吸氣雙臂側舉到頭頂，吐氣放下 12 次', '手掌貼肩，畫大圓 10 次', '肩胛擴胸：雙手交握向前推出 8 次', '最後做 1 分鐘 4-6 呼吸'] },
      {
        duration: '12 分鐘',
        steps: [
          '拜日式 A 4 回，流動身體熱度',
          '門閂式左右各 6 呼吸，拉開側腰',
          '坐姿扭轉左右各 8 呼吸，眼神柔和',
          '仰躺抱膝 2 分鐘，放下胸悶',
        ],
      },
    ],
    cautions: ['避免過度爆汗，補水要溫', '若心悸，減少拜日式速度'],
    cardNote: '滿而不溢，留一口氣在心口做停頓。',
  },
  {
    slug: 'xiazhi',
    name: '夏至',
    range: '6 月下旬，白晝最長',
    bodyTheme: '心小腸調理',
    emotionTheme: '熱情與節奏',
    rhythm: '光線最盛，活動多，但需要安插靜默與補水，維持心火平衡。',
    miniPractice: '5 分鐘觀息＋手腕轉動冷卻。',
    duration: 10,
    climate: '高溫、高濕，容易心煩、睡眠品質下降。',
    bodySignals: ['容易流汗', '心跳偏快', '消化不良'],
    heartSignals: ['情緒易起伏', '對外界反應敏感', '渴望冷靜的空間'],
    practices: [
      { duration: '8 分鐘', steps: ['坐姿或躺姿，做 3 分鐘觀息', '舌尖抵上顎，做 10 次涼息（微張嘴吸氣，鼻子吐氣）', '雙手手腕順時針逆時針各 15 下', '深吐氣時想像熱氣從腳底排出'] },
      {
        duration: '15 分鐘',
        steps: [
          '坐姿，做 5 分鐘 4-6 呼吸降溫',
          '貓牛式 10 回放鬆脊椎',
          '雙腿靠牆抬高 5 分鐘，手心朝上',
          '收尾以 1 分鐘仰躺感受心跳平穩',
        ],
      },
    ],
    cautions: ['避免空腹練習涼息', '頭暈時立刻躺下深呼吸'],
    cardNote: '讓光停留在皮膚表面，心火留在胸口慢慢跳。',
  },
  {
    slug: 'lichu',
    name: '立秋',
    range: '8 月上旬，暑退秋臨',
    bodyTheme: '肺與大腸潤養',
    emotionTheme: '收斂與釋放',
    rhythm: '暑氣漸退，準備收斂；加強肺部開合與溫潤呼吸。',
    miniPractice: '4 分鐘坐姿開肋＋長吐氣。',
    duration: 8,
    climate: '早晚微涼，中午仍熱，容易喉嚨乾。',
    bodySignals: ['皮膚乾癢', '喉嚨乾', '排便不順'],
    heartSignals: ['微微落寞', '想整理但提不起勁', '害怕錯過夏末'],
    practices: [
      { duration: '6 分鐘', steps: ['坐姿，雙手插腰吸氣撐開肋骨 10 次', '吐氣時嘴巴成 O 型延長到 6 拍', '手掌拍打胸口與鎖骨 30 下', '肩頸放鬆做 1 分鐘自然呼吸'] },
      {
        duration: '12 分鐘',
        steps: [
          '貓牛式 10 回',
          '斯芬克斯式 8 呼吸，保持肩膀遠離耳朵',
          '坐姿前彎 2 分鐘，讓背面延展',
          '靠牆站立，雙手上舉貼牆 10 次，感受肺部擴張',
        ],
      },
    ],
    cautions: ['喉嚨乾者避免過度張口呼吸', '若便祕，補充溫水並增加蔬果'],
    cardNote: '夏末的第一口長吐氣，為秋天保留溫潤。',
  },
  {
    slug: 'bailu',
    name: '白露',
    range: '9 月上旬，清晨有露',
    bodyTheme: '肺氣收攝',
    emotionTheme: '感懷與釋然',
    rhythm: '露氣提醒我們慢慢收束；適合做收肺與放下的練習。',
    miniPractice: '3 分鐘手指梳胸＋細長吐氣。',
    duration: 6,
    climate: '早晚涼爽，白天仍有熱，易感風寒。',
    bodySignals: ['早晨鼻塞', '皮膚乾燥', '手腳涼'],
    heartSignals: ['容易感傷', '想道別與整理', '需要溫柔陪伴'],
    practices: [
      { duration: '6 分鐘', steps: ['雙手手指沿鎖骨梳理 30 下', '吸氣抬手到肩，吐氣時往後畫圈 12 次', '嘴微開做 4-7-8 呼吸 6 回合', '最後雙掌覆在胸口 1 分鐘'] },
      {
        duration: '10 分鐘',
        steps: [
          '站姿側彎左右各 8 次，配合呼吸',
          '門閂式左右各 8 呼吸',
          '坐姿扭轉左右各 6 呼吸',
          '仰躺抱膝 2 分鐘，想像呼氣把濕氣排出',
        ],
      },
    ],
    cautions: ['出汗後避免吹風', '鼻塞時改用鼻吸鼻吐的溫柔節奏'],
    cardNote: '一口細長的吐氣，讓露水落地，也讓心落地。',
  },
  {
    slug: 'hanlu',
    name: '寒露',
    range: '10 月上旬，露水轉寒',
    bodyTheme: '肺腎連接',
    emotionTheme: '收斂與內觀',
    rhythm: '涼意更深，需要加強腳底與腰背的溫度，搭配靜心。',
    miniPractice: '5 分鐘足底按壓＋熱毛巾敷背。',
    duration: 10,
    climate: '清晨偏冷，喉嚨乾痒，腰背易冷。',
    bodySignals: ['腳底冰冷', '咳嗽或清喉嚨', '腰痠'],
    heartSignals: ['想縮起來', '對未來有點不安', '需要界線感'],
    practices: [
      { duration: '8 分鐘', steps: ['坐姿，熱毛巾敷腰 2 分鐘', '腳底湧泉穴按壓各 40 下', '站姿前彎抱肘 1 分鐘', '坐下做 4-6 呼吸 10 回合'] },
      {
        duration: '14 分鐘',
        steps: [
          '猫牛式 12 回',
          '桌上式抬腿左右各 10 次，強化核心',
          '嬰兒式 3 分鐘，感受背部擴張',
          '坐姿冥想 3 分鐘，觀察鼻息的涼感與暖感',
        ],
      },
    ],
    cautions: ['腰部受傷者避免過度前彎', '感冒時縮短練習並多休息'],
    cardNote: '把腳底踩熱，寒意會往下走，心就有空間停留。',
  },
  {
    slug: 'dongzhi',
    name: '冬至',
    range: '12 月下旬，夜最長',
    bodyTheme: '腎藏暖養',
    emotionTheme: '沈靜與回顧',
    rhythm: '一年最長的夜，適合內觀與慢呼吸，守護腰腎溫度。',
    miniPractice: '6 分鐘熱敷腰部＋緩慢腹式。',
    duration: 12,
    climate: '寒冷乾燥，夜長日短，容易懶散或低落。',
    bodySignals: ['手腳冰冷', '腰部緊繃', '睡意重'],
    heartSignals: ['想休息', '想回顧過去', '需要安靜與陪伴'],
    practices: [
      { duration: '8 分鐘', steps: ['熱敷腰部 3 分鐘', '坐姿腹式呼吸 12 回', '雙手托腰，做橋式 6 次，每次停留 3 呼吸', '仰躺抱膝搖晃 1 分鐘'] },
      {
        duration: '15 分鐘',
        steps: [
          '盤腿坐好，背部挺直，做 5 分鐘 4-7-8 呼吸',
          '貓牛式 12 回讓脊椎暖起',
          '橋式停留 8 呼吸，穩定腰臀',
          '仰躺腳靠牆 5 分鐘，放鬆下肢',
        ],
      },
    ],
    cautions: ['腰椎不適者橋式可改為臀橋', '避免在剛吃飽後練習'],
    cardNote: '在最長的夜裡，留下一盞柔光給自己。',
  },
];
