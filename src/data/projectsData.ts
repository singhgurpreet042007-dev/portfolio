import { MorphItem } from '../components/MorphGallery';
import { LiquidGlassCarouselItem } from '../components/ui/LiquidGlassCarousel';

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface TechStackGroup {
  category: string;
  items: string[];
}

export interface ProjectData extends LiquidGlassCarouselItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  src: string;
  aspect: number;
  images: MorphItem[];
  liveUrl?: string;
  githubUrl?: string;
  category: string;
  role: string;
  timeline: string;
  metrics: ProjectMetric[];
  architectureOverview: string;
  problemStatement: string;
  solutionOverview: string;
  keyHighlights: string[];
  techStack: TechStackGroup[];
  transitionQuote: string;
}

export const PROJECTS: ProjectData[] = [
  {
    id: 'aegis-ai',
    number: '01',
    title: 'Aegis-AI',
    subtitle: 'Zero-Trust Behavioral Identity Verification Platform',
    category: 'Cybersecurity & Behavioral Biometrics',
    role: 'Full-Stack & ML Architect',
    timeline: '2025 – 2026',
    transitionQuote: 'Security is continuous, not circumstantial. Defending every session with relentless precision.',
    src: '/assets/projects/aegis-showcase.jpg',
    aspect: 3 / 4,
    description:
      'Continuous zero-trust behavioral identity verification platform transforming raw human interaction dynamics — keystroke cadence, cursor velocity, and micro-gestures — into an autonomous behavioral shield. Closes the post-login hijacking window where traditional authentication leaves sessions exposed, executing real-time threat evaluation with sub-80ms response times and zero user friction.',
    architectureOverview:
      'Engineered as an asynchronous event-streaming pipeline, Aegis intercepts human-computer interaction telemetry in background web workers without logging sensitive payload characters. Micro-timing cadences, dwell latencies, and acceleration vectors are transformed into a 48-dimensional tensor, evaluated by an on-edge Isolation Forest engine to calculate real-time confidence scores in sub-80ms cycles.',
    problemStatement:
      'Modern web applications rely on static login checkpoints (passwords, 2FA, OTPs) that authorize a session cookie indefinitely. Once an authenticated token is extracted via browser infostealers or unauthorized physical terminal access, traditional perimeter defenses remain completely oblivious to the adversary conducting malicious operations.',
    solutionOverview:
      'Aegis institutes perpetual zero-trust verification by contrasting live cursor velocity curvatures and keystroke flight intervals against a personalized mathematical baseline. When behavioral drift crosses dynamic anomaly thresholds, the cryptographic session token is autonomously invalidated in under 80 milliseconds.',
    metrics: [
      { label: 'Risk Inference Latency', value: '< 80ms' },
      { label: 'Biometric Vector Space', value: '48 Dimensions' },
      { label: 'Authentication Friction', value: '0 Interruptions' },
      { label: 'Hijacking Defense', value: 'Real-Time Autonomous' },
    ],
    keyHighlights: [
      'Continuous keystroke flight time and dwell duration telemetry captured across browser inputs without keylogging content.',
      'Normalized cursor velocity, acceleration, and curvature trajectory extraction using mathematical vector analysis.',
      'Isolation Forest anomaly detection algorithm dynamically scoring real-time behavioral deviation vectors.',
      'Autonomous zero-trust token invalidation and cryptographic session revocation upon detected risk escalation.',
      'Zero-friction passive security layer safeguarding sensitive administrative dashboards and financial systems.',
    ],
    techStack: [
      { category: 'Frontend Architecture', items: ['React 19', 'Next.js 16 (App Router)', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
      { category: 'Intelligence & ML Engine', items: ['Python', 'Scikit-Learn', 'Isolation Forest', 'NumPy', 'FastAPI'] },
      { category: 'Backend & Security', items: ['Node.js', 'JWT Cryptographic Salts', 'WebSockets', 'Redis In-Memory Store'] },
      { category: 'Deployment & Tooling', items: ['Docker', 'Vercel Edge Network', 'GitHub Actions CI/CD'] },
    ],
    images: [
      { src: '/assets/projects/aegis-slide-1.png', alt: 'Aegis-AI Behavioral Biometrics Interface' },
      { src: '/assets/projects/aegis-slide-2.png', alt: 'Aegis-AI Command Center Dashboard' },
      { src: '/assets/projects/aegis-slide-3.png', alt: 'Aegis-AI Security Pulse & Anomaly Score' },
      { src: '/assets/projects/aegis-slide-4.png', alt: 'Aegis-AI Architecture Topology' },
    ],
    liveUrl: 'https://aegis-frontend-sigma.vercel.app/',
    githubUrl: 'https://github.com/singhgurpreet042007-dev/Aegis',
  },
  {
    id: 'fluxora',
    number: '02',
    title: 'Fluxora',
    subtitle: 'Enterprise Real-Time Collaborative Platform',
    category: 'Enterprise SaaS & Cloud Infrastructure',
    role: 'Full-Stack Software Engineer',
    timeline: '2025 – 2026',
    transitionQuote: 'Hard work compounds into velocity. Real-time systems built for relentless team flow.',
    src: '/assets/projects/fluxora-showcase.jpg',
    aspect: 3 / 4,
    description:
      'High-performance collaborative enterprise platform engineered with real-time Kanban workspaces, PostgreSQL row-level security, and sub-100ms optimistic state synchronization. Built for cross-functional engineering teams requiring instantaneous live coordination, distributed permissions, and automated conflict reconciliation across complex project pipelines.',
    architectureOverview:
      'Architected around an optimistic state-diff engine and bidirectional WebSocket event streams, Fluxora decouples client board mutations from database roundtrips. Every card transition and column reordering executes instantaneously on the client while asynchronous transactions are cryptographically enforced against PostgreSQL Row-Level Security policies.',
    problemStatement:
      'High-velocity product teams frequently experience distributed state desynchronization in conventional project boards. Concurrent card updates induce merge conflicts, stale cached board views, and database connection bottlenecks that disrupt synchronized sprint planning.',
    solutionOverview:
      'Fluxora couples an optimistic local delta engine with strict PostgreSQL Row-Level Security. Every card reordering, status change, and user assignment is instantly reflected locally and reconciled against the remote server state without blocking UI threads.',
    metrics: [
      { label: 'Real-Time Sync Latency', value: '< 100ms' },
      { label: 'Database Security', value: 'Strict PostgreSQL RLS' },
      { label: 'State Reconciliation', value: 'Optimistic Delta' },
      { label: 'Platform Availability', value: '99.9% Uptime' },
    ],
    keyHighlights: [
      'Sub-100ms optimistic state synchronization providing instantaneous perceived UI responsiveness on card drag & reordering.',
      'Strict PostgreSQL Row-Level Security (RLS) guaranteeing absolute tenant isolation and granular workspace permissions.',
      'Real-time WebSocket channels streaming collaborative task states, user presence cursors, and live activity feeds.',
      'Prisma ORM schema design optimized for high-throughput relational queries with zero circular dependency traps.',
      'Accessible drag-and-drop workspace powered by fluid physics-based micro-interactions and keyboard reordering.',
    ],
    techStack: [
      { category: 'Frontend Core', items: ['React 19', 'TypeScript', 'Tailwind CSS', 'Radix UI', 'Framer Motion'] },
      { category: 'Backend & Data Layer', items: ['Node.js', 'Express', 'PostgreSQL', 'Prisma ORM', 'Redis Cache'] },
      { category: 'Real-Time Channels', items: ['Supabase Realtime', 'WebSockets', 'Optimistic UI Engine'] },
      { category: 'DevOps & Hosting', items: ['Vercel Cloud', 'Neon Serverless Postgres', 'ESLint Strict'] },
    ],
    images: [
      { src: '/assets/projects/fluxora-slide-1.png', alt: 'Fluxora Real-Time Workspace Overview' },
      { src: '/assets/projects/fluxora-slide-2.png', alt: 'Fluxora Collaborative Kanban Boards' },
      { src: '/assets/projects/fluxora-slide-3.png', alt: 'Fluxora Optimistic Sync Engine' },
      { src: '/assets/projects/fluxora-slide-4.png', alt: 'Fluxora Security & Access Matrix' },
    ],
    liveUrl: 'https://fluxora-hazel-nine.vercel.app/',
    githubUrl: 'https://github.com/singhgurpreet042007-dev/Fluxora',
  },
  {
    id: 'deployflow',
    number: '03',
    title: 'DeployFlow',
    subtitle: 'Developer Tooling & Cloud IDE Extension',
    category: 'Developer Experience & Systems Tooling',
    role: 'Systems & Extension Architect',
    timeline: '2025',
    transitionQuote: 'Developer velocity is sacred. Engineered to eliminate friction and elevate focus.',
    src: '/assets/projects/deployflow-showcase.jpg',
    aspect: 3 / 4,
    description:
      'Developer tooling cloud extension for Visual Studio Code with 35+ verified marketplace downloads, providing seamless one-click cloud deployments, delta file synchronization, and real-time build telemetry. Eliminates context-switching between code editor and remote cloud consoles by streaming infrastructure logs, environment variables, and deployment states directly within the editor.',
    architectureOverview:
      'Constructed as a native Visual Studio Code language extension, DeployFlow hooks directly into local Git tree diffs and operating system secret storage. Modified file chunks are cryptographically hashed using SHA-1 algorithms and streamed to cloud hosting infrastructure without developers ever leaving the editor viewport.',
    problemStatement:
      'Developers building cloud-native applications lose up to 20% of their daily focus context-switching between code editors, shell windows, and third-party cloud dashboards to verify deployments, troubleshoot failed builds, and synchronize environment secrets.',
    solutionOverview:
      'DeployFlow embeds continuous cloud orchestration directly into Visual Studio Code. With intelligent SHA-1 delta synchronization, encrypted native SecretStorage access, and live streaming build logs, engineers ship and verify production code with zero browser tab juggling.',
    metrics: [
      { label: 'VS Code Downloads', value: '35+' },
      { label: 'Deployment Trigger', value: '1-Click Native' },
      { label: 'Delta File Engine', value: 'SHA-1 Hash Tree' },
      { label: 'Credential Vault', value: 'Native SecretStorage' },
    ],
    keyHighlights: [
      'Published on the Visual Studio Code Marketplace with 35+ developer downloads and active usage.',
      'Deep integration with the official Visual Studio Code Extension API and custom status bar telemetry indicators.',
      'Delta file synchronization engine using cryptographic SHA-1 hashes to upload only modified project chunks.',
      'Encrypted credential and API token management utilizing native OS SecretStorage (Keychain / Windows Credential Manager).',
      'Real-time streaming deployment logs and build telemetry rendered inside a lightweight custom webview panel.',
    ],
    techStack: [
      { category: 'IDE Runtime', items: ['VS Code Extension API', 'TypeScript', 'Node.js Engine'] },
      { category: 'Sync & Networking', items: ['SHA-1 Delta Engine', 'Streaming Netlify API', 'Axios'] },
      { category: 'OS & Security', items: ['Native OS SecretStorage', 'Encrypted Token Vault'] },
      { category: 'Packaging & Build', items: ['Esbuild', 'VSCE Packaging', 'Git CLI Hooks'] },
    ],
    images: [
      { src: '/assets/projects/deployflow-preview.png', alt: 'DeployFlow VS Code Extension Overview' },
      { src: '/assets/projects/deployflow-slide-2.png', alt: 'DeployFlow Live Sync Pipeline' },
      { src: '/assets/projects/deployflow-slide-3.png', alt: 'DeployFlow Cloud Telemetry & Logs' },
      { src: '/assets/projects/code-editor.jpg', alt: 'DeployFlow Code Environment' },
    ],
    liveUrl: 'https://marketplace.visualstudio.com/',
    githubUrl: 'https://github.com/singhgurpreet042007-dev/DeployFlow',
  },
  {
    id: 'smart-campus',
    number: '04',
    title: 'Smart Campus System',
    subtitle: 'Smart Campus Operating System',
    category: 'Academic & Campus Management Platform',
    role: 'Full-Stack Systems Developer',
    timeline: '2024 – 2025',
    transitionQuote: 'Real effort creates lasting utility. Distributed systems engineered for everyday reliability.',
    src: '/assets/projects/smart-campus-showcase.png',
    aspect: 16 / 9,
    description:
      'One unified platform to manage academic records, attendance limits, lecture timetables, and campus broadcasts with precision. Connects students with real-time academic standing and empowers administrators with transparent institutional governance.',
    architectureOverview:
      'Engineered with Next.js 16 (App Router), TypeScript, and Prisma ORM, Smart Campus unifies attendance ratio monitoring, dynamic timetable schedules, and campus notice broadcasts into an integrated operating system. Cryptographic JWT authentication secures student and administrative tiers with strict role-based access control.',
    problemStatement:
      'Universities frequently operate across fragmented manual attendance registers, disjointed timetable notices, and unmonitored deadline trackers, causing academic disorganization, regulatory attendance shortfalls, and communication silos.',
    solutionOverview:
      'Smart Campus institutes a unified academic operating system with a predictive attendance goal calculator (75%+ regulatory safeguard), interactive hour-by-hour lecture schedules, priority-tiered assignment submission boards, and verified campus broadcast circulars.',
    metrics: [
      { label: 'Platform Uptime', value: '99.9%' },
      { label: 'Attendance Limit', value: '75%+' },
      { label: 'Campus Sync', value: 'Real-Time' },
      { label: 'Security & Auth', value: 'Prisma + RBAC' },
    ],
    keyHighlights: [
      'Real-time attendance ratio tracking with predictive alerts safeguarding against 75% regulatory minimums.',
      'Interactive day-by-day and weekly timetable planner with faculty tags and live ongoing lecture pulses.',
      'Academic coursework and submission tracking with priority badges and submission countdown alerts.',
      'Centralized official campus notices and categorized circular feeds (Academic, Exams, Events) with admin badges.',
      'Strict Role-Based Access Control (RBAC) isolating student and administrative workspaces with cryptographic JWTs.',
    ],
    techStack: [
      { category: 'Frontend Architecture', items: ['Next.js 16 (App Router)', 'React 19', 'TypeScript', 'Tailwind CSS', 'Lucide Icons'] },
      { category: 'Backend & Data Layer', items: ['Node.js', 'Prisma ORM', 'PostgreSQL / Supabase', 'REST Endpoints'] },
      { category: 'Security & Access', items: ['Cryptographic JWT', 'Bcrypt Hashing', 'Role-Based Access Control (RBAC)'] },
      { category: 'DevOps & Tooling', items: ['Vercel Cloud', 'Git Workflows', 'Turbopack'] },
    ],
    images: [
      { src: '/assets/projects/smart-campus-showcase.png', alt: 'Smart Campus Operating System' },
      { src: '/assets/projects/smart-campus-preview.png', alt: 'Attendance Hub & 75% Goal Predictor' },
      { src: '/assets/projects/smart-campus-slide-2.png', alt: 'Command Center & Institutional Audit Grid' },
      { src: '/assets/projects/smart-campus-slide-3.png', alt: 'Decoupled Microservice Architecture' },
    ],
    liveUrl: 'https://readynest-task-2-ten.vercel.app/',
    githubUrl: 'https://github.com/singhgurpreet042007-dev/readynest-task-2',
  },
];
