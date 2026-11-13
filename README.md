# agentflow-kit ⚡

> **Autonomous AI Agent Governance & SDLC Scaffolding Tool**  
> Enforce sequential handshake engineering protocols, boundary enforcement matrices, and zero-slop design system tokens across your AI-assisted codebases.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Node: >=16](https://img.shields.io/badge/node-%3E%3D16.0.0-brightgreen.svg)](https://nodejs.org/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/nathanielfaborada/agentflow-kit/pulls)

---

## The Problem With AI Coding Agents

Most autonomous AI agents (Copilot, Claude, Cursor, Antigravity) fail on larger projects because of three fatal flaws:
1. **The "Bida-Bida" Syndrome**: The AI tries to do everything at once - rewriting business logic, modifying CSS tokens randomly, and approving its own untested code.
2. **Hallucination & Speculation**: Agents invent nonexistent client logos, awards, or fake dependencies.
3. **Slop & Layout Breakages**: Using hardcoded hex codes (`#000`, `#fff`), arbitrary margins, em dashes, and breaking mobile layouts.

---

## The Solution: `agentflow-kit`

`agentflow-kit` scaffolds an enterprise-grade **AI Governance & SDLC Architecture** (`.agents/`) directly into your repository. Through an interactive terminal questionnaire, it tailors rules, design tokens, role boundaries, and state ledgers based on your specific project needs.

```
       ___                     __  ______             __ ___ __ 
      /   | ____ ____  ____   / /_/ ____/___ _      _/ //_/( / /_
     / /| |/ __ `/ _ \/ __ \ / __/ /_  / __ \ | /| / / ,<   / __/
    / ___ / /_/ /  __/ / / // /_/ __/ / /_/ / |/ |/ / /| | / /_  
   /_/  |_\\__, /\\___/_/ /_/ \\__/_/    \\____/|__/|__/_/ |_| \\__/  
         /____/                                                 
   Autonomous AI Agent Governance & SDLC Scaffolding Tool
```

---

## Quick Start

Run the interactive scaffolding wizard directly in any project root using `npx`:

```bash
npx agentflow-kit
```

Or run instant setup using standard production defaults:

```bash
npx agentflow-kit --quick
```

---

## Interactive Q&A Flow

When executed, `agentflow-kit` prompts you with a guided interview:

1. **Project Name**: Sets domain context and grounded identity.
2. **Author / Organization**: Prevents hallucinated developer profiles.
3. **Tech Stack Selection**:
   - `React SPA (Vite)`
   - `Next.js (App Router + Tailwind)`
   - `Vue 3 (Vite + Pinia)`
   - `Vanilla Web (Semantic HTML5 + CSS Tokens)`
   - `Node.js Backend / REST API`
4. **Design System Color Palette**:
   - `Warm Coffee` (Organic, grounded, earthy tones)
   - `Modern Slate` (High-tech, sleek dark theme)
   - `Minimal Monochrome` (Clean, high-contrast editorial)
   - `Cyberpunk Neon` (Dark canvas, cyan & amber accents)
5. **AI Squad Hierarchy**:
   - `Full Agile Squad` (PO -> Scrum Master -> Developer -> QA -> DevOps -> Support)
   - `Lean Trio` (PO -> Developer -> QA)
   - `Developer + Dedicated QA Auditor`

---

## What Gets Generated

Your workspace receives a structured `.agents/` governance directory:

```text
.agents/
├── rules/
│   └── AGENTS.md                  # Master operational protocol and boundary matrix
├── workflow-contract.md           # Immutable state ledger recording sprint handshakes
├── design-system/
│   ├── tech-stack.yaml            # Single source of truth for dependencies
│   ├── color-palette.yaml         # CSS variables and strict token definitions
│   ├── typography.yaml            # Modular font scale and typography tokens
│   └── design-pattern.yaml        # Component architecture guidelines
├── SDLC/
│   └── PHASE-GATES.md             # Strict sign-off checklists for each phase
└── project-roles/
    └── ROLES.md                   # Strict permitted and prohibited edit scopes
```

---

## Core Protocols Enforced

### 1. The Sequential Handshake Protocol
No agent may execute code without preceding role sign-offs:
```text
Product Owner -> Scrum Master -> Software Developer -> QA Engineer -> DevOps -> Support
  (Requirements)    (Inception)       (Implementation)      (Verification)   (Delivery)  (Audit)
```

### 2. Role Authority & Boundary Matrix (No "Bida-Bida")
- **Product Owner**: Specifies user stories; banned from editing application code.
- **Scrum Master**: Sets Sprint boundaries; banned from altering UI styles.
- **Software Developer**: Edits code within boundaries; **banned from self-approving QA certification**.
- **QA Engineer**: Read-only code auditor; must certify responsive layouts, 44px tap targets, and accessibility.
- **DevOps Engineer**: Executes builds and deployment artifacts; banned from modifying design tokens.

### 3. Anti-Slop Hard Gates
- **Zero Hardcoded Colors**: All surface, background, and text colors must strictly consume CSS variables.
- **Rule R-02**: Absolute ban on em dashes and en dashes in all UI copy and documentation. Use hyphens (-) only.
- **Zero Decorative Emojis**: Enforces clean semantic SVG icons.
- **Accessible Touch Ergonomics**: Minimum 44x44px touch targets on all interactive controls.

---

## CLI Options

```bash
npx agentflow-kit [options]

Options:
  -h, --help     Show help and usage guide
  -v, --version  Show current version
  --quick        Scaffold immediately with default recommended settings
```

---

## Contributing

Contributions, issues, and feature requests are welcome!  
Feel free to check out the [issues page](https://github.com/nathanielfaborada/agentflow-kit/issues).

---

## Author

**Nathaniel Faborada**
- GitHub: [@nathanielfaborada](https://github.com/nathanielfaborada)

---

## License

This project is licensed under the [MIT License](LICENSE).
