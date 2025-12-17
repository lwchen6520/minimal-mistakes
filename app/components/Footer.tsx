'use client';

import Link from 'next/link';
import { navLinks, taglines } from '@/content/site';
import { useLanguage } from './LanguageContext';

export function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="border-t border-slate-200 bg-white/70 backdrop-blur mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-slate-600">
        <div>
          <p className="font-semibold text-slate-800">Liv · Daily Practice</p>
          <p className="mt-2 text-slate-600">{taglines[language]}</p>
          <p className="mt-2 text-slate-500">正念呼吸 · 節氣觀修 · 瑜珈/冥想入門 · 修行筆記</p>
        </div>
        <div className="flex flex-wrap gap-3 sm:justify-end">
          {navLinks.map((link) => (
            <Link key={link.key} href={link.href} className="text-slate-600 hover:text-warmth-700">
              {language === 'zh' ? link.zh : link.en}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
