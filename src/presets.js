/**
 * agentflow-kit Presets & Default Configurations
 */

const TECH_STACK_PRESETS = {
  react: {
    name: 'React SPA (Vite)',
    framework: 'React 18+',
    bundler: 'Vite',
    language: 'JavaScript / JSX',
    styling: 'Vanilla CSS / PostCSS',
    routing: 'React Router DOM v6+',
    stateManagement: 'React Context API',
  },
  nextjs: {
    name: 'Next.js (App Router)',
    framework: 'Next.js 14+',
    bundler: 'Turbopack / Webpack',
    language: 'TypeScript / TSX',
    styling: 'Tailwind CSS',
    routing: 'App Router (file-system based)',
    stateManagement: 'React Server Components + Zustand',
  },
  vue: {
    name: 'Vue.js (Vite)',
    framework: 'Vue 3 (Composition API)',
    bundler: 'Vite',
    language: 'JavaScript / Vue SFC',
    styling: 'Scoped CSS / Tailwind',
    routing: 'Vue Router 4+',
    stateManagement: 'Pinia',
  },
  vanilla: {
    name: 'Vanilla Web (HTML / CSS / JS)',
    framework: 'Semantic HTML5',
    bundler: 'Vite / None',
    language: 'Vanilla Modern JavaScript (ES6+)',
    styling: 'Standard CSS3 Custom Properties',
    routing: 'Multi-page / Native History API',
    stateManagement: 'Custom PubSub / LocalStorage',
  },
  node_api: {
    name: 'Node.js Backend / REST API',
    framework: 'Node.js + Express / Fastify',
    bundler: 'Node Runtime',
    language: 'JavaScript / TypeScript',
    styling: 'N/A (API Services)',
    routing: 'Express Router',
    stateManagement: 'PostgreSQL / Prisma / Redis',
  },
};

const COLOR_PALETTES = {
  'warm-coffee': {
    name: 'Warm Coffee (Earthy, Organic, Grounded)',
    bgCanvas: '#FBF8F5',
    bgSurface: '#F4EEE5',
    bgSurfaceHover: '#EFE7DB',
    bgSurfaceSubtle: '#E8DEC8',
    textPrimary: '#23170F',
    textSecondary: '#5C4434',
    textMuted: '#876953',
    accentPrimary: '#A05A2C',
    accentHover: '#874921',
    borderSubtle: '#DECFC0',
    borderInteractive: '#CBBBAA',
  },
  'modern-slate': {
    name: 'Modern Slate (Sleek, High-tech, Clean Dark)',
    bgCanvas: '#0F172A',
    bgSurface: '#1E293B',
    bgSurfaceHover: '#334155',
    bgSurfaceSubtle: '#1E293B',
    textPrimary: '#F8FAFC',
    textSecondary: '#CBD5E1',
    textMuted: '#94A3B8',
    accentPrimary: '#38BDF8',
    accentHover: '#0EA5E9',
    borderSubtle: '#334155',
    borderInteractive: '#475569',
  },
  'minimal-mono': {
    name: 'Minimal Monochrome (High Contrast, Crisp, Editorial)',
    bgCanvas: '#FFFFFF',
    bgSurface: '#F9FAFB',
    bgSurfaceHover: '#F3F4F6',
    bgSurfaceSubtle: '#E5E7EB',
    textPrimary: '#111827',
    textSecondary: '#374151',
    textMuted: '#6B7280',
    accentPrimary: '#111827',
    accentHover: '#000000',
    borderSubtle: '#E5E7EB',
    borderInteractive: '#D1D5DB',
  },
  cyberpunk: {
    name: 'Cyberpunk Neon (Dark Canvas, Cyan & Amber Accents)',
    bgCanvas: '#0A0A12',
    bgSurface: '#121224',
    bgSurfaceHover: '#1B1B36',
    bgSurfaceSubtle: '#181830',
    textPrimary: '#F0F6FC',
    textSecondary: '#94A3B8',
    textMuted: '#64748B',
    accentPrimary: '#06B6D4',
    accentHover: '#0891B2',
    borderSubtle: '#1E293B',
    borderInteractive: '#06B6D4',
  },
};

const SQUAD_PRESETS = {
  full_squad: {
    name: 'Full Agile Squad (PO -> Scrum Master -> Dev -> QA -> DevOps -> Support)',
    roles: [
      'Product Owner',
      'Scrum Master',
      'Software Developer',
      'QA Engineer',
      'DevOps Engineer',
      'Support Engineer',
    ],
  },
  lean_trio: {
    name: 'Lean Trio (Product Owner -> Developer -> QA Engineer)',
    roles: ['Product Owner', 'Software Developer', 'QA Engineer'],
  },
  duo: {
    name: 'Developer + Dedicated QA Auditor',
    roles: ['Software Developer', 'QA Engineer'],
  },
};

module.exports = {
  TECH_STACK_PRESETS,
  COLOR_PALETTES,
  SQUAD_PRESETS,
};
