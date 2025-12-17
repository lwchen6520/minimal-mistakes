'use client';

import { useMemo, useState } from 'react';
import { Hero } from '../components/Hero';
import { SectionHeading } from '../components/SectionHeading';

const durations = [5, 10, 15] as const;
const intentions = ['安定', '提神', '放鬆', '專注', '睡前'] as const;
const bodies = ['緊', '疲憊', '心浮', '情緒多', '頭腦過載'] as const;

function buildPractice(duration: number, intention: (typeof intentions)[number], body: (typeof bodies)[number]) {
  const prepMap: Record<(typeof bodies)[number], string> = {
    緊: '先做 30 秒肩頸或髖部鬆動，讓血液流動後再開始。',
    疲憊: '喝幾口溫水，找一張椅子或墊子，允許自己微躺或靠背。',
    心浮: '把手機靜音 10 分鐘，讓視線落在地面或手心。',
    情緒多: '準備紙筆，練習中若有情緒浮現只要寫下一個詞。',
    頭腦過載: '開窗或調暗燈光，收掉通知，讓眼睛暫時遠望。',
  };

  const breathMap: Record<(typeof intentions)[number], string> = {
    安定: '4-4 平衡呼吸：四拍吸、四拍吐，全程用鼻吸鼻吐。',
    提神: '3-3-3 呼吸：三拍吸、三拍停、三拍吐，保持背部挺直。',
    放鬆: '4-6 呼吸：四拍吸、六拍吐，吐氣時讓肩膀沉下。',
    專注: '方形呼吸：四拍吸、四拍停、四拍吐、四拍停，視線柔焦。',
    睡前: '4-7-8 呼吸：四拍吸、七拍停、八拍吐，吐氣時嘴唇微張。',
  };

  const observeMap: Record<(typeof bodies)[number], string> = {
    緊: '觀察緊繃部位是否因吐氣而鬆 1 度，不需要完全放掉。',
    疲憊: '留意身體重量落在椅子或地面的感覺，允許自己靠著。',
    心浮: '把注意力放在腳底或掌心的觸感，讓思緒有錨點。',
    情緒多: '情緒升起時只標記「怒」「悲」「慌」，然後再回呼吸。',
    頭腦過載: '如果有待辦浮現，想像把它放在身旁的紙上，暫時不處理。',
  };

  const closingMap: Record<(typeof intentions)[number], string> = {
    安定: '最後三回合呼吸放慢，提醒自己：可以穩住再行動。',
    提神: '站起來伸展，做三次提踵，讓能量均勻散布全身。',
    放鬆: '將手掌覆在胸口，感受心跳變柔，再慢慢睜眼。',
    專注: '寫下今天想專注的一件事與最小第一步。',
    睡前: '側躺或平躺休息，關掉大燈，讓身體知道可以入睡。',
  };

  const cautionByDuration = duration <= 5 ? '時間短也有效，切勿急著「做到完美」。' : '若中途分心，直接回到下一個呼吸即可，無需重來。';

  return {
    prep: prepMap[body],
    breath: breathMap[intention],
    observe: observeMap[body],
    closing: closingMap[intention],
    caution: `${cautionByDuration} 若感到不適，立刻停下並調整姿勢。`,
  };
}

