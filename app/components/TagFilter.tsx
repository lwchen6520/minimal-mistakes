'use client';

interface TagFilterProps {
  tags: string[];
  active: string;
  onChange: (tag: string) => void;
  allLabel?: string;
  allValue?: string;
}

export function TagFilter({ tags, active, onChange, allLabel = 'All', allValue = 'all' }: TagFilterProps) {
  const options = [{ label: allLabel, value: allValue }, ...tags.map((tag) => ({ label: tag, value: tag }))];

  return (
    <div className="flex flex-wrap gap-2">
      {options.map((tag) => {
        const selected = active === tag.value;
        return (
          <button
            key={tag.value}
            onClick={() => onChange(tag.value)}
            className={`px-3 py-1 rounded-full border text-xs font-semibold transition ${
              selected
                ? 'bg-tech-600 text-white border-tech-600 shadow-subtle'
                : 'bg-white text-slate-700 border-slate-200 hover:border-tech-300 hover:text-tech-700'
            }`}
          >
            {tag.label}
          </button>
        );
      })}
    </div>
  );
}
