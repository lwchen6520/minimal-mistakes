'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { solarTerms } from '@/content/solarTerms';
import { Card } from '../components/Card';
import { SearchBox } from '../components/SearchBox';

const durationFilters = ['全部', '3-5 分鐘', '6-10 分鐘'];

export default function SolarTermsPage() {
  const [bodyFilter, setBodyFilter] = useState<string>('全部');
  const [emotionFilter, setEmotionFilter] = useState<string>('全部');
  const [durationFilter, setDurationFilter] = useState<string>('全部');
  const [query, setQuery] = useState('');

  const bodyOptions = useMemo(() => ['全部', ...new Set(solarTerms.map((item) => item.bodyTheme))], []);
  const emotionOptions = useMemo(() => ['全部', ...new Set(solarTerms.map((item) => item.emotionTheme))], []);

  const filtered = useMemo(() => {
    return solarTerms.filter((item) => {
      const matchesBody = bodyFilter === '全部' || item.bodyTheme === bodyFilter;
      const matchesEmotion = emotionFilter === '全部' || item.emotionTheme === emotionFilter;
      const matchesDuration =
        durationFilter === '全部'
          ? true
          : durationFilter === '3-5 分鐘'
            ? item.quickPractice.duration <= 5
            : item.quickPractice.duration > 5;
      const searchText = `${item.name}${item.bodyTheme}${item.emotionTheme}${item.rhythm}`.toLowerCase();
      const matchesQuery = searchText.includes(query.toLowerCase());
      return matchesBody && matchesEmotion && matchesDuration && matchesQuery;
    });
  }, [bodyFilter, durationFilter, emotionFilter, query]);

  return (
    <div className="section-shell flex flex-col gap-10">
      <div className="relative overflow-hidden rounded-3xl border border-slate-100 shadow-subtle bg-white/80 p-8 sm:p-12">
        <div className="absolute inset-0 bg-grid-warm opacity-60" aria-hidden style={{ backgroundSize: '30px 30px' }} />
        <div className="relative flex flex-col gap-3">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/70 border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 w-fit">
            節氣修行 Solar Terms
          </p>
          <h1 className="text-3xl font-semibold text-slate-900">用 24 節氣回到身體的節奏</h1>
          <p className="text-slate-700 max-w-3xl leading-relaxed">
            每張節氣卡包含氣候節奏、身體訊號、情緒方向，以及 3–5 分鐘可操作練習。依身體主題、情緒主題與時長篩選，快速找到今天需要的提醒。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 pt-2">
            <SearchBox value={query} onChange={setQuery} placeholder="搜尋節氣名稱、身體主題或節奏" />
            <div className="card-surface p-3 flex flex-col gap-2">
              <p className="text-xs text-slate-600 font-semibold">身體主題</p>
              <div className="flex flex-wrap gap-2">
                {bodyOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setBodyFilter(opt)}
                    className={`px-3 py-1 rounded-full text-xs font-semibold border transition ${
                      bodyFilter === opt
                        ? 'bg-tech-100 text-tech-800 border-tech-200'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-tech-200'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
            <div className="card-surface p-3 flex flex-col gap-2">
              <p className="text-xs text-slate-600 font-semibold">情緒主題</p>
              <div className="flex flex-wrap gap-2">
                {emotionOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setEmotionFilter(opt)}
                    className={`px-3 py-1 rounded-full text-xs font-semibold border transition ${
                      emotionFilter === opt
                        ? 'bg-warmth-100 text-warmth-800 border-warmth-200'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-warmth-200'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
            <div className="card-surface p-3 flex flex-col gap-2">
              <p className="text-xs text-slate-600 font-semibold">時長</p>
              <div className="flex flex-wrap gap-2">
                {durationFilters.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setDurationFilter(opt)}
                    className={`px-3 py-1 rounded-full text-xs font-semibold border transition ${
                      durationFilter === opt
                        ? 'bg-tech-700 text-white border-tech-700'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-tech-200'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((term) => (
          <Card
            key={term.slug}
            title={`${term.name}｜${term.timeRange}`}
            description={`${term.bodyTheme}｜${term.emotionTheme}`}
            tone="warmth"
            action={
              <Link href={`/solar-terms/${term.slug}`} className="text-sm font-semibold text-warmth-700 hover:underline">
                查看詳頁 →
              </Link>
            }
          >
            <div className="text-sm text-slate-700 leading-relaxed flex flex-col gap-2">
              <p className="font-semibold text-slate-900">節奏</p>
              <p>{term.rhythm}</p>
              <div className="rounded-2xl bg-white/70 border border-slate-200 p-3 shadow-subtle">
                <p className="font-semibold text-slate-900">3–5 分鐘練習</p>
                <p className="text-xs text-slate-500">約 {term.quickPractice.duration} 分鐘</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  {term.quickPractice.steps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
