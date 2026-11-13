#!/usr/bin/env node

/**
 * agentflow-kit CLI Entrypoint
 */

const path = require('path');
const { runInteractiveWizard } = require('../src/prompts');
const { generateAgentsDirectory } = require('../src/generator');
const {
  SDLC_METHODOLOGIES,
  TECH_STACK_PRESETS,
  COLOR_PALETTES,
  SQUAD_PRESETS,
} = require('../src/presets');
const { detectEnvironment } = require('../src/detector');

const args = process.argv.slice(2);

if (args.includes('--help') || args.includes('-h')) {
  console.log(`
Usage: npx agentflow-kit [options]

Options:
  -h, --help     Show help and usage guide
  -v, --version  Show current version
  --quick        Scaffold immediately with default recommended settings

Examples:
  npx agentflow-kit            # Run interactive Q&A wizard
  npx agentflow-kit --quick    # Generate standard .agents directory instantly
`);
  process.exit(0);
}

if (args.includes('--version') || args.includes('-v')) {
  const pkg = require('../package.json');
  console.log(`agentflow-kit v${pkg.version}`);
  process.exit(0);
}

async function main() {
  const targetDir = process.cwd();
  let config;

  if (args.includes('--quick')) {
    const detected = detectEnvironment(targetDir);
    console.log(`\n[agentflow-kit] Auto-detected environment: ${detected.provider} (${detected.rationale})`);
    console.log('[agentflow-kit] Running quick setup with standard defaults...');
    config = {
      projectName: path.basename(targetDir) || 'My Application',
      authorName: 'Developer',
      sdlc: SDLC_METHODOLOGIES.scrum,
      stack: TECH_STACK_PRESETS.react,
      palette: COLOR_PALETTES['warm-coffee'],
      squad: SQUAD_PRESETS.full_squad,
      aiModel: detected,
    };
  } else {
    config = await runInteractiveWizard();
  }

  console.log('\nGenerating AI Agent Governance protocols in .agents/ ...');
  const result = generateAgentsDirectory(targetDir, config);

  console.log('\nSUCCESS! agentflow-kit successfully scaffolded your workspace.');
  console.log('\nGenerated Governance & Protocol Artifacts:');
  result.generatedFiles.forEach((file) => {
    const relPath = path.relative(targetDir, file);
    console.log(`  [+] ${relPath}`);
  });

  console.log(`
================================================================
Your AI agents are now governed by strict SDLC rules:
1. Anti-Bida-Bida Matrix: Agents cannot overstep designated roles.
2. Sequential Handshake: PO -> SM -> Dev -> QA -> DevOps.
3. Design System Tokens: Zero hardcoded colors or arbitrary fonts.
4. Anti-Slop Hard Gates: 0 em/en dashes, 0 hallucinated awards.

To begin, point your AI assistant to read:
  .agents/rules/AGENTS.md
================================================================
`);
}

main().catch((err) => {
  console.error('\nError initializing agentflow-kit:', err.message);
  process.exit(1);
});
