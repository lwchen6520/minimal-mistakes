export type CaseStudy = {
  id: string;
  client: { zh: string; en: string };
  tags: string[];
  background: { zh: string; en: string };
  problem: { zh: string; en: string };
  solution: { zh: string; en: string };
  contribution: { zh: string; en: string };
  outcome: { zh: string; en: string };
  learnings: { zh: string; en: string };
};

export const caseStudies: CaseStudy[] = [
  {
    id: 'sap-data-lake',
    client: { zh: '某大型製造業', en: 'A major manufacturer' },
    tags: ['SAP', 'Data', 'Automation'],
    background: {
      zh: '跨廠區的 SAP 模組分散，財務與供應鏈資料難以對齊。',
      en: 'SAP modules were fragmented across plants, leaving finance and supply chain data misaligned.',
    },
    problem: {
      zh: '決策會議無法取得單一真相來源，資料拉取耗時且易出錯。',
      en: 'Leadership lacked a single source of truth; data pulls were slow and error-prone.',
    },
    solution: {
      zh: '建立中介資料湖與主數據治理流程，並設計 Power BI 模型，確保各部門指標一致。',
      en: 'Built a staging data lake with master-data governance and a Power BI semantic model to unify metrics.',
    },
    contribution: {
      zh: '主持需求訪談、定義數據字典、協調 IT 與財務，並建立自動化匯入流程。',
      en: 'Led discovery, authored the data dictionary, aligned IT and finance, and automated the ingest flows.',
    },
    outcome: {
      zh: '管理層的儀表板更新時間從 2 週縮短到 2 小時，跨部門共用同一套 KPI。',
      en: 'Executive dashboards refreshed in 2 hours instead of 2 weeks, sharing one KPI language cross-functionally.',
    },
    learnings: {
      zh: '早期對齊語意層，比導入工具更重要。',
      en: 'Semantic alignment early beats tooling later.',
    },
  },
  {
    id: 'rpa-finance',
    client: { zh: '某跨國集團', en: 'A multinational group' },
    tags: ['RPA', 'Process'],
    background: {
      zh: '財務部門每月結帳需人工合併多來源報表，夜間加班頻繁。',
      en: 'Month-end close required manual consolidation from many sources, causing frequent late nights.',
    },
    problem: {
      zh: '流程高度重複且依賴特定同仁，導致風險與疲勞累積。',
      en: 'Repetitive steps depended on a few people, building risk and fatigue.',
    },
    solution: {
      zh: '設計 RPA 腳本與審核清單，讓系統自動下載、清洗、比對資料並寄送摘要。',
      en: 'Designed RPA scripts and review checklists to download, clean, reconcile, and send summaries automatically.',
    },
    contribution: {
      zh: '負責流程盤點、例外判斷設計與使用者驗收，並訓練團隊自主調校機器人。',
      en: 'Mapped the process, designed exception logic, led UAT, and trained the team to tune bots themselves.',
    },
    outcome: {
      zh: '每月可節省 120 小時人工，錯誤率下降 70%，同仁可將時間用於分析與溝通。',
      en: 'Saved ~120 person-hours monthly and cut errors by 70%, freeing time for analysis and dialogue.',
    },
    learnings: {
      zh: '例外情境的設計，決定自動化能否長期存活。',
      en: 'Exception design determines automation longevity.',
    },
  },
  {
    id: 'powerbi-ops',
    client: { zh: '某電商營運團隊', en: 'An e-commerce ops team' },
    tags: ['Power BI', 'Data'],
    background: {
      zh: '營運團隊需要每日追蹤訂單、庫存與客服票據，指標散落在不同系統。',
      en: 'Operations tracked orders, inventory, and tickets daily with metrics scattered across systems.',
    },
    problem: {
      zh: '數據定義不一，指標更新不穩定，導致會議焦點分散。',
      en: 'Metric definitions varied and refresh timing was unstable, derailing meetings.',
    },
    solution: {
      zh: '建立集中式語意模型與自助分析模板，並用 row-level security 控制權限。',
      en: 'Built a centralized semantic model with self-service templates and row-level security.',
    },
    contribution: {
      zh: '主持 workshop 定義指標，設計模型與圖表，並撰寫治理手冊。',
      en: 'Facilitated metric workshops, designed the model and visuals, and authored the governance guide.',
    },
    outcome: {
      zh: '每日站會可直接使用同一頁面決策，指標爭議降低，團隊協作順暢。',
      en: 'Daily standups made decisions off one page; metric debates dropped and collaboration eased.',
    },
    learnings: {
      zh: '可解釋的視覺化能降低對報表的懷疑成本。',
      en: 'Explainable visuals reduce skepticism toward dashboards.',
    },
  },
  {
    id: 'ai-document',
    client: { zh: '某專業服務公司', en: 'A professional services firm' },
    tags: ['AI', 'Automation'],
    background: {
      zh: '專案文件散落，各專案的交付物格式不一，知識難以重用。',
      en: 'Project documents were scattered with inconsistent deliverable formats, blocking reuse.',
    },
    problem: {
      zh: '新人 onboarding 時間長，文件搜尋耗時。',
      en: 'Onboarding took too long because document search was slow.',
    },
    solution: {
      zh: '建立文件嵌入索引與對話式搜尋介面，並用工作流自動生成標準摘要。',
      en: 'Built an embedding index with conversational search and workflows that generate standard summaries.',
    },
    contribution: {
      zh: '規劃資料分類、模型選型與安全權限，設計前端對話與審核流程。',
      en: 'Planned data taxonomy, model selection, security, and designed the chat UI plus review loop.',
    },
    outcome: {
      zh: '新人培訓時間縮短 40%，客製回覆的準確度提高。',
      en: 'Cut onboarding time by ~40% and raised the accuracy of tailored responses.',
    },
    learnings: {
      zh: 'AI 專案的成功取決於資料整理與回饋 loop，而非單一模型。',
      en: 'AI success rides on data hygiene and feedback loops more than any single model.',
    },
  },
  {
    id: 'process-reboot',
    client: { zh: '某社會企業', en: 'A social enterprise' },
    tags: ['Process', 'Change'],
    background: {
      zh: '組織在快速擴張，內部協作流程未能同步調整。',
      en: 'The organization was scaling quickly while collaboration processes lagged behind.',
    },
    problem: {
      zh: '跨團隊交辦不透明，容易重工。',
      en: 'Cross-team handoffs lacked visibility, causing rework.',
    },
    solution: {
      zh: '主持服務藍圖工作坊，重整交付節點，導入簡易看板與節奏會議。',
      en: 'Facilitated service blueprint workshops, re-mapped handoffs, and set up kanban plus cadence meetings.',
    },
    contribution: {
      zh: '協助領導定義決策權限、設計會議腳本，並輔導團隊週週復盤。',
      en: 'Helped leadership define decision rights, scripted meetings, and coached weekly retros.',
    },
    outcome: {
      zh: '專案延遲率下降，團隊對焦加速，新人能快速融入。',
      en: 'Reduced project delays, accelerated focus, and eased onboarding.',
    },
    learnings: {
      zh: '流程與節奏是組織的呼吸，需持續調頻。',
      en: 'Process rhythm is organizational breath—keep tuning it.',
    },
  },
  {
    id: 'bi-sustain',
    client: { zh: '某非營利組織', en: 'A non-profit' },
    tags: ['Data', 'Power BI'],
    background: {
      zh: '計畫績效需要向多個捐助方報告，各方關注指標不同。',
      en: 'Program performance had to be reported to many donors, each with different metrics.',
    },
    problem: {
      zh: '報表版本眾多，缺乏統一口徑。',
      en: 'Reports multiplied without a single definition of record.',
    },
    solution: {
      zh: '建立核心指標樹與角色化儀表板，並訓練內部伙伴自行更新資料模型。',
      en: 'Built a core metric tree with role-based dashboards and trained staff to maintain the model.',
    },
    contribution: {
      zh: '協助梳理利益關係人需求、設計視覺化、制定資料更新 SOP。',
      en: 'Clarified stakeholder needs, designed visuals, and authored data refresh SOPs.',
    },
    outcome: {
      zh: '報告準備時間減半，捐助方對透明度的信任提升。',
      en: 'Cut report prep time in half and improved donor trust in transparency.',
    },
    learnings: {
      zh: '讓內部伙伴擁有工具，是長期維運的關鍵。',
      en: 'Ownership of tools by internal partners keeps solutions alive.',
    },
  },
];
