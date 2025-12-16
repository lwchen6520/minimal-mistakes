'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navLinks } from '@/content/site';
import { useLanguage } from './LanguageContext';

export function Header() {
  const { language, toggleLanguage } = useLanguage();
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 bg-white/70 backdrop-blur border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2 font-semibold text-slate-900">
          <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-tech-200 to-warmth-200 shadow-subtle flex items-center justify-center text-sm text-tech-800">
            BR
          </div>
          <div className="leading-tight">
            <p className="text-sm text-slate-600">Bridge</p>
            <p className="text-xs text-slate-500">Systems × Practice</p>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.key}
                href={link.href}
                className={`px-3 py-2 rounded-2xl transition ${
                  active
                    ? 'bg-tech-100 text-tech-800 border border-tech-200'
                    : 'hover:bg-slate-100 text-slate-700'
                }`}
              >
                {language === 'zh' ? link.zh : link.en}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-3">
          <button
            className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-700 hover:border-tech-300 hover:text-tech-700 transition"
            onClick={toggleLanguage}
            aria-label="Switch language"
          >
            {language === 'zh' ? '中 / EN' : 'EN / 中'}
          </button>
        </div>
      </div>
    </header>
  );
}
