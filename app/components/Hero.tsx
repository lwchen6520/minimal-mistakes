import { ReactNode } from 'react';

interface HeroProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  actions?: ReactNode;
  background?: 'tech' | 'warmth';
}

export function Hero({ eyebrow, title, subtitle, actions, background = 'tech' }: HeroProps) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-slate-100 shadow-subtle bg-white/80">
      <div
        className={`absolute inset-0 opacity-80 ${
          background === 'tech' ? 'bg-grid-tech' : 'bg-grid-warm'
        }`}
        style={{ backgroundSize: '32px 32px' }}
        aria-hidden
      />
      <div className="relative p-8 sm:p-12 lg:p-14 flex flex-col gap-4">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/70 border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 w-fit">
          {eyebrow}
        </div>
        <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 leading-tight">{title}</h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-3xl">{subtitle}</p>
        {actions && <div className="mt-2 flex flex-wrap gap-3">{actions}</div>}
      </div>
    </section>
  );
}
