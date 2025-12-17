import { notFound } from 'next/navigation';
import { solarTerms } from '@/content/solarTerms';
import { Card } from '../../components/Card';

interface Props {
  params: { slug: string };
}

export default function SolarTermDetailPage({ params }: Props) {
  const term = solarTerms.find((item) => item.slug === params.slug);
  if (!term) return notFound();

  return (
    <div className="section-shell flex flex-col gap-8">
      <section className="relative overflow-hidden rounded-3xl border border-slate-100 shadow-subtle bg-white/85">
        <div className="absolute inset-0 opacity-65 bg-gradient-to-br from-warmth-50 via-white to-tech-50" aria-hidden />
        <div className="relative p-8 sm:p-12 flex flex-col gap-2">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 w-fit">
            {term.name} · {term.range}
          </div>
          <h1 className="text-3xl font-semibold text-slate-900">{term.bodyTheme}</h1>
          <p className="text-base text-slate-700 max-w-3xl leading-relaxed">{term.rhythm}</p>
          <div className="flex flex-wrap gap-2 text-xs text-slate-700 mt-3">
            <span className="tag-pill">情緒：{term.emotionTheme}</span>
            <span className="tag-pill">時長：{term.duration} 分鐘</span>
            <span className="tag-pill">練習：{term.miniPractice}</span>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="這個節氣的氣候與節奏" description={term.climate} tone="warmth">
          <p className="text-sm text-slate-700 leading-relaxed">{term.rhythm}</p>
        </Card>
        <Card title="身體訊號" tone="tech">
          <ul className="list-disc list-inside text-sm text-slate-700 leading-relaxed">
            {term.bodySignals.map((signal) => (
              <li key={signal}>{signal}</li>
            ))}
          </ul>
        </Card>
        <Card title="心的訊號" tone="tech">
          <ul className="list-disc list-inside text-sm text-slate-700 leading-relaxed">
            {term.heartSignals.map((signal) => (
              <li key={signal}>{signal}</li>
            ))}
          </ul>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {term.practices.map((practice) => (
          <Card key={practice.duration} title={`今日練習 · ${practice.duration}`} tone="warmth">
            <ol className="list-decimal list-inside text-sm text-slate-700 leading-relaxed flex flex-col gap-1">
              {practice.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="常見偏誤與溫柔提醒" tone="tech">
          <ul className="list-disc list-inside text-sm text-slate-700 leading-relaxed">
            {term.cautions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Card>
        <Card title="一張節氣卡" tone="warmth" action={<button className="secondary w-full sm:w-auto">下載節氣卡（UI）</button>}>
          <div className="rounded-3xl bg-gradient-to-br from-tech-50 via-white to-warmth-50 border border-slate-100 p-4 flex flex-col gap-2 text-sm text-slate-700">
            <p className="text-xs uppercase tracking-wide text-slate-500">{term.name}</p>
            <p className="text-lg font-semibold text-slate-900">{term.cardNote}</p>
            <p className="text-sm text-slate-700">{term.miniPractice}</p>
            <p className="text-xs text-slate-500">{term.range}</p>
          </div>
        </Card>
        <Card title="身心安全" tone="tech">
          <p className="text-sm text-slate-700 leading-relaxed">
            練習前後請留 1 杯溫水的時間，若身體不適或有醫療需求，請先諮詢專業醫療或治療師。這裡的內容為身心練習分享，不能替代醫療。
          </p>
        </Card>
      </div>
    </div>
  );
}
