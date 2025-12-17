import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from './components/LanguageContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

export const metadata: Metadata = {
  title: 'Liv Jaijot Kaur | 修行在日常',
  description:
    'Liv Jaijot Kaur (Sonia Chen)：把修行變成日常，把日常變成修行。以節氣、呼吸、瑜珈/冥想的可操作方法陪伴初學者。',
  openGraph: {
    title: 'Liv Jaijot Kaur | 修行在日常',
    description:
      '成熟、穩定、有方法的引導者：正念呼吸、節氣觀修、瑜珈/冥想入門，結合 PM 與系統背景，讓練習可持續。',
    url: 'https://example.com',
    siteName: 'Liv Practice',
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
