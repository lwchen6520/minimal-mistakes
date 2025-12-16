import { timeline } from '@/content/site';
import { useLanguage } from './LanguageContext';

export function Timeline() {
  const { language } = useLanguage();
  return (
    <div className="relative pl-6 mt-6">
      <div className="absolute left-2 top-2 bottom-2 w-px bg-gradient-to-b from-tech-300 to-warmth-300" aria-hidden />
      <div className="flex flex-col gap-6">
        {timeline.map((item) => (
          <div key={item.year} className="relative">
            <div className="absolute -left-1 top-1.5 h-3 w-3 rounded-full bg-tech-500 shadow-subtle" />
            <div className="card-surface p-4 sm:p-5">
              <p className="text-xs uppercase tracking-wide text-slate-500">{item.year}</p>
              <p className="mt-1 text-sm text-slate-700 leading-relaxed">{language === 'zh' ? item.zh : item.en}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
