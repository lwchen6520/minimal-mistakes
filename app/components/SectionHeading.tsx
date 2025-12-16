import { ReactNode } from 'react';

export function SectionHeading({ title, description, accent }: { title: string; description?: string; accent?: ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="inline-flex items-center gap-2">
        {accent}
        <p className="text-sm uppercase tracking-[0.12em] text-tech-700">{title}</p>
      </div>
      {description && <p className="text-slate-600 max-w-3xl text-sm sm:text-base">{description}</p>}
    </div>
  );
}
