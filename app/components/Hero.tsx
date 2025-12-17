import { ReactNode } from 'react';

interface HeroProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  actions?: ReactNode;
  background?: 'tech' | 'warmth';
}

export function Hero({ eyebrow, title, subtitle, actions, background = 'tech' }: HeroProps) {
  const gradient =
    background === 'tech'
      ? 'from-emerald-50 via-sky-50 to-white'
      : 'from-amber-50 via-rose-50 to-white';

  return (
    <section className="relative overflow-hidden rounded-3xl border border-slate-100 shadow-subtle bg-white/80 reveal-soft">
      <div
        className={`absolute inset-0 opacity-90 bg-gradient-to-br ${gradient}`}
        aria-hidden
      />
      <svg
        className="absolute -right-10 -top-10 h-56 w-56 text-emerald-100 opacity-80"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <pattern id="geo" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="2" fill="#6fb1a2" fillOpacity="0.25" />
            <rect x="20" y="20" width="12" height="12" stroke="#6fb1a2" strokeWidth="1" opacity="0.25" />
          </pattern>
        </defs>
        <rect width="200" height="200" fill="url(#geo)" />
        <circle cx="100" cy="100" r="78" stroke="#a5d8c6" strokeWidth="8" opacity="0.35" />
        <circle cx="100" cy="100" r="48" stroke="#7fb3d1" strokeWidth="6" opacity="0.3" />
      </svg>
      <div className="relative p-8 sm:p-12 lg:p-14 flex flex-col gap-4">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/70 border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 w-fit">
          {eyebrow}
        </div>
        <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 leading-tight">{title}</h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">{subtitle}</p>
        {actions && <div className="mt-2 flex flex-wrap gap-3">{actions}</div>}
      </div>
    </section>
  );
}
