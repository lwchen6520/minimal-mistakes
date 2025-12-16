'use client';

import { useMemo, useState } from 'react';
import { caseStudies } from '@/content/caseStudies';
import { Hero } from '../components/Hero';
import { Card } from '../components/Card';
import { TagFilter } from '../components/TagFilter';
import { SectionHeading } from '../components/SectionHeading';
import { useLanguage } from '../components/LanguageContext';

const tagOptions = Array.from(new Set(caseStudies.flatMap((c) => c.tags)));

export default function WorkPage() {
  const { language } = useLanguage();
  const [activeTag, setActiveTag] = useState<string>('all');

  const filtered = useMemo(() => {
    if (activeTag === 'all') return caseStudies;
    return caseStudies.filter((c) => c.tags.includes(activeTag));
  }, [activeTag]);

  return (
    <div className="section-shell flex flex-col gap-10">
      <Hero
        eyebrow={language === 'zh' ? 'Systems / Case Studies' : 'Systems'}
        title={language === 'zh' ? '把系統做清楚，把成果說人話' : 'Clear systems, honest outcomes'}
        subtitle={
          language === 'zh'
            ? '真實案子的語言，包含背景、問題、方案與學到的事。'
            : 'Case studies with background, problem, solution, contribution, outcomes, and learnings.'
        }
        background="tech"
      />

      <div className="flex flex-col gap-4">
        <SectionHeading
          title={language === 'zh' ? '篩選 Tags' : 'Filter by tags'}
          accent={<div className="h-2 w-12 rounded-full bg-gradient-to-r from-tech-400 to-warmth-400" />}
        />
        <TagFilter
          tags={tagOptions}
          active={activeTag}
          onChange={setActiveTag}
          allLabel={language === 'zh' ? '全部' : 'All'}
          allValue="all"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((item) => (
          <Card
            key={item.id}
            title={`${item.client[language]}`}
            description={item.background[language]}
            tags={item.tags}
            tone="tech"
          >
            <div className="grid grid-cols-1 gap-2 text-sm text-slate-700 leading-relaxed">
              <p>
                <span className="font-semibold text-slate-800">{language === 'zh' ? '問題：' : 'Problem: '}</span>
                {item.problem[language]}
              </p>
              <p>
                <span className="font-semibold text-slate-800">{language === 'zh' ? '方案：' : 'Solution: '}</span>
                {item.solution[language]}
              </p>
              <p>
                <span className="font-semibold text-slate-800">{language === 'zh' ? '我負責：' : 'Role: '}</span>
                {item.contribution[language]}
              </p>
              <p>
                <span className="font-semibold text-slate-800">{language === 'zh' ? '成果：' : 'Outcome: '}</span>
                {item.outcome[language]}
              </p>
              <p className="text-tech-800">
                <span className="font-semibold text-slate-800">{language === 'zh' ? '學到什麼：' : 'Learning: '}</span>
                {item.learnings[language]}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
