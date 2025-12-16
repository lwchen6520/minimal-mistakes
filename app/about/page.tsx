import { aboutSections } from '@/content/site';
import { Hero } from '../components/Hero';
import { Timeline } from '../components/Timeline';
import { useLanguage } from '../components/LanguageContext';

export default function AboutPage() {
  const { language } = useLanguage();
  const sections = aboutSections[language];

  return (
    <div className="section-shell flex flex-col gap-10">
      <Hero
        eyebrow={language === 'zh' ? '關於我' : 'About'}
        title={language === 'zh' ? '把方法論說清楚，把練習做紮實' : 'Clear methods, grounded practice'}
        subtitle={
          language === 'zh'
            ? '我在企業流程與身心練習之間搭橋，讓決策與呼吸都有穩定節奏。'
            : 'I bridge enterprise flows and embodied practice, keeping decisions and breath in a steady cadence.'
        }
        background="warmth"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sections.map((item) => (
          <div key={item.title} className="card-surface p-6">
            <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
            <p className="mt-2 text-sm text-slate-700 leading-relaxed">{item.body}</p>
          </div>
        ))}
      </div>

      <section>
        <h2 className="text-xl font-semibold text-slate-900">{language === 'zh' ? '時間線' : 'Timeline'}</h2>
        <p className="text-sm text-slate-600 mt-2">
          {language === 'zh'
            ? '每一次的轉折都是把工具與人重新對齊，讓專案與身心都有更好的節奏。'
            : 'Each turn realigned tools and people, keeping projects and practice in sync.'}
        </p>
        <Timeline />
      </section>
    </div>
  );
}
