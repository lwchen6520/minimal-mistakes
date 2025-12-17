'use client';

import { useMemo, useState } from 'react';
import { posts } from '@/content/posts';
import { Hero } from '../components/Hero';
import { Card } from '../components/Card';
import { SearchBox } from '../components/SearchBox';

const categories = ['全部', '節氣筆記', '呼吸與覺察', '修行困惑', '生活整合'] as const;
type Category = (typeof categories)[number];

export default function WritingPage() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<Category>('全部');

  const filtered = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory = category === '全部' || post.category === category;
      const text = `${post.title} ${post.summary} ${post.tags.join(' ')}`.toLowerCase();
      const matchesQuery = text.includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <div className="section-shell flex flex-col gap-10">
      <Hero
        eyebrow="修行筆記"
        title="節氣筆記、呼吸線索、整合生活的練習心得"
        subtitle="每篇附摘要、閱讀時間與 tags，可依類別或關鍵字搜尋。"
        background="warmth"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
        <div className="md:col-span-2">
          <SearchBox value={query} onChange={setQuery} placeholder="搜尋標題、摘要或 tags" />
        </div>
        <div className="flex flex-wrap gap-2 md:justify-end">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-3 py-2 rounded-full border text-xs font-semibold transition ${
                category === cat
                  ? 'bg-warmth-600 text-white border-warmth-600 shadow-subtle'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-warmth-300 hover:text-warmth-700'
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
            title={post.title}
            description={`${post.summary}`}
            tone="tech"
            tags={[post.category, post.readTime, ...post.tags]}
          >
            <button className="primary">閱讀筆記（UI 示意）</button>
          </Card>
        ))}
      </div>
    </div>
  );
}
