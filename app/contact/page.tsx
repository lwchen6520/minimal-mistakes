'use client';

import { useState } from 'react';
import { Hero } from '../components/Hero';

export default function ContactPage() {
  const [purpose, setPurpose] = useState('合作');

  return (
    <div className="section-shell flex flex-col gap-10">
      <Hero
        eyebrow="Contact / 聯絡"
        title="溫柔但清晰的聯繫"
        subtitle="留下你的需求與期待。無論是合作、授課或分享，我會以穩定的節奏回覆，也提醒：內容為身心練習分享，不替代專業醫療或心理治療。"
        background="warmth"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <form className="card-surface p-6 md:col-span-2 flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="flex flex-col gap-2 text-sm text-slate-700">
              你的名字
              <input type="text" placeholder="你希望被怎麼稱呼" />
            </label>
            <label className="flex flex-col gap-2 text-sm text-slate-700">
              Email
              <input type="email" placeholder="you@example.com" />
            </label>
          </div>
          <label className="flex flex-col gap-2 text-sm text-slate-700">
            聯絡目的
            <div className="flex flex-wrap gap-2">
              {['合作', '授課', '分享'].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setPurpose(item)}
                  className={`px-3 py-1 rounded-full text-xs font-semibold border transition ${
                    purpose === item
                      ? 'bg-tech-700 text-white border-tech-700 shadow-subtle'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-tech-200'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </label>
          <label className="flex flex-col gap-2 text-sm text-slate-700">
            想聊的內容
            <textarea rows={4} placeholder="描述你的時間、需求、受眾或想解決的困惑…" />
          </label>
          <label className="flex flex-col gap-2 text-sm text-slate-700">
            任何備註
            <textarea rows={3} placeholder="例如：偏好的聯絡時間、是否需要線上 / 實體" />
          </label>
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <p className="text-xs text-slate-500">內容為身心練習分享，不替代專業醫療或心理治療。</p>
            <button type="button" className="primary">
              送出訊息（示意）
            </button>
          </div>
        </form>

        <div className="card-surface p-6 flex flex-col gap-4">
          <h3 className="text-lg font-semibold text-slate-900">我會怎麼回覆</h3>
          <p className="text-sm text-slate-700 leading-relaxed">
            你的訊息會在 1-2 個工作天內得到回覆。若需要安排體驗式分享或企業內訓，會先確認需求、時間與安全界線，才提供建議的節奏與大綱。
          </p>
          <div className="rounded-2xl bg-white/80 border border-slate-200 p-4 shadow-subtle">
            <p className="text-xs uppercase tracking-wide text-slate-500">界線提醒</p>
            <p className="text-sm text-slate-700 mt-2">我不提供診斷或醫療建議，所有練習以溫和、可撤退為原則。</p>
          </div>
        </div>
      </div>
    </div>
  );
}
