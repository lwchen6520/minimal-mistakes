export type PracticeLength = 5 | 10 | 15;
export type PracticePurpose = '安定' | '提神' | '放鬆' | '專注' | '睡前';
export type BodyState = '緊' | '疲憊' | '心浮' | '情緒多' | '頭腦過載';

export interface PracticeCard {
  title: string;
  preparation: string;
  breath: string;
  observation: string;
  closing: string;
  caution: string;
}

export const practiceCombos: Record<string, PracticeCard> = {
  '5-安定-緊': {
    title: '5 分鐘肩帶鬆呼吸',
    preparation: '找到穩固的坐姿，雙腳貼地，肩膀向後下，手掌輕放大腿。',
    breath: '以 4-4-6-2 的節奏鼻吸鼻吐，吸氣時肩胛輕微開展，吐氣讓肩帶沉下。',
    observation: '每次吐氣後感受肩胛與後背的重量，心跳放緩時在心中數 1–5。',
    closing: '最後一口深吸後，緩緩吐氣並抿嘴微笑，確認肩頸沒有再向上聳起。',
    caution: '若肩頸疼痛，縮短吸氣長度，改為 3-3-4-2；避免憋氣到不適。',
  },
  '10-提神-疲憊': {
    title: '10 分鐘站姿開展',
    preparation: '站起來，雙腳與髖同寬，腳掌踏實，眼睛微張。',
    breath: '做 3 組 20 次的胸式吸氣、嘴微張吐氣；每組間停 30 秒調息。',
    observation: '吸氣時感受胸腔向前上提，吐氣時腳掌更貼地，注意沒有過度用力。',
    closing: '雙掌搓熱覆在眼睛上 10 秒，再沿著後頸到肩膀撫過，重置神經。',
    caution: '若有低血壓，從 10 次開始逐步增加；暈眩時立即改坐姿緩呼吸。',
  },
  '15-放鬆-情緒多': {
    title: '15 分鐘溫柔腹式',
    preparation: '躺在瑜珈墊或床上，膝蓋彎曲，腳掌踩地，右手放胸口、左手放腹部。',
    breath: '用鼻子慢慢吸 5 拍、吐 7 拍，讓腹部起伏，肩頸不參與。',
    observation: '每次吐氣時，標記當下的情緒名稱並讓它飄走；無需解釋原因。',
    closing: '把手放到肋骨兩側，做 3 次輕拍，對自己說「謝謝身體陪我」。',
    caution: '若情緒起伏大，保持眼睛微張，避免閉眼太久引發不安。',
  },
  '10-專注-頭腦過載': {
    title: '10 分鐘三段式調息',
    preparation: '坐在椅子前緣，背部挺直，準備一支筆與紙放在旁邊。',
    breath: '先做 2 分鐘 4-4-4-4 方形呼吸；接著 4 分鐘交替鼻孔呼吸；最後 2 分鐘自然呼吸。',
    observation: '每段呼吸後寫下腦中最吵的一個念頭，再回到下一段呼吸。',
    closing: '閱讀剛寫下的念頭，折起紙張收好，深吐氣一次，視線回到眼前的物件。',
    caution: '鼻塞時改為雙鼻自然呼吸；若頭暈，縮短屏息時間。',
  },
  '5-睡前-心浮': {
    title: '5 分鐘溫暖落地',
    preparation: '在床邊坐好，腳掌踩地，雙手交疊放在小腹前。',
    breath: '以 4-6 的比例吸吐，吐氣時輕輕收下巴，感覺呼氣穿過喉嚨。',
    observation: '感覺臀部重量落在坐骨，想像有根細線把你與床、地板連結在一起。',
    closing: '將右手覆在心口、左手在腹部，同時吐氣並低聲說「今天可以休息了」。',
    caution: '若感到焦躁，可先站立抖手腳 30 秒，再回到坐姿繼續呼吸。',
  },
};

export const purposes: PracticePurpose[] = ['安定', '提神', '放鬆', '專注', '睡前'];
export const bodyStates: BodyState[] = ['緊', '疲憊', '心浮', '情緒多', '頭腦過載'];
export const lengths: PracticeLength[] = [5, 10, 15];
