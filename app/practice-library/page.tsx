'use client';

import { useMemo, useState } from 'react';
import { practiceLibrary, type PracticeCategory } from '@/content/practiceLibrary';
import { Card } from '../components/Card';
import { SearchBox } from '../components/SearchBox';

const categories: (PracticeCategory | '全部')[] = ['全部', '呼吸', '身體掃描', '慈心', '專注', '睡前'];

export default function PracticeLibraryPage() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<(typeof categories)[number]>('全部');

  const filtered = useMemo(() => {
    return practiceLibrary.filter((item) => {
      const matchesCategory = category === '全部' || item.category === category;
      const matchesQuery = `${item.title} ${item.scene} ${item.tags.join(' ')}`.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <div className="section-shell flex flex-col gap-8">
      <section className="relative overflow-hidden rounded-3xl border border-slate-100 shadow-subtle bg-white/85">
        <div className="absolute inset-0 opacity-60 bg-grid-tech" style={{ backgroundSize: '28px 28px' }} aria-hidden />
        <div className="relative p-8 sm:p-12 flex flex-col gap-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 w-fit">
            Practice Library / 練習庫
          </div>
          <h1 className="text-3xl font-semibold text-slate-900">呼吸、身體掃描、慈心、專注、睡前</h1>
          <p className="text-base text-slate-700 max-w-3xl leading-relaxed">
            每個練習都包含時長、難度、適合情境、禁忌／注意事項。支援搜尋與標籤篩選，找到當下最合適的節奏。
          </p>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
        <div className="md:col-span-2">
          <SearchBox value={query} onChange={setQuery} placeholder="搜尋練習名稱或情境" />
        </div>
        <div className="flex flex-wrap gap-2 md:justify-end">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-3 py-1 rounded-full border text-xs font-semibold transition ${
                category === cat ? 'bg-tech-600 text-white border-tech-600 shadow-subtle' : 'bg-white text-slate-700 border-slate-200 hover:border-tech-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((item) => (
          <Card
            key={item.id}
            title={`${item.title}｜${item.duration}`}
            description={`情境：${item.scene}`}
            tone={item.category === '睡前' ? 'warmth' : 'tech'}
            tags={[item.category, `難度：${item.difficulty}`, ...item.tags]}
            action={<button className="secondary w-full sm:w-auto">加入我的練習（示意）</button>}
          >
            <p className="text-sm text-slate-700 leading-relaxed">注意事項：{item.cautions}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
