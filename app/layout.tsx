import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from './components/LanguageContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

export const metadata: Metadata = {
  title: '把修行變成日常 | Liv Jaijot Kaur (Sonia Chen)',
  description: '溫柔而有結構的修行引導：每日練習、節氣身體感、呼吸與冥想、修行筆記，陪你把練習放進生活。',
  openGraph: {
    title: '把修行變成日常 | Liv Jaijot Kaur (Sonia Chen)',
    description:
      '正念呼吸、節氣觀修、瑜珈冥想入門、修行筆記。以成熟且穩定的節奏，讓練習可持續、可整合。',
    url: 'https://example.com',
    siteName: 'Daily Practice by Liv',
    locale: 'zh-TW',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hant">
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
