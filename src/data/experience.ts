export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  thesis: string;
  description: string;
  highlights: string[];
  stack: string[];
  link?: { label: string; href: string };
  shot?: string;
  tone: "ink" | "paper";
};

export const experience: Experience[] = [
  {
    role: "Full-Stack Web Developer",
    company: "AR&CO Law Firm",
    period: "Dec 2025 — Present",
    location: "Remote",
    tone: "ink",
    thesis: "A production legal SaaS, built end to end.",
    description:
      "Designed and shipped arandcolaw.com end-to-end — architecture, schema, backend, frontend, deployment — covering auth, consultation booking, subscriptions, multi-service registrations, case tracking, and a Google-Docs-powered CMS. Serving 500+ monthly active users.",
    highlights: [
      "4-role RBAC on Supabase with Row-Level Security across 20+ tables & 130+ policies — zero unauthorized-access incidents in 5+ months.",
      "Lemon Squeezy recurring + one-time billing with HMAC-SHA256 webhook verification and idempotent event routing; 200+ monthly transactions reconciling at 99.9%.",
      "Google-Docs CMS with auto-generated SEO (slug, meta, OG + JSON-LD) and 60s ISR for blog posts and case studies.",
      "p95 API latency 720ms → 210ms via composite indexing, RLS optimization, and query tuning; Lighthouse 62 → 94.",
    ],
    stack: ["Next.js 15", "NestJS", "React 19", "Supabase", "PostgreSQL", "RLS", "Lemon Squeezy", "Cal.com"],
    link: { label: "arandcolaw.com", href: "https://arandcolaw.com" },
    shot: "/projects/arandco.png",
  },
  {
    role: "MERN Stack Developer Intern",
    company: "Calcite",
    period: "Jun 2025 — Jul 2025",
    location: "Remote",
    tone: "paper",
    thesis: "Social marketing, centralized.",
    description:
      "Built a full-stack social media marketing app centralizing 5+ accounts per user, with content scheduling, automated posting, and unified analytics.",
    highlights: [
      "Node/Express services with OAuth across Meta Graph (Facebook + Instagram), LinkedIn Marketing, and Twitter APIs — token refresh + account linking.",
      "MongoDB models supporting ~10k scheduled posts in test.",
      "Reusable React dashboard components cut duplicate UI ~40% and new-feature rollout from 3 days to 1.",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "OAuth 2.0", "Meta Graph API"],
    shot: undefined, // no live URL — ShotWell placeholder
  },
];
