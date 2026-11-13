/**
 * agentflow-kit Generator Engine
 * Generates the standardized .agents directory structure tailored to the selected SDLC methodology.
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
  const stack = config.stack;
  const palette = config.palette;
  const sdlc = config.sdlc || SDLC_METHODOLOGIES.scrum;

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

  fs.writeFileSync(path.join(rulesDir, 'AGENTS.md'), agentsRules, 'utf8');

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

  fs.writeFileSync(path.join(agentsRoot, 'workflow-contract.md'), workflowContract, 'utf8');

  // 3. .agents/design-system/tech-stack.yaml
  const techStackYaml = `# ${projectName} - Architecture & Tech Stack Manifest

project:
  name: "${projectName}"
  author: "${authorName}"
  sdlc_framework: "${sdlc.name}"
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

  fs.writeFileSync(path.join(sdlcDir, 'PHASE-GATES.md'), phaseGatesMd, 'utf8');

  // 8. .agents/project-roles/ROLES.md
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
