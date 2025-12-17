import { notFound } from 'next/navigation';
import { solarTerms } from '@/content/solarTerms';
import { Card } from '../../components/Card';

interface Params {
  slug: string;
}

export default function SolarTermDetail({ params }: { params: Params }) {
  const term = solarTerms.find((item) => item.slug === params.slug);
  if (!term) return notFound();

  return (
    <div className="section-shell flex flex-col gap-10">
      <div className="relative overflow-hidden rounded-3xl border border-slate-100 shadow-subtle bg-white/80 p-8 sm:p-12">
        <div className="absolute inset-0 bg-grid-warm opacity-60" aria-hidden style={{ backgroundSize: '28px 28px' }} />
        <div className="relative flex flex-col gap-3">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/70 border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 w-fit">
            節氣詳頁
          </p>
          <h1 className="text-3xl font-semibold text-slate-900">{term.name}｜{term.timeRange}</h1>
          <p className="text-slate-700 leading-relaxed">{term.rhythm}</p>
          <div className="flex flex-wrap gap-2 text-xs text-slate-600">
            <span className="tag-pill">{term.bodyTheme}</span>
            <span className="tag-pill">{term.emotionTheme}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card title="這個節氣的氣候與節奏" tone="warmth">
          <p className="text-sm text-slate-700 leading-relaxed">{term.detail.climate}</p>
        </Card>
        <Card title="身體訊號" tone="tech">
          <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
            {term.detail.bodySignals.map((signal) => (
              <li key={signal}>{signal}</li>
            ))}
          </ul>
        </Card>
        <Card title="心的訊號" tone="tech">
          <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
            {term.detail.heartSignals.map((signal) => (
              <li key={signal}>{signal}</li>
            ))}
          </ul>
        </Card>
        <Card title="常見偏誤與溫柔提醒" tone="warmth">
          <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
            {term.detail.reminders.map((reminder) => (
              <li key={reminder}>{reminder}</li>
            ))}
          </ul>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="今日練習｜5 分鐘版" tone="warmth">
          <ol className="list-decimal pl-5 text-sm text-slate-700 space-y-1">
            {term.detail.practiceShort.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </Card>
        <Card title="今日練習｜10-15 分鐘版" tone="tech">
          <ol className="list-decimal pl-5 text-sm text-slate-700 space-y-1">
            {term.detail.practiceLong.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-6 items-stretch">
        <Card title="一張節氣卡" tone="warmth">
          <div className="rounded-3xl bg-white/80 border border-slate-200 p-6 shadow-subtle">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{term.name}</p>
            <h3 className="text-xl font-semibold text-slate-900 mt-2">{term.detail.card.headline}</h3>
            <p className="text-sm text-slate-700 mt-3 leading-relaxed">{term.detail.card.body}</p>
            <p className="text-sm text-tech-800 mt-4 font-semibold">{term.detail.card.closing}</p>
          </div>
        </Card>
        <Card title="下載或分享（示意）" tone="tech">
          <p className="text-sm text-slate-700 leading-relaxed">
            這裡可以放置未來的下載或分享按鈕。目前僅示意，提醒你把節氣卡保存到日程或分享給一起練習的朋友。
          </p>
          <button className="primary mt-3">下載節氣卡（UI）</button>
        </Card>
      </div>
    </div>
  );
}
