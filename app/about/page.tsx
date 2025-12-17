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
        eyebrow={language === 'zh' ? 'About / 關於' : 'About'}
        title={language === 'zh' ? '三段路徑，讓修行變成日常' : 'Three ways I ground practice into daily life'}
        subtitle={
          language === 'zh'
            ? '我不是在做履歷，而是分享一條路：走向修行、讓修行落地、陪伴初學者。每一步都尊重身體、尊重界線。'
            : 'Not a resume, but a path: how I walked into practice, grounded it, and hold beginners—always respecting bodies and boundaries.'
        }
        background="warmth"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sections.map((item) => (
          <div key={item.title} className="card-surface p-6 relative overflow-hidden">
            <div className="absolute right-4 top-4 h-16 w-16" aria-hidden>
              <svg className="pattern" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="100" r="70" stroke="rgba(74,127,224,0.25)" strokeWidth="8" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
            <p className="mt-2 text-sm text-slate-700 leading-relaxed">{item.body}</p>
          </div>
        ))}
      </div>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card-surface p-6 md:col-span-2">
          <h2 className="text-xl font-semibold text-slate-900">{language === 'zh' ? '我的背景' : 'Background'}</h2>
          <p className="text-sm text-slate-700 mt-2 leading-relaxed">
            {language === 'zh'
              ? '曾任企業系統與專案 PM，熟悉流程、系統與自動化。現在以 Liv Jaijot Kaur (Sonia Chen) 陪伴初學者，用方法論讓練習可持續。'
              : 'Former enterprise systems and project PM—fluent in process, systems, and automation. Now, as Liv Jaijot Kaur (Sonia Chen), I accompany beginners and use methodology to keep practice sustainable.'}
          </p>
          <p className="text-sm text-slate-700 mt-3 leading-relaxed">
            {language === 'zh'
              ? '界線與原則：不診斷、不替代醫療；只提供可操作的身心練習，並提醒你聆聽自己的身體。'
              : 'Boundaries and principles: I do not diagnose or replace medical care. I offer actionable mind-body practices and invite you to listen to your own body.'}
          </p>
        </div>
        <div className="card-surface p-6">
          <h3 className="text-lg font-semibold text-slate-900">{language === 'zh' ? '時間線' : 'Timeline'}</h3>
          <p className="text-sm text-slate-600 mt-2">{language === 'zh' ? '每個轉折都讓我更懂得照顧節奏。' : 'Each turn refined my sense of rhythm.'}</p>
          <Timeline />
        </div>
      </section>
    </div>
  );
}
