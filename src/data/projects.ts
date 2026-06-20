export type Module = { name: string; detail: string };
export type Project = {
  index: string;
  name: string;
  tags: string[];
  thesis: string;
  thesisAccent: string;
  description: string;
  modules: Module[];
  stack: string[];
  links: { label: string; href: string; external?: boolean }[];
  shot?: string;
  tone: "ink" | "paper";
};

export const projects: Project[] = [
  {
    index: "01",
    name: "Entropable — AI Crypto Trading Platform",
    tags: ["Web", "AI", "ML", "FinTech"],
    thesis: "The quant desk for retail traders.",
    thesisAccent: "quant desk",
    description:
      "A production full-stack SaaS — a visual strategy builder, ML market-event signals, walk-forward backtesting and portfolio-grade risk controls in one workflow. Built over a layered Express backend (Controller → Service → Repository → DB) with 20+ domain services and Python ML spawned via child process or Celery. No Python, no quant team required of the user.",
    modules: [
      {
        name: "CryptoMind AI",
        detail:
          "RAG reasoning agent — FAISS top-3 retrieval over a curated setup store + live Binance candles; Redis-cached follow-ups run ~15× faster than a naive re-run (~45s → ~1–3s).",
      },
      {
        name: "Visual Strategy Builder",
        detail:
          "ReactFlow no-code canvas; the LLM edits strategy graphs through structured JSON patch operations, with in-canvas backtest preview before deployment.",
      },
      {
        name: "ML Pipeline",
        detail:
          "132 indicators → 8 calibrated event classifiers → an AUC-weighted XGBoost + LightGBM + CatBoost soft-vote ensemble, with t-1/t-2/t-3 lag features.",
      },
      {
        name: "Backtesting & Validation",
        detail:
          "Walk-forward with Combinatorially Purged Cross-Validation (purge + embargo); Sharpe / Sortino / max-drawdown; DEAP genetic optimizer with risk-constraint penalties.",
      },
    ],
    stack: [
      "Next.js 15",
      "Express",
      "Python 3.11",
      "PostgreSQL",
      "Redis",
      "FAISS",
      "XGBoost",
      "LightGBM",
      "CatBoost",
      "ReactFlow",
      "Socket.IO",
    ],
    // TODO: add the live Entropable demo URL here, e.g.
    // { label: "Live demo", href: "https://...", external: true }
    links: [],
    shot: "/projects/entropable.png",
    tone: "ink",
  },
  {
    index: "02",
    name: "Pre-Call Brief Generator",
    tags: ["Python", "Automation", "GenAI"],
    thesis: "A prospect URL in, a 2-page brief out.",
    thesisAccent: "2-page brief",
    description:
      "An end-to-end Python automation pipeline that turns a prospect URL into a 1–2 page pre-call intelligence brief, replacing 20–40 minutes of manual research per lead with an automated Markdown + PDF deliverable emailed to the salesperson.",
    modules: [
      {
        name: "Multi-API collection",
        detail:
          "7+ free-tier sources — Playwright site/LinkedIn scrapers, Meta Ad Library, PageSpeed, regex tech-stack detection, DIY SEO signals — with graceful degradation.",
      },
      {
        name: "6-stage LLM workflow",
        detail:
          "Gemini 2.5 Flash/Pro with Pydantic-typed structured output: parallel asyncio collection → extraction → marketing-posture analysis → brief synthesis, with automatic data-gap flagging.",
      },
      {
        name: "Async + delivery",
        detail:
          "Celery + Redis jobs, FastAPI ingestion with API-key auth + webhook callbacks, SQLAlchemy/Alembic schema for step-by-step observability, WeasyPrint PDF + Resend email.",
      },
      {
        name: "Swap-ready",
        detail:
          "Production-shaped under ~$25 total — every free-tier component is a single-file swap to a paid alternative without touching pipeline logic.",
      },
    ],
    stack: [
      "Python 3.11",
      "FastAPI",
      "Celery",
      "Redis",
      "PostgreSQL",
      "Playwright",
      "Gemini 2.5",
      "WeasyPrint",
      "Docker",
      "Railway",
    ],
    links: [],
    shot: "/projects/pre-call-brief.jpg",
    tone: "paper",
  },
  {
    index: "03",
    name: "Automated DEX Trading Bot",
    tags: ["TypeScript", "Web3", "On-chain"],
    thesis: "On-chain momentum, sub-500ms reactions.",
    thesisAccent: "sub-500ms",
    description:
      "An automated TypeScript trading bot for decentralized exchanges executing momentum and volatility strategies with dynamic take-profit, trailing stop-loss, and adaptive risk management.",
    modules: [
      {
        name: "Real-time ingestion",
        detail:
          "DexScreener pipeline (axios + ethers.js) consuming on-chain price, volume, and liquidity across 100+ token pairs, filtering for volume spikes, liquidity changes, and new listings.",
      },
      {
        name: "Trade logging",
        detail:
          "Every entry, exit, indicator value, decision, and PnL persisted row-by-row to structured .xlsx via Danfo.js + ExcelJS for post-run analysis.",
      },
      {
        name: "Anti-FOMO logic",
        detail:
          "Pullback + breakout confirmation reduced false entries ~35% vs. naive momentum (measured across simulated runs); reacts to price spikes in <500ms.",
      },
    ],
    stack: ["TypeScript", "Node.js", "ethers.js", "DexScreener API", "Danfo.js", "ExcelJS"],
    links: [
      { label: "GitHub", href: "https://github.com/moeiz2701/DexTradingBot", external: true },
    ],
    shot: "/projects/dex-trading-bot.jpg",
    tone: "ink",
  },
  {
    index: "04",
    name: 'Med Spa Call Agent — "Maya"',
    tags: ["Web", "AI", "Voice"],
    thesis: "An AI receptionist that never misses a call.",
    thesisAccent: "never misses",
    description:
      "An AI-powered voice receptionist for U.S. medical spas — a real-time speech → LLM → speech pipeline with mid-call tool execution and a live operator dashboard streaming call transcripts as they happen.",
    modules: [
      {
        name: "Real-time voice pipeline",
        detail:
          "Low-latency speech → LLM → speech loop that holds a natural conversation with callers in real time.",
      },
      {
        name: "Mid-call tool execution",
        detail:
          "Function/tool calling lets Maya book appointments, answer FAQs, and capture leads while the call is still live.",
      },
      {
        name: "Live dashboard",
        detail:
          "A Next.js operator dashboard streams live call transcripts over Server-Sent Events (SSE) for monitoring and handoff.",
      },
    ],
    stack: ["Next.js", "TypeScript", "Real-Time Voice", "Function Calling", "SSE", "LLM"],
    links: [
      {
        label: "Live demo",
        href: "https://medspa-call-agent-dashboard.vercel.app",
        external: true,
      },
    ],
    shot: "/projects/call-agent.png",
    tone: "paper",
  },
];
