/**
 * agentflow-kit Interactive Terminal Prompts
 * Built purely with native Node.js readline for zero-dependency portability.
 */

const readline = require('readline');
const {
  SDLC_METHODOLOGIES,
  TECH_STACK_PRESETS,
  COLOR_PALETTES,
  SQUAD_PRESETS,
} = require('./presets');

function createInterface() {
  return readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
}

function askQuestion(rl, query, defaultValue = '') {
  return new Promise((resolve) => {
    const formattedQuery = defaultValue
      ? `${query} [default: ${defaultValue}]: `
      : `${query}: `;
    rl.question(formattedQuery, (answer) => {
      resolve(answer.trim() || defaultValue);
    });
  });
}

function askChoice(rl, query, options, defaultIndex = 1) {
  return new Promise((resolve) => {
    console.log(`\n${query}`);
    const keys = Object.keys(options);
    keys.forEach((key, idx) => {
      const item = options[key];
      const label = item.name || key;
      const badge = item.badge ? ` [${item.badge}]` : '';
      const isDefault = idx + 1 === defaultIndex ? ' (default)' : '';
      console.log(`  [${idx + 1}] ${label}${badge}${isDefault}`);
    });

    rl.question(`Select option [1-${keys.length}]: `, (answer) => {
      const num = parseInt(answer.trim(), 10);
      if (!isNaN(num) && num >= 1 && num <= keys.length) {
        resolve(keys[num - 1]);
      } else {
        resolve(keys[defaultIndex - 1]);
      }
    });
  });
}

async function runInteractiveWizard() {
  const rl = createInterface();

  console.log(`
================================================================
       ___                     __  ______             __ ___ __ 
      /   | ____ ____  ____   / /_/ ____/___ _      _/ //_/( / /_
     / /| |/ __ \`/ _ \\/ __ \\ / __/ /_  / __ \\ | /| / / ,<   / __/
    / ___ / /_/ /  __/ / / // /_/ __/ / /_/ / |/ |/ / /| | / /_  
   /_/  |_\\__, /\\___/_/ /_/ \\__/_/    \\____/|__/|__/_/ |_| \\__/  
         /____/                                                 
   Autonomous AI Agent Governance & SDLC Scaffolding Tool
================================================================
`);

  try {
    const projectName = await askQuestion(
      rl,
      '1. Project Name',
      'My Portfolio / SaaS Application'
    );

    const authorName = await askQuestion(
      rl,
      '2. Author / Organization Name',
      'Developer'
    );

    const sdlcKey = await askChoice(
      rl,
      '3. Choose your SDLC Methodology (13 Frameworks Available):',
      SDLC_METHODOLOGIES,
      1 // Scrum (Sprint-based Handshake) as default
    );

    const stackKey = await askChoice(
      rl,
      '4. Choose your Tech Stack:',
      TECH_STACK_PRESETS,
      1
    );

    const paletteKey = await askChoice(
      rl,
      '5. Choose your Design System Color Aesthetic:',
      COLOR_PALETTES,
      1
    );

    const squadKey = await askChoice(
      rl,
      '6. Choose your AI Agent Squad Structure:',
      SQUAD_PRESETS,
      1
    );

    rl.close();

    return {
      projectName,
      authorName,
      sdlcKey,
      sdlc: SDLC_METHODOLOGIES[sdlcKey],
      stackKey,
      stack: TECH_STACK_PRESETS[stackKey],
      paletteKey,
      palette: COLOR_PALETTES[paletteKey],
      squadKey,
      squad: SQUAD_PRESETS[squadKey],
    };
  } catch (err) {
    rl.close();
    throw err;
  }
}

module.exports = {
  runInteractiveWizard,
};
