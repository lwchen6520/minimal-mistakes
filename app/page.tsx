import Link from 'next/link';
import { Hero } from './components/Hero';
import { Card } from './components/Card';
import { SectionHeading } from './components/SectionHeading';
import { methodFlow, taglines } from '@/content/site';
import { useLanguage } from './components/LanguageContext';

function MethodGrid() {
  const { language } = useLanguage();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {methodFlow.map((step) => (
        <Card key={step.key} title={step[language].title} description={step[language].description} tone="warmth" />
      ))}
    </div>
  );
}

function HomeContent() {
  const { language } = useLanguage();
  return (
    <div className="section-shell flex flex-col gap-12">
      <Hero
        eyebrow={language === 'zh' ? '每日可用的修行入口' : 'Daily, gentle practice gateway'}
        title={language === 'zh' ? '把修行變成日常，把日常變成修行。' : 'Practice daily. Live gently. Stay grounded.'}
        subtitle={
          language === 'zh'
            ? '今天先慢一點，先感受腳底與胸口，再決定如何行動。練習不求完美，只求能回到呼吸與身體。'
            : 'Move slowly today—feel your soles and chest before choosing action. No perfection, just return to breath and body.'
        }
        actions={
          <div className="flex gap-3 flex-wrap">
            <Link href="/daily-practice">
              <button className="primary">{language === 'zh' ? '開始今日練習' : 'Start today'}</button>
            </Link>
            <Link href="/solar-terms">
              <button className="secondary">{language === 'zh' ? '依節氣探索' : 'Explore by season'}</button>
            </Link>
          </div>
        }
        background="warmth"
      />

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card
          title={language === 'zh' ? '今日練習 Daily Practice' : 'Daily Practice'}
          description={
            language === 'zh'
              ? '依時長、目的、身體狀態生成練習卡：準備、呼吸、觀照、結束語與注意事項一次備好。'
              : 'Build a practice card by duration, intention, and body signals with prep, breath, cues, closing, and cautions.'
          }
          tone="warmth"
          action={
            <Link href="/daily-practice" className="text-sm font-semibold text-warmth-700 hover:underline">
              {language === 'zh' ? '打開練習卡 →' : 'Open the generator →'}
            </Link>
          }
        />
        <Card
          title={language === 'zh' ? '節氣修行 Solar Terms' : 'Solar Terms practice'}
          description={
            language === 'zh'
              ? '10+ 節氣卡：身體主題、情緒主題、生活節奏與 3–5 分鐘練習，支援條件篩選。'
              : 'Seasonal cards with body and emotion themes, pace tips, and 3–5 minute practices with filters.'
          }
          tone="tech"
          action={
            <Link href="/solar-terms" className="text-sm font-semibold text-tech-700 hover:underline">
              {language === 'zh' ? '查看節氣卡 →' : 'Browse cards →'}
            </Link>
          }
        />
        <Card
          title={language === 'zh' ? '修行筆記 Writing' : 'Writing'}
          description={
            language === 'zh'
              ? '節氣筆記、呼吸與覺察、修行困惑、生活整合，附閱讀時間與 tags，可前端搜尋。'
              : 'Notes on solar terms, breath, doubts, and integration with read time and tags, searchable on page.'
          }
          tone="tech"
          action={
            <Link href="/writing" className="text-sm font-semibold text-tech-700 hover:underline">
              {language === 'zh' ? '閱讀筆記 →' : 'Read notes →'}
            </Link>
          }
        />
      </section>

      <section className="flex flex-col gap-4">
        <SectionHeading
          title={language === 'zh' ? '我的方法：Observe → Regulate → Integrate → Return' : 'Method: Observe → Regulate → Integrate → Return'}
          description={language === 'zh' ? '溫柔但有結構的陪伴，讓練習既可操作又能回到生活。' : 'Gentle, structured guidance so practice is actionable and sustainable.'}
          accent={<div className="h-2 w-14 rounded-full bg-gradient-to-r from-warmth-300 via-tech-200 to-slate-200" />}
        />
        <MethodGrid />
      </section>

      <section className="card-surface p-6 md:p-8 flex flex-col gap-3 soft-gradient-tech">
        <p className="text-sm font-semibold text-slate-700">{language === 'zh' ? 'Tagline' : 'Tagline'}</p>
        <h2 className="text-2xl font-semibold text-slate-900">{taglines[language]}</h2>
        <p className="text-sm text-slate-600 max-w-3xl">
          {language === 'zh'
            ? '像成熟又溫柔的導師，陪你以小步落地練習：正念呼吸、節氣身體感、瑜珈與冥想入門，都用清楚可操作的語言呈現。'
            : 'A mature yet gentle guide for small, doable steps: mindful breath, seasonal body cues, yoga and meditation in clear language.'}
        </p>
      </section>
    </div>
  );
}

export default function HomePage() {
  return <HomeContent />;
}
