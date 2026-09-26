import React, { ReactNode } from 'react';
import { Zap, Server, Sparkles, Settings2, Code2, ShieldCheck } from 'lucide-react';
import { Card, CardHeader, CardContent } from '../components/ui/card';
import { Reveal } from '../components/Reveal';

interface CapabilityCardData {
  title: string;
  icon: ReactNode;
  points: string[];
  tags: string[];
}

const CAPABILITY_CARDS: CapabilityCardData[] = [
  {
    title: 'Frontend Architecture',
    icon: <Zap className="size-6 text-amber-600" aria-hidden />,
    points: [
      'React 19 & Next.js 16 (App Router)',
      'TypeScript & Responsive Fluid Systems',
      'Tailwind CSS, shadcn/ui & Radix UI',
      'Framer Motion & 60 FPS Micro-Interactions',
      'Optimistic State & Sub-100ms UI Latency',
    ],
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Motion'],
  },
  {
    title: 'Backend & Infrastructure',
    icon: <Server className="size-6 text-sky-600" aria-hidden />,
    points: [
      'Node.js & Express REST Endpoints',
      'PostgreSQL & Prisma ORM Schemas',
      'Supabase Backend & WebSocket Channels',
      'Redis In-Memory Caching & Session Stores',
      'Decoupled Clean Service Architecture',
    ],
    tags: ['Node.js', 'PostgreSQL', 'Prisma', 'Supabase', 'Redis'],
  },
  {
    title: 'AI & Behavioral Intelligence',
    icon: <Sparkles className="size-6 text-emerald-600" aria-hidden />,
    points: [
      'Continuous Keystroke & Biometric Cadence',
      'Isolation Forest & Anomaly Vectors',
      'Real-Time Zero-Trust Security Audits',
      'Python, Scikit-Learn & NumPy Workflows',
      'Automated Risk Score Normalization',
    ],
    tags: ['Zero-Trust', 'Biometrics', 'Isolation Forest', 'Python'],
  },
  {
    title: 'Developer Tooling & Cloud Ext',
    icon: <Settings2 className="size-6 text-indigo-600" aria-hidden />,
    points: [
      'Visual Studio Code Extension API',
      'Native SecretStorage Security Vault',
      'Real-Time SHA-1 Delta Hashing Engine',
      '5x Concurrent Cloud CDN Synchronization',
      'Git Workflows, CI/CD & Shell Scripting',
    ],
    tags: ['VS Code API', 'SecretStorage', 'Git CI/CD', 'Netlify'],
  },
  {
    title: 'Core Languages & Runtimes',
    icon: <Code2 className="size-6 text-rose-600" aria-hidden />,
    points: [
      'Strict Typed TypeScript (98%+ Ratio)',
      'Modern ES2024 JavaScript Architecture',
      'Python 3.x for Algorithms & Automation',
      'C++ for Data Structures & Execution',
      'Relational SQL Modeling & Query Tuning',
    ],
    tags: ['TypeScript', 'JavaScript', 'Python', 'C++', 'SQL'],
  },
  {
    title: 'System Design & Security',
    icon: <ShieldCheck className="size-6 text-teal-600" aria-hidden />,
    points: [
      'Standalone Decoupled Repositories',
      'Strict Role-Based Access Control (RBAC)',
      'Cryptographic JWT & Bcrypt 10-Round Salts',
      'Production Architecture Documentation',
      'Agile Sprints & Structured Delivery',
    ],
    tags: ['RBAC', 'JWT / Bcrypt', 'Decoupled', 'Agile'],
  },
];

/**
 * CardDecorator Component
 * ----------------------------------------------------
 * High-tech architectural radar grid with radial fade mask
 * and centered floating hardware badge for the domain icon.
 */
const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div
    aria-hidden
    className="relative mx-auto size-32 sm:size-36 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] [WebkitMaskImage:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] select-none pointer-events-none"
  >
    {/* Drafting Radar Grid Background */}
    <div
      className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.14)_1px,transparent_1px)] bg-[size:20px_20px] sm:bg-[size:24px_24px] opacity-100"
    />
    {/* Floating Icon Box */}
    <div className="absolute inset-0 m-auto flex size-12 items-center justify-center rounded-xl bg-white border border-neutral-200/90 shadow-xs text-neutral-800 group-hover:scale-110 group-hover:border-neutral-900 group-hover:shadow-md transition-all duration-300">
      {children}
    </div>
  </div>
);

/**
 * Capabilities Section ("What I work with")
 * ----------------------------------------------------
 * Redesigned with minimalist feature cards, centered architectural decorators,
 * and high-density main points without theory or filler text.
 */
export const Capabilities: React.FC = () => {
  return (
    <section id="capabilities" className="relative py-12 sm:py-16 md:py-20">
      {/* Navigation Anchor */}
      <div id="skills" className="absolute -top-16 left-0 pointer-events-none" />

      {/* ─── SECTION HEADER (CLEAN, CENTERED, ZERO FILLER) ─── */}
      <Reveal>
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <p className="text-[10.5px] font-mono text-neutral-500 uppercase tracking-[0.2em] font-medium mb-1.5">
            CAPABILITIES // CORE ENGINEERING STACK
          </p>
          <h2
            style={{ fontFamily: '"Aribau Rounded", sans-serif' }}
            className="text-3xl sm:text-4xl md:text-5xl font-aribau font-bold tracking-tight text-neutral-950"
          >
            What I work with
          </h2>
        </div>
      </Reveal>

      {/* ─── 6-CARD GRID (MAIN POINTS ONLY, NO THEORY) ─── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {CAPABILITY_CARDS.map((card, idx) => (
          <Reveal key={card.title} delay={idx * 0.03}>
            <Card className="group h-full flex flex-col justify-between rounded-2xl border border-neutral-200/80 bg-neutral-50/50 hover:bg-white p-2 shadow-xs hover:shadow-xl hover:border-neutral-300 transition-all duration-300">
              <CardHeader className="pb-2 text-center flex flex-col items-center">
                {/* Tech Radar Decorator with Floating Icon */}
                <CardDecorator>{card.icon}</CardDecorator>

                {/* Domain Title */}
                <h3 className="mt-4 text-lg font-semibold text-neutral-950 tracking-tight">
                  {card.title}
                </h3>
              </CardHeader>

              <CardContent className="pt-2 pb-4 px-4 sm:px-5 flex-1 flex flex-col justify-between">
                {/* Main Points List (No Theory, Crisp Tech Points) */}
                <ul className="space-y-2 text-left w-full my-auto">
                  {card.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2.5 text-xs sm:text-[12.8px] text-neutral-700 font-medium group-hover:text-neutral-950 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-300 shrink-0 group-hover:bg-neutral-900 transition-colors" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Quick Stack Badges */}
                <div className="flex flex-wrap gap-1.5 pt-3.5 border-t border-neutral-200/70 mt-4">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white border border-neutral-200/80 text-neutral-700 font-medium shadow-2xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Capabilities;
