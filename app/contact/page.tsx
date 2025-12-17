'use client';

import { Hero } from '../components/Hero';

const purposes = ['合作', '授課', '分享'] as const;

export default function ContactPage() {
  return (
    <div className="section-shell flex flex-col gap-10">
      <Hero
        eyebrow="聯絡"
        title="合作、授課或分享，請留下訊息"
        subtitle="內容為身心練習分享，不替代專業醫療或心理治療。若有症狀，請優先尋求專業協助。"
        background="tech"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <form className="card-surface p-6 md:col-span-2 flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="flex flex-col gap-2 text-sm text-slate-700">
              你的名字
              <input type="text" placeholder="王小橋" />
            </label>
            <label className="flex flex-col gap-2 text-sm text-slate-700">
              Email
              <input type="email" placeholder="you@example.com" />
            </label>
          </div>
          <label className="flex flex-col gap-2 text-sm text-slate-700">
            聯絡目的
            <div className="flex flex-wrap gap-2">
              {purposes.map((purpose) => (
                <button key={purpose} type="button" className="tag-pill hover:border-tech-300 hover:text-tech-700">
                  {purpose}
                </button>
              ))}
            </div>
          </label>
          <label className="flex flex-col gap-2 text-sm text-slate-700">
            想聊的內容
            <textarea rows={4} placeholder="請描述你目前的需要、時程或期待…" />
          </label>
          <button type="button" className="primary self-start">
            送出（UI 示意）
          </button>
        </form>

        <div className="card-surface p-6 flex flex-col gap-4">
          <h3 className="text-lg font-semibold text-slate-900">溫柔提醒</h3>
          <p className="text-sm text-slate-700 leading-relaxed">
            我提供的是呼吸、節氣觀修、瑜珈與冥想的引導與筆記分享；任何與醫療或診斷相關的需求，請與專業醫師或治療師聯繫。
          </p>
          <div className="flex flex-col gap-3 text-sm text-slate-700">
            <span className="tag-pill">回覆時間：2–3 個工作日內</span>
            <span className="tag-pill">建議先附上你的時區與可通話時段</span>
            <span className="tag-pill">合作可提供中文 / English</span>
          </div>
        </div>
      </div>
    </div>
  );
}
