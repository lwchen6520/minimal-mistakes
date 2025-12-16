'use client';

import Link from 'next/link';
import { practiceEntries } from '@/content/practiceEntries';
import { Hero } from '../components/Hero';
import { Card } from '../components/Card';
import { useLanguage } from '../components/LanguageContext';

export default function PracticePage() {
  const { language } = useLanguage();

  return (
    <div className="section-shell flex flex-col gap-10">
      <Hero
        eyebrow={language === 'zh' ? 'Practice / 節氣' : 'Practice'}
        title={language === 'zh' ? '讓節氣成為身體的節奏' : 'Let seasons guide your rhythm'}
        subtitle={
          language === 'zh'
            ? '每篇都給出可實踐的呼吸與身體提示，讓覺察落在生活。'
            : 'Grounded breath and body cues for each season, keeping awareness in daily life.'
        }
        background="warmth"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {practiceEntries.map((item) => (
          <Card
            key={item.id}
            title={`${item.season[language]}｜${item.focus[language]}`}
            description={item.summary[language]}
            tone="warmth"
            tags={item.keywords}
            action={
              <button className="secondary w-full sm:w-auto">{language === 'zh' ? '下載日常卡（示意）' : 'Download daily card (UI)'}</button>
            }
          >
            <div className="flex items-center justify-between text-xs text-slate-600 mt-2">
              <span>{language === 'zh' ? '節氣 × 身體感' : 'Season × Body'}</span>
              <Link href="/contact" className="text-tech-700 hover:underline font-semibold">
                {language === 'zh' ? '訂閱節奏' : 'Subscribe rhythm'}
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
