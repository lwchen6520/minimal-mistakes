'use client';

import Link from 'next/link';
import { Card } from './components/Card';
import { SectionHeading } from './components/SectionHeading';
import { dailyReminder, methodSteps, taglines } from '@/content/site';
import { useLanguage } from './components/LanguageContext';

function SacredPattern() {
  return (
    <div className="absolute inset-0 opacity-70" aria-hidden>
      <svg className="w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(74,127,224,0.12)" />
            <stop offset="100%" stopColor="rgba(245,138,79,0.12)" />
          </linearGradient>
        </defs>
        <g stroke="url(#grad)" strokeWidth="0.8" fill="none">
          <circle cx="200" cy="200" r="160" />
          <circle cx="200" cy="200" r="120" />
          <circle cx="200" cy="200" r="80" />
          <path d="M200 40 L320 340 L80 340 Z" />
          <path d="M200 360 L320 60 L80 60 Z" opacity="0.5" />
        </g>
      </svg>
    </div>
  );
}

export default function HomePage() {
  const { language } = useLanguage();

  return (
    <div className="section-shell flex flex-col gap-12">
      <section className="relative overflow-hidden rounded-3xl border border-slate-100 shadow-subtle bg-white/80">
        <SacredPattern />
        <div className="relative grid gap-8 lg:grid-cols-[2fr,1fr] p-8 sm:p-12 lg:p-14">
          <div className="flex flex-col gap-4">
            <p className="inline-flex w-fit items-center gap-2 rounded-full bg-white/70 border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600">
              Liv Jaijot Kaur (Sonia Chen)｜導引日常修行
            </p>
            <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 leading-tight">
              {taglines[language]}
            </h1>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-3xl">
              {dailyReminder[language]}
            </p>
            <div className="flex flex-wrap gap-3 mt-2">
              <Link href="/daily-practice">
                <button className="primary">開始今日練習</button>
              </Link>
              <Link href="/solar-terms">
                <button className="secondary">依節氣探索</button>
              </Link>
            </div>
          </div>
          <div className="card-surface soft-gradient-warm p-6 flex flex-col gap-3 justify-center">
            <p className="text-sm uppercase tracking-wide text-slate-600">Tagline</p>
            <p className="text-xl font-semibold text-slate-900">把修行變成日常，把日常變成修行。</p>
            <p className="text-sm text-slate-700">Practice daily. Live gently. Stay grounded.</p>
            <div className="flex items-center gap-2 text-xs text-slate-600 pt-2">
              <span className="h-2 w-2 rounded-full bg-tech-400 animate-pulse" aria-hidden />
              <span>每日提醒：先感覺腳底，再展開一天的節奏。</span>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal">
        <Card
          title="今日練習 Daily Practice"
          description="依照時長、目的與身體狀態生成呼吸與覺察卡，讓練習更貼身。"
          tone="tech"
          action={
            <Link href="/daily-practice" className="text-sm font-semibold text-tech-700 hover:underline">
              打開練習生成器 →
            </Link>
          }
        />
        <Card
          title="節氣修行 Solar Terms"
          description="以 24 節氣為節奏，讀懂身體與情緒的訊號，每個節氣都有可操作的短練習。"
          tone="warmth"
          action={
            <Link href="/solar-terms" className="text-sm font-semibold text-warmth-700 hover:underline">
              查看節氣卡 →
            </Link>
          }
        />
        <Card
          title="修行筆記 Writing"
          description="節氣筆記、呼吸與覺察、修行困惑、生活整合——用清晰語言記錄方法。"
          tone="tech"
          action={
            <Link href="/writing" className="text-sm font-semibold text-tech-700 hover:underline">
              閱讀筆記 →
            </Link>
          }
        />
      </section>

      <section className="flex flex-col gap-4 reveal">
        <SectionHeading
          title="我的方法"
          description="Observe → Regulate → Integrate → Return：每一步都對應身體、呼吸與日常行動。"
          accent={<div className="h-2 w-12 rounded-full bg-gradient-to-r from-tech-400 to-warmth-400" />}
        />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {methodSteps.map((step) => (
            <div key={step.key} className="card-surface p-5 soft-gradient-tech">
              <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide">{step.zh.title}</p>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">{step.zh.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
