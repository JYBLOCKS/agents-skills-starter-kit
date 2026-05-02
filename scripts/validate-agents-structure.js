const fs = require('fs');
const path = require('path');

const root = process.cwd();
const agentsDir = path.join(root, 'agents');
const errors = [];

const KEBAB_MD = /^[a-z0-9]+(?:-[a-z0-9]+)*\.md$/;
const ALLOWED_SPECIAL = new Set(['README.md', 'CONTRACT.md']);
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
    if (entry.isDirectory()) {
      addError(`Subfolder not allowed inside agents/: agents/${name}/`);
      continue;
    }
    if (!entry.isFile()) {
      addError(`Non-file entry not allowed inside agents/: agents/${name}`);
      continue;
    }
    if (!name.endsWith('.md')) {
      addError(`Non-markdown file not allowed inside agents/: agents/${name}`);
      continue;
    }
    if (!ALLOWED_SPECIAL.has(name) && !KEBAB_MD.test(name)) {
      addError(`Invalid kebab-case filename in agents/: agents/${name}`);
      continue;
    }

    if (!ALLOWED_SPECIAL.has(name)) {
      const content = fs.readFileSync(path.join(agentsDir, name), 'utf8');
      if (!hasAgentFrontmatter(content)) {
        addError(`Missing or invalid YAML frontmatter in agents/${name}`);
      }
      agentSlugs.push(name.replace(/\.md$/, ''));
    }
  }

  return agentSlugs;
}

function validateLegacyReferences(agentSlugs) {
  const files = walk(root).filter((f) => /\.(md|ya?ml|json)$/i.test(f));

  for (const filePath of files) {
    const rel = path.relative(root, filePath).split(path.sep).join('/');
    const content = fs.readFileSync(filePath, 'utf8');

    for (const slug of agentSlugs) {
      const patterns = [
        new RegExp(`agents/${slug}/(metadata|instructions|delegation)\\.md`),
        new RegExp(`agents/${slug}/(agent|prompt|rules|checklist|handoff-template|example)\\.md`),
        new RegExp(`agents/${slug}/`),
      ];
      const bad = patterns.find((p) => p.test(content));
      if (bad) {
        const match = content.match(bad);
        addError(`Legacy agents reference in ${rel}: ${match ? match[0] : `agents/${slug}/...`}`);
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
