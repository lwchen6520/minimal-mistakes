'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navLinks } from '@/content/site';
import { useLanguage } from './LanguageContext';

export function Header() {
  const { language } = useLanguage();
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 bg-white/75 backdrop-blur border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2 font-semibold text-slate-900">
          <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-warmth-200 to-tech-200 shadow-subtle flex items-center justify-center text-xs text-slate-800">
            Liv
          </div>
          <div className="leading-tight">
            <p className="text-sm text-slate-700">日常修行</p>
            <p className="text-xs text-slate-500">Practice daily · Stay grounded</p>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-3 text-sm text-slate-700">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.key}
                href={link.href}
                className={`px-3 py-2 rounded-2xl transition ${
                  active
                    ? 'bg-warmth-100 text-warmth-800 border border-warmth-200'
                    : 'hover:bg-slate-100 text-slate-700'
                }`}
              >
                {language === 'zh' ? link.zh : link.en}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-3 text-xs text-slate-600">
          <span className="hidden sm:inline">{language === 'zh' ? '溫柔漸層 · 輕盈滾動' : 'Soft gradients · Gentle scroll'}</span>
        </div>
      </div>
    </header>
  );
}
