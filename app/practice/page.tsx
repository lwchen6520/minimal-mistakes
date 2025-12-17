'use client';

import { useMemo, useState } from 'react';
import { Hero } from '../components/Hero';
import { Card } from '../components/Card';
import {
  bodyStateOptions,
  Duration,
  durationOptions,
  generateDailyPractice,
  Purpose,
  purposeOptions,
} from '@/content/practiceData';
import { useLanguage } from '../components/LanguageContext';

export default function PracticePage() {
  const { language } = useLanguage();
  const [duration, setDuration] = useState<Duration>(10);
  const [purpose, setPurpose] = useState<Purpose>('安定');
  const [state, setState] = useState(bodyStateOptions[0]);

  const practiceCard = useMemo(() => generateDailyPractice(duration, purpose, state), [duration, purpose, state]);

  return (
    <div className="section-shell flex flex-col gap-10">
      <Hero
        eyebrow={language === 'zh' ? '每日練習生成器' : 'Daily practice generator'}
        title={language === 'zh' ? '今天要怎麼練？' : 'What do you need today?'}
        subtitle={
          language === 'zh'
            ? '選擇時長、目的與身體狀態，立即得到準備、呼吸、觀照與結束語。像隨身的每日卡，不用下載也能直接使用。'
            : 'Pick the minutes, intention, and body state to receive preparation, breath, awareness, closing, and cautions—an everyday card you can use right away.'
        }
        background="warmth"
        actions={<button className="secondary">{language === 'zh' ? '下載練習卡（UI）' : 'Download card (UI)'}</button>}
      />

      <section className="card-surface p-6 grid grid-cols-1 md:grid-cols-3 gap-4 reveal-soft">
        <div className="flex flex-col gap-4">
          <label className="text-sm font-semibold text-slate-800">{language === 'zh' ? '時長' : 'Duration'}</label>
          <div className="flex flex-wrap gap-2">
            {durationOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => setDuration(opt)}
                className={`px-4 py-2 rounded-2xl border text-sm font-semibold transition ${
                  duration === opt
                    ? 'bg-slate-900 text-white border-slate-900 shadow-subtle'
                    : 'bg-white/70 border-slate-200 hover:border-emerald-200'
                }`}
              >
                {opt} 分鐘
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <label className="text-sm font-semibold text-slate-800">{language === 'zh' ? '目的' : 'Intention'}</label>
          <div className="flex flex-wrap gap-2">
            {purposeOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => setPurpose(opt)}
                className={`px-4 py-2 rounded-2xl border text-sm font-semibold transition ${
                  purpose === opt
                    ? 'bg-emerald-600 text-white border-emerald-600 shadow-subtle'
                    : 'bg-white/70 border-slate-200 hover:border-emerald-200'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <label className="text-sm font-semibold text-slate-800">{language === 'zh' ? '身體狀態' : 'Body state'}</label>
          <div className="flex flex-wrap gap-2">
            {bodyStateOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => setState(opt)}
                className={`px-4 py-2 rounded-2xl border text-sm font-semibold transition ${
                  state === opt
                    ? 'bg-amber-500 text-white border-amber-500 shadow-subtle'
                    : 'bg-white/70 border-slate-200 hover:border-amber-200'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      </section>

      <Card
        title={`${duration} 分鐘 · ${purpose} · ${state}`}
        description={language === 'zh' ? '以下是今日可直接使用的練習卡，包含準備、呼吸、觀照提示與收尾。' : 'Your card for today with prep, breath, awareness, and closing.'}
        tone="warmth"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div className="space-y-2">
            <h4 className="font-semibold text-slate-900">{language === 'zh' ? '準備' : 'Prepare'}</h4>
            <p>{practiceCard.preparation}</p>
            <h4 className="font-semibold text-slate-900">{language === 'zh' ? '呼吸指引' : 'Breath'}</h4>
            <p>{practiceCard.breath}</p>
            <h4 className="font-semibold text-slate-900">{language === 'zh' ? '觀照提示' : 'Awareness'}</h4>
            <p>{practiceCard.awareness}</p>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-slate-900">{language === 'zh' ? '結束語' : 'Closing'}</h4>
            <p>{practiceCard.closing}</p>
            <h4 className="font-semibold text-slate-900">{language === 'zh' ? '注意事項' : 'Gentle notes'}</h4>
            <p>{practiceCard.caution}</p>
            <div className="pt-2">
              <button className="secondary w-full md:w-auto">{language === 'zh' ? '下載練習卡（示意）' : 'Download (UI only)'}</button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
