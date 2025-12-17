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
    <div
      className={classNames(
        'card-surface p-6 flex flex-col gap-4 relative overflow-hidden reveal-soft',
        tone === 'tech' ? 'soft-gradient-tech' : 'soft-gradient-warm',
      )}
    >
      <div className="absolute right-4 top-4 h-20 w-20" aria-hidden>
        <svg className="pattern" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="4" cy="4" r="2" fill={tone === 'tech' ? '#7fb3d1' : '#f3b8a3'} fillOpacity="0.35" />
            </pattern>
          </defs>
          <rect width="200" height="200" fill="url(#dots)" />
          <path
            d="M100 10 L170 60 L140 170 L60 170 L30 60 Z"
            stroke={tone === 'tech' ? 'rgba(111, 179, 209, 0.45)' : 'rgba(243, 184, 163, 0.45)'}
            strokeWidth="8"
            fill="none"
          />
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
