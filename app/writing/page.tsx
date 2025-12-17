'use client';

import { useMemo, useState } from 'react';
import { posts } from '@/content/posts';
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
      const text = `${post.title.zh} ${post.summary.zh}`.toLowerCase();
      const matchesQuery = text.includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <div className="section-shell flex flex-col gap-10">
      <div className="relative overflow-hidden rounded-3xl border border-slate-100 shadow-subtle bg-white/80 p-8 sm:p-12">
        <div className="absolute inset-0 bg-grid-tech opacity-60" aria-hidden style={{ backgroundSize: '30px 30px' }} />
        <div className="relative flex flex-col gap-3">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/70 border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 w-fit">
            Writing / 修行筆記
          </p>
          <h1 className="text-3xl font-semibold text-slate-900">把修行寫成可操作的筆記</h1>
          <p className="text-slate-700 max-w-3xl leading-relaxed">
            類別包含節氣筆記、呼吸與覺察、修行困惑、生活整合。每篇都有摘要、閱讀時間與 tags，方便快速找到需要的提醒。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-2">
            <SearchBox value={query} onChange={setQuery} placeholder="搜尋標題、摘要或 tags" />
            <div className="md:col-span-2 flex flex-wrap gap-2 md:justify-end">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-3 py-1 rounded-full text-xs font-semibold border transition ${
                    category === cat
                      ? 'bg-tech-700 text-white border-tech-700 shadow-subtle'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-tech-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((post) => (
          <Card
            key={post.id}
            title={post.title.zh}
            description={`${post.summary.zh}｜${post.readTime}`}
            tone="tech"
            tags={post.tags}
          >
            <button className="primary">閱讀筆記（示意）</button>
          </Card>
        ))}
      </div>
    </div>
  );
}
