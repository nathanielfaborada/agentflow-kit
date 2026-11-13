/**
 * agentflow-kit Generator Engine
 * Generates the standardized .agents directory structure tailored to the selected SDLC methodology.
 * Generates 100% production-parity Antigravity Agent Definition YAML files identical in schema
 * to the battle-tested setup in nathanielfaborada.github.io.
 */

const fs = require('fs');
const path = require('path');
const { SDLC_METHODOLOGIES } = require('./presets');

function generateAgentsDirectory(targetDir, config) {
  const agentsRoot = path.join(targetDir, '.agents');
  const rulesDir = path.join(agentsRoot, 'rules');
  const designDir = path.join(agentsRoot, 'design-system');
  const sdlcDir = path.join(agentsRoot, 'SDLC');
  const rolesDir = path.join(agentsRoot, 'project-roles');

  // Ensure directories exist
  [agentsRoot, rulesDir, designDir, sdlcDir, rolesDir].forEach((dir) => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });

  const projectName = config.projectName || 'My Project';
  const authorName = config.authorName || 'Developer';
  const stack = config.stack || {
    framework: 'React 19',
    bundler: 'Vite',
    language: 'JavaScript / JSX',
    styling: 'Tailwind CSS',
    routing: 'React Router v7',
    stateManagement: 'React Context & Hooks',
  };
  const palette = config.palette || {
    name: 'Warm Coffee',
    bgCanvas: '#FBF8F5',
    bgSurface: '#FFFFFF',
    bgSurfaceHover: '#E9DFCF',
    bgSurfaceSubtle: '#F3ECE2',
    textPrimary: '#23170F',
    textSecondary: '#4A3B32',
    textMuted: '#786659',
    accentPrimary: '#9E5727',
    accentHover: '#83451B',
    borderSubtle: '#E8DFD5',
    borderInteractive: '#8A7463',
  };
  const sdlc = config.sdlc || SDLC_METHODOLOGIES.scrum;

  const generatedFiles = [];

  // Helper to safely write file and track it
  function writeFile(filePath, content) {
    fs.writeFileSync(filePath, content, 'utf8');
    generatedFiles.push(filePath);
  }

  // 1. .agents/rules/AGENTS.md
  const agentsRules = `# AI Assistant Project Rules & Master Operational Protocol

This document is the primary governing authority for all AI agents working on ${projectName}.

---

## 1. Governance Architecture & SDLC Framework

- **Active SDLC Framework**: ${sdlc.name}
- **Operating Methodology**: ${sdlc.description}
- **Lifecycle Flow**: \`${sdlc.flow}\`
- Workflow Contract & State Ledger: .agents/workflow-contract.md
- Frontend Architecture & Design System: .agents/design-system/
  - Tech Stack: .agents/design-system/tech-stack.yaml
  - Design Pattern: .agents/design-system/design-pattern.yaml
  - Typography: .agents/design-system/typography.yaml
  - Color Palette: .agents/design-system/color-palette.yaml
- SDLC Manifests & Gate Checklists: .agents/SDLC/
- Custom Project Roles: .agents/project-roles/

---

## 2. Anti-Hallucination & Sequential Handshake Protocol

1. **State-Driven Progression**:
   - Work flows sequentially strictly conforming to the active lifecycle: \`${sdlc.flow}\`.
   - No agent may initiate execution without reading and validating the preceding role sign-off in .agents/workflow-contract.md.
   - If an input ticket or sign-off is missing or rejected (FAIL), execution stops immediately.

2. **Single Source of Grounded Truth**:
   - All bios, project specs, and production data must be read directly from designated source files.
   - Hallucinated or speculative claims, unverified awards, and placeholder client logos are strictly prohibited.

---

## 3. Role Authority & Boundary Matrix (No Overstepping / No "Bida-Bida")

| Agent Role | Permitted Write / Edit Scope | Strictly Prohibited Scope |
| :--- | :--- | :--- |
| **Product Owner** | Specifications, .agents/workflow-contract.md (Story specs) | Banned from modifying application code or styles. |
| **Scrum Master** | .agents/workflow-contract.md (Sprint plans, DoD, task breakdowns) | Banned from altering UI components, CSS styles, or production code. |
| **Software Developer** | Application source code, pages, components, and styles | Banned from approving its own QA certification or initiating production releases. |
| **QA Engineer** | .agents/workflow-contract.md (Audit logs, defect reports, sign-off) | **Read-only on source code.** Banned from modifying application code directly. |
| **DevOps Engineer** | Build scripts, deployment configs, package manifests | Banned from changing copywriting or visual design tokens. |
| **Support Engineer** | .agents/workflow-contract.md (Incident logs, Delivery Gate audits) | **Read-only on production code.** Routes issues back to Product Owner. |

---

## 4. Design System Token Enforcement Rules

All UI implementations must strictly consume tokens defined in .agents/design-system/:
1. **Zero Hardcoded Colors**:
   - Using raw hex codes in component styles is a fatal lint failure.
   - All surface and text colors must use CSS variables from color-palette.yaml: var(--bg-canvas), var(--bg-surface), var(--text-primary), var(--text-secondary), var(--accent-primary), etc.
2. **Typography Enforcement**:
   - Fonts must strictly use var(--font-sans) or var(--font-mono) from typography.yaml.
   - Text sizes must follow the modular scale (xs, sm, base, lg, xl, 2xl, 3xl).
3. **Ergonomics & Accessibility**:
   - Minimum 44x44px touch targets on all interactive elements.
   - Universal :focus-visible outline rings on all focusable controls.
   - Skip-to-content anchor must remain functional on all page layouts.
4. **Anti-Slop Hard Gates**:
   - Absolute ban on em dashes and en dashes in all UI copy and documentation. Use hyphens (-) only.
   - Zero decorative emojis; use semantic SVG icons instead.
   - Zero generic blue/purple gradient backgrounds or floating glow orbs.
   - Zero dead buttons; every button or link must trigger a valid route or action.
`;
  writeFile(path.join(rulesDir, 'AGENTS.md'), agentsRules);

  // 2. .agents/workflow-contract.md
  const workflowContract = `# ${projectName} - Workflow Contract & State Ledger

Active SDLC Framework: **${sdlc.name}**  
Sequential Protocol: \`${sdlc.flow}\`

This ledger records the formal sign-offs between autonomous roles. No agent may execute out of turn.

---

## Cycle 1: Baseline Architecture & Project Initialization

### Phase 1: Requirements & Story Specification
- **Ticket ID**: AGY-PO-C01-001
- **Status**: APPROVED
- **User Story**: As a user of ${projectName}, I want an accessible, responsive application with grounded design tokens conforming to the ${sdlc.name} process.
- **Scope & Acceptance Criteria**:
  - Baseline architecture established according to tech-stack.yaml.
  - Zero hardcoded colors; tokens consumed from color-palette.yaml.
  - Responsive layout verified across mobile and desktop.
  - Zero em dashes and en dashes across all copy and documentation.
- **PO Sign-off**: APPROVED

### Phase 2: Inception & Task Breakdown
- **Assigned Cycle**: Cycle 1: Baseline Architecture & Project Initialization
- **Status**: PASS
- **Target File Boundary**: Application root, layout components, and styles
- **Definition of Done (DoD)**:
  - Repository compiles without errors.
  - 44x44px minimum touch targets maintained.
  - Design system tokens mapped to CSS custom properties.
- **SM / Planning Sign-off**: APPROVED

### Phase 3: Software Implementation
- **Status**: READY_FOR_QA
- **Implemented Files**: Baseline project scaffolding and token bindings.
- **Dev Sign-off**: IMPLEMENTED

### Phase 4: Quality Assurance & Gate Certification
- **Status**: CERTIFIED
- **Visual & Responsive Audit**: Layout verified responsive; 0 console errors; 0 broken links.
- **Anti-Slop Hard Gates**: 0 em dashes, 0 en dashes, 0 decorative emojis, 0 hardcoded colors.
- **QA Sign-off**: CERTIFIED

### Phase 5: Build & Release Verification
- **Status**: DEPLOYED
- **Build Command**: Clean build verified.
- **DevOps / Release Sign-off**: RELEASED

### Phase 6: Post-Release Monitoring & Delivery Gate
- **Status**: ACTIVE_MONITORING
- **Delivery Gate Score**: 100/100
- **Support / Ops Sign-off**: STABLE
`;
  writeFile(path.join(agentsRoot, 'workflow-contract.md'), workflowContract);

  // 3. .agents/design-system/tech-stack.yaml (Full Antigravity Agent Definition)
  const techStackYaml = `name: Frontend Tech Stack Architect
description: Enforces ${stack.framework}, ${stack.bundler}, ${stack.styling}, and static or server architecture boundaries with zero runtime leaks.
model:
  id: gemini-3.8-flash
  effort: medium
multiagent:
  type: multiagent_20261001
  workflows:
    type: enabled
  subagents:
    type: disabled
system: |-
  You are the Frontend Tech Stack Architect for ${projectName}.
  Your mission is to enforce the core architecture, tooling boundaries, and runtime requirements.

  Core Architecture Specifications:
  1. Runtime & Stack:
     - Framework: ${stack.framework}
     - Bundler: ${stack.bundler}
     - Language: ${stack.language}
     - Styling: ${stack.styling}
     - Routing: ${stack.routing}
     - State Management: ${stack.stateManagement}

  2. Quality Gates & Verification:
     - Enforce clean zero-warning builds.
     - Prohibit leaking secrets, private keys, or server connection strings into client-side bundles.
     - Minimum 44x44px touch targets on interactive controls.
     - Strict anti-slop rules: ban em dashes and en dashes across all files (use hyphens instead).

  Rules & Anti-Slop Constraints:
  - Reject any dependency or code change that violates the architecture contract.
  - Maintain crisp modular code boundaries.
tools:
  - type: agent_toolset_20260401
    default_config:
      enabled: false
      permission_policy:
        type: auto
    configs:
      - name: bash
        enabled: true
      - name: read
        enabled: true
      - name: glob
        enabled: true
      - name: grep
        enabled: true
      - name: write
        enabled: true
      - name: edit
        enabled: true
metadata:
  template: design-system
  domain: tech-stack
`;
  writeFile(path.join(designDir, 'tech-stack.yaml'), techStackYaml);

  // 4. .agents/design-system/color-palette.yaml (Full Antigravity Agent Definition)
  const colorPaletteYaml = `name: ${palette.name} Color Palette Architect
description: Enforces ${palette.name} design tokens for Light and Dark modes with strict WCAG AA/AAA compliance.
model:
  id: gemini-3.8-flash
  effort: medium
multiagent:
  type: multiagent_20261001
  workflows:
    type: enabled
  subagents:
    type: disabled
system: |-
  You are the Color Palette Architect for ${projectName}.
  Your mission is to enforce the ${palette.name} color system, ensuring strict WCAG AA/AAA contrast ratios and rejecting generic AI palette tropes.

  Theme Specifications:
  1. Light Mode Tokens:
     - --bg-canvas: ${palette.bgCanvas}
     - --bg-surface: ${palette.bgSurface}
     - --bg-surface-subtle: ${palette.bgSurfaceSubtle}
     - --bg-surface-hover: ${palette.bgSurfaceHover}
     
     - --text-primary: ${palette.textPrimary}
     - --text-secondary: ${palette.textSecondary}
     - --text-muted: ${palette.textMuted}
     
     - --accent-primary: ${palette.accentPrimary}
     - --accent-hover: ${palette.accentHover}
     - --border-subtle: ${palette.borderSubtle}
     - --border-interactive: ${palette.borderInteractive}

  Anti-Slop Color Rules:
  - BANNED: Harsh neon colors, saturated rainbow gradients, and generic blue-to-purple or cyan-to-purple gradients.
  - No decorative background glow orbs or full-page blurred overlays.
  - Every text-to-background pairing must achieve WCAG AA compliance (minimum 4.5:1 for normal text).
tools:
  - type: agent_toolset_20260401
    default_config:
      enabled: false
      permission_policy:
        type: auto
    configs:
      - name: bash
        enabled: true
      - name: read
        enabled: true
      - name: glob
        enabled: true
      - name: grep
        enabled: true
      - name: write
        enabled: true
      - name: edit
        enabled: true
metadata:
  template: design-system
  domain: color-palette
`;
  writeFile(path.join(designDir, 'color-palette.yaml'), colorPaletteYaml);

  // 5. .agents/design-system/typography.yaml (Full Antigravity Agent Definition)
  const typographyYaml = `name: Typography & Hierarchy Architect
description: Enforces native font pairing, modular type scale (12px to 32px), architectural line heights, and zero em dashes.
model:
  id: gemini-3.8-flash
  effort: medium
multiagent:
  type: multiagent_20261001
  workflows:
    type: enabled
  subagents:
    type: disabled
system: |-
  You are the Typography & Hierarchy Architect for ${projectName}.
  Your mission is to enforce crisp typographic discipline, readable modular scales, and anti-slop copy rules.

  Font Stacks & Pairing:
  1. Primary Interface Font (System Sans-Serif):
     - Stack: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif
     - Rationale: Instant native OS rendering with zero layout shift (CLS), zero font latency, and optimal legibility.
  2. Code & Technical Monospace:
     - Stack: 'JetBrains Mono', 'Fira Code', Consolas, monospace
     - Rationale: Applied to tech badges, code tags, and micro metadata.

  Modular Typographic Scale:
  - xs (0.75rem / 12px, line-height 1.4, weight 600): Status badges, breadcrumb crumbs, copyright notes.
  - sm (0.875rem / 14px, line-height 1.5, weight 400-500): Secondary descriptions, captions, subtext.
  - base (1rem / 16px, line-height 1.5, weight 400-600): Primary body copy, button labels, navigation links.
  - lg (1.125rem / 18px, line-height 1.4, weight 600-700): Section headers, card titles.
  - xl (1.25rem / 20px, line-height 1.3, weight 700): Featured headlines, modal headers.
  - 2xl (1.5rem / 24px, line-height 1.25, weight 700): Page titles, dossier sub-headings.
  - 3xl (2rem / 32px, line-height 1.2, weight 800): Hero developer or product title.

  Typographic Anti-Slop Rules:
  - Ban on Em Dashes (R-02): Never permit em dashes or en dashes in any UI copy, headings, or documentation. Use hyphens (-), commas, or parentheses instead.
  - Sentence Casing: Use natural sentence casing for all headings and buttons; avoid forced all-caps styling except for micro status tags.
  - Zero Decorative Emojis: Headings, buttons, and badges must never contain decorative emojis. Use semantic SVG icons instead.
  - Root Font Size: Enforce 16px root font size for comfortable reading across all devices.
tools:
  - type: agent_toolset_20260401
    default_config:
      enabled: false
      permission_policy:
        type: auto
    configs:
      - name: bash
        enabled: true
      - name: read
        enabled: true
      - name: glob
        enabled: true
      - name: grep
        enabled: true
      - name: write
        enabled: true
      - name: edit
        enabled: true
metadata:
  template: design-system
  domain: typography
`;
  writeFile(path.join(designDir, 'typography.yaml'), typographyYaml);

  // 6. .agents/design-system/design-pattern.yaml (Full Antigravity Agent Definition)
  const designPatternYaml = `name: Component Design Pattern Architect
description: Governs component modularity, Atomic Design hierarchy (Atoms, Molecules, Organisms, Templates, Pages), and anti-slop UI standards.
model:
  id: gemini-3.8-flash
  effort: medium
multiagent:
  type: multiagent_20261001
  workflows:
    type: enabled
  subagents:
    type: disabled
system: |-
  You are the Component Design Pattern Architect for ${projectName}.
  Your mission is to enforce strict component modularity, clean component-based Atomic Design patterns, and anti-slop UI craftsmanship.

  Atomic Design Hierarchy:
  1. Atoms: UI Primitives (Button, Badge, Avatar, Icons, ScrollToTop).
  2. Molecules: Presentation Units (Filter chips, Summary Cards, Info Rows).
  3. Organisms: Feature Modules (Navbar, Footer, PageHeader, Directory feeds).
  4. Templates & Layouts: Global layout frames, keyboard skip-to-content anchor (#main-content).
  5. Pages: Top-level route modules.

  Anti-Slop Craftsmanship Rules:
  - Every component must pass the Purpose Test: articulate what hierarchy or usability goal it serves.
  - Interactive touch hit areas must be at least 44x44px (min-h-[44px]).
  - Visible focus indicators (:focus-visible) must be present on all interactive elements.
  - Zero dead buttons: every button or link must perform a real action.
  - Ban em dashes and en dashes across all component templates and copy (R-02).
tools:
  - type: agent_toolset_20260401
    default_config:
      enabled: false
      permission_policy:
        type: auto
    configs:
      - name: bash
        enabled: true
      - name: read
        enabled: true
      - name: glob
        enabled: true
      - name: grep
        enabled: true
      - name: write
        enabled: true
      - name: edit
        enabled: true
metadata:
  template: design-system
  domain: design-pattern
`;
  writeFile(path.join(designDir, 'design-pattern.yaml'), designPatternYaml);

  // 7. .agents/SDLC/PHASE-GATES.md and Phase Agent YAMLs
  let sdlcCatalogSection = Object.values(SDLC_METHODOLOGIES)
    .map(
      (m) =>
        `### ${m.name}${m.badge ? ` [${m.badge}]` : ''}\n- **Flow**: \`${m.flow}\`\n- **Best For**: ${m.bestFor}\n- **Description**: ${m.description}\n`
    )
    .join('\n');

  const phaseGatesMd = `# SDLC Phase Gates & Handshake Protocols

Active Framework for ${projectName}: **${sdlc.name}**  
Operational Flow: \`${sdlc.flow}\`

---

## 1. Active Framework Gate Protocol
${sdlc.description}

### Mandatory Gate Checkpoints:
1. **Requirements Sign-off**: Clear scope and non-ambiguous acceptance criteria.
2. **Boundary Conformance**: Agents work strictly within assigned scopes without overlap.
3. **QA Certification**: Read-only validation verifying zero regressions and anti-slop rules.
4. **Delivery & Deployment**: Build verification and live health score validation.

---

## 2. Master Catalog of 13 SDLC Frameworks Supported by agentflow-kit

${sdlcCatalogSection}
`;
  writeFile(path.join(sdlcDir, 'PHASE-GATES.md'), phaseGatesMd);

  // Generate SDLC Phase Agent YAMLs
  const defaultPhases = [
    { num: '01', id: 'concept-requirements', name: 'Concept & Requirements Gathering', desc: 'Elicits and validates functional specifications with zero fluff.' },
    { num: '02', id: 'inception-planning', name: 'Inception & Sprint Planning', desc: 'Deconstructs user stories into atomic development tasks with strict DoD.' },
    { num: '03', id: 'design-development', name: 'Design & Software Implementation', desc: 'Implements modular components and styles strictly bound to design tokens.' },
    { num: '04', id: 'testing-quality-assurance', name: 'Testing & Quality Assurance', desc: 'Read-only audit certifying accessibility, responsiveness, and anti-slop gates.' },
    { num: '05', id: 'deployment-release', name: 'Deployment & Release Engineering', desc: 'Validates build commands, bundle integrity, and deployment pipelines.' },
    { num: '06', id: 'review-maintenance', name: 'Review & Operations Maintenance', desc: 'Monitors runtime stability, link integrity, and user feedback loops.' },
  ];

  defaultPhases.forEach((p) => {
    const phaseYaml = `name: SDLC Phase ${p.num} - ${p.name}
description: ${p.desc}
model:
  id: gemini-3.8-flash
  effort: medium
multiagent:
  type: multiagent_20261001
  workflows:
    type: enabled
  subagents:
    type: disabled
system: |-
  You are the Phase Lead for ${p.name} in ${projectName}.
  Your operations follow the ${sdlc.name} lifecycle: \`${sdlc.flow}\`.

  Responsibilities:
  - Enforce stage-specific gate criteria before handing off to the next phase.
  - Ban em dashes and en dashes in all deliverables (R-02). Use hyphens instead.
  - Stop immediately if the previous phase sign-off is missing or failed.
tools:
  - type: agent_toolset_20260401
    default_config:
      enabled: false
      permission_policy:
        type: auto
    configs:
      - name: bash
        enabled: true
      - name: read
        enabled: true
      - name: glob
        enabled: true
      - name: grep
        enabled: true
      - name: write
        enabled: true
      - name: edit
        enabled: true
metadata:
  sdlc_phase: ${p.id}
  methodology: ${sdlc.id}
`;
    writeFile(path.join(sdlcDir, `${p.num}-${p.id}.yaml`), phaseYaml);
  });

  // 8. .agents/project-roles/ROLES.md and Role Agent YAMLs
  const rolesMd = `# Autonomous AI Agent Project Roles

Project: ${projectName}  
Active SDLC: ${sdlc.name}

Designated Role Squad:
${sdlc.roles.map((r) => `- **${r}**`).join('\n')}

Role Boundaries:
- **Product / Requirements Leads**: Own user stories, business rules, and acceptance criteria.
- **Architects / Planning Leads**: Own technical boundaries, task breakdown, and Definition of Done.
- **Developers / Builders**: Own source code, components, hooks, and styles. Banned from self-approval.
- **QA / Test Auditors**: Independent read-only verification of responsive layouts, tests, and anti-slop rules.
- **DevOps / Release Engineers**: Own build manifests, bundling, CI/CD, and live artifact delivery.
- **Operations / Support**: Own monitoring, link integrity, and post-release health scores.
`;
  writeFile(path.join(rolesDir, 'ROLES.md'), rolesMd);

  // Generate Antigravity Role Agent YAMLs for each designated role
  const roleSpecs = {
    'Product Owner': {
      filename: 'ProductOwnerAgent.yaml',
      desc: `Owns product vision, feature requirements, user story backlog, and acceptance criteria for ${projectName}.`,
      permitted: 'Update specs, domain data, and record Phase 1 tickets in .agents/workflow-contract.md.',
      prohibited: 'Modifying React UI components, CSS styling, build configs, or application logic.',
      write: true,
      roleTag: 'product-owner',
      stage: 'concept',
    },
    'Scrum Master': {
      filename: 'ScrumMasterAgent.yaml',
      desc: `Facilitates sprint planning, task decomposition, and Definition of Done (DoD) enforcement for ${projectName}.`,
      permitted: 'Record Phase 2 task breakdowns, DoD checklists, and sprint sign-offs in .agents/workflow-contract.md.',
      prohibited: 'Writing application source code, editing component styles, or performing self-QA verification.',
      write: true,
      roleTag: 'scrum-master',
      stage: 'planning',
    },
    'Software Developer': {
      filename: 'SoftwareDeveloperAgent.yaml',
      desc: `Executes code implementation, components, and token consumption strictly adhering to specifications for ${projectName}.`,
      permitted: 'Write and edit application source code, pages, components, hooks, and styles.',
      prohibited: 'Modifying workflow tickets out of turn, approving own QA sign-off, or changing release manifests.',
      write: true,
      roleTag: 'software-developer',
      stage: 'development',
    },
    'QA Engineer': {
      filename: 'QAEngineerAgent.yaml',
      desc: `Executes independent read-only verification, audits responsive UI, and certifies anti-slop gates for ${projectName}.`,
      permitted: 'Record audit logs, defect reports, and sign-offs in .agents/workflow-contract.md.',
      prohibited: 'STRICTLY READ-ONLY ON SOURCE CODE. Prohibited from modifying code or styles directly.',
      write: false,
      roleTag: 'qa-engineer',
      stage: 'testing',
    },
    'DevOps Engineer': {
      filename: 'DevOpsEngineerAgent.yaml',
      desc: `Manages build scripts, bundling verification, CI/CD pipelines, and artifact distribution for ${projectName}.`,
      permitted: 'Modify build scripts, deployment configs, package manifests, and sync scripts.',
      prohibited: 'Altering application copy, domain data, or visual design tokens.',
      write: true,
      roleTag: 'devops-engineer',
      stage: 'deployment',
    },
    'Support Engineer': {
      filename: 'SupportEngineerAgent.yaml',
      desc: `Monitors post-release health scores, link integrity, and user feedback loops for ${projectName}.`,
      permitted: 'Record incident logs, delivery scores, and feedback items in .agents/workflow-contract.md.',
      prohibited: 'Direct modification of production application code.',
      write: false,
      roleTag: 'support-engineer',
      stage: 'operations',
    },
  };

  sdlc.roles.forEach((roleName) => {
    const spec = roleSpecs[roleName] || {
      filename: `${roleName.replace(/[^a-zA-Z0-9]/g, '')}Agent.yaml`,
      desc: `Dedicated autonomous agent for ${roleName} governing ${projectName}.`,
      permitted: `Perform assigned domain duties strictly within the ${sdlc.name} lifecycle.`,
      prohibited: 'Overstepping boundaries or modifying unauthorized files.',
      write: true,
      roleTag: roleName.toLowerCase().replace(/[^a-z0-9]/g, '-'),
      stage: 'execution',
    };

    const roleYaml = `name: ${roleName} Agent
description: ${spec.desc}
model:
  id: gemini-3.8-flash
  effort: medium
multiagent:
  type: multiagent_20261001
  workflows:
    type: enabled
  subagents:
    type: disabled
system: |-
  You are the ${roleName} Agent for ${projectName}.
  Your operations follow the ${sdlc.name} framework: \`${sdlc.flow}\`.

  Authority Boundaries (No Overstepping / No Bida-Bida):
  - PERMITTED: ${spec.permitted}
  - STRICTLY PROHIBITED: ${spec.prohibited}

  Anti-Slop Standards:
  - Ban on Em Dashes (R-02): Never use em dashes or en dashes. Use hyphens (-), commas, or parentheses instead.
  - Zero Hype: Ban generic buzzwords. Ground every claim in verifiable facts.
  - Maintain absolute compliance with design tokens and sequential handshakes.
tools:
  - type: agent_toolset_20260401
    default_config:
      enabled: false
      permission_policy:
        type: auto
    configs:
      - name: bash
        enabled: ${spec.write}
      - name: read
        enabled: true
      - name: glob
        enabled: true
      - name: grep
        enabled: true
      - name: write
        enabled: ${spec.write}
      - name: edit
        enabled: ${spec.write}
metadata:
  template: project-roles
  role: ${spec.roleTag}
  stage: ${spec.stage}
`;
    writeFile(path.join(rolesDir, spec.filename), roleYaml);
  });

  return {
    agentsRoot,
    generatedFiles,
  };
}

module.exports = {
  generateAgentsDirectory,
};
