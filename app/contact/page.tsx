'use client';

import { Hero } from '../components/Hero';
import { useLanguage } from '../components/LanguageContext';

export default function ContactPage() {
  const { language } = useLanguage();

  return (
    <div className="section-shell flex flex-col gap-10">
      <Hero
        eyebrow={language === 'zh' ? 'Contact / 聯絡' : 'Contact'}
        title={language === 'zh' ? '溫柔且清晰地聯絡我' : 'Reach out gently and clearly'}
        subtitle={
          language === 'zh'
            ? '填寫下方表單，選擇合作/授課/分享的目的，簡述你的需要。內容為身心練習分享，不替代專業醫療或心理治療。'
            : 'Use the form to choose collaboration, teaching, or sharing. This space offers practice guidance only and does not replace medical or psychological care.'
        }
        background="warmth"
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
            {language === 'zh' ? '聯絡目的' : 'Purpose'}
            <select>
              <option>{language === 'zh' ? '合作' : 'Collaboration'}</option>
              <option>{language === 'zh' ? '授課 / 帶練' : 'Teaching / Guided practice'}</option>
              <option>{language === 'zh' ? '分享 / 演講' : 'Sharing / Talk'}</option>
            </select>
          </label>
          <label className="flex flex-col gap-2 text-sm text-slate-700">
            {language === 'zh' ? '想聊的內容' : 'What would you like to discuss?'}
            <textarea rows={4} placeholder={language === 'zh' ? '描述你的現況與期待…' : 'Describe your context and hopes…'} />
          </label>
          <div className="rounded-2xl bg-gradient-to-r from-tech-50 to-warmth-50 border border-slate-100 px-4 py-3 text-xs text-slate-600">
            {language === 'zh'
              ? '界線提醒：這裡分享的是身心練習與覺察方法，不進行診斷，也不替代專業醫療或心理治療。若有醫療需求，請優先尋求專業協助。'
              : 'Boundary reminder: this space shares practice and awareness methods, not diagnosis or medical/psychological treatment. Please seek professional care when needed.'}
          </div>
          <button type="button" className="primary self-start">
            {language === 'zh' ? '送出（示意）' : 'Send (UI only)'}
          </button>
        </form>

        <div className="card-surface p-6 flex flex-col gap-4">
          <h3 className="text-lg font-semibold text-slate-900">{language === 'zh' ? '我如何回覆' : 'How I respond'}</h3>
          <p className="text-sm text-slate-700">
            {language === 'zh'
              ? '我會在 3 個工作日內以 Email 回覆，並附上一小段「呼吸/覺察建議」作為謝謝你寫信的回禮。'
              : 'I reply within three business days with an email and a short breath/awareness suggestion as a thank-you.'}
          </p>
          <div className="flex flex-col gap-3 text-sm text-slate-700">
            <div className="tag-pill">合作：共創課程、工作坊、節氣分享</div>
            <div className="tag-pill">授課：企業/社群的呼吸與覺察入門</div>
            <div className="tag-pill">分享：節氣身心筆記、修行路徑</div>
          </div>
        </div>
      </div>
    </div>
  );
}
