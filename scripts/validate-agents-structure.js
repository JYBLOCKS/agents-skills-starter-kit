const fs = require('fs');
const path = require('path');

const root = process.cwd();
const agentsDir = path.join(root, 'agents');
const errors = [];

const KEBAB_DIR = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const ALLOWED_TOP_LEVEL_FILES = new Set(['README.md', 'CONTRACT.md']);
const FRONTMATTER = /^---\r?\n[\s\S]*?\r?\n---\r?\n?/;

function addError(msg) {
  errors.push(msg);
}

function walk(dir, acc = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name === '.git' || entry.name === 'node_modules') continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, acc);
    else acc.push(full);
  }
  return acc;
}

function hasAgentFrontmatter(content) {
  if (!FRONTMATTER.test(content)) return false;
  const match = content.match(FRONTMATTER);
  if (!match) return false;
  const block = match[0].replace(/^---\r?\n/, '').replace(/\r?\n---\r?\n?$/, '');
  return /\bname:\s*.+/m.test(block) && /\btype:\s*agent\b/m.test(block);
}

function validateAgentsDir() {
  if (!fs.existsSync(agentsDir)) {
    addError('Missing required directory: agents/');
    return [];
  }

  const entries = fs.readdirSync(agentsDir, { withFileTypes: true });
  const agentSlugs = [];

  for (const entry of entries) {
    const name = entry.name;
    const full = path.join(agentsDir, name);

    if (entry.isFile()) {
      if (!ALLOWED_TOP_LEVEL_FILES.has(name)) {
        addError(`Top-level files not allowed in agents/: agents/${name}`);
      }
      continue;
    }

    if (!entry.isDirectory()) {
      addError(`Unsupported entry in agents/: agents/${name}`);
      continue;
    }

    if (!KEBAB_DIR.test(name)) {
      addError(`Invalid kebab-case agent directory: agents/${name}/`);
    }

    const sub = fs.readdirSync(full, { withFileTypes: true });
    const subNames = sub.map((s) => s.name);
    if (sub.length !== 1 || subNames[0] !== 'AGENT.md' || !sub[0].isFile()) {
      addError(`Agent directory must contain exactly AGENT.md: agents/${name}/`);
      continue;
    }

    const content = fs.readFileSync(path.join(full, 'AGENT.md'), 'utf8');
    if (!hasAgentFrontmatter(content)) {
      addError(`Missing or invalid YAML frontmatter in agents/${name}/AGENT.md`);
    }
    agentSlugs.push(name);
  }

  return agentSlugs;
}

function validateLegacyReferences(agentSlugs) {
  const files = walk(root).filter((f) => /\.(md|ya?ml|json)$/i.test(f));

  for (const filePath of files) {
    const rel = path.relative(root, filePath).split(path.sep).join('/');
    const content = fs.readFileSync(filePath, 'utf8');

    for (const slug of agentSlugs) {
      const legacyFlat = new RegExp(`agents/${slug}\\.md`);
      if (legacyFlat.test(content)) {
        addError(`Legacy flat agent reference in ${rel}: agents/${slug}.md`);
        break;
      }
    }
  }
}

function main() {
  const agentSlugs = validateAgentsDir();
  validateLegacyReferences(agentSlugs);

  if (errors.length > 0) {
    console.error('Agents structure validation failed:\n');
    for (const error of errors) console.error(`- ${error}`);
    process.exit(1);
  }

  console.log('Agents structure validation passed.');
}

main();
