'use client';

import Link from 'next/link';
import { Hero } from './components/Hero';
import { Card } from './components/Card';
import { SectionHeading } from './components/SectionHeading';
import { guideIntro, methodSteps, taglines } from '@/content/site';
import { useLanguage } from './components/LanguageContext';

function MethodGrid() {
  const { language } = useLanguage();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {methodSteps.map((item) => (
        <Card key={item.key} title={item[language].title} description={item[language].description} tone="warmth" />
      ))}
    </div>
  );
}

export default function HomePage() {
  const { language } = useLanguage();

  return (
    <div className="section-shell flex flex-col gap-12">
      <Hero
        eyebrow={language === 'zh' ? '修行入口' : 'Practice Portal'}
        title={language === 'zh' ? '把修行變成日常，把日常變成修行。' : 'Practice daily. Live gently. Stay grounded.'}
        subtitle={guideIntro[language]}
        actions={
          <div className="flex gap-3 flex-wrap">
            <Link href="/practice">
              <button className="primary">{language === 'zh' ? '開始今日練習' : 'Start today'}</button>
            </Link>
            <Link href="/solar-terms">
              <button className="secondary">{language === 'zh' ? '依節氣探索' : 'Explore by solar term'}</button>
            </Link>
          </div>
        }
        background="warmth"
      />

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card
          title={language === 'zh' ? '今日練習 Daily Practice' : 'Daily practice generator'}
          description={
            language === 'zh'
              ? '選擇時長、目的與身體狀態，立刻生成呼吸、觀照與收尾提示，像一張當日卡片。'
              : 'Pick duration, purpose, and body state to generate a breathing, awareness, and closing routine—like a card for today.'
          }
          tone="warmth"
          action={
            <Link href="/practice" className="text-sm font-semibold text-emerald-700 hover:underline">
              {language === 'zh' ? '前往每日練習 →' : 'Go to daily practice →'}
            </Link>
          }
        />
        <Card
          title={language === 'zh' ? '節氣修行 Solar Terms' : 'Solar term rituals'}
          description={
            language === 'zh'
              ? '以 24 節氣為時間錨點，對應身體感、情緒節奏與 3–10 分鐘練習，附常見偏誤提醒。'
              : 'Use the 24 solar terms as anchors with body cues, emotional rhythms, 3–10 minute practices, and gentle cautions.'
          }
          tone="tech"
          action={
            <Link href="/solar-terms" className="text-sm font-semibold text-slate-800 hover:underline">
              {language === 'zh' ? '查看節氣卡 →' : 'View solar cards →'}
            </Link>
          }
        />
        <Card
          title={language === 'zh' ? '修行筆記 Writing' : 'Practice notes'}
          description={
            language === 'zh'
              ? '節氣筆記、呼吸覺察、修行困惑、生活整合。每篇都有摘要、閱讀時間與 tags。'
              : 'Seasonal notes, breath awareness, practice questions, daily weaving—each with summary, read time, and tags.'
          }
          tone="warmth"
          action={
            <Link href="/writing" className="text-sm font-semibold text-emerald-700 hover:underline">
              {language === 'zh' ? '閱讀筆記 →' : 'Read the notes →'}
            </Link>
          }
        />
      </section>

      <section className="flex flex-col gap-4">
        <SectionHeading
          title={language === 'zh' ? '我的方法' : 'My cadence'}
          description={
            language === 'zh'
              ? 'Observe → Regulate → Integrate → Return。用可觀察的體感與界線，陪你走穩修行。'
              : 'Observe → Regulate → Integrate → Return. Observable cues and clear boundaries to keep practice steady.'
          }
          accent={<div className="h-2 w-10 rounded-full bg-gradient-to-r from-emerald-300 via-sky-300 to-amber-200" />}
        />
        <MethodGrid />
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card
          title={language === 'zh' ? '每日提醒' : 'Daily reminder'}
          description={
            language === 'zh'
              ? '修行不是遙遠的事，而是此刻的呼吸、腳底、以及你願意放緩的那一秒。'
              : 'Practice is not far away—it is this breath, your soles, and the second you allow yourself to slow down.'
          }
          tone="tech"
          action={<span className="text-sm text-slate-600">{taglines[language]}</span>}
        />
        <Card
          title={language === 'zh' ? '溫柔的界線' : 'Kind boundaries'}
          description={
            language === 'zh'
              ? '不診斷、不替代醫療或心理治療、不急於突破。只陪你聽見身體訊號，找到可持續的節奏。'
              : 'No diagnosis, no replacing medical or therapeutic care, no rushing breakthroughs. We listen to bodily cues and find a sustainable tempo.'
          }
          tone="warmth"
          action={
            <Link href="/contact" className="text-sm font-semibold text-emerald-700 hover:underline">
              {language === 'zh' ? '想合作/授課/分享 →' : 'Collaborate or host →'}
            </Link>
          }
        />
      </section>
    </div>
  );
}
