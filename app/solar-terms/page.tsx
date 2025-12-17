'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { solarTerms } from '@/content/solarTerms';
import { Card } from '../components/Card';

const bodyThemes = ['全部', '肝膽伸展感', '脾胃暖化', '肝木舒展', '肝脾協調', '脾土養護', '心胸開展', '心小腸調理', '肺與大腸潤養', '肺氣收攝', '肺腎連接', '腎藏暖養'];
const emotionThemes = ['全部', '煩躁轉行動', '期待與耐心', '衝動與覺察', '平衡與決斷', '滋養與穩固', '感恩與節制', '熱情與節奏', '收斂與釋放', '感懷與釋然', '收斂與內觀', '沈靜與回顧'];
const durations = ['全部', '5', '6', '8', '10', '12'];

export default function SolarTermsPage() {
  const [body, setBody] = useState('全部');
  const [emotion, setEmotion] = useState('全部');
  const [duration, setDuration] = useState('全部');

  const filtered = useMemo(() => {
    return solarTerms.filter((term) => {
      const matchBody = body === '全部' || term.bodyTheme === body;
      const matchEmotion = emotion === '全部' || term.emotionTheme === emotion;
      const matchDuration = duration === '全部' || term.duration.toString() === duration;
      return matchBody && matchEmotion && matchDuration;
    });
  }, [body, duration, emotion]);

  return (
    <div className="section-shell flex flex-col gap-8">
      <section className="relative overflow-hidden rounded-3xl border border-slate-100 shadow-subtle bg-white/80">
        <div className="absolute inset-0 opacity-60 bg-grid-warm" style={{ backgroundSize: '28px 28px' }} aria-hidden />
        <div className="relative p-8 sm:p-12 flex flex-col gap-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 w-fit">
            Solar Terms / 節氣修行
          </div>
          <h1 className="text-3xl font-semibold text-slate-900">依節氣探索身體與心的節奏</h1>
          <p className="text-base text-slate-700 max-w-3xl leading-relaxed">
            至少 10 張節氣卡：包含氣候與節奏、身體訊號、心的訊號、3–5 分鐘練習與可下載的節氣卡 UI。支援依身體主題、情緒主題、時長篩選。
          </p>
        </div>
      </section>

      <div className="card-surface p-6 flex flex-col gap-4">
        <div className="flex flex-wrap gap-4 text-sm text-slate-700">
          <label className="flex flex-col gap-2">
            <span className="font-semibold text-slate-800">身體主題</span>
            <select value={body} onChange={(e) => setBody(e.target.value)}>
              {bodyThemes.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-2">
            <span className="font-semibold text-slate-800">情緒主題</span>
            <select value={emotion} onChange={(e) => setEmotion(e.target.value)}>
              {emotionThemes.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-2">
            <span className="font-semibold text-slate-800">練習時長</span>
            <select value={duration} onChange={(e) => setDuration(e.target.value)}>
              {durations.map((item) => (
                <option key={item} value={item}>
                  {item === '全部' ? '全部' : `${item} 分鐘`}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((term) => (
          <Card
            key={term.slug}
            title={`${term.name} · ${term.bodyTheme}`}
            description={`${term.range}｜情緒：${term.emotionTheme}`}
            tone="warmth"
            tags={[`身體：${term.bodyTheme}`, `情緒：${term.emotionTheme}`, `練習 ${term.duration} 分鐘`]}
            action={
              <Link href={`/solar-terms/${term.slug}`} className="text-sm font-semibold text-warmth-700 hover:underline">
                查看詳頁 →
              </Link>
            }
          >
            <div className="text-sm text-slate-700 flex flex-col gap-2">
              <p>{term.rhythm}</p>
              <div className="flex items-center justify-between text-xs text-slate-600">
                <span>{term.miniPractice}</span>
                <span className="font-semibold text-warmth-700">{term.range}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
