import { aboutStory, backgroundNote, taglines } from '@/content/site';
import { Hero } from '../components/Hero';
import { Card } from '../components/Card';

export default function AboutPage() {
  const sections = aboutStory.zh;

  return (
    <div className="section-shell flex flex-col gap-10">
      <Hero
        eyebrow="關於 Liv Jaijot Kaur (Sonia Chen)"
        title="把修行變成日常，把日常變成修行"
        subtitle="溫柔但不飄的陪伴：以成熟的語言與方法，陪初學者建立安全、可持續的練習節奏。"
        background="warmth"
      />

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sections.map((item) => (
          <Card key={item.title} title={item.title} description={item.body} tone="warmth" />
        ))}
      </section>

      <section className="card-surface p-6 md:p-8 soft-gradient-tech">
        <h2 className="text-xl font-semibold text-slate-900">界線與原則</h2>
        <p className="text-sm text-slate-700 leading-relaxed mt-2">
          不診斷、不替代醫療或心理治療；所有分享都是身心練習與生活節奏的建議。若你有身心症狀，請優先求助專業醫療。
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-4 gap-4 items-start">
        <div className="card-surface p-6 md:col-span-3">
          <h3 className="text-lg font-semibold text-slate-900">我的路徑</h3>
          <p className="text-sm text-slate-700 leading-relaxed mt-2">
            {taglines.zh} 企業系統與自動化的背景，讓我習慣用清晰的節奏拆解複雜度；十年以上的瑜珈、冥想與節氣觀修，讓我知道穩定的練習需要柔軟而有邊界的指引。
          </p>
        </div>
        <div className="card-surface p-6 bg-gradient-to-br from-slate-50 to-warmth-50 border border-slate-100 shadow-subtle">
          <h4 className="text-sm font-semibold text-slate-800">我的背景（小角落）</h4>
          <p className="text-sm text-slate-700 leading-relaxed mt-2">{backgroundNote.zh}</p>
        </div>
      </section>
    </div>
  );
}
