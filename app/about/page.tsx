import { Card } from '../components/Card';

const storyBlocks = [
  {
    title: '我如何走向修行',
    body:
      '從專案管理與系統導入開始，長期被高張力的專案與資訊轟炸包圍。瑜珈與冥想起初只是「喘口氣」，後來發現只有把覺察放進排程，才能讓專業與身體都不透支。',
  },
  {
    title: '我如何把修行變成日常',
    body:
      '以節氣為框架，把呼吸、拉伸、書寫拆成可重複的模組：Observe → Regulate → Integrate → Return。用 5、10、15 分鐘的節奏在行程表中預留空白，讓練習像刷牙一樣簡單。',
  },
  {
    title: '我如何陪伴初學者',
    body:
      '陪伴時強調安全與界線：我提供身心練習的指引與節奏提醒，不診斷、不替代專業醫療或心理治療。每一次帶領都以呼吸與身體訊號為起點，讓人有足夠的安全感探索。',
  },
];

export default function AboutPage() {
  return (
    <div className="section-shell flex flex-col gap-10">
      <div className="relative overflow-hidden rounded-3xl border border-slate-100 shadow-subtle bg-white/80 p-8 sm:p-12">
        <div className="absolute inset-0 bg-grid-warm opacity-60" aria-hidden style={{ backgroundSize: '28px 28px' }} />
        <div className="relative flex flex-col gap-3">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/70 border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 w-fit">
            About / 關於
          </p>
          <h1 className="text-3xl font-semibold text-slate-900">溫柔但有方法的導師</h1>
          <p className="text-slate-700 max-w-3xl leading-relaxed">
            Liv Jaijot Kaur (Sonia Chen) 把修行變成日常實踐：擅長正念呼吸、節氣觀修、瑜珈與冥想入門，也懂專案與系統語言，能把複雜概念拆成可持續的節奏。
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {storyBlocks.map((item) => (
          <Card key={item.title} title={item.title} description={item.body} tone="warmth" />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-6 items-start">
        <Card title="陪伴原則" tone="tech">
          <ul className="list-disc pl-5 text-sm text-slate-700 space-y-2 leading-relaxed">
            <li>以身體訊號為導航：呼吸、肌肉張力、睡眠品質都是指南針。</li>
            <li>不追求極致，而追求可持續：每個動作 70% 力道、定期回到基礎呼吸。</li>
            <li>尊重專業界線：不診斷、不開立醫療建議，必要時引導尋求專業協助。</li>
          </ul>
        </Card>
        <Card title="我的背景" tone="warmth">
          <div className="text-sm text-slate-700 leading-relaxed flex flex-col gap-2">
            <p>企業系統 / PM / 自動化：熟悉 SAP、RPA、Power BI、AI 專案節奏，知道如何在壓力下保持清晰。</p>
            <p>瑜珈與冥想引導：十年練習與社群帶領，重視身心安全與可重複性。</p>
            <p className="text-xs text-slate-500">這些背景是可信度的補強，但核心仍是陪伴你練習。</p>
          </div>
        </Card>
      </div>
    </div>
  );
}
