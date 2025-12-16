import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from './components/LanguageContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

export const metadata: Metadata = {
  title: '橋接系統與覺知 | Bridge',
  description:
    '橫跨理性系統與內在修行：熟悉 SAP / RPA / Power BI / AI，重視可交付節奏，也關注呼吸與節氣的覺察。',
  openGraph: {
    title: '橋接系統與覺知 | Bridge',
    description:
      '理性與靈性並行：設計流程與語意層，導入自動化與儀表板，也設計能落地的覺察練習。',
    url: 'https://example.com',
    siteName: 'Bridge',
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
