'use client';

interface SearchBoxProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function SearchBox({ value, onChange, placeholder }: SearchBoxProps) {
  return (
    <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/70 px-4 py-2 shadow-subtle w-full">
      <span className="text-slate-500 text-sm">🔍</span>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="flex-1 bg-transparent border-none focus:outline-none text-sm text-slate-700"
      />
    </div>
  );
}
