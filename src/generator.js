/**
 * agentflow-kit Generator Engine
 * Generates the standardized .agents directory structure based on answers.
 */

const fs = require('fs');
const path = require('path');

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
  const stack = config.stack;
  const palette = config.palette;

  // 1. .agents/rules/AGENTS.md
  const agentsRules = `# AI Assistant Project Rules & Master Operational Protocol

This document is the primary governing authority for all AI agents working on ${projectName}.

---

## 1. Governance Architecture

- Workflow Contract & State Ledger: .agents/workflow-contract.md
- Frontend Architecture & Design System: .agents/design-system/
  - Tech Stack: .agents/design-system/tech-stack.yaml
  - Design Pattern: .agents/design-system/design-pattern.yaml
  - Typography: .agents/design-system/typography.yaml
  - Color Palette: .agents/design-system/color-palette.yaml
- Agile SDLC Manifests: .agents/SDLC/
- Custom Project Roles: .agents/project-roles/

---

## 2. Anti-Hallucination & Sequential Handshake Protocol

1. **State-Driven Progression**:
   - Work flows sequentially: Product Owner -> Scrum Master -> Software Developer -> QA Engineer -> DevOps Engineer -> Support Engineer.
   - No agent may initiate execution without reading and validating the preceding agent sign-off in .agents/workflow-contract.md.
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
   - Absolute ban on em dashes and en dashes in all UI copy and documentation. Use hyphens only.
   - Zero decorative emojis; use semantic SVG icons instead.
   - Zero generic blue/purple gradient backgrounds or floating glow orbs.
   - Zero dead buttons; every button or link must trigger a valid route or action.
`;

  fs.writeFileSync(path.join(rulesDir, 'AGENTS.md'), agentsRules, 'utf8');

  // 2. .agents/workflow-contract.md
  const workflowContract = `# Sprint Workflow Contract & State Ledger

This ledger records the formal sign-offs between autonomous roles. Work flows sequentially:
\`Product Owner -> Scrum Master -> Software Developer -> QA Engineer -> DevOps Engineer -> Support Engineer\`.

---

## Sprint 1: Project Initialization & Architecture Baseline

### Phase 1: Product Owner Story Specification (Requirement)
- **Ticket ID**: AGY-PO-SP01-001
- **Status**: APPROVED
- **User Story**: As a visitor to ${projectName}, I want a solid, responsive, accessible foundation with consistent design system tokens and clean navigation.
- **Scope & Acceptance Criteria**:
  - Baseline architecture established according to tech-stack.yaml.
  - Zero hardcoded colors; tokens consumed from color-palette.yaml.
  - Responsive layout verified across mobile and desktop.
  - Zero em dashes and en dashes across all copy and documentation.
- **PO Sign-off**: APPROVED

### Phase 2: Scrum Master Sprint Task (Inception)
- **Assigned Sprint**: Sprint 1: Project Initialization & Architecture Baseline
- **Status**: PASS
- **Target File Boundary**: Application root, layout components, and styles
- **Definition of Done (DoD)**:
  - Repository compiles without errors.
  - 44x44px minimum touch targets maintained.
  - Design system tokens mapped to CSS custom properties.
- **SM Sign-off**: APPROVED

### Phase 3: Software Developer Implementation Log (Development)
- **Status**: READY_FOR_QA
- **Implemented Files**: Baseline project scaffolding and token bindings.
- **Dev Sign-off**: IMPLEMENTED

### Phase 4: QA Engineer Certification (Verification)
- **Status**: CERTIFIED
- **Visual & Responsive Audit**: Layout verified responsive; 0 console errors; 0 broken links.
- **Anti-Slop Hard Gates**: 0 em dashes, 0 en dashes, 0 decorative emojis, 0 hardcoded colors.
- **QA Sign-off**: CERTIFIED

### Phase 5: DevOps Engineer Release Log (Delivery)
- **Status**: DEPLOYED
- **Build Command**: Clean build verified.
- **DevOps Sign-off**: RELEASED

### Phase 6: Support Engineer Post-Release Audit (Monitoring)
- **Status**: ACTIVE_MONITORING
- **Delivery Gate Score**: 100/100
- **Support Sign-off**: STABLE
`;

  fs.writeFileSync(path.join(agentsRoot, 'workflow-contract.md'), workflowContract, 'utf8');

  // 3. .agents/design-system/tech-stack.yaml
  const techStackYaml = `# ${projectName} - Architecture & Tech Stack Manifest

project:
  name: "${projectName}"
  author: "${authorName}"
  tier: "production"

technology:
  framework: "${stack.framework}"
  bundler: "${stack.bundler}"
  language: "${stack.language}"
  styling: "${stack.styling}"
  routing: "${stack.routing}"
  state_management: "${stack.stateManagement}"

quality_gates:
  enforce_touch_targets: true
  min_touch_target_px: 44
  ban_em_en_dashes: true
  ban_hardcoded_colors: true
  enforce_token_usage: true
`;

  fs.writeFileSync(path.join(designDir, 'tech-stack.yaml'), techStackYaml, 'utf8');

  // 4. .agents/design-system/color-palette.yaml
  const colorPaletteYaml = `# ${projectName} - Design Tokens & Color Palette Manifest
theme: "${palette.name}"

variables:
  --bg-canvas: "${palette.bgCanvas}"
  --bg-surface: "${palette.bgSurface}"
  --bg-surface-hover: "${palette.bgSurfaceHover}"
  --bg-surface-subtle: "${palette.bgSurfaceSubtle}"
  
  --text-primary: "${palette.textPrimary}"
  --text-secondary: "${palette.textSecondary}"
  --text-muted: "${palette.textMuted}"
  
  --accent-primary: "${palette.accentPrimary}"
  --accent-hover: "${palette.accentHover}"
  
  --border-subtle: "${palette.borderSubtle}"
  --border-interactive: "${palette.borderInteractive}"
`;

  fs.writeFileSync(path.join(designDir, 'color-palette.yaml'), colorPaletteYaml, 'utf8');

  // 5. .agents/design-system/typography.yaml
  const typographyYaml = `# ${projectName} - Modular Typography Manifest

fonts:
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif
  --font-mono: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace

scale:
  xs: "0.75rem"      # 12px
  sm: "0.875rem"     # 14px
  base: "1rem"       # 16px
  lg: "1.125rem"     # 18px
  xl: "1.25rem"      # 20px
  2xl: "1.5rem"      # 24px
  3xl: "1.875rem"    # 30px
`;

  fs.writeFileSync(path.join(designDir, 'typography.yaml'), typographyYaml, 'utf8');

  // 6. .agents/design-system/design-pattern.yaml
  const designPatternYaml = `# ${projectName} - Component Conventions & Design Patterns

principles:
  single_responsibility: "Each component serves one dedicated presentation or functional goal."
  token_first: "Zero hardcoded hex values or arbitrary font sizes."
  semantic_html: "Always use <header>, <nav>, <main>, <section>, <article>, and <footer>."
  interactive_touch: "All interactive controls must meet minimum 44px tap target height."
`;

  fs.writeFileSync(path.join(designDir, 'design-pattern.yaml'), designPatternYaml, 'utf8');

  // 7. .agents/SDLC/PHASE-GATES.md
  const phaseGatesMd = `# Agile SDLC Phase Gates & Handshake Protocols

All work in ${projectName} flows strictly through six sequential phases:

1. **Phase 1: Product Owner (PO) Specification**
   - Must define Ticket ID, User Story, Scope, and Acceptance Criteria.
   - Prohibited from modifying code or styles directly.

2. **Phase 2: Scrum Master (SM) Inception**
   - Validates PO ticket, assigns Sprint, sets Target File Boundaries, and defines Definition of Done (DoD).

3. **Phase 3: Software Developer Implementation**
   - Implements within strict boundaries.
   - Banned from self-approving QA or deploying.

4. **Phase 4: QA Engineer Certification**
   - Read-only audit on source code.
   - Verifies responsiveness, touch targets, accessibility, and Anti-Slop hard gates (0 em/en dashes, 0 hardcoded colors).

5. **Phase 5: DevOps Engineer Delivery**
   - Executes build commands and verifies production artifacts.

6. **Phase 6: Support Engineer Post-Release Audit**
   - Monitors live health, link validity, and sets Delivery Gate Score (100/100).
`;

  fs.writeFileSync(path.join(sdlcDir, 'PHASE-GATES.md'), phaseGatesMd, 'utf8');

  // 8. .agents/project-roles/ROLES.md
  const rolesMd = `# Autonomous AI Agent Project Roles

Detailed definitions for all squad members operating on ${projectName}:

- **Product Owner**: Owns business logic, user stories, grounding data, and acceptance criteria.
- **Scrum Master**: Owns sprint planning, task breakdown, boundary enforcement, and DoD.
- **Software Developer**: Owns application source code, components, hooks, and stylesheets.
- **QA Engineer**: Independent auditor validating visual aesthetics, anti-slop rules, and test suites.
- **DevOps Engineer**: Owns build tools, bundler configurations, dependencies, and deployment pipelines.
- **Support Engineer**: Owns post-release monitoring, regression testing, and client incident triage.
`;

  fs.writeFileSync(path.join(rolesDir, 'ROLES.md'), rolesMd, 'utf8');

  return {
    agentsRoot,
    generatedFiles: [
      path.join(rulesDir, 'AGENTS.md'),
      path.join(agentsRoot, 'workflow-contract.md'),
      path.join(designDir, 'tech-stack.yaml'),
      path.join(designDir, 'color-palette.yaml'),
      path.join(designDir, 'typography.yaml'),
      path.join(designDir, 'design-pattern.yaml'),
      path.join(sdlcDir, 'PHASE-GATES.md'),
      path.join(rolesDir, 'ROLES.md'),
    ],
  };
}

module.exports = {
  generateAgentsDirectory,
};
