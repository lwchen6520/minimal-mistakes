'use client';

import { useState } from 'react';
import { Hero } from '../components/Hero';
import { Card } from '../components/Card';
import { useLanguage } from '../components/LanguageContext';

export default function ContactPage() {
  const { language } = useLanguage();
  const [purpose, setPurpose] = useState('合作');

  return (
    <div className="section-shell flex flex-col gap-10">
      <Hero
        eyebrow={language === 'zh' ? '聯絡' : 'Contact'}
        title={language === 'zh' ? '溫柔且清晰的聯絡方式' : 'Gentle and clear contact'}
        subtitle={
          language === 'zh'
            ? '合作 / 授課 / 分享。所有內容為身心練習分享，不替代專業醫療或心理治療。'
            : 'Collaborations, teaching, and sharing. These are practice sharings—not medical or therapeutic replacements.'
        }
        background="tech"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card title={language === 'zh' ? '聯絡表單' : 'Contact form'} tone="warmth">
          <form className="space-y-4">
            <div className="flex flex-col gap-2">
              <label className="text-xs text-slate-600">{language === 'zh' ? '姓名 / 稱呼' : 'Name'}</label>
              <input type="text" placeholder={language === 'zh' ? '如何稱呼你？' : 'How should I address you?'} />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs text-slate-600">Email</label>
              <input type="email" placeholder="you@example.com" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs text-slate-600">{language === 'zh' ? '聯絡目的' : 'Purpose'}</label>
              <div className="flex flex-wrap gap-2">
                {['合作', '授課', '分享'].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setPurpose(item)}
                    className={`px-3 py-2 rounded-2xl border text-xs font-semibold transition ${
                      purpose === item
                        ? 'bg-emerald-600 text-white border-emerald-600'
                        : 'bg-white/70 border-slate-200 hover:border-emerald-200'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs text-slate-600">{language === 'zh' ? '訊息' : 'Message'}</label>
              <textarea rows={4} placeholder={language === 'zh' ? '你想要的合作/課程/分享主題？' : 'What would you like to explore together?'} />
            </div>
            <button type="button" className="primary w-full md:w-auto">
              {language === 'zh' ? '送出（示意）' : 'Send (UI only)'}
            </button>
          </form>
        </Card>

        <Card title={language === 'zh' ? '回信節奏與界線' : 'Response cadence and boundaries'} tone="tech">
          <ul className="list-disc list-inside space-y-2 text-slate-700">
            <li>48 小時內回覆初步需求，確認是否合適。</li>
            <li>若涉及身心疾患，會建議先諮詢專業醫療或心理治療。</li>
            <li>合作時會提供簡短的需求問卷，確保練習與安全性。</li>
          </ul>
        </Card>
      </div>
    </div>
  );
}
