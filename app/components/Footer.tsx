'use client';

import Link from 'next/link';
import { navLinks } from '@/content/site';
import { useLanguage } from './LanguageContext';

export function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="border-t border-slate-200 bg-white/70 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-slate-600">
        <div>
          <p className="font-semibold text-slate-800">Liv Jaijot Kaur · Sonia Chen</p>
          <p className="mt-2 text-slate-600">把修行變成日常，把日常變成修行。</p>
          <p className="mt-2 text-slate-500">
            {language === 'zh'
              ? 'Practice daily. Live gently. Stay grounded.'
              : 'Practice daily. Live gently. Stay grounded.'}
          </p>
        </div>
        <div className="flex flex-wrap gap-3 sm:justify-end">
          {navLinks.map((link) => (
            <Link key={link.key} href={link.href} className="text-slate-600 hover:text-tech-700">
              {language === 'zh' ? link.zh : link.en}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
