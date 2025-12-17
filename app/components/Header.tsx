'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navLinks, taglines } from '@/content/site';
import { useLanguage } from './LanguageContext';

export function Header() {
  const { language, toggleLanguage } = useLanguage();
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-slate-100/80 shadow-[0_8px_30px_-25px_rgba(15,23,42,0.35)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3 font-semibold text-slate-900">
          <div className="h-11 w-11 rounded-3xl bg-gradient-to-br from-emerald-100 via-sky-100 to-amber-100 shadow-subtle flex items-center justify-center text-xs text-slate-700 border border-white/60">
            <span className="tracking-[0.15em]">LJK</span>
          </div>
          <div className="leading-tight">
            <p className="text-sm text-slate-700">Liv Jaijot Kaur</p>
            <p className="text-xs text-slate-500">{taglines[language]}</p>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-4 text-sm text-slate-700">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.key}
                href={link.href}
                className={`px-3 py-2 rounded-2xl transition border ${
                  active
                    ? 'bg-slate-900 text-white border-slate-900 shadow-subtle'
                    : 'bg-white/70 border-slate-200 hover:border-emerald-200 hover:text-emerald-800'
                }`}
              >
                {language === 'zh' ? link.zh : link.en}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-3">
          <button
            className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-700 hover:border-emerald-300 hover:text-emerald-800 transition"
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
