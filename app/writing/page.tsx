'use client';

import { useMemo, useState } from 'react';
import { posts } from '@/content/posts';
import { Hero } from '../components/Hero';
import { Card } from '../components/Card';
import { SearchBox } from '../components/SearchBox';
import { useLanguage } from '../components/LanguageContext';

const categories = ['All', 'Product', 'Automation', 'Data', 'Mindfulness'] as const;
type Category = (typeof categories)[number];

const categoryLabels: Record<Category, { zh: string; en: string }> = {
  All: { zh: '全部', en: 'All' },
  Product: { zh: '產品', en: 'Product' },
  Automation: { zh: '自動化', en: 'Automation' },
  Data: { zh: '資料', en: 'Data' },
  Mindfulness: { zh: '覺察', en: 'Mindfulness' },
};

export default function WritingPage() {
  const { language } = useLanguage();
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<Category>('All');

  const filtered = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory = category === 'All' || post.category === category;
      const text = `${post.title[language]} ${post.summary[language]}`.toLowerCase();
      const matchesQuery = text.includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [category, language, query]);

  return (
    <div className="section-shell flex flex-col gap-10">
      <Hero
        eyebrow={language === 'zh' ? 'Writing / 筆記' : 'Writing'}
        title={language === 'zh' ? '把經驗寫成可複用的模組' : 'Write modules others can reuse'}
        subtitle={
          language === 'zh'
            ? '產品、流程、自動化、資料、覺察，全部用可驗證的語言記錄。'
            : 'Product, process, automation, data, mindfulness—captured in clear, verifiable language.'
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
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-3 py-1 rounded-full border text-xs font-semibold transition ${
                category === cat
                  ? 'bg-tech-600 text-white border-tech-600 shadow-subtle'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-tech-300 hover:text-tech-700'
              }`}
            >
              {categoryLabels[cat][language]}
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
            tags={[categoryLabels[post.category][language]]}
          >
            <button className="primary">{language === 'zh' ? '閱讀筆記（示意）' : 'Read note (UI)'}</button>
          </Card>
        ))}
      </div>
    </div>
  );
}
