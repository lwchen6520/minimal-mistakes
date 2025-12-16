import { ReactNode } from 'react';
import classNames from 'classnames';

interface CardProps {
  title: string;
  description?: string;
  eyebrow?: string;
  action?: ReactNode;
  tags?: string[];
  tone?: 'tech' | 'warmth';
  children?: ReactNode;
}

export function Card({ title, description, eyebrow, action, tags, tone = 'tech', children }: CardProps) {
  return (
    <div className={classNames('card-surface p-6 flex flex-col gap-4 relative overflow-hidden', tone === 'tech' ? 'soft-gradient-tech' : 'soft-gradient-warm')}>
      <div className="absolute right-0 top-0 h-28 w-28" aria-hidden>
        <svg className="pattern" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="90" stroke={tone === 'tech' ? 'rgba(74,127,224,0.35)' : 'rgba(245,138,79,0.35)'} strokeWidth="12" />
          <circle cx="100" cy="100" r="55" stroke={tone === 'tech' ? 'rgba(74,127,224,0.25)' : 'rgba(245,138,79,0.25)'} strokeWidth="10" />
        </svg>
      </div>
      {eyebrow && <p className="text-xs font-semibold text-slate-600">{eyebrow}</p>}
      <h3 className="text-xl font-semibold text-slate-900 z-10">{title}</h3>
      {description && <p className="text-sm text-slate-600 z-10 leading-relaxed">{description}</p>}
      {tags && (
        <div className="flex flex-wrap gap-2 z-10">
          {tags.map((tag) => (
            <span key={tag} className="tag-pill">
              {tag}
            </span>
          ))}
        </div>
      )}
      {children && <div className="z-10 text-sm text-slate-700 leading-relaxed">{children}</div>}
      {action && <div className="z-10">{action}</div>}
    </div>
  );
}
