import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from './components/LanguageContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

export const metadata: Metadata = {
  title: '把修行變成日常 | Liv Jaijot Kaur (Sonia Chen)',
  description: '溫柔但有方法的引導者：正念呼吸、節氣觀修、瑜珈/冥想入門，引導初心者把練習變成日常。',
  openGraph: {
    title: '把修行變成日常 | Liv Jaijot Kaur (Sonia Chen)',
    description: '正念呼吸、節氣練習、瑜珈/冥想的溫柔引導，讓身心練習可被日常承載。',
    url: 'https://example.com',
    siteName: 'Daily Practice',
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
