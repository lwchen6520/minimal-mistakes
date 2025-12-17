'use client';

import { useMemo, useState } from 'react';
import { practiceLibrary } from '@/content/practiceLibrary';
import { Card } from '../components/Card';
import { SearchBox } from '../components/SearchBox';

const categories = ['全部', '呼吸', '身體掃描', '慈心', '專注', '睡前'];

export default function PracticeLibraryPage() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<string>('全部');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    practiceLibrary.forEach((item) => item.tags.forEach((tag) => tags.add(tag)));
    return Array.from(tags);
  }, []);

  const filtered = useMemo(() => {
    return practiceLibrary.filter((item) => {
      const matchesCategory = category === '全部' || item.category === category;
      const matchesQuery = `${item.title}${item.context}${item.caution}`.toLowerCase().includes(query.toLowerCase());
      const matchesTags = selectedTags.length === 0 || selectedTags.every((tag) => item.tags.includes(tag));
      return matchesCategory && matchesQuery && matchesTags;
    });
  }, [category, query, selectedTags]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]));
  };

  return (
    <div className="section-shell flex flex-col gap-10">
      <div className="relative overflow-hidden rounded-3xl border border-slate-100 shadow-subtle bg-white/80 p-8 sm:p-12">
        <div className="absolute inset-0 bg-grid-tech opacity-60" aria-hidden style={{ backgroundSize: '30px 30px' }} />
        <div className="relative flex flex-col gap-4">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/70 border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 w-fit">
            Practice Library
          </p>
          <h1 className="text-3xl font-semibold text-slate-900">呼吸、身體掃描、慈心、專注、睡前</h1>
          <p className="text-slate-700 max-w-3xl leading-relaxed">
            為不同情境準備好的練習卡：每篇都有時長、難度、適合情境與注意事項。可以透過搜尋與標籤快速找到需要的組合。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <SearchBox value={query} onChange={setQuery} placeholder="搜尋練習、情境或注意事項" />
            <div className="flex flex-wrap gap-2">
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
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`px-3 py-1 rounded-full text-xs font-semibold border transition ${
                    selectedTags.includes(tag)
                      ? 'bg-warmth-600 text-white border-warmth-600'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-warmth-200'
                  }`}
                >
                  #{tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            description={`${item.duration}｜${item.difficulty}｜${item.category}`}
            tone="tech"
            tags={item.tags}
          >
            <div className="text-sm text-slate-700 leading-relaxed flex flex-col gap-2">
              <p className="font-semibold text-slate-900">適合情境</p>
              <p>{item.context}</p>
              <p className="font-semibold text-slate-900">禁忌 / 注意事項</p>
              <p>{item.caution}</p>
              <button className="primary w-full sm:w-auto mt-2">閱讀完整練習（示意）</button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
