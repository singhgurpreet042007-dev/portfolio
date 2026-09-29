import { MorphItem } from '../components/MorphGallery';
import { LiquidGlassCarouselItem } from '../components/ui/LiquidGlassCarousel';

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
}

export const PROJECTS: ProjectData[] = [
  {
    id: 'aegis-ai',
    number: '01',
    title: 'Aegis-AI',
    subtitle: 'Zero-Trust Behavioral Security Platform',
    src: '/assets/showcase/zero-trust.jpg',
    aspect: 3 / 4,
    description:
      'Continuous zero-trust behavioral identity verification platform transforming raw human interaction dynamics — keystroke cadence, cursor velocity, and micro-gestures — into an autonomous behavioral shield. Closes the post-login hijacking window where traditional authentication leaves sessions exposed, executing real-time threat evaluation with sub-80ms response times and zero user friction.',
    images: [
      { src: '/assets/projects/aegis-slide-1.png', alt: 'Aegis-AI Behavioral Biometrics' },
      { src: '/assets/projects/aegis-slide-2.png', alt: 'Aegis-AI Command Center' },
      { src: '/assets/projects/aegis-slide-3.png', alt: 'Aegis-AI Security Pulse' },
      { src: '/assets/projects/aegis-slide-4.png', alt: 'Aegis-AI Architecture Topology' },
    ],
    liveUrl: 'https://aegis-frontend-sigma.vercel.app/',
    githubUrl: 'https://github.com/singhgurpreet042007-dev/Aegis',
  },
  {
    id: 'fluxora',
    number: '02',
    title: 'Fluxora',
    subtitle: 'Enterprise Real-Time SaaS Platform',
    src: '/assets/showcase/cloud-infra.jpg',
    aspect: 3 / 4,
    description:
      'High-performance collaborative enterprise platform engineered with real-time Kanban workspaces, PostgreSQL row-level security, and sub-100ms optimistic state synchronization. Built for cross-functional engineering teams requiring instantaneous live coordination, distributed permissions, and automated conflict reconciliation across complex project pipelines.',
    images: [
      { src: '/assets/projects/fluxora-slide-1.png', alt: 'Fluxora Real-Time Workspace' },
      { src: '/assets/projects/fluxora-slide-2.png', alt: 'Fluxora Collaborative Kanban' },
      { src: '/assets/projects/fluxora-slide-3.png', alt: 'Fluxora Optimistic Sync Engine' },
      { src: '/assets/projects/fluxora-slide-4.png', alt: 'Fluxora Security Matrix' },
    ],
    liveUrl: 'https://fluxora-lake.vercel.app/',
    githubUrl: 'https://github.com/singhgurpreet042007-dev/Fluxora',
  },
  {
    id: 'deployflow',
    number: '03',
    title: 'DeployFlow',
    subtitle: 'Developer Tooling & Cloud Extension',
    src: '/assets/showcase/dev-workspace.jpg',
    aspect: 3 / 4,
    description:
      'Developer tooling cloud extension for Visual Studio Code providing seamless one-click cloud deployments, delta file synchronization, and real-time build telemetry. Eliminates context-switching between code editor and remote cloud consoles by streaming infrastructure logs, environment variables, and deployment states directly within the editor.',
    images: [
      { src: '/assets/projects/deployflow-preview.png', alt: 'DeployFlow VS Code Extension' },
      { src: '/assets/projects/deployflow-slide-2.png', alt: 'DeployFlow Live Sync Pipeline' },
      { src: '/assets/projects/deployflow-slide-3.png', alt: 'DeployFlow Cloud Telemetry' },
      { src: '/assets/projects/code-editor.jpg', alt: 'DeployFlow Code Environment' },
    ],
    liveUrl: 'https://marketplace.visualstudio.com/',
    githubUrl: 'https://github.com/singhgurpreet042007-dev/DeployFlow',
  },
  {
    id: 'smart-campus',
    number: '04',
    title: 'Smart Campus System',
    subtitle: 'Distributed Utilities & Infrastructure',
    src: '/assets/showcase/systems-mesh.jpg',
    aspect: 3 / 4,
    description:
      'Decoupled campus infrastructure and utilities platform managing real-time student service requests, automated scheduling, and distributed resource allocation. Streamlines operational efficiency across educational facilities with real-time event updates, role-based administration, and responsive mobile-first workflows.',
    images: [
      { src: '/assets/projects/smart-campus-preview.png', alt: 'Smart Campus Utility Hub' },
      { src: '/assets/projects/smart-campus-slide-2.png', alt: 'Smart Campus Service Dispatch' },
      { src: '/assets/projects/smart-campus-slide-3.png', alt: 'Smart Campus Real-Time Schedule' },
      { src: '/assets/projects/dashboard.jpg', alt: 'Smart Campus Facility Operations' },
    ],
    githubUrl: 'https://github.com/singhgurpreet042007-dev/Smart-Campus-System',
  },
];
