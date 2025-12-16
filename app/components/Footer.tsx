import Link from 'next/link';
import { navLinks } from '@/content/site';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/70 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-slate-600">
        <div>
          <p className="font-semibold text-slate-800">Bridge</p>
          <p className="mt-2 text-slate-600">Systems × Practice</p>
          <p className="mt-2 text-slate-500">Keep the work clear. Keep the breath steady.</p>
        </div>
        <div className="flex flex-wrap gap-3 sm:justify-end">
          {navLinks.map((link) => (
            <Link key={link.key} href={link.href} className="text-slate-600 hover:text-tech-700">
              {link.en}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
