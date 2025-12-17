import { aboutBackground, aboutSections } from '@/content/site';
import { Hero } from '../components/Hero';
import { Card } from '../components/Card';
import { useLanguage } from '../components/LanguageContext';

export default function AboutPage() {
  const { language } = useLanguage();
  const background = aboutBackground;

  return (
    <div className="section-shell flex flex-col gap-10">
      <Hero
        eyebrow={language === 'zh' ? '關於 Liv' : 'About Liv'}
        title={language === 'zh' ? '成熟、穩定、有方法的引導者' : 'A grounded guide with clear methods'}
        subtitle={
          language === 'zh'
            ? '我是一位把修行變成日常實踐的引導者，擅長正念呼吸、節氣觀修、瑜珈/冥想入門。也曾是系統與 PM，懂得把複雜概念說清楚、做得可持續。'
            : 'A guide who turns practice into daily rhythms—mindful breath, seasonal awareness, yoga/meditation fundamentals—with a systems and PM background to keep concepts clear and sustainable.'
        }
        background="warmth"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {aboutSections.map((item) => (
          <Card key={item.title} title={item.title} description={item.body} tone="warmth" />
        ))}
      </div>

      <section className="card-surface p-6 reveal-soft">
        <h3 className="text-lg font-semibold text-slate-900">{background.title}</h3>
        <p className="mt-2 text-sm text-slate-700 leading-relaxed">{background.body}</p>
        <p className="mt-3 text-xs text-slate-500">
          {language === 'zh'
            ? '我陪伴初學者時，始終提醒：這裡是身心練習分享，不替代專業醫療或心理治療。'
            : 'When guiding beginners I remind: these are body-mind practices, not replacements for medical or psychological care.'}
        </p>
      </section>
    </div>
  );
}
