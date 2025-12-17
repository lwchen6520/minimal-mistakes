'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { solarTerms } from '@/content/solarTerms';
import { Hero } from '../components/Hero';
import { Card } from '../components/Card';
import { SectionHeading } from '../components/SectionHeading';
import { TagFilter } from '../components/TagFilter';

export default function SolarTermsPage() {
  const [body, setBody] = useState<string>('全部');
  const [emotion, setEmotion] = useState<string>('全部');
  const [duration, setDuration] = useState<string>('全部');

  const bodyOptions = ['全部', ...Array.from(new Set(solarTerms.map((s) => s.bodyTheme)))];
  const emotionOptions = ['全部', ...Array.from(new Set(solarTerms.map((s) => s.emotionTheme)))];
  const durationOptions = ['全部', '3', '4', '5', '6', '7', '8', '10', '12', '14', '15'];

  const filtered = useMemo(() => {
    return solarTerms.filter((item) => {
      const matchBody = body === '全部' || item.bodyTheme === body;
      const matchEmotion = emotion === '全部' || item.emotionTheme === emotion;
      const matchDuration = duration === '全部' || item.duration === Number(duration);
      return matchBody && matchEmotion && matchDuration;
    });
  }, [body, duration, emotion]);

  return (
    <div className="section-shell flex flex-col gap-10">
      <Hero
        eyebrow="節氣修行"
        title="依節氣調整身體與情緒的節奏"
        subtitle="10+ 節氣卡，包含氣候節奏、身心訊號、短練習、生活提醒與可分享的節氣卡片。"
        actions={
          <div className="flex gap-3 flex-wrap">
            <Link href="/daily-practice">
              <button className="primary">開始今日練習</button>
            </Link>
            <Link href="#filters">
              <button className="secondary">快速篩選</button>
            </Link>
          </div>
        }
        background="tech"
      />

      <section id="filters" className="card-surface p-6 flex flex-col gap-4 soft-gradient-warm">
        <SectionHeading title="依身體、情緒、時長篩選" description="選擇你現在需要的節氣支持。" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <TagFilter label="身體主題" options={bodyOptions} value={body} onChange={setBody} />
          <TagFilter label="情緒主題" options={emotionOptions} value={emotion} onChange={setEmotion} />
          <TagFilter label="練習時長 (分鐘)" options={durationOptions} value={duration} onChange={setDuration} />
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((term) => (
          <Card
            key={term.slug}
            title={`${term.name}｜${term.bodyTheme}`}
            description={`${term.dateRange}｜情緒：${term.emotionTheme}｜節奏：${term.pace}`}
            tone="warmth"
            tags={[`${term.shortPractice.duration} 練習`, term.shortPractice.title]}
            action={
              <Link href={`/solar-terms/${term.slug}`} className="text-sm font-semibold text-warmth-700 hover:underline">
                查看詳頁 →
              </Link>
            }
          >
            <ul className="text-sm text-slate-700 leading-relaxed list-disc list-inside mt-2">
              {term.shortPractice.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </div>
  );
}
