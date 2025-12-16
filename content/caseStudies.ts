export type CaseStudy = {
  id: string;
  client: string;
  tags: string[];
  background: string;
  problem: string;
  solution: string;
  contribution: string;
  outcome: string;
  learnings: string;
};

export const caseStudies: CaseStudy[] = [
  {
    id: 'sap-data-lake',
    client: '某大型製造業',
    tags: ['SAP', 'Data', 'Automation'],
    background: '跨廠區的 SAP 模組分散，財務與供應鏈資料難以對齊。',
    problem: '決策會議無法取得單一真相來源，資料拉取耗時且易出錯。',
    solution: '建立中介資料湖與主數據治理流程，並設計 Power BI 模型，確保各部門指標一致。',
    contribution: '主持需求訪談、定義數據字典、協調 IT 與財務，並建立自動化匯入流程。',
    outcome: '管理層的儀表板更新時間從 2 週縮短到 2 小時，跨部門共用同一套 KPI。',
    learnings: '早期對齊語意層，比導入工具更重要。',
  },
  {
    id: 'rpa-finance',
    client: '某跨國集團',
    tags: ['RPA', 'Process'],
    background: '財務部門每月結帳需人工合併多來源報表，夜間加班頻繁。',
    problem: '流程高度重複且依賴特定同仁，導致風險與疲勞累積。',
    solution: '設計 RPA 腳本與審核清單，讓系統自動下載、清洗、比對資料並寄送摘要。',
    contribution: '負責流程盤點、例外判斷設計與使用者驗收，並訓練團隊自主調校機器人。',
    outcome: '每月可節省 120 小時人工，錯誤率下降 70%，同仁可將時間用於分析與溝通。',
    learnings: '例外情境的設計，決定自動化能否長期存活。',
  },
  {
    id: 'powerbi-ops',
    client: '某電商營運團隊',
    tags: ['Power BI', 'Data'],
    background: '營運團隊需要每日追蹤訂單、庫存與客服票據，指標散落在不同系統。',
    problem: '數據定義不一，指標更新不穩定，導致會議焦點分散。',
    solution: '建立集中式語意模型與自助分析模板，並用 row-level security 控制權限。',
    contribution: '主持 workshop 定義指標，設計模型與圖表，並撰寫治理手冊。',
    outcome: '每日站會可直接使用同一頁面決策，指標爭議降低，團隊協作順暢。',
    learnings: '可解釋的視覺化能降低對報表的懷疑成本。',
  },
  {
    id: 'ai-document',
    client: '某專業服務公司',
    tags: ['AI', 'Automation'],
    background: '專案文件散落，各專案的交付物格式不一，知識難以重用。',
    problem: '新人 onboarding 時間長，文件搜尋耗時。',
    solution: '建立文件嵌入索引與對話式搜尋介面，並用工作流自動生成標準摘要。',
    contribution: '規劃資料分類、模型選型與安全權限，設計前端對話與審核流程。',
    outcome: '新人培訓時間縮短 40%，客製回覆的準確度提高。',
    learnings: 'AI 專案的成功取決於資料整理與回饋 loop，而非單一模型。',
  },
  {
    id: 'process-reboot',
    client: '某社會企業',
    tags: ['Process', 'Change'],
    background: '組織在快速擴張，內部協作流程未能同步調整。',
    problem: '跨團隊交辦不透明，容易重工。',
    solution: '主持服務藍圖工作坊，重整交付節點，導入簡易看板與節奏會議。',
    contribution: '協助領導定義決策權限、設計會議腳本，並輔導團隊週週復盤。',
    outcome: '專案延遲率下降，團隊對焦加速，新人能快速融入。',
    learnings: '流程與節奏是組織的呼吸，需持續調頻。',
  },
  {
    id: 'bi-sustain',
    client: '某非營利組織',
    tags: ['Data', 'Power BI'],
    background: '計畫績效需要向多個捐助方報告，各方關注指標不同。',
    problem: '報表版本眾多，缺乏統一口徑。',
    solution: '建立核心指標樹與角色化儀表板，並訓練內部伙伴自行更新資料模型。',
    contribution: '協助梳理利益關係人需求、設計視覺化、制定資料更新 SOP。',
    outcome: '報告準備時間減半，捐助方對透明度的信任提升。',
    learnings: '讓內部伙伴擁有工具，是長期維運的關鍵。',
  },
];
