export interface WorkProject {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  subpartId?: 'ai-security' | 'saas-cloud' | 'devtools' | 'campus-ops';
  subpartLabel?: string;
  accentColor: string;
  description: string;
  stack: string[];
  imageUrl: string;
  links: { label: string; url: string; icon: 'github' | 'live' | 'marketplace' }[];
}

export const workProjects: WorkProject[] = [
  {
    id: 'aegis-ai',
    number: '01',
    title: 'Aegis-AI',
    subtitle: 'Zero-Trust Behavioral Security Platform',
    category: 'Cybersecurity & Behavioral AI',
    subpartId: 'ai-security',
    subpartLabel: 'AI & Security',
    accentColor: '#00f2fe',
    description:
      'Continuous behavioral identity verification platform transforming raw human interaction dynamics — keystroke cadence, cursor velocity, and micro-gestures — into a continuous zero-trust behavioral shield. Features real-time session telemetry, automated 15-module security posture audits, and native SIEM pipelines.',
    stack: ['Rust', 'Python', 'Next.js', 'Biometrics', 'SIEM'],
    imageUrl: '/assets/projects/aegis-orbital.png',
    links: [
      { label: 'Live Demo', url: 'https://aegis-frontend-sigma.vercel.app/', icon: 'live' },
      { label: 'GitHub', url: 'https://github.com/singhgurpreet042007-dev/Aegis', icon: 'github' },
    ],
  },
  {
    id: 'fluxora',
    number: '02',
    title: 'Fluxora',
    subtitle: 'Team Collaboration & Project Management SaaS',
    category: 'Enterprise SaaS Architecture',
    subpartId: 'saas-cloud',
    subpartLabel: 'Enterprise SaaS',
    accentColor: '#c084fc',
    description:
      'High-performance collaborative project workspace centralizing Kanban boards, sprint milestones, and real-time team activity feeds into a single interface. Built with PostgreSQL Row-Level Security for multi-tenant data isolation, featuring instant WebSocket state updates and sub-150ms optimistic synchronization.',
    stack: ['React', 'TypeScript', 'Vite', 'Supabase', 'PostgreSQL'],
    imageUrl: '/assets/projects/fluxora-orbital.png',
    links: [
      { label: 'Live Demo', url: 'https://fluxora-hazel-nine.vercel.app/', icon: 'live' },
      { label: 'GitHub', url: 'https://github.com/singhgurpreet042007-dev/JudgeNest', icon: 'github' },
    ],
  },
  {
    id: 'deployflow',
    number: '03',
    title: 'DeployFlow',
    subtitle: 'Deploy your code. Directly from VS Code.',
    category: 'Developer Tooling & Cloud Ext',
    subpartId: 'devtools',
    subpartLabel: 'DevTools & Cloud',
    accentColor: '#38bdf8',
    description:
      'Official Visual Studio Code extension bringing instant 1-click cloud deployments to Netlify directly from your editor sidebar. Features universal framework detection, native SecretStorage encryption, real-time SHA-1 delta sync with 5x concurrency, and an in-editor environment variable manager.',
    stack: ['TypeScript', 'VS Code API', 'Netlify CDN', 'SecretStorage'],
    imageUrl: '/assets/projects/deployflow-orbital.png',
    links: [
      { label: 'GitHub', url: 'https://github.com/singhgurpreet042007-dev/Deployflow', icon: 'github' },
      {
        label: 'Marketplace',
        url: 'https://marketplace.visualstudio.com/items?itemName=gurpreet-singh-dev.deployflow',
        icon: 'marketplace',
      },
    ],
  },
  {
    id: 'smart-campus',
    number: '04',
    title: 'Smart Campus Utility',
    subtitle: 'Decoupled Full-Stack Academic Operations Platform',
    category: 'Distributed System Operations',
    subpartId: 'campus-ops',
    subpartLabel: 'Campus Operations',
    accentColor: '#10b981',
    description:
      'Production-ready, decoupled academic operations platform architected into standalone Next.js 16 (App Router) and Express/Prisma services. Features interactive student dashboards with a 75% regulatory attendance goal predictor, assignment sprints, live circulars, and an admin command center with RBAC protection.',
    stack: ['Next.js 16', 'React 19', 'Prisma', 'PostgreSQL', 'Tailwind 4'],
    imageUrl: '/assets/projects/smart-campus-orbital.png',
    links: [
      { label: 'Live Demo', url: 'https://readynest-task-2-ten.vercel.app/', icon: 'live' },
      { label: 'GitHub', url: 'https://github.com/singhgurpreet042007-dev/readynest-task-2', icon: 'github' },
    ],
  },
];
