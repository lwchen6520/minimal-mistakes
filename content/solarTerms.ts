export type SolarTerm = {
  slug: string;
  name: string;
  dateRange: string;
  bodyTheme: string;
  emotionTheme: string;
  pace: string;
  shortPractice: { title: string; duration: string; steps: string[] };
  duration: number;
  detail: {
    climate: string;
    bodySignals: string[];
    heartSignals: string[];
    practices: {
      short: { minutes: number; steps: string[] };
      long: { minutes: number; steps: string[] };
    };
    cautions: string[];
    card: { title: string; lines: string[] };
  };
};

export const solarTerms: SolarTerm[] = [
  {
    slug: 'lichun',
    name: '立春',
    dateRange: '2/3 – 2/18',
    bodyTheme: '肝膽舒展，筋膜解凍',
    emotionTheme: '從遲滯到微動',
    pace: '晨間暖身與輕快步伐',
    shortPractice: {
      title: '肩頸暖流',
      duration: '5 分鐘',
      steps: ['四拍吸、四拍吐，肩膀畫圈 8 次', '貓牛式 6 回合，感受脊椎波動'],
    },
    duration: 5,
    detail: {
      climate: '寒意未退但陽氣已起，早晨比夜晚溫差大，需要慢慢解凍身體與情緒。',
      bodySignals: ['肩頸僵硬、手腳冰冷', '起床時胸口緊、呼吸淺', '眼神容易呆滯', '容易打哈欠但腦子還慢'],
      heartSignals: ['想開始但缺乏動力', '拖延或分心', '對未完成事項有罪惡感'],
      practices: {
        short: {
          minutes: 5,
          steps: ['四拍吸、四拍吐 10 回合', '站姿貓牛式，配合呼吸展開胸口與肩胛', '最後 30 秒停留，感受腳底與掌心的溫度'],
        },
        long: {
          minutes: 12,
          steps: ['鼻吸嘴吐 4-4 節奏做 2 分鐘', '貓牛＋側彎各 8 回合，胸腔配合呼吸開合', '坐姿扭轉 2 回合，吐氣時放掉緊繃', '3 分鐘靜坐，覺察起心動念，允許慢起步'],
        },
      },
      cautions: ['不要勉強用力拉筋；先溫熱再伸展', '練習完喝溫水，不要立刻吹到冷風'],
      card: {
        title: '立春・慢醒卡',
        lines: ['四拍呼吸 × 肩頸解凍', '腳底落地，慢慢醒來', '允許自己今天只做 70% 的力道'],
      },
    },
  },
  {
    slug: 'jingzhe',
    name: '驚蟄',
    dateRange: '3/5 – 3/19',
    bodyTheme: '下盤穩定，腰椎鬆動',
    emotionTheme: '警覺與專注',
    pace: '晨間喚醒、午後收斂',
    shortPractice: {
      title: '腳跟落地',
      duration: '3 分鐘',
      steps: ['慢走 30 步，感受每次腳跟著地', '鼻吸鼻吐，步伐與呼吸同頻'],
    },
    duration: 3,
    detail: {
      climate: '雷聲初響、溫度回升，身體想動但容易躁進。',
      bodySignals: ['腰側緊、腳底麻', '突然想衝刺運動', '消化偏旺或胃酸感'],
      heartSignals: ['焦躁、想一次處理太多事', '分心與切換頻繁', '對聲音敏感'],
      practices: {
        short: {
          minutes: 5,
          steps: ['步行 2 分鐘，專注腳底觸地', '站姿前彎保持微彎膝，3 次深呼吸', '雙手按腰，腰椎畫小圈 10 下'],
        },
        long: {
          minutes: 10,
          steps: ['5 分鐘行走冥想，默數腳步', '側弓箭步左右各 6 下，吐氣時沉腰', '坐姿側彎配合 6-6 呼吸', '1 分鐘手心搓熱覆蓋腹部'],
        },
      },
      cautions: ['避免爆衝或激烈 HIIT', '若頭暈，先坐下再繼續練習'],
      card: {
        title: '驚蟄・穩下盤',
        lines: ['腳跟落地，雷聲只是提醒', '用步伐把注意力帶回來', '不急著完成，先踩穩'],
      },
    },
  },
  {
    slug: 'qingming',
    name: '清明',
    dateRange: '4/4 – 4/19',
    bodyTheme: '肺與胸廓開展',
    emotionTheme: '哀傷釋放、視野拉寬',
    pace: '戶外慢行與胸口提氣',
    shortPractice: {
      title: '胸口透氣',
      duration: '5 分鐘',
      steps: ['戶外貓牛式 6 回合', '6-6 呼吸 8 回合，感受肩胛滑動'],
    },
    duration: 5,
    detail: {
      climate: '空氣清透、濕度回升，鼻腔與胸口需要保持流動。',
      bodySignals: ['容易過敏或鼻塞', '胸悶、肩膀內縮', '眼睛酸或乾'],
      heartSignals: ['情緒起伏、想念過往', '需要空間呼吸', '對光線與聲音敏感'],
      practices: {
        short: {
          minutes: 8,
          steps: ['站姿胸廓打開，雙手交握向上，配 6-6 呼吸', '貓牛＋胸口繞圈各 6 下', '閉眼停留 1 分鐘，聽周遭風聲與鳥鳴'],
        },
        long: {
          minutes: 15,
          steps: ['5 分鐘戶外慢走，鼻吸鼻吐', '跪姿胸心開展（小狗式）停留 8 呼吸', '側臥開胸轉體左右各 6 下', '3 分鐘盤坐，觀察胸口輕重、情緒波動'],
        },
      },
      cautions: ['若過敏，縮短戶外時間並戴上口罩', '肩膀疼痛時降低開胸角度'],
      card: {
        title: '清明・胸口透亮',
        lines: ['6-6 呼吸 × 胸廓開展', '讓風進來，也讓情緒出去', '視線放遠，動作放柔'],
      },
    },
  },
  {
    slug: 'guyu',
    name: '穀雨',
    dateRange: '4/20 – 5/4',
    bodyTheme: '脾胃滋養，水分平衡',
    emotionTheme: '傾聽與滋養',
    pace: '雨聲陪伴的緩慢節奏',
    shortPractice: {
      title: '雨聲暫停',
      duration: '4 分鐘',
      steps: ['關掉通知 4 分鐘', '聽雨聲或白噪音，配合 4-6 呼吸'],
    },
    duration: 4,
    detail: {
      climate: '春末雨水豐富，濕氣容易滯留，脾胃需要節奏。',
      bodySignals: ['胃口波動、容易腹脹', '四肢沉重', '下午特別想睡'],
      heartSignals: ['容易分心', '想要被照顧', '對噪音敏感'],
      practices: {
        short: {
          minutes: 6,
          steps: ['4-6 呼吸 10 回合', '坐姿前彎，讓肚子貼大腿，停留 1 分鐘', '手掌覆腹，順時針按摩 20 圈'],
        },
        long: {
          minutes: 12,
          steps: ['3 分鐘聽雨或白噪音，保持腹式呼吸', '貓牛式後進入嬰兒式 8 呼吸', '仰臥扭轉左右各 8 呼吸，讓腰側放鬆', '坐姿靜心 3 分鐘，觀察胃口與能量感'],
        },
      },
      cautions: ['避免練習後立刻大吃', '若感到濕重，縮短時間但保持頻率'],
      card: {
        title: '穀雨・慢慢滋養',
        lines: ['4-6 呼吸 × 腹式按摩', '聽雨安靜，胃口慢醒', '補水但不過量'],
      },
    },
  },
  {
    slug: 'lixia',
    name: '立夏',
    dateRange: '5/5 – 5/20',
    bodyTheme: '心小腸、散熱節奏',
    emotionTheme: '熱度管理、轉換步調',
    pace: '午后陰柔、晚上收斂',
    shortPractice: {
      title: '陰瑜珈放熱',
      duration: '8 分鐘',
      steps: ['仰臥束角式 2 分鐘', '腳靠牆 3 分鐘，鼻吸鼻吐', '坐姿前彎 3 分鐘'],
    },
    duration: 8,
    detail: {
      climate: '氣溫升高、心火旺，容易口渴與煩躁。',
      bodySignals: ['睡眠淺、心跳偏快', '口乾舌燥', '肩膀與胸口容易熱'],
      heartSignals: ['易怒、耐心下降', '想同時處理多件事', '容易被暑氣帶走專注'],
      practices: {
        short: {
          minutes: 10,
          steps: ['薄荷水或溫開水 200ml', '靠牆抬腿 3 分鐘，觀察心跳', '坐姿前彎 2 分鐘配 4-7-8 呼吸', '手心搓熱覆在心口 1 分鐘'],
        },
        long: {
          minutes: 15,
          steps: ['5 分鐘陰瑜珈（蝴蝶式＋側彎）', '貓牛＋肩胛提展各 6 回合', '3 分鐘仰躺休息，聽心跳慢下來', '寫下今天想降速的三件事'],
        },
      },
      cautions: ['避免空腹練習長時間前彎', '若頭暈，側躺休息再起身'],
      card: {
        title: '立夏・降溫卡',
        lines: ['靠牆抬腿 × 4-7-8 呼吸', '心火慢慢降，節奏放柔', '喝水、留白，不硬撐'],
      },
    },
  },
  {
    slug: 'mangzhong',
    name: '芒種',
    dateRange: '6/5 – 6/20',
    bodyTheme: '核心穩定、四肢協調',
    emotionTheme: '敏捷與收心',
    pace: '短促練習，避免過度耗散',
    shortPractice: {
      title: '核心點火',
      duration: '6 分鐘',
      steps: ['平板撐 20 秒 × 3 回合', '側棒式左右各 15 秒', '最後 1 分鐘放鬆仰躺'],
    },
    duration: 6,
    detail: {
      climate: '雨熱交替，濕熱讓身體沉重，專注力需要刻意收束。',
      bodySignals: ['腰腹黏滯、流汗黏膩', '腿部沉重', '反覆腰緊或胃悶'],
      heartSignals: ['心浮氣躁', '工作切換頻繁', '難以收尾與決策'],
      practices: {
        short: {
          minutes: 8,
          steps: ['3 回合 20 秒平板＋10 秒休息', '站姿前弓步左右各 8 下，吐氣時穩住核心', '1 分鐘腹式呼吸，手放下腹'],
        },
        long: {
          minutes: 15,
          steps: ['4-4 呼吸熱身 1 分鐘', '平板撐 30 秒 × 3，間隔嬰兒式 20 秒', '橋式 10 下，感受背部啟動', '3 分鐘仰躺放鬆，覺察腹部升降'],
        },
      },
      cautions: ['若腰痛，縮短平板時間或改跪姿', '保持室內通風，避免悶熱'],
      card: {
        title: '芒種・核心收心',
        lines: ['短促核心 × 腹式呼吸', '把注意力收回腹部', '完成一小段，就已足夠'],
      },
    },
  },
  {
    slug: 'dashu',
    name: '大暑',
    dateRange: '7/22 – 8/6',
    bodyTheme: '心脾安定，散熱與補水',
    emotionTheme: '緩和與省力',
    pace: '清晨與夜晚短練，午間休息',
    shortPractice: {
      title: '晚風步行',
      duration: '5 分鐘',
      steps: ['傍晚慢走 5 分鐘', '鼻吸鼻吐，心率保持舒適區'],
    },
    duration: 5,
    detail: {
      climate: '一年最熱，心率容易飆升，睡眠也受影響。',
      bodySignals: ['容易頭脹、心悸', '口渴、流汗多', '午后昏沉'],
      heartSignals: ['耐心低、容易煩躁', '想逃避工作', '情緒像被烘烤般浮動'],
      practices: {
        short: {
          minutes: 7,
          steps: ['溫開水 250ml', '晚間散步 5 分鐘，觀察風的方向', '站姿前彎 6 呼吸，讓頭部下降'],
        },
        long: {
          minutes: 12,
          steps: ['3 分鐘坐姿呼吸，4-7-8 節奏', '靠牆抬腿 4 分鐘，心率下降', '仰躺開胸（擴胸枕）3 分鐘', '練習後喝溫水、擦乾汗'],
        },
      },
      cautions: ['避免烈日下運動', '若心悸，立刻停下坐好呼吸'],
      card: {
        title: '大暑・降火',
        lines: ['4-7-8 呼吸 × 靠牆抬腿', '喝水、降溫、慢慢來', '心跳慢下來再行動'],
      },
    },
  },
  {
    slug: 'bailu',
    name: '白露',
    dateRange: '9/7 – 9/21',
    bodyTheme: '肺與免疫，早睡護養',
    emotionTheme: '收斂與感恩',
    pace: '夜間收心，晨間柔軟',
    shortPractice: {
      title: '睡前掃描',
      duration: '6 分鐘',
      steps: ['躺下，從腳尖到頭頂掃描身體', '每個部位吐氣放鬆 2 秒'],
    },
    duration: 6,
    detail: {
      climate: '早晚溫差大，露水重，呼吸道與免疫要顧。',
      bodySignals: ['鼻喉敏感', '肩膀僵硬', '睡眠延遲'],
      heartSignals: ['感傷或懷舊', '需要安靜空間', '容易擔心冬天將至'],
      practices: {
        short: {
          minutes: 8,
          steps: ['熱水泡腳 3 分鐘', '躺下做身體掃描 4 分鐘', '4-6 呼吸 6 回合，讓呼吸變溫暖'],
        },
        long: {
          minutes: 14,
          steps: ['輕柔貓牛與側彎各 6 下', '肩胛貼牆拉伸 2 分鐘', '仰躺身體掃描 6 分鐘', '寫下今日三件感謝的事'],
        },
      },
      cautions: ['練習後避免吹風', '若鼻塞，加上蒸氣吸入再休息'],
      card: {
        title: '白露・收心',
        lines: ['泡腳＋掃描，護肺暖心', '溫暖呼吸，緩緩早睡', '收回能量，安住床鋪'],
      },
    },
  },
  {
    slug: 'shuangjiang',
    name: '霜降',
    dateRange: '10/23 – 11/6',
    bodyTheme: '保暖與關節護理',
    emotionTheme: '內觀與收束',
    pace: '縮短戶外，室內深呼吸',
    shortPractice: {
      title: '鼻吸鼻吐',
      duration: '4 分鐘',
      steps: ['坐姿 4-4 呼吸 12 回合', '雙手摩擦發熱覆蓋膝蓋'],
    },
    duration: 4,
    detail: {
      climate: '早霜初降，寒氣直入關節，身體需要包覆與緩慢。',
      bodySignals: ['手腳冰冷', '膝蓋或手腕緊', '早上懶得起床'],
      heartSignals: ['情緒收斂、想安靜', '對人際互動意願下降', '容易陷入反芻'],
      practices: {
        short: {
          minutes: 6,
          steps: ['4-4 呼吸 15 回合', '膝蓋環抱拉伸 1 分鐘', '手腕旋轉 20 圈，配合吐氣放鬆'],
        },
        long: {
          minutes: 12,
          steps: ['熱身：搓手搓腳 1 分鐘', '拜日式慢版 4 回合，保持鼻吸鼻吐', '貓牛＋嬰兒式緩和脊椎', '2 分鐘靜坐，感覺鼻端溫度'],
        },
      },
      cautions: ['穿著保暖再練習', '若關節痛，改用溫熱敷後再做輕柔動作'],
      card: {
        title: '霜降・暖關節',
        lines: ['4-4 呼吸 × 搓手搓腳', '保暖第一，動作第二', '用溫度包住心緒'],
      },
    },
  },
  {
    slug: 'lichun-winter',
    name: '立冬',
    dateRange: '11/7 – 11/21',
    bodyTheme: '腎氣收藏，下背保養',
    emotionTheme: '內省與儲備',
    pace: '減速，厚實的呼吸與休息',
    shortPractice: {
      title: '腰背溫壓',
      duration: '5 分鐘',
      steps: ['熱敷下背 2 分鐘', '跪坐前彎 1 分鐘', '坐姿扭轉左右各 30 秒'],
    },
    duration: 5,
    detail: {
      climate: '天冷乾燥，腎氣需要收藏，動作宜緩。',
      bodySignals: ['腰背緊、腳底冰', '想吃重口味或熱湯', '睡眠時間變長'],
      heartSignals: ['想減速、少社交', '對外界刺激的容忍度下降', '需要更明確的界線'],
      practices: {
        short: {
          minutes: 7,
          steps: ['熱敷下背或泡腳 3 分鐘', '跪坐前彎 2 分鐘，吐氣沉下', '4-6 呼吸 8 回合，注意腰背膨脹'],
        },
        long: {
          minutes: 15,
          steps: ['3 分鐘泡腳或熱敷', '貓牛＋嬰兒式各 6 下', '橋式 10 下，感受臀腿啟動', '3 分鐘平躺休息，聽呼吸回到下腹'],
        },
      },
      cautions: ['避免空腹或過飽練習', '若有腰痛，減少後彎幅度'],
      card: {
        title: '立冬・收藏',
        lines: ['熱敷 × 腹式呼吸', '腰背收住，能量回倉', '慢一點，厚一點'],
      },
    },
  },
  {
    slug: 'dahan',
    name: '大寒',
    dateRange: '1/20 – 2/3',
    bodyTheme: '腎陽護暖，循環加熱',
    emotionTheme: '安靜與守候',
    pace: '室內暖練，小而頻繁',
    shortPractice: {
      title: '掌心火',
      duration: '5 分鐘',
      steps: ['搓手 60 下，覆在腎區', '跪坐前彎 1 分鐘，鼻吸鼻吐'],
    },
    duration: 5,
    detail: {
      climate: '一年最冷，血液循環慢，需要刻意暖身並縮短外出。',
      bodySignals: ['手腳冰冷、嘴唇乾', '下背緊、肩膀聳', '早上起不來'],
      heartSignals: ['懶散、想冬眠', '情緒低迷', '需要更多陪伴與自我肯定'],
      practices: {
        short: {
          minutes: 8,
          steps: ['搓手搓腳 2 分鐘', '站姿前彎 1 分鐘，膝蓋彎曲', '4-4-6 呼吸 10 回合，感覺背部暖起來'],
        },
        long: {
          minutes: 14,
          steps: ['熱敷或泡腳 3 分鐘', '拜日式慢版 4 回合，保持鼻吸鼻吐', '橋式 12 下增加循環', '坐姿呼吸 3 分鐘，手覆腎區'],
        },
      },
      cautions: ['確保室內保暖，避免冷風', '若頭暈或心悸，立刻坐下休息'],
      card: {
        title: '大寒・暖流',
        lines: ['搓手搓腳 × 慢拜日', '循環升起，安靜守候', '不要硬撐，保持溫度'],
      },
    },
  },
];
