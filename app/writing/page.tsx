'use client';

import { useMemo, useState } from 'react';
import { categories, posts } from '@/content/posts';
import { Hero } from '../components/Hero';
import { Card } from '../components/Card';
import { SearchBox } from '../components/SearchBox';
import { useLanguage } from '../components/LanguageContext';

type Category = (typeof categories)[number] | '全部';

export default function WritingPage() {
  const { language } = useLanguage();
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<Category>('全部');

  const filtered = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory = category === '全部' || post.category === category;
      const text = `${post.title[language]} ${post.summary[language]}`.toLowerCase();
      const matchesQuery = text.includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [category, language, query]);

  return (
    <div className="section-shell flex flex-col gap-10">
      <Hero
        eyebrow={language === 'zh' ? 'Writing / 筆記' : 'Writing'}
        title={language === 'zh' ? '修行筆記：讓每一次覺察都可被翻閱' : 'Practice notes you can revisit'}
        subtitle={
          language === 'zh'
            ? '節氣筆記、呼吸與覺察、修行困惑、生活整合。每篇都有摘要、閱讀時間與 tags，前端搜尋即可找到。'
            : 'Solar term notes, breath and awareness, practice doubts, and life integration. Each comes with summary, read time, and tags.'
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
        <div className="md:col-span-2">
          <SearchBox
            value={query}
            onChange={setQuery}
            placeholder={language === 'zh' ? '搜尋標題或摘要' : 'Search title or summary'}
          />
        </div>
        <div className="flex flex-wrap gap-2 md:justify-end">
          {['全部', ...categories].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-3 py-1 rounded-full border text-xs font-semibold transition ${
                category === cat ? 'bg-tech-600 text-white border-tech-600 shadow-subtle' : 'bg-white text-slate-700 border-slate-200 hover:border-tech-300 hover:text-tech-700'
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
            title={post.title[language]}
            description={post.summary[language]}
            tone="tech"
            tags={[post.category]}
          >
            <button className="primary">{language === 'zh' ? '閱讀筆記（示意）' : 'Read note (UI)'}</button>
          </Card>
        ))}
      </div>
    </div>
  );
}
