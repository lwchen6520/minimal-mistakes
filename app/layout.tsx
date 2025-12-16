import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from './components/LanguageContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

export const metadata: Metadata = {
  title: 'Bridge | Systems × Practice',
  description: 'A bridge between enterprise systems and grounded practice. Clear methods, steady rhythms.',
  openGraph: {
    title: 'Bridge | Systems × Practice',
    description: 'Clear systems, grounded presence. SAP/RPA/Data + mindful rhythms.',
    url: 'https://example.com',
    siteName: 'Bridge',
    locale: 'zh-TW',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh">
      <body className="min-h-screen">
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
