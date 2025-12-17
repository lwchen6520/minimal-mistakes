import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Hero } from '../../components/Hero';
import { Card } from '../../components/Card';
import { solarTerms } from '@/content/practiceData';

export default function SolarTermDetail({ params }: { params: { slug: string } }) {
  const term = solarTerms.find((item) => item.slug === params.slug);
  if (!term) return notFound();

  return (
    <div className="section-shell flex flex-col gap-10">
      <Hero
        eyebrow={`節氣詳頁 / ${term.name}`}
        title={`${term.name} · ${term.timeframe}`}
        subtitle={`${term.bodyTheme} ｜ ${term.emotionTheme}`}
        background="warmth"
        actions={
          <Link href="/solar-terms">
            <button className="secondary">返回節氣主頁</button>
          </Link>
        }
      />

      <Card title="這個節氣的氣候與節奏" description={term.card.climate} tone="tech" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card title="身體訊號" tone="warmth">
          <ul className="list-disc list-inside space-y-2 text-slate-700">
            {term.card.bodySignals.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Card>
        <Card title="心的訊號" tone="tech">
          <ul className="list-disc list-inside space-y-2 text-slate-700">
            {term.card.heartSignals.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card title="今日練習 · 5 分鐘版本" tone="warmth">
          <ol className="list-decimal list-inside space-y-2 text-slate-700">
            {term.card.practiceShort.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </Card>
        <Card title="今日練習 · 10-15 分鐘版本" tone="tech">
          <ol className="list-decimal list-inside space-y-2 text-slate-700">
            {term.card.practiceLong.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </Card>
      </div>

      <Card title="常見偏誤與溫柔提醒" tone="warmth">
        <ul className="list-disc list-inside space-y-2 text-slate-700">
          {term.card.reminders.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Card>

      <section className="card-surface p-6 flex flex-col gap-4 bg-gradient-to-br from-white via-emerald-50/50 to-amber-50/60 border-dashed border-emerald-200">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div>
            <p className="text-xs uppercase tracking-wide text-emerald-700">Solar Term Card</p>
            <h3 className="text-xl font-semibold text-slate-900">{term.name}</h3>
            <p className="text-sm text-slate-600">{term.timeframe}</p>
          </div>
          <button className="secondary">下載節氣卡（示意）</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-slate-700">
          <div>
            <p className="font-semibold text-slate-900 mb-2">身體主題</p>
            <p>{term.bodyTheme}</p>
          </div>
          <div>
            <p className="font-semibold text-slate-900 mb-2">情緒主題</p>
            <p>{term.emotionTheme}</p>
          </div>
          <div>
            <p className="font-semibold text-slate-900 mb-2">小練習</p>
            <p>{term.miniPractice}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
