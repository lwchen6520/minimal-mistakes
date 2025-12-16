import Link from 'next/link';
import { Hero } from './components/Hero';
import { Card } from './components/Card';
import { SectionHeading } from './components/SectionHeading';
import { howIWork, taglines } from '@/content/site';
import { useLanguage } from './components/LanguageContext';

function HowIWork() {
  const { language } = useLanguage();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {howIWork.map((item) => (
        <Card
          key={item.key}
          title={item[language].title}
          description={item[language].description}
          tone={item.key === 'deliver' ? 'tech' : item.key === 'debrief' ? 'warmth' : 'tech'}
        />
      ))}
    </div>
  );
}

function HomeContent() {
  const { language } = useLanguage();
  return (
    <div className="section-shell flex flex-col gap-12">
      <Hero
        eyebrow={language === 'zh' ? '系統 × 身心的橋接者' : 'Bridging systems and presence'}
        title={language === 'zh' ? '理性系統感 × 靈性溫度' : 'Clear systems with a calm cadence'}
        subtitle={taglines[language]}
        actions={
          <div className="flex gap-3 flex-wrap">
            <Link href="/work">
              <button className="primary">{language === 'zh' ? '查看作品' : 'View systems'}</button>
            </Link>
            <Link href="/practice">
              <button className="secondary">{language === 'zh' ? '節氣練習' : 'Seasonal practice'}</button>
            </Link>
          </div>
        }
        background="tech"
      />

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card
          title={language === 'zh' ? 'Systems' : 'Systems'}
          description={
            language === 'zh'
              ? 'SAP / RPA / Power BI / AI：把流程、數據、決策整合成透明的節奏。'
              : 'SAP / RPA / Power BI / AI. Integrate process, data, and decision rhythms.'
          }
          tone="tech"
          action={
            <Link href="/work" className="text-sm font-semibold text-tech-700 hover:underline">
              {language === 'zh' ? '看案例 →' : 'View cases →'}
            </Link>
          }
        />
        <Card
          title={language === 'zh' ? 'Practice' : 'Practice'}
          description={
            language === 'zh'
              ? '節氣 × 身體感：呼吸、拉伸、覺察的日常節奏，讓專注可被維持。'
              : 'Seasonal bodywork: breath, stretch, and awareness as daily cadence.'
          }
          tone="warmth"
          action={
            <Link href="/practice" className="text-sm font-semibold text-warmth-700 hover:underline">
              {language === 'zh' ? '查看節氣卡 →' : 'See practice list →'}
            </Link>
          }
        />
        <Card
          title={language === 'zh' ? 'Writing' : 'Writing'}
          description={
            language === 'zh'
              ? '用清晰的語言整理方法論與觀察，讓系統與修行都能被理解。'
              : 'Writing to keep methods clear and practice grounded.'
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
          title={language === 'zh' ? '我如何工作' : 'How I work'}
          description={
            language === 'zh'
              ? '用可觀察的節奏把複雜度拆解，讓團隊在清晰與安定中前進。'
              : 'Observable rhythms to hold complexity, so teams can move with clarity and calm.'
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
