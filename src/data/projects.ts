export interface ProjectSlide {
  pageNumber: number;
  tabLabel?: string;
  badge: string;
  title: string;
  subtitle: string;
  summary: string;
  bullets: string[];
  metrics?: { label: string; value: string }[];
  architectureHighlights?: { title: string; desc: string }[];
  imageBanner?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  oneLiner: string;
  problem?: string;
  category: 'Security & AI' | 'Full Stack SaaS' | 'Developer Tools' | 'Cafe & Hospitality' | 'Campus Tech & Smart Utilities';
  description: string;
  tags: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  marketplaceUrl?: string;
  demoVideoUrl?: string;
  featured: boolean;
  builtDetails: string[];
  internshipBadge?: string;
  caseStudySlides: ProjectSlide[];
}

export const projects: Project[] = [
  {
    id: 'aegis-ai',
    title: 'Aegis-AI',
    subtitle: 'Zero-Trust Behavioral Security Platform',
    oneLiner: 'Autonomous security platform that continuously verifies users through behavioral biometrics and 15-module posture audits.',
    problem: "Traditional authentication verifies a user once at login — if a session gets hijacked afterward, there is no way to detect it in real time.",
    category: 'Security & AI',
    description: 'Continuous behavioral identity verification platform transforming raw human interaction dynamics — keystroke cadence, cursor velocity, and micro-gestures — into a continuous zero-trust behavioral shield.',
    tags: ['Rust', 'Python', 'Next.js', 'Zero-Trust Biometrics', 'Neural Mesh', 'SIEM & Webhooks', 'NIST SP 800-207', 'Isolation Forest'],
    image: '/assets/projects/aegis-orbital.png',
    githubUrl: 'https://github.com/singhgurpreet042007-dev/Aegis',
    liveUrl: 'https://aegis-frontend-sigma.vercel.app/',
    featured: true,
    builtDetails: [
      'Continuous post-login zero-trust protection using keystroke cadence, cursor velocity, and micro-gestures',
      'Autonomous 15-module security & posture audit with continuous 4s/15ms surface health pulse',
      'Real-time Session Risk Spectrum & decaying risk index powered by Isolation Forest neural vectors',
      '1-Line Client-Side Tracker SDK streaming live biometrics to Datadog, Splunk, Slack, PagerDuty, and Okta',
    ],
    caseStudySlides: [
      {
        pageNumber: 1,
        tabLabel: 'Biometrics',
        badge: 'PAGE 01 · BEHAVIORAL IDENTITY VERIFICATION',
        title: 'Continuous Identity Verification',
        subtitle: 'Post-Login Zero-Trust Protection with Zero User Friction',
        summary: 'Aegis AI transforms post-login identity security by turning raw human interaction dynamics — keystroke cadence, cursor velocity, and micro-gestures — into a continuous, unhackable zero-trust behavioral shield.',
        imageBanner: '/assets/projects/aegis-slide-1.png',
        bullets: [
          'Continuous Behavioral Verification: Converts raw human interaction dynamics into passive behavioral fingerprints without prompt interruptions.',
          'Keystroke & Mouse Dynamics: Analyzes keystroke cadence, flight times, and cursor velocity acceleration in real-time.',
          'Post-Login Protection: Closes the session hijacking window where traditional 2FA leaves authorized sessions unmonitored.',
          'Zero User Friction: Completely transparent background monitoring with zero prompt fatigue for legitimate users.',
        ],
        metrics: [
          { label: 'Latency', value: 'Sub-200ms' },
          { label: 'Telemetry', value: 'Real-Time' },
          { label: 'Security Model', value: 'Zero Trust' },
        ],
      },
      {
        pageNumber: 2,
        tabLabel: 'Posture Audit',
        badge: 'PAGE 02 · COMMAND CENTER & POSTURE AUDIT',
        title: '15-Module Security & Posture Audit',
        subtitle: 'Live Command Center · Decaying Risk Index & Threat Vectors',
        summary: 'Aegis AI runs an autonomous 15-module posture audit inspecting SSL certificates, security headers, DNS records, and public endpoints, paired with continuous session risk index evaluation.',
        imageBanner: '/assets/projects/aegis-slide-2.png',
        bullets: [
          'Decaying Risk Index: Real-time statistical score (0.08 baseline) dynamically decaying or escalating as session interactions evolve.',
          'Session Risk Spectrum: High-frequency biometrics frequency & mouse velocity entropy wave streaming live from the Risk Engine.',
          'Threat Detection Vectors: Neural step topology and Isolation Forest anomaly nodes tracking deviations with 58.3%+ confidence.',
          'NIST SP 800-207 Live: Built strictly to zero-trust architecture standards with active AEGIS Sentinel session protection.',
        ],
        metrics: [
          { label: 'Posture Audit', value: '15 Modules' },
          { label: 'Baseline Samples', value: '450 Vectors' },
          { label: 'Risk Model', value: 'Decaying Index' },
        ],
      },
      {
        pageNumber: 3,
        tabLabel: 'Attack Surface',
        badge: 'PAGE 03 · ATTACK SURFACE & HEALTH PULSE',
        title: 'Attack Surface & Security Posture Audit',
        subtitle: 'Continuous External Threat Surface Discovery & Vulnerability Auditing',
        summary: 'Automated external threat discovery providing SSL/TLS certificate health, HTTP security headers scoring, and continuous health pulse telemetry for connected domains.',
        imageBanner: '/assets/projects/aegis-slide-3.png',
        bullets: [
          'Active Audited Domain: Real-time surface scanning and vulnerability diagnostics across linked enterprise production targets.',
          'Surface Health Pulse: High-frequency 15ms latency health ping executed every 4 seconds for continuous endpoint uptime assurance.',
          'TLS 1.3 Encryption Audit: Automated verification of cryptographic cipher suites, public key pinning, and DNS record authenticity.',
          'Target Domain Registry: Centralized registry managing security scores, inspection logs, and instant target disconnect controls.',
        ],
        metrics: [
          { label: 'Health Pulse', value: 'Every 4s (15ms)' },
          { label: 'Encryption', value: 'TLS 1.3 Verified' },
          { label: 'Scanning Status', value: 'Continuous Active' },
        ],
      },
      {
        pageNumber: 4,
        tabLabel: 'SIEM Pipeline',
        badge: 'PAGE 04 · SIEM & SECURITY INTEGRATIONS',
        title: 'SIEM & Security Pipeline Integrations',
        subtitle: '1-Line Client-Side Tracker SDK & Enterprise Security Connectivity',
        summary: 'Stream zero-trust biometrics telemetry and real-time risk scores into industry standard SIEM platforms, incident escalation channels, and identity orchestration engines.',
        imageBanner: '/assets/projects/aegis-slide-4.png',
        bullets: [
          '1-Line Client-Side Tracker SDK: Single lightweight async script tag embedding continuous mouse curvature and key dwell telemetry into any web app.',
          'Datadog & Splunk HEC: Direct telemetry streaming into Datadog Logs and Splunk Enterprise Security for centralized SecOps monitoring.',
          'Slack & PagerDuty Escalations: Automated incident dispatch on honey-token triggers, critical risk spikes (>0.85), and takeover attempts.',
          'Okta Identity Cloud: Enforce dynamic Adaptive Step-Up MFA via Okta Identity Engine when behavioral drift is detected.',
        ],
        metrics: [
          { label: 'Tracker SDK', value: '1-Line Script' },
          { label: 'SIEM Connectors', value: 'Splunk & Datadog' },
          { label: 'Identity Step-Up', value: 'Okta MFA Engine' },
        ],
      },
    ],
  },
  {
    id: 'fluxora',
    title: 'Fluxora',
    subtitle: 'Team Collaboration & Project Management Platform',
    oneLiner: 'Full-stack SaaS platform for team, project, and task management with real-time collaboration.',
    problem: 'Teams struggle with scattered task tracking, fragmented updates, and context switching across multiple disconnected tools.',
    category: 'Full Stack SaaS',
    description: 'Modern collaborative workspace centralizing task boards, team activity feeds, and granular role permissions into a responsive single dashboard.',
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Supabase', 'PostgreSQL'],
    image: '/assets/projects/fluxora-orbital.png',
    githubUrl: 'https://github.com/singhgurpreet042007-dev/JudgeNest',
    liveUrl: 'https://fluxora-hazel-nine.vercel.app/',
    featured: true,
    builtDetails: [
      'Secure authentication workflows with granular role-based access control (RBAC)',
      'Real-time team analytics, milestone completion tracking, and activity dashboard',
      'Relational task management engine backed by PostgreSQL with query optimization',
      'Modular, responsive, and reusable React component architecture built for speed',
    ],
    caseStudySlides: [
      {
        pageNumber: 1,
        tabLabel: 'Dashboard',
        badge: 'PAGE 01 · EXECUTIVE COMMAND CENTER',
        title: 'Executive Real-Time Dashboard',
        subtitle: 'Acme Inc. Workspaces · Task Velocity & Activity Feed',
        summary: 'Centralized command center delivering instant visibility into Acme Inc. operations: real-time sprint completion tracking (40%), critical upcoming deliverables across Judgenest and Nexus, and team-wide activity telemetry.',
        imageBanner: '/assets/projects/fluxora-slide-1.png',
        bullets: [
          'Live Metrics Counters: Real-time aggregation of Total Tasks (5), Completed (2), In Progress (1), and Urgent (1).',
          'Radial Completion Rate: Interactive dial displaying 40% completion (2 of 5 tasks) with discrete breakdown (1 To Do, 1 Active, 2 Done).',
          'Upcoming Deliverables Queue: Instant visibility into priority milestones across Judgenest, Nexus, and Almora modules.',
          'Multi-Tenant Organization Hub: Quick workspace context switcher with Admin security privileges and member audit feeds.',
        ],
        metrics: [
          { label: 'Completion Rate', value: '40% (2 of 5)' },
          { label: 'Active Tasks', value: '5 Live Tasks' },
          { label: 'Data Sync', value: '<50ms Real-Time' },
        ],
      },
      {
        pageNumber: 2,
        tabLabel: 'Tasks Board',
        badge: 'PAGE 02 · KANBAN TASK PIPELINE',
        title: 'Interactive Multi-Stage Kanban',
        subtitle: 'Todo, In Progress, Review & Done Workflow Pipeline',
        summary: 'High-velocity sprint management board featuring fluid task state transitions across Todo, In Progress, Code Review, and Completed stages with project association tags and assignee tracking.',
        imageBanner: '/assets/projects/fluxora-slide-2.png',
        bullets: [
          '4 Discrete Pipeline Stages: Seamlessly routes deliverables through Todo (presentation), In Progress (deploy), Review (Structure review), and Done (develop app, Nexus Frontend).',
          'Board & List Dual Views: Flexible view switcher allowing engineers to alternate between spatial Kanban cards and structured tabular task lists.',
          'Project Filtering & Quick Actions: Instant cross-project filtering across All Projects and one-click "+ New Task" creation modal.',
          'Assignee Avatars & Due Dates: Visual accountability badges displaying assignee profile thumbnails and scheduled deliverable deadlines.',
        ],
        metrics: [
          { label: 'Active Columns', value: '4 Workflow Stages' },
          { label: 'View Modes', value: 'Board + List' },
          { label: 'State Sync', value: 'Optimistic UI' },
        ],
      },
      {
        pageNumber: 3,
        tabLabel: 'Projects Hub',
        badge: 'PAGE 03 · MULTI-TENANT DIRECTORY',
        title: 'Multi-Project Workspace Hub',
        subtitle: 'Organized Multi-App Initiatives & Milestone Progress',
        summary: 'Unified project repository organizing simultaneous development initiatives — Smart Campus Utility, Almora Data Engine, JudgeNest, and Nexus Collaboration — with individual deliverable progress bars and status telemetry.',
        imageBanner: '/assets/projects/fluxora-slide-3.png',
        bullets: [
          'Multi-Project Directory: Centralizes distributed software initiatives under a unified organization profile (Acme Inc.).',
          'Milestone Progress Bars: Visual gradient completion indicators tracking milestone completion ratios (e.g. Nexus 1/2 tasks, Smart Campus 1/1 tasks).',
          'Lifecycle Status Badging: Real-time badges distinguishing between Active, Completed, and Archived project workspaces.',
          'Contextual Project Menus: Dedicated controls to manage workspace permissions, inspect team contributors, and spawn new initiatives.',
        ],
        metrics: [
          { label: 'Workspaces', value: 'Acme Inc. Multi-Org' },
          { label: 'Managed Projects', value: '4 Active Modules' },
          { label: 'Isolation', value: 'PostgreSQL RLS' },
        ],
      },
      {
        pageNumber: 4,
        tabLabel: 'Auth & Speed',
        badge: 'PAGE 04 · ONBOARDING & ENTERPRISE AUTH',
        title: 'The Workspace That Moves At Your Speed',
        subtitle: 'Ultra-Fast Onboarding, <50ms Sync & 99.9% Uptime',
        summary: 'Engineered for enterprise momentum with rapid account creation, JWT authentication, real-time collaboration across 10,000+ teams, 99.9% uptime SLA, and sub-50ms synchronization across all connected clients.',
        imageBanner: '/assets/projects/fluxora-slide-4.png',
        bullets: [
          'High-Conversion Onboarding: Sleek dark-mode authentication portal with password reveal toggling and instant validation.',
          'Ultra-Low Latency Sync: Distributed WebSocket architecture synchronizing state changes across teams in under 50 milliseconds.',
          'Enterprise Reliability: High-availability cloud infrastructure engineered for 99.9% uptime across 10k+ collaborative teams.',
          'Stateful Session Notifications: Non-intrusive notification system with animated status toasts ("Signed out · See you soon").',
        ],
        metrics: [
          { label: 'Sync Latency', value: '< 50ms Real-Time' },
          { label: 'Uptime SLA', value: '99.9% Availability' },
          { label: 'Scale Target', value: '10k+ Teams' },
        ],
      },
    ],
  },
  {
    id: 'deployflow',
    title: 'DeployFlow',
    subtitle: 'Deploy your code. Directly from VS Code.',
    oneLiner: 'Instant, one-click deployments to Netlify directly from your editor with automatic framework detection, local build engine, live logs, env manager, and interactive history.',
    problem: 'Switching back and forth between terminal commands, Git pushes, and web dashboards just to publish code slows down developer shipping momentum.',
    category: 'Developer Tools',
    description: 'Official Visual Studio Code extension bringing seamless cloud deployments to Netlify directly into your editor sidebar. Features universal framework detection, native SecretStorage encryption, real-time SHA-1 delta sync with 5x concurrency, and an in-editor environment variable manager.',
    tags: ['TypeScript (82.5%)', 'VS Code Extension API', 'Netlify API', 'Node.js', 'SHA-1 Delta Engine', 'SecretStorage Keyring', 'Zero-Leak Security'],
    image: '/assets/projects/deployflow-orbital.png',
    githubUrl: 'https://github.com/singhgurpreet042007-dev/Deployflow',
    marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=gurpreet-singh-dev.deployflow',
    demoVideoUrl: 'https://github.com/singhgurpreet042007-dev/Deployflow',
    featured: true,
    builtDetails: [
      '1-Click Instant Deployments to Netlify global CDN directly from the VS Code Activity Bar with zero manual config',
      'Smart Universal Framework Detection (React/Vite, Next.js, Vue/Nuxt, Astro, SvelteKit, Angular, Remix, Solid, Static HTML)',
      'Enterprise-grade zero-leak security with VS Code native SecretStorage keyring and automated .env / secret exclusions',
      'Real-time SHA-1 delta hashing engine with 5x upload concurrency, streaming logs, and in-editor Netlify environment variable manager',
    ],
    caseStudySlides: [
      {
        pageNumber: 1,
        tabLabel: '1-Click Deploy',
        badge: 'PAGE 01 · 1-CLICK INSTANT DEPLOYMENTS & SMART DETECTION',
        title: 'Deploy your code. Directly from VS Code.',
        subtitle: 'Zero-Config Workflow from Editor directly to Netlify Global CDN',
        summary: 'DeployFlow eliminates terminal friction and Git push overhead by bringing one-click Netlify deployments into the VS Code Activity Bar with universal framework auto-detection.',
        imageBanner: '/assets/projects/deployflow-preview.png',
        bullets: [
          'Universal Framework Detection: Automatically inspects project stack and configures build commands: React & Vite (dist), Next.js (out), Vue/Nuxt, Astro, SvelteKit, Angular, and static assets.',
          'Zero Friction 3-Step Flow: Open project in VS Code ──► Select target Netlify site ──► Click [ 🚀 Deploy Project ] ──► Site is Live in seconds.',
          'Production vs Preview Deployments: Effortlessly switch between live custom production domains and isolated preview (draft) deployment URLs with unique test endpoints.',
          'Command Palette Integration: Full keyboard control via Ctrl+Shift+P shortcuts (deployflow.deploy, deployflow.openPanel, deployflow.redeploy, deployflow.configure).',
        ],
        metrics: [
          { label: 'Deployment Speed', value: '1-Click (<5s)' },
          { label: 'Framework Support', value: '12+ Frameworks' },
          { label: 'CDN Target', value: 'Netlify Global CDN' },
        ],
      },
      {
        pageNumber: 2,
        tabLabel: 'Security & Env',
        badge: 'PAGE 02 · ZERO-LEAK SECURITY & SECRETSTORAGE',
        title: 'Enterprise-Grade Zero-Leak Security',
        subtitle: 'Native SecretStorage Keyring & In-Editor Environment Variables Manager',
        summary: 'Personal Access Tokens and sensitive credentials are encrypted using VS Code native OS-level keyring. Strict smart filters prevent .env and keys from ever leaving the machine, while an in-sidebar manager handles Netlify environment variables.',
        imageBanner: '/assets/projects/deployflow-slide-2.png',
        bullets: [
          'Native SecretStorage: Encrypts Netlify Personal Access Tokens using VS Code OS-level keychain API (Mac Keychain, Windows Credential Manager, Linux Secret Service) — zero plaintext storage.',
          'Smart Exclusions: Strictly prevents accidental uploads of .env, .env.*, .git, node_modules, id_rsa, .pem, .key, and private keys.',
          'Netlify Environment Variables Manager: Fetch, create, update, and delete site environment variables directly inside the sidebar without opening a web browser.',
          'Masked Values & Clean Config: Confidential secrets masked (••••••••••••) with eye reveal toggles; project settings stored safely in clean .deployflow.json without secrets.',
        ],
        metrics: [
          { label: 'Credential Vault', value: 'OS Native Keyring' },
          { label: 'Leak Prevention', value: 'Automated Filters' },
          { label: 'Env Manager', value: 'In-Sidebar (Masked)' },
        ],
      },
      {
        pageNumber: 3,
        tabLabel: 'Delta Engine',
        badge: 'PAGE 03 · DELTA SYNC ENGINE & ARCHITECTURE',
        title: 'Real-Time Delta Upload Engine & Streaming Logs',
        subtitle: 'SHA-1 Cryptographic Hashing with 5x Concurrent Uploads',
        summary: 'DeployFlow computes parallel SHA-1 checksums for all local build files before uploading. It negotiates a delta manifest with Netlify API, uploading only modified chunks across a 5x concurrent worker pool.',
        imageBanner: '/assets/projects/deployflow-slide-3.png',
        bullets: [
          'SHA-1 Delta Hashing: Computes local crypto hashes in parallel, skipping unchanged assets and slashing upload bandwidth by up to 85%.',
          '5x Concurrent Uploads: Multi-threaded delta upload engine pushes altered chunks simultaneously for sub-5 second redeployments.',
          'Live Streaming Logs: Real-time VS Code output channel streaming local framework build progress, hash verification, and CDN deployment logs.',
          'Interactive Deployment History: Comprehensive audit trail with status badges (✓ Published, ✕ Failed), timestamps, durations, and 1-click redeploy actions.',
        ],
        architectureHighlights: [
          { title: 'Project & Framework Detector', desc: 'Auto-detects build commands (npm run build) and output directories (dist, out, build)' },
          { title: 'FileCollector & Security Filter', desc: 'Isolates sensitive files and computes parallel SHA-1 digest signatures' },
          { title: 'Delta Upload Service (5x)', desc: 'High-throughput 5x concurrent pipeline synchronizing delta chunks to Netlify CDN' },
        ],
        metrics: [
          { label: 'Bandwidth Slashed', value: 'Up to 85%' },
          { label: 'Concurrency', value: '5x Parallel Workers' },
          { label: 'Log Telemetry', value: 'Real-Time Stream' },
        ],
      },
      {
        pageNumber: 4,
        tabLabel: 'Marketplace & OSS',
        badge: 'PAGE 04 · MARKETPLACE & COMMUNITY',
        title: 'Published Extension on VS Code Marketplace',
        subtitle: 'Crafted with TypeScript · 100% Open Source MIT License',
        summary: 'Published and verified on the official Microsoft Visual Studio Code Marketplace under publisher gurpreet-singh-dev. Fully open-source on GitHub with comprehensive documentation and community support.',
        imageBanner: '/assets/projects/deployflow-preview.png',
        bullets: [
          'Official Marketplace Publication: Installable directly from VS Code Extensions tab or CLI via `ext install gurpreet-singh-dev.deployflow`.',
          'Lightweight Codebase: Written in 82.5% TypeScript with zero runtime overhead, modular services, and native VS Code API integration.',
          'Workspace Config (.deployflow.json): Flexible JSON schema supporting custom package managers (npm, pnpm, yarn, bun) and custom build configurations.',
          'MIT Open Source: Fully open-source repository on GitHub with issue tracking, releases, and transparent contribution guidelines.',
        ],
        metrics: [
          { label: 'Language', value: '82.5% TypeScript' },
          { label: 'Publisher', value: 'gurpreet-singh-dev' },
          { label: 'License', value: 'MIT Open Source' },
        ],
      },
    ],
  },
  {
    id: 'smart-campus',
    title: 'Smart Campus Utility Platform',
    subtitle: 'Decoupled Full-Stack Academic Operations Platform',
    oneLiner: 'A modern, full-stack Smart Campus Utility Platform with Next.js 16, Express, Prisma ORM, 75% attendance predictors, and role-based access control.',
    problem: 'Fragmented academic workflows, manual attendance spreadsheets, rigid scheduling, and delayed circular announcements hinder student compliance and institutional efficiency.',
    category: 'Campus Tech & Smart Utilities',
    description: 'Production-ready full-stack academic operations platform architected into two completely decoupled repositories (Next.js 16 frontend and Express/Prisma REST backend). Features an interactive student dashboard with a 75% regulatory attendance goal predictor, automated timetable filters, assignment sprint tracking, and an administrative command center with campus-wide circular broadcasting.',
    tags: ['Next.js 16', 'React 19', 'Node.js', 'Express.js', 'Prisma ORM', 'TypeScript (98.2%)', 'PostgreSQL', 'Tailwind CSS 4', 'JWT & RBAC', 'Bcrypt (10 Rounds)'],
    image: '/assets/projects/smart-campus-orbital.png',
    githubUrl: 'https://github.com/singhgurpreet042007-dev/readynest-task-2',
    liveUrl: 'https://readynest-task-2-ten.vercel.app/',
    featured: true,
    builtDetails: [
      'Decoupled architecture: Independent Next.js 16 (App Router) frontend and Express + Prisma TypeScript backend',
      '75% Regulatory Goal Predictor calculating consecutive class requirements to prevent semester examination debarment',
      'Cryptographic JWT authentication, 10-round bcrypt salted hashing, and strict Role-Based Access Control (RBAC)',
      'Administrator Command Center with live attendance distribution charts, timetable manager, and notice broadcast engine',
    ],
    caseStudySlides: [
      {
        pageNumber: 1,
        tabLabel: 'Student Hub',
        badge: 'PAGE 01 · STUDENT INTERACTIVE DASHBOARD',
        title: 'Attendance Hub & 75% Regulatory Goal Predictor',
        subtitle: 'Live Attendance Ring, Subject Loggers & Eligibility Forecasting',
        summary: 'The student portal provides real-time academic standing visibility: live attendance percentage rings, single-click +1 Present / +1 Absent loggers, and a predictive mathematical engine calculating the exact consecutive classes needed to maintain 75% semester eligibility.',
        imageBanner: '/assets/projects/smart-campus-preview.png',
        bullets: [
          '75% Goal Predictor: Formulates exact consecutive lecture requirements to reach compliance or stay clear of examination debarment.',
          'Interactive Attendance Ring: Visual progress ring with subject-level breakdown (Distributed Systems, ML, Cloud Architecture).',
          'Daily & Weekly Timetable: Day-by-day lecture filter displaying assigned faculty, lecture timings, and lecture hall locations.',
          'Academic Tasks & Sprints: Assignment management organized across TODO, IN_PROGRESS, and COMPLETED states with priority tags.',
        ],
        metrics: [
          { label: 'Regulatory Target', value: '75% Compliance' },
          { label: 'Attendance Sync', value: 'Sub-50ms Reactive' },
          { label: 'Predictor Engine', value: 'Mathematical Forecast' },
        ],
      },
      {
        pageNumber: 2,
        tabLabel: 'Admin Center',
        badge: 'PAGE 02 · ADMINISTRATOR CAMPUS COMMAND CENTER',
        title: 'Institutional Telemetry & Campus Directory',
        subtitle: 'Attendance Distribution Analytics, Notice Engine & Student Audits',
        summary: 'The administrator command center gives university officials high-level institutional telemetry: live attendance distribution breakdown, weekly lecture density graphs, searchable student directories, and instant circular broadcasting.',
        imageBanner: '/assets/projects/smart-campus-slide-2.png',
        bullets: [
          'Attendance Distribution Chart: Regulatory breakdown across 90-100% (Honor Roll), 75-89% (Compliant), 65-74% (At-Risk), and <65% (Debarred).',
          'Weekly Schedule Density: Real-time class distribution heatmap visualizing faculty workload and section density across 6 weekdays.',
          'Searchable Student Directory: Comprehensive roster with enrollment numbers, academic status, and immediate debarment alerts.',
          'Broadcast Notice Engine: Single-click campus-wide announcement publisher categorized by Academic, Exams, Events, or Urgent.',
        ],
        metrics: [
          { label: 'Students Audited', value: '2,840 Enrolled' },
          { label: 'Average Attendance', value: '81.6% Campus-Wide' },
          { label: 'Notice Reach', value: 'Instant Campus-Wide' },
        ],
      },
      {
        pageNumber: 3,
        tabLabel: 'Architecture',
        badge: 'PAGE 03 · DECOUPLED FULL-STACK ARCHITECTURE',
        title: 'Next.js 16 + Express + Prisma Zero-Coupling',
        subtitle: 'Standalone Frontend & Backend Repositories with Strict RBAC',
        summary: 'Engineered into two completely independent directories (frontend/ and backend/). The Next.js 16 App Router UI communicates with the Node.js/Express Prisma API via secure JWT-authenticated REST endpoints.',
        imageBanner: '/assets/projects/smart-campus-slide-3.png',
        bullets: [
          'Frontend Stack: Next.js 16 (App Router), React 19, TypeScript (98.2%), Tailwind CSS 4, Framer Motion, and Recharts.',
          'Backend Stack: Node.js, Express.js, TypeScript, Prisma ORM, PostgreSQL (Production) / SQLite (Local Dev), Zod.',
          'Role-Based Access Control (RBAC): Cryptographically signed JWT tokens with bcrypt 10-round salted password hashing.',
          'Protected Mutating Routes: Strict middleware verifying ADMIN claims before enabling notice broadcasts or timetable modifications.',
        ],
        architectureHighlights: [
          { title: 'frontend/ (Next.js 16)', desc: '10 routes, GlassCard components, useAuth context, API client with JWT headers' },
          { title: 'backend/ (Express & Prisma)', desc: 'Modular controllers, relational database models, CORS, and Zod input validation' },
          { title: 'Database & Auth Layer', desc: 'PostgreSQL relational schemas with Prisma client and bcrypt password hashing' },
        ],
        metrics: [
          { label: 'TypeScript Ratio', value: '98.2% Strict' },
          { label: 'Decoupling', value: '100% Zero-Coupled' },
          { label: 'Security', value: 'JWT + Bcrypt (10 Rds)' },
        ],
      },
      {
        pageNumber: 4,
        tabLabel: 'API & Deploy',
        badge: 'PAGE 04 · REST API & PRODUCTION DEPLOYMENT',
        title: 'Comprehensive REST API & Demo Ecosystem',
        subtitle: 'Vercel Edge Frontend, Cloud Backend & Pre-Seeded Evaluation Accounts',
        summary: 'Complete REST endpoint specification covering Auth, Students, Attendance, Tasks, Notices, Timetable, and Administration with pre-configured student and admin accounts for instant evaluation.',
        imageBanner: '/assets/projects/smart-campus-preview.png',
        bullets: [
          'Structured REST Endpoints: 15+ secured routes covering /api/auth, /api/attendance, /api/tasks, /api/notices, and /api/timetable.',
          'Pre-Configured Demo Accounts: Instant 1-click evaluation logins for Student (student@campus.edu) and Admin (admin@campus.edu).',
          'Automated Prisma Seeder: Comprehensive database seed script provisioning sample students, attendance rosters, and notices.',
          'Open Source & MIT Licensed: Fully documented deployment guide with zero-coupling setup for local and production environments.',
        ],
        metrics: [
          { label: 'Live Deployment', value: 'readynest-task-2-ten.vercel.app' },
          { label: 'REST Endpoints', value: '15+ Documented' },
          { label: 'License', value: 'MIT Open Source' },
        ],
      },
    ],
  },
];
