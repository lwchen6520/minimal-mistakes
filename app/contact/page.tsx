'use client';

import { Hero } from '../components/Hero';
import { useLanguage } from '../components/LanguageContext';

export default function ContactPage() {
  const { language } = useLanguage();

  return (
    <div className="section-shell flex flex-col gap-10">
      <Hero
        eyebrow={language === 'zh' ? 'Contact / 聯絡' : 'Contact'}
        title={language === 'zh' ? '聊聊你的專案與節奏' : 'Let’s align on your project and rhythm'}
        subtitle={
          language === 'zh'
            ? '無論是系統導入、流程優化，或是希望建立團隊的身心節奏，都可以先寫下你的想法。'
            : 'Write a few lines about your systems, automation, or the team rhythm you want to build.'
        }
        background="tech"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <form className="card-surface p-6 md:col-span-2 flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="flex flex-col gap-2 text-sm text-slate-700">
              {language === 'zh' ? '你的名字' : 'Your name'}
              <input type="text" placeholder={language === 'zh' ? '王小橋' : 'Your name'} />
            </label>
            <label className="flex flex-col gap-2 text-sm text-slate-700">
              Email
              <input type="email" placeholder="you@example.com" />
            </label>
          </div>
          <label className="flex flex-col gap-2 text-sm text-slate-700">
            {language === 'zh' ? '主題' : 'Topic'}
            <select>
              <option>{language === 'zh' ? '系統導入 / 流程' : 'Systems / Process'}</option>
              <option>{language === 'zh' ? '自動化 / RPA' : 'Automation / RPA'}</option>
              <option>{language === 'zh' ? '資料視覺化 / Power BI' : 'Data / Power BI'}</option>
              <option>{language === 'zh' ? '覺察與練習' : 'Mindfulness practice'}</option>
            </select>
          </label>
          <label className="flex flex-col gap-2 text-sm text-slate-700">
            {language === 'zh' ? '想聊的內容' : 'What would you like to discuss?'}
            <textarea rows={4} placeholder={language === 'zh' ? '描述你的現況與期待…' : 'Describe your context and hopes…'} />
          </label>
          <button type="button" className="primary self-start">
            {language === 'zh' ? '送出（示意）' : 'Send (UI only)'}
          </button>
        </form>

        <div className="card-surface p-6 flex flex-col gap-4">
          <h3 className="text-lg font-semibold text-slate-900">{language === 'zh' ? '社群與頻道' : 'Social'}</h3>
          <p className="text-sm text-slate-700">
            {language === 'zh'
              ? '留下你的節奏偏好，我會不定期分享流程與身心練習的筆記。'
              : 'Tell me your rhythm preference. I share notes on systems and practice occasionally.'}
          </p>
          <div className="flex flex-col gap-3 text-sm text-slate-700">
            <a className="tag-pill hover:border-tech-300 hover:text-tech-700" href="#">LinkedIn</a>
            <a className="tag-pill hover:border-tech-300 hover:text-tech-700" href="#">Newsletter</a>
            <a className="tag-pill hover:border-tech-300 hover:text-tech-700" href="#">Podcast</a>
          </div>
        </div>
      </div>
    </div>
  );
}
