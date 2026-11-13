# agentflow-kit ⚡

> **Autonomous AI Agent Governance & SDLC Scaffolding Tool**  
> Enforce sequential handshake engineering protocols, boundary matrices, and zero-slop design system tokens across your AI-assisted codebases. Supporting 13 standard Software Development Life Cycle (SDLC) methodologies.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Node: >=16](https://img.shields.io/badge/node-%3E%3D16.0.0-brightgreen.svg)](https://nodejs.org/)
[![SDLC: 13 Frameworks](https://img.shields.io/badge/SDLC-13%20Methodologies-purple.svg)](https://github.com/nathanielfaborada/agentflow-kit)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/nathanielfaborada/agentflow-kit/pulls)

---

## The Problem With AI Coding Agents

Most autonomous AI coding agents (Copilot, Claude, Cursor, Antigravity) fail on larger projects because of three fatal flaws:
1. **The "Bida-Bida" Syndrome**: The AI tries to do everything at once without boundaries - rewriting business logic, altering CSS tokens arbitrarily, and approving its own untested code.
2. **Hallucination & Speculation**: Agents invent nonexistent client logos, awards, or fake dependencies.
3. **Slop & Layout Breakages**: Using hardcoded hex codes, broken touch targets, em dashes, and breaking mobile layouts.

---

## The Solution: `agentflow-kit`

`agentflow-kit` scaffolds an enterprise-grade **AI Governance & SDLC Architecture** (`.agents/`) directly into your repository.

Choose between:
- **Option A: Terminal CLI Wizard** (`npx agentflow-kit`) - Interactive CLI with zero dependencies.
- **Option B: AI-Assisted Interview** (`templates/AI-CONSULTANT-PROMPT.md`) - Let your AI inspect your codebase, present the 13 SDLC frameworks, give a smart recommendation, and build your configuration!

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

## Quick Start (Terminal CLI)

Run the interactive scaffolding wizard directly in any project root:

```bash
npx agentflow-kit
```

Or run instant setup using standard production defaults:

```bash
npx agentflow-kit --quick
```

---

## AI-Assisted Interview Mode 🤖

If you are already inside an AI coding assistant (Cursor, Antigravity, Claude, Copilot, ChatGPT):
1. Copy the contents of [`templates/AI-CONSULTANT-PROMPT.md`](templates/AI-CONSULTANT-PROMPT.md).
2. Paste it into your AI assistant chat.
3. The AI will:
   - **Inspect your repository** (detects your framework, styling, and dependencies).
   - **Display the 13 SDLC frameworks** and recommend the best fit for your codebase.
   - Wait for your selection and directly scaffold your `.agents/` directory!

---

## Master Catalog of 13 Supported SDLC Methodologies

`agentflow-kit` supports all 13 industry-standard Software Development Life Cycle methodologies:

| # | SDLC Methodology | Operational Flow | Best For |
| :--- | :--- | :--- | :--- |
| 1 | **Scrum** *(Recommended)* | `PO -> Scrum Master -> Dev -> QA -> DevOps -> Support` | Modern web apps, SaaS, and portfolios requiring strict multi-agent accountability. |
| 2 | **Agile** | `User Feedback -> Backlog -> Iteration -> Continuous QA -> Deploy` | Fast-evolving products where requirements shift with user feedback. |
| 3 | **Kanban** | `Backlog -> Selected -> In Progress -> QA Review -> Production` | Maintenance, continuous operations, bug fixing, and rapid increments. |
| 4 | **Waterfall** | `Requirements -> Architecture -> Coding -> Verification -> Deploy` | Fixed-scope client contracts and compliance-regulated software. |
| 5 | **V-Model** | `Paired Design & Testing (Req <-> Acc, Arch <-> Int, Code <-> Unit)` | High-reliability, mission-critical, and zero-defect systems. |
| 6 | **DevOps** | `Plan -> Code -> Build -> Test -> Release -> Deploy -> Monitor` | Cloud-native microservices, APIs, and continuous delivery platforms. |
| 7 | **Lean** | `Identify Value -> Eliminate Waste -> Rapid MVP -> Measure -> Pivot` | Early-stage startups, solo founders, and fast experimentation. |
| 8 | **Prototype** | `Concept -> Rapid UI Mockup -> Client Review -> Refine -> Code` | Novel UX/UI exploration and client concept validation. |
| 9 | **RAD** | `Requirements Planning -> User Design -> Rapid Construction -> Cutover` | Tight deadlines and projects heavily utilizing pre-built component libraries. |
| 10 | **Extreme Programming (XP)** | `User Story -> Failing TDD -> Minimal Code -> Refactor -> CI` | Financial algorithms, mathematical logic, and high-security services. |
| 11 | **Iterative** | `Core Architecture -> Release 1 (Core) -> Release 2 (Module) -> Next` | Large enterprise architectures needing early working core releases. |
| 12 | **Spiral** | `Objectives -> Risk Analysis -> Prototype -> Review & Next Loop` | High-risk innovation projects with untested technologies or APIs. |
| 13 | **Big Bang** | `Raw Prompt -> Direct Intensive Coding -> Integration -> Sanity Test` | Weekend hackathons, overnight experiments, and emergency hotfixes. |

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
- **QA Engineer**: Read-only code auditor; certifies responsive layouts, 44px tap targets, and accessibility.
- **DevOps Engineer**: Executes builds and deployment artifacts; banned from modifying design tokens.

### 3. Anti-Slop Hard Gates
- **Zero Hardcoded Colors**: All surface, background, and text colors must strictly consume CSS variables.
- **Rule R-02**: Absolute ban on em dashes and en dashes in all UI copy and documentation. Use hyphens (-) only.
- **Zero Decorative Emojis**: Enforces clean semantic SVG icons.
- **Accessible Touch Ergonomics**: Minimum 44x44px touch targets on all interactive controls.

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
