'use client';

interface TagFilterProps {
  tags: string[];
  active: string;
  onChange: (tag: string) => void;
}

export function TagFilter({ tags, active, onChange }: TagFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {['全部', ...tags].map((tag) => {
        const value = tag;
        const selected = active === value;
        return (
          <button
            key={value}
            onClick={() => onChange(value)}
            className={`px-3 py-1 rounded-full border text-xs font-semibold transition ${
              selected
                ? 'bg-tech-600 text-white border-tech-600 shadow-subtle'
                : 'bg-white text-slate-700 border-slate-200 hover:border-tech-300 hover:text-tech-700'
            }`}
          >
            {value}
          </button>
        );
      })}
    </div>
  );
}
