import Link from 'next/link';
import { Card } from './components/Card';
import { SectionHeading } from './components/SectionHeading';
import { howIWork } from '@/content/site';
import { useLanguage } from './components/LanguageContext';

function SacredPattern() {
  return (
    <svg className="absolute -right-10 -bottom-10 w-60 h-60 pattern" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(74,127,224,0.45)" />
          <stop offset="100%" stopColor="rgba(245,138,79,0.35)" />
        </linearGradient>
      </defs>
      <circle cx="100" cy="100" r="88" stroke="url(#grad)" strokeWidth="8" fill="none" />
      <path d="M100 20 L170 180 L30 180 Z" stroke="url(#grad)" strokeWidth="4" fill="none" />
      <circle cx="100" cy="100" r="38" stroke="url(#grad)" strokeWidth="3" fill="none" />
    </svg>
  );
}

function HowIWork() {
  const { language } = useLanguage();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {howIWork.map((item) => (
        <Card key={item.key} title={item[language].title} description={item[language].description} tone={item.key === 'integrate' ? 'warmth' : 'tech'} />
      ))}
    </div>
  );
}

function HomeContent() {
  const { language } = useLanguage();
  return (
    <div className="section-shell flex flex-col gap-12">
      <section className="relative overflow-hidden rounded-3xl border border-slate-100 shadow-subtle bg-white/80">
        <div className="absolute inset-0 opacity-70 bg-gradient-to-br from-tech-50 via-white to-warmth-50" aria-hidden />
        <div className="relative p-8 sm:p-12 flex flex-col gap-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 w-fit">
            Liv Jaijot Kaur · Sonia Chen
          </div>
          <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 leading-tight">
            {language === 'zh' ? '把修行變成日常，把日常變成修行。' : 'Practice daily. Live gently. Stay grounded.'}
          </h1>
          <p className="text-base sm:text-lg text-slate-700 max-w-3xl leading-relaxed">
            {language === 'zh'
              ? '像每日提醒：請給自己一口完整的吐氣，讓身體先安定，再開始今天的節奏。每一次呼吸都是回家的路。'
              : 'A daily cue: offer yourself one full exhale before the day starts. Let the body settle first; every breath is a way home.'}
          </p>
          <div className="flex gap-3 flex-wrap mt-2">
            <Link href="/daily-practice">
              <button className="primary">{language === 'zh' ? '開始今日練習' : 'Start today'}
              </button>
            </Link>
            <Link href="/solar-terms">
              <button className="secondary">{language === 'zh' ? '依節氣探索' : 'Explore by solar term'}</button>
            </Link>
          </div>
        </div>
        <SacredPattern />
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card
          title={language === 'zh' ? '今日練習 Daily Practice' : 'Daily Practice'}
          description={
            language === 'zh'
              ? '依時長、目的與身體狀態產生可操作的呼吸與觀照卡片，像每天都能拿取的口袋工具。'
              : 'Pick duration, intention, and body state to generate a pocketable breath and awareness card.'
          }
          tone="tech"
          action={
            <Link href="/daily-practice" className="text-sm font-semibold text-tech-700 hover:underline">
              {language === 'zh' ? '生成練習卡 →' : 'Create a practice card →'}
            </Link>
          }
        />
        <Card
          title={language === 'zh' ? '節氣修行 Solar Terms' : 'Solar Terms'}
          description={
            language === 'zh'
              ? '10+ 節氣卡片：含氣候節奏、身心訊號與 5–15 分鐘練習，讓季節成為你的節拍器。'
              : '10+ solar term cards with climate rhythms, body/heart signals, and 5–15 minute practices.'
          }
          tone="warmth"
          action={
            <Link href="/solar-terms" className="text-sm font-semibold text-warmth-700 hover:underline">
              {language === 'zh' ? '查看節氣卡 →' : 'View solar terms →'}
            </Link>
          }
        />
        <Card
          title={language === 'zh' ? '修行筆記 Writing' : 'Writing'}
          description={
            language === 'zh'
              ? '節氣筆記、呼吸與覺察、修行困惑、生活整合——用溫柔但具體的語言記錄路徑。'
              : 'Notes on seasons, breath, practice doubts, and life integration—gentle yet concrete.'
          }
          tone="tech"
          action={
            <Link href="/writing" className="text-sm font-semibold text-tech-700 hover:underline">
              {language === 'zh' ? '閱讀 →' : 'Read →'}
            </Link>
          }
        />
      </section>

      <section className="flex flex-col gap-4">
        <SectionHeading
          title={language === 'zh' ? '我的方法：Observe → Regulate → Integrate → Return' : 'My way: Observe → Regulate → Integrate → Return'}
          description={
            language === 'zh'
              ? '陪你用可持續的步驟培養覺察：看見、調節、整合、回家。每一步都可操作，可被身體接受。'
              : 'Sustainable awareness with four steps: notice, regulate, integrate, and return—each actionable and body-safe.'
          }
          accent={<div className="h-2 w-10 rounded-full bg-gradient-to-r from-tech-400 to-warmth-400" />}
        />
        <HowIWork />
      </section>
    </div>
  );
}

export default function HomePage() {
  return <HomeContent />;
}
