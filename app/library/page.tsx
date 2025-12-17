'use client';

import { useMemo, useState } from 'react';
import { Hero } from '../components/Hero';
import { Card } from '../components/Card';
import { practiceLibrary } from '@/content/practiceData';
import { useLanguage } from '../components/LanguageContext';

const types = ['全部', '呼吸', '身體掃描', '慈心', '專注', '睡前'] as const;
type TypeFilter = (typeof types)[number];

export default function PracticeLibraryPage() {
  const { language } = useLanguage();
  const [query, setQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState<TypeFilter>('全部');

  const filtered = useMemo(() => {
    return practiceLibrary.filter((item) => {
      const typeOk = typeFilter === '全部' || item.type === typeFilter;
      const text = `${item.title} ${item.context} ${item.tags.join(' ')}`.toLowerCase();
      const queryOk = text.includes(query.toLowerCase());
      return typeOk && queryOk;
    });
  }, [query, typeFilter]);

  return (
    <div className="section-shell flex flex-col gap-10">
      <Hero
        eyebrow={language === 'zh' ? 'Practice Library' : 'Practice Library'}
        title={language === 'zh' ? '練習庫：按情境挑選' : 'Practice library by context'}
        subtitle={
          language === 'zh'
            ? '呼吸、身體掃描、慈心、專注、睡前。每個練習列出時長、難度、適合情境與注意事項。'
            : 'Breath, body scan, loving-kindness, focus, and sleep. Each entry lists duration, difficulty, context, and cautions.'
        }
        background="tech"
      />

      <section className="card-surface p-6 grid grid-cols-1 md:grid-cols-3 gap-4 reveal-soft">
        <div className="flex flex-col gap-2 md:col-span-2">
          <label className="text-xs text-slate-600">{language === 'zh' ? '搜尋練習' : 'Search practice'}</label>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={language === 'zh' ? '輸入關鍵字、情境或 tag' : 'Keywords, contexts, or tags'}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs text-slate-600">{language === 'zh' ? '類型' : 'Type'}</label>
          <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value as TypeFilter)}>
            {types.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((item) => (
          <Card
            key={item.id}
            title={`${item.title} · ${item.duration}`}
            description={`${item.type} ｜ ${item.difficulty} ｜ ${item.context}`}
            tags={item.tags}
            tone="warmth"
          >
            <p className="text-sm text-slate-700 leading-relaxed">
              <span className="font-semibold text-slate-900">注意事項：</span> {item.cautions}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}