export default function DailyPracticePage() {
  const [duration, setDuration] = useState<(typeof durations)[number]>(5);
  const [intention, setIntention] = useState<(typeof intentions)[number]>('安定');
  const [bodyState, setBodyState] = useState<(typeof bodies)[number]>('緊');

  const practice = useMemo(() => buildPractice(duration, intention, bodyState), [duration, intention, bodyState]);

  return (
    <div className="section-shell flex flex-col gap-10">
      <Hero
        eyebrow="每日練習生成器"
        title="像工具一樣可反覆使用的練習卡"
        subtitle="選擇時長、目的與身體狀態，立刻生成包含準備、呼吸、觀照、結束與注意事項的每日卡片。"
        actions={
          <button className="secondary" type="button">
            下載練習卡（UI 示意）
          </button>
        }
        background="warmth"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card-surface p-6 flex flex-col gap-4 md:col-span-1">
          <SectionHeading title="設定今日節奏" description="依照當下身體與目的選擇，組合出最合適的練習。" />
          <div className="flex flex-col gap-3">
            <label className="text-sm text-slate-700 font-semibold">時長</label>
            <div className="flex flex-wrap gap-2">
              {durations.map((d) => (
                <button
                  key={d}
                  onClick={() => setDuration(d)}
                  className={`px-3 py-2 rounded-2xl text-sm border transition ${
                    duration === d
                      ? 'bg-warmth-600 text-white border-warmth-600 shadow-subtle'
                      : 'bg-white/80 border-slate-200 text-slate-700 hover:border-warmth-300'
                  }`}
                >
                  {d} 分鐘
                </button>
              ))}
            </div>

            <label className="text-sm text-slate-700 font-semibold mt-2">目的</label>
            <div className="flex flex-wrap gap-2">
              {intentions.map((i) => (
                <button
                  key={i}
                  onClick={() => setIntention(i)}
                  className={`px-3 py-2 rounded-2xl text-sm border transition ${
                    intention === i
                      ? 'bg-tech-700 text-white border-tech-700 shadow-subtle'
                      : 'bg-white/80 border-slate-200 text-slate-700 hover:border-tech-300'
                  }`}
                >
                  {i}
                </button>
              ))}
            </div>

            <label className="text-sm text-slate-700 font-semibold mt-2">身體狀態</label>
            <div className="flex flex-wrap gap-2">
              {bodies.map((b) => (
                <button
                  key={b}
                  onClick={() => setBodyState(b)}
                  className={`px-3 py-2 rounded-2xl text-sm border transition ${
                    bodyState === b
                      ? 'bg-slate-900 text-white border-slate-900 shadow-subtle'
                      : 'bg-white/80 border-slate-200 text-slate-700 hover:border-slate-300'
                  }`}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="card-surface p-6 md:col-span-2 soft-gradient-tech">
          <SectionHeading
            title="今日練習卡"
            description="包含準備、呼吸指引、觀照提示、結束語與注意事項，可直接跟著做。"
            accent={<div className="h-1.5 w-10 rounded-full bg-gradient-to-r from-tech-300 to-warmth-300" />}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="p-4 rounded-3xl bg-white/80 border border-slate-100 shadow-subtle">
              <p className="text-xs font-semibold text-slate-600">準備</p>
              <p className="text-sm text-slate-700 leading-relaxed mt-1">{practice.prep}</p>
            </div>
            <div className="p-4 rounded-3xl bg-white/80 border border-slate-100 shadow-subtle">
              <p className="text-xs font-semibold text-slate-600">呼吸指引</p>
              <p className="text-sm text-slate-700 leading-relaxed mt-1">{practice.breath}</p>
            </div>
            <div className="p-4 rounded-3xl bg-white/80 border border-slate-100 shadow-subtle">
              <p className="text-xs font-semibold text-slate-600">觀照提示</p>
              <p className="text-sm text-slate-700 leading-relaxed mt-1">{practice.observe}</p>
            </div>
            <div className="p-4 rounded-3xl bg-white/80 border border-slate-100 shadow-subtle">
              <p className="text-xs font-semibold text-slate-600">結束語</p>
              <p className="text-sm text-slate-700 leading-relaxed mt-1">{practice.closing}</p>
            </div>
          </div>
          <div className="p-4 rounded-3xl bg-gradient-to-r from-warmth-100/80 to-tech-100/70 border border-slate-100 shadow-subtle mt-4">
            <p className="text-xs font-semibold text-slate-700">注意事項</p>
            <p className="text-sm text-slate-700 leading-relaxed mt-1">{practice.caution}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
