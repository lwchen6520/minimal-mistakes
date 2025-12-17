'use client';

import { useMemo, useState } from 'react';
import classNames from 'classnames';
import { Card } from '../components/Card';
import { SearchBox } from '../components/SearchBox';

const durations = [5, 10, 15];
const purposes = ['安定', '提神', '放鬆', '專注', '睡前'];
const bodyStates = ['緊', '疲憊', '心浮', '情緒多', '頭腦過載'];

type PracticePlan = {
  preparation: string;
  breathing: string;
  observation: string;
  closing: string;
  caution: string;
};

const purposeCopy: Record<string, string> = {
  安定: '讓神經系統慢下來，腿與腳掌踩實。',
  提神: '提升警覺但不過勞，帶入胸口擴張。',
  放鬆: '放掉肩頸與背部重量，讓吐氣變長。',
  專注: '收回感官，打造可重複的呼吸節拍。',
  睡前: '轉換到夜晚節奏，讓腦袋知道可以關機。',
};

const bodyCopy: Record<string, string> = {
  緊: '動作幅度 70%，配合吐氣延長。',
  疲憊: '用較短的動作，搭配補水與腿部支撐。',
  心浮: '優先鼻吸鼻吐，將注意力放在腳底。',
  情緒多: '加入書寫或慈心句子，避免壓抑。',
  頭腦過載: '減少光線與刺激，長吐氣把重心放回身體。',
};

function buildPlan(duration: number, purpose: string, body: string): PracticePlan {
  const breathTempo = duration === 5 ? '4-4 呼吸 6 回合' : duration === 10 ? '4-6 呼吸 10 回合' : '4-7-8 呼吸 12 回合';
  const prep =
    purpose === '提神'
      ? '1 分鐘拍打胸骨與鎖骨，喚醒胸腔，再做肩胛滑動。'
      : purpose === '睡前'
        ? '關掉強光，準備墊子與枕頭，腳底踩地 30 秒。'
        : '搓熱雙手與耳朵 30 秒，腳掌抓地，脊椎找直。';

  const observe =
    body === '情緒多'
      ? '觀察吸氣時情緒上升的位置，吐氣時把重量交給地板；必要時加上一句慈心祝福。'
      : body === '頭腦過載'
        ? '閉眼或半開眼，將注意力放在鼻尖氣流與腳底溫度，筆記一個最需要放下的念頭。'
        : '把覺察放在肋骨與下腹的起伏，吐氣時檢查肩頸是否再次用力。';

  const caution = `如果出現頭暈或喘不過氣，回到自然呼吸並${bodyCopy[body]}`;

  return {
    preparation: prep,
    breathing: `${breathTempo}，${purposeCopy[purpose]}`,
    observation: observe,
    closing:
      purpose === '提神'
        ? '最後 30 秒做開合跳或原地踏步，再深呼吸 3 次。'
        : purpose === '專注'
          ? '在結束前寫下今天 1 個最重要任務，把呼吸節拍帶進專注時段。'
          : purpose === '睡前'
            ? '腿靠牆或側躺 2 分鐘，告訴自己：「今天夠了，我允許自己休息。」'
            : '站起來伸展，喝一杯溫水，感謝身體的回應。',
    caution,
  };
}

export default function DailyPracticePage() {
  const [duration, setDuration] = useState<number>(durations[0]);
  const [purpose, setPurpose] = useState<string>(purposes[0]);
  const [body, setBody] = useState<string>(bodyStates[0]);
  const plan = useMemo(() => buildPlan(duration, purpose, body), [duration, purpose, body]);

  return (
    <div className="section-shell flex flex-col gap-10">
      <div className="relative overflow-hidden rounded-3xl border border-slate-100 shadow-subtle bg-white/80 p-8 sm:p-12">
        <div className="absolute inset-0 bg-grid-tech opacity-60" aria-hidden style={{ backgroundSize: '28px 28px' }} />
        <div className="relative flex flex-col gap-4">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/70 border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 w-fit">
            每日練習生成器
          </p>
          <h1 className="text-3xl font-semibold text-slate-900">根據今天的身體與心情，生成一張練習卡</h1>
          <p className="text-slate-700 max-w-3xl leading-relaxed">
            選擇時長、目的與身體狀態，即刻得到可操作的準備、呼吸、觀照與結束提醒。按下「下載練習卡」即可把今天的節奏收進待辦（目前為示意）。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
            <div className="card-surface p-4 flex flex-col gap-2">
              <p className="text-xs text-slate-600 font-semibold">時長</p>
              <div className="flex flex-wrap gap-2">
                {durations.map((d) => (
                  <button
                    key={d}
                    onClick={() => setDuration(d)}
                    className={classNames(
                      'px-4 py-2 rounded-2xl text-sm font-semibold border transition',
                      duration === d
                        ? 'bg-tech-700 text-white border-tech-700 shadow-subtle'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-tech-300'
                    )}
                  >
                    {d} 分鐘
                  </button>
                ))}
              </div>
            </div>
            <div className="card-surface p-4 flex flex-col gap-2">
              <p className="text-xs text-slate-600 font-semibold">目的</p>
              <div className="flex flex-wrap gap-2">
                {purposes.map((item) => (
                  <button
                    key={item}
                    onClick={() => setPurpose(item)}
                    className={classNames(
                      'px-4 py-2 rounded-2xl text-sm font-semibold border transition',
                      purpose === item
                        ? 'bg-warmth-600 text-white border-warmth-600 shadow-subtle'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-warmth-300'
                    )}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div className="card-surface p-4 flex flex-col gap-2">
              <p className="text-xs text-slate-600 font-semibold">身體狀態</p>
              <SearchBox value={body} onChange={setBody} placeholder="輸入或選擇：緊 / 疲憊 / 心浮 / 情緒多 / 頭腦過載" />
              <div className="flex flex-wrap gap-2">
                {bodyStates.map((item) => (
                  <button
                    key={item}
                    onClick={() => setBody(item)}
                    className={classNames(
                      'px-3 py-1 rounded-full text-xs font-semibold border transition',
                      body === item
                        ? 'bg-tech-100 text-tech-800 border-tech-200'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-tech-200'
                    )}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Card
        title={`今日練習卡｜${duration} 分鐘｜${purpose}｜${body}`}
        eyebrow="可每天重複使用的結構"
        tone="warmth"
        action={<button className="secondary w-full sm:w-auto">下載練習卡（UI 示意）</button>}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm leading-relaxed text-slate-800">
          <div className="flex flex-col gap-3">
            <div>
              <p className="font-semibold text-slate-900">準備</p>
              <p>{plan.preparation}</p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">呼吸指引</p>
              <p>{plan.breathing}</p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">觀照提示</p>
              <p>{plan.observation}</p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div>
              <p className="font-semibold text-slate-900">結束語</p>
              <p>{plan.closing}</p>
            </div>
            <div className="rounded-2xl bg-white/70 border border-slate-200 p-3 shadow-subtle">
              <p className="font-semibold text-slate-900">注意事項</p>
              <p className="text-slate-700">{plan.caution}</p>
              <p className="text-xs text-slate-500 mt-2">滾動時會有輕微浮動，像呼吸一樣，讓卡片更好讀。</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
