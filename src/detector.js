/**
 * agentflow-kit AI Environment & IDE Auto-Detector
 * Automatically inspects workspace signatures, environment keys, and tool configs
 * to dynamically recommend and configure the active AI model (Claude, Gemini, OpenAI, etc.).
 */

const fs = require('fs');
const path = require('path');

function detectEnvironment(targetDir = process.cwd()) {
  const hasClaudeMd = fs.existsSync(path.join(targetDir, 'CLAUDE.md'));
  const hasCursor =
    fs.existsSync(path.join(targetDir, '.cursorrules')) ||
    fs.existsSync(path.join(targetDir, '.cursor'));
  const hasGemini = fs.existsSync(path.join(targetDir, '.gemini'));
  const hasCopilot = fs.existsSync(
    path.join(targetDir, '.github', 'copilot-instructions.md')
  );

  const envAnthropic = Boolean(
    process.env.ANTHROPIC_API_KEY || process.env.CLAUDE_CODE
  );
  const envGemini = Boolean(
    process.env.GEMINI_API_KEY || process.env.ANTIGRAVITY
  );
  const envOpenAI = Boolean(process.env.OPENAI_API_KEY);

  // If Claude signature detected
  if (hasClaudeMd || envAnthropic) {
    return {
      id: 'claude_37_sonnet',
      provider: 'Anthropic Claude',
      modelId: 'claude-3-7-sonnet',
      effort: 'high',
      badge: 'DETECTED',
      rationale: hasClaudeMd
        ? 'Detected CLAUDE.md in workspace'
        : 'Detected Anthropic environment key',
    };
  }

  // If Gemini or Antigravity signature detected
  if (hasGemini || envGemini) {
    return {
      id: 'gemini_flash',
      provider: 'Google Gemini / Antigravity',
      modelId: 'gemini-3.8-flash',
      effort: 'medium',
      badge: 'DETECTED',
      rationale: hasGemini
        ? 'Detected .gemini configuration'
        : 'Detected Gemini / Antigravity environment',
    };
  }

  // If OpenAI signature detected
  if (envOpenAI) {
    return {
      id: 'gpt_4o',
      provider: 'OpenAI',
      modelId: 'gpt-4o',
      effort: 'medium',
      badge: 'DETECTED',
      rationale: 'Detected OpenAI environment key',
    };
  }

  // Universal dynamic fallback
  return {
    id: 'inherit',
    provider: 'Universal Auto-Inherit',
    modelId: 'inherit',
    effort: 'medium',
    badge: 'UNIVERSAL',
    rationale:
      'Dynamically inherits whichever model runs the workspace (Claude, Gemini, Cursor, or GPT-4)',
  };
}

module.exports = {
  detectEnvironment,
};
