'use client';

import { useMemo, useState } from 'react';
import { practices } from '@/content/practices';
import { Hero } from '../components/Hero';
import { Card } from '../components/Card';
import { SearchBox } from '../components/SearchBox';
import { TagFilter } from '../components/TagFilter';

const categories = ['全部', '呼吸', '身體掃描', '慈心', '專注', '睡前'] as const;

export default function PracticeLibraryPage() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<(typeof categories)[number]>('全部');

  const filtered = useMemo(() => {
    return practices.filter((practice) => {
      const matchCategory = category === '全部' || practice.category === category;
      const text = `${practice.title}${practice.context}${practice.cautions}${practice.tags.join('')}`.toLowerCase();
      const matchQuery = text.includes(query.toLowerCase());
      return matchCategory && matchQuery;
    });
  }, [category, query]);

  return (
    <div className="section-shell flex flex-col gap-10">
      <Hero
        eyebrow="Practice Library"
        title="呼吸、身體掃描、慈心、專注、睡前的工具箱"
        subtitle="每個練習都有時長、難度、情境與注意事項，先搜尋再挑選，避免過度練習。"
        background="tech"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
        <div className="md:col-span-2">
          <SearchBox
            value={query}
            onChange={setQuery}
            placeholder="搜尋標題、情境或 tags"
          />
        </div>
        <TagFilter label="類型" options={categories} value={category} onChange={setCategory} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((practice) => (
          <Card
            key={practice.id}
            title={practice.title}
            description={practice.context}
            tags={[practice.category, practice.duration, `難度：${practice.difficulty}`]}
            tone="warmth"
          >
            <div className="flex flex-col gap-2 text-sm text-slate-700 leading-relaxed">
              <p>適合情境：{practice.context}</p>
              <p>禁忌 / 注意：{practice.cautions}</p>
              <div className="flex flex-wrap gap-2">
                {practice.tags.map((tag) => (
                  <span key={tag} className="tag-pill">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
