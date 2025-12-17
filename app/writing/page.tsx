'use client';

import { useMemo, useState } from 'react';
import { Hero } from '../components/Hero';
import { Card } from '../components/Card';
import { SearchBox } from '../components/SearchBox';
import { writingEntries } from '@/content/practiceData';
import { useLanguage } from '../components/LanguageContext';

const categories = ['全部', '節氣筆記', '呼吸與覺察', '修行困惑', '生活整合'] as const;
type Category = (typeof categories)[number];

export default function WritingPage() {
  const { language } = useLanguage();
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<Category>('全部');

  const filtered = useMemo(() => {
    return writingEntries.filter((post) => {
      const matchesCategory = category === '全部' || post.category === category;
      const text = `${post.title} ${post.summary} ${post.tags.join(' ')}`.toLowerCase();
      const matchesQuery = text.includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <div className="section-shell flex flex-col gap-10">
      <Hero
        eyebrow={language === 'zh' ? '修行筆記' : 'Writing'}
        title={language === 'zh' ? '把感受寫清楚，讓練習可重複' : 'Write clearly so practice can repeat'}
        subtitle={
          language === 'zh'
            ? '節氣筆記、呼吸覺察、修行困惑、生活整合，搭配摘要、閱讀時間與 tags。'
            : 'Seasonal notes, breath awareness, practice questions, and daily integration with summaries, read time, and tags.'
        }
        background="warmth"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
        <div className="md:col-span-2">
          <SearchBox value={query} onChange={setQuery} placeholder={language === 'zh' ? '搜尋標題、摘要或 tag' : 'Search by title, summary, or tag'} />
        </div>
        <div className="flex flex-wrap gap-2 md:justify-end">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-3 py-1 rounded-full border text-xs font-semibold transition ${
                category === cat
                  ? 'bg-emerald-600 text-white border-emerald-600 shadow-subtle'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-emerald-300 hover:text-emerald-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((post) => (
          <Card
            key={post.id}
            title={`${post.title} · ${post.readTime}`}
            description={post.summary}
            tone="tech"
            tags={post.tags}
          >
            <button className="primary">{language === 'zh' ? '閱讀筆記（示意）' : 'Read note (UI)'}</button>
          </Card>
        ))}
      </div>
    </div>
  );
}
