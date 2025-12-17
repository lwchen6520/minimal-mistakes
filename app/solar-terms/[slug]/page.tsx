import { notFound } from 'next/navigation';
import { solarTerms } from '@/content/solarTerms';
import { SectionHeading } from '../../components/SectionHeading';
import Link from 'next/link';

export default function SolarTermDetail({ params }: { params: { slug: string } }) {
  const term = solarTerms.find((item) => item.slug === params.slug);

  if (!term) {
    return notFound();
  }

  return (
    <div className="section-shell flex flex-col gap-8">
      <div className="card-surface p-6 md:p-8 soft-gradient-warm">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <p className="text-xs font-semibold text-slate-600">節氣</p>
            <h1 className="text-3xl font-semibold text-slate-900">{term.name}</h1>
            <p className="text-sm text-slate-600 mt-1">{term.dateRange}</p>
            <div className="flex flex-wrap gap-2 mt-3 text-xs text-slate-700">
              <span className="tag-pill">身體：{term.bodyTheme}</span>
              <span className="tag-pill">情緒：{term.emotionTheme}</span>
              <span className="tag-pill">節奏：{term.pace}</span>
            </div>
          </div>
          <Link href="/solar-terms" className="text-sm font-semibold text-warmth-700 hover:underline">
            ← 返回節氣列表
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card-surface p-6 md:col-span-2">
          <SectionHeading
            title="這個節氣的氣候與節奏"
            description="用日常語言描述當季的氣候，幫助你調整行程與練習重點。"
            accent={<div className="h-1.5 w-12 rounded-full bg-gradient-to-r from-warmth-300 to-tech-300" />}
          />
          <p className="text-sm text-slate-700 leading-relaxed mt-3">{term.detail.climate}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="p-4 rounded-3xl bg-white/80 border border-slate-100 shadow-subtle">
              <p className="text-xs font-semibold text-slate-600">身體訊號</p>
              <ul className="text-sm text-slate-700 leading-relaxed list-disc list-inside mt-1">
                {term.detail.bodySignals.map((signal) => (
                  <li key={signal}>{signal}</li>
                ))}
              </ul>
            </div>
            <div className="p-4 rounded-3xl bg-white/80 border border-slate-100 shadow-subtle">
              <p className="text-xs font-semibold text-slate-600">心的訊號</p>
              <ul className="text-sm text-slate-700 leading-relaxed list-disc list-inside mt-1">
                {term.detail.heartSignals.map((signal) => (
                  <li key={signal}>{signal}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-4">
            <SectionHeading title="今日練習" description="選擇 5–15 分鐘的步驟，當天就能做。" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-3xl bg-gradient-to-br from-warmth-100 to-white border border-warmth-100 shadow-subtle">
                <p className="text-xs font-semibold text-slate-700">{term.detail.practices.short.minutes} 分鐘版</p>
                <ol className="text-sm text-slate-700 leading-relaxed list-decimal list-inside mt-2">
                  {term.detail.practices.short.steps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </div>
              <div className="p-4 rounded-3xl bg-gradient-to-br from-tech-50 to-white border border-tech-100 shadow-subtle">
                <p className="text-xs font-semibold text-slate-700">{term.detail.practices.long.minutes} 分鐘版</p>
                <ol className="text-sm text-slate-700 leading-relaxed list-decimal list-inside mt-2">
                  {term.detail.practices.long.steps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 rounded-3xl bg-gradient-to-r from-slate-50 to-warmth-50 border border-slate-100 shadow-subtle">
            <p className="text-xs font-semibold text-slate-700">常見偏誤與溫柔提醒</p>
            <ul className="text-sm text-slate-700 leading-relaxed list-disc list-inside mt-2">
              {term.detail.cautions.map((caution) => (
                <li key={caution}>{caution}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="card-surface p-6 flex flex-col gap-4 soft-gradient-tech">
          <SectionHeading title="節氣卡" description="可分享的圖文，保留當季的身心提醒。" />
          <div className="rounded-3xl border border-slate-100 bg-white/80 shadow-subtle p-4 flex flex-col gap-2">
            <p className="text-xs font-semibold text-slate-600">{term.name}</p>
            <h3 className="text-lg font-semibold text-slate-900">{term.detail.card.title}</h3>
            <ul className="text-sm text-slate-700 leading-relaxed list-disc list-inside">
              {term.detail.card.lines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-warmth-100/60 via-tech-50 to-white border border-slate-100 shadow-subtle p-4 text-sm text-slate-700 leading-relaxed">
            <p className="font-semibold text-slate-800">短練習摘要</p>
            <p>
              {term.shortPractice.title}｜{term.shortPractice.duration}
            </p>
            <ul className="list-disc list-inside mt-2">
              {term.shortPractice.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
