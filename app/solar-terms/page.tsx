'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { Hero } from '../components/Hero';
import { Card } from '../components/Card';
import { solarTerms } from '@/content/practiceData';
import { useLanguage } from '../components/LanguageContext';

const allBody = ['全部', ...Array.from(new Set(solarTerms.map((item) => item.bodyTheme)))];
const allEmotion = ['全部', ...Array.from(new Set(solarTerms.map((item) => item.emotionTheme)))];
const allDuration = ['全部', ...Array.from(new Set(solarTerms.map((item) => item.duration)))];

type FilterValue = (typeof allBody)[number];
type EmotionFilter = (typeof allEmotion)[number];
type DurationFilter = (typeof allDuration)[number];

export default function SolarTermsPage() {
  const { language } = useLanguage();
  const [bodyFilter, setBodyFilter] = useState<FilterValue>('全部');
  const [emotionFilter, setEmotionFilter] = useState<EmotionFilter>('全部');
  const [durationFilter, setDurationFilter] = useState<DurationFilter>('全部');

  const filtered = useMemo(() => {
    return solarTerms.filter((term) => {
      const bodyOk = bodyFilter === '全部' || term.bodyTheme === bodyFilter;
      const emotionOk = emotionFilter === '全部' || term.emotionTheme === emotionFilter;
      const durationOk = durationFilter === '全部' || term.duration === durationFilter;
      return bodyOk && emotionOk && durationOk;
    });
  }, [bodyFilter, durationFilter, emotionFilter]);

  return (
    <div className="section-shell flex flex-col gap-10">
      <Hero
        eyebrow={language === 'zh' ? '節氣主頁' : 'Solar terms'}
        title={language === 'zh' ? '依時間節氣安頓身心' : 'Anchor practice with the seasons'}
        subtitle={
          language === 'zh'
            ? '每張節氣卡包含氣候節奏、身體與心的訊號、一個 3–10 分鐘練習、常見偏誤與提醒。'
            : 'Each card shares climate rhythm, body and heart signals, a 3–10 minute practice, and gentle cautions.'
        }
        background="tech"
      />

      <section className="card-surface p-6 grid grid-cols-1 md:grid-cols-3 gap-4 reveal-soft">
        <div className="flex flex-col gap-2">
          <label className="text-xs text-slate-600">{language === 'zh' ? '身體主題' : 'Body theme'}</label>
          <select value={bodyFilter} onChange={(e) => setBodyFilter(e.target.value as FilterValue)}>
            {allBody.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs text-slate-600">{language === 'zh' ? '情緒主題' : 'Emotion theme'}</label>
          <select value={emotionFilter} onChange={(e) => setEmotionFilter(e.target.value as EmotionFilter)}>
            {allEmotion.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs text-slate-600">{language === 'zh' ? '時長' : 'Duration'}</label>
          <select value={durationFilter} onChange={(e) => setDurationFilter(e.target.value as DurationFilter)}>
            {allDuration.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((term) => (
          <Card
            key={term.slug}
            title={`${term.name} · ${term.timeframe}`}
            description={`${term.bodyTheme} ｜ ${term.emotionTheme}`}
            tags={[term.duration, term.miniPractice]}
            tone="warmth"
            action={
              <div className="flex items-center justify-between text-sm text-slate-700">
                <span className="max-w-[60%] leading-relaxed">{term.rhythm}</span>
                <Link href={`/solar-terms/${term.slug}`} className="text-emerald-700 hover:underline font-semibold">
                  {language === 'zh' ? '查看詳頁 →' : 'View detail →'}
                </Link>
              </div>
            }
          />
        ))}
      </div>
    </div>
  );
}
