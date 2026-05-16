const fs = require('fs');
const path = require('path');

const root = process.cwd();
const agentsDir = path.join(root, 'agents');
const skillsDir = path.join(root, 'skills');
const errors = [];

const KEBAB_MD = /^[a-z0-9]+(?:-[a-z0-9]+)*\.md$/;
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

function frontmatterBlock(content) {
  const match = content.match(FRONTMATTER);
  if (!match) return '';
  return match[0].replace(/^---\r?\n/, '').replace(/\r?\n---\r?\n?$/, '');
}

function hasAgentFrontmatter(content) {
  const block = frontmatterBlock(content);
  return (
    /\bname:\s*.+/m.test(block) &&
    /\brole:\s*.+/m.test(block) &&
    /\bseniority:\s*.+/m.test(block) &&
    /\bmain_goal:\s*.+/m.test(block) &&
    /\bwhen_to_use:\s*.+/m.test(block) &&
    /\bdelegates_to:/m.test(block) &&
    /\buses_skills:/m.test(block)
  );
}

function hasSkillFrontmatter(content) {
  const block = frontmatterBlock(content);
  return (
    /\bname:\s*.+/m.test(block) &&
    /\btype:\s*.+/m.test(block) &&
    /\bpurpose:\s*.+/m.test(block) &&
    /\bwhen_to_use:\s*.+/m.test(block) &&
    /\btoken_saving_level:\s*.+/m.test(block)
  );
}

function validateFlatDir(dir, label, isValidFrontmatter) {
  if (!fs.existsSync(dir)) {
    addError(`Missing required directory: ${label}/`);
    return [];
  }

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const slugs = [];

  for (const entry of entries) {
    const name = entry.name;
    const full = path.join(dir, name);

    if (entry.isDirectory()) {
      addError(`Per-${label.slice(0, -1)} folders are not allowed: ${label}/${name}/`);
      continue;
    }

    if (!entry.isFile()) {
      addError(`Unsupported entry in ${label}/: ${label}/${name}`);
      continue;
    }

    if (ALLOWED_TOP_LEVEL_FILES.has(name)) continue;

    if (!KEBAB_MD.test(name)) {
      addError(`Invalid kebab-case ${label.slice(0, -1)} file: ${label}/${name}`);
      continue;
    }

    const content = fs.readFileSync(full, 'utf8');
    if (!isValidFrontmatter(content)) {
      addError(`Missing or invalid YAML frontmatter in ${label}/${name}`);
    }
    slugs.push(name.replace(/\.md$/, ''));
  }

  return slugs;
}

function validateLegacyPackageReferences() {
  const files = walk(root).filter((f) => /\.(md|mjs|js|ya?ml|json)$/i.test(f));
  const legacyPatterns = [
    /agents\/[a-z0-9-]+\/AGENT\.md/g,
    /skills\/[a-z0-9-]+\/SKILL\.md/g,
  ];

  for (const filePath of files) {
    const rel = path.relative(root, filePath).split(path.sep).join('/');
    const content = fs.readFileSync(filePath, 'utf8');
    for (const pattern of legacyPatterns) {
      const match = content.match(pattern);
      if (match) {
        addError(`Legacy package reference in ${rel}: ${match[0]}`);
        break;
      }
    }
  }
}

function validateRequiredFiles() {
  const requiredAgents = [
    'orchestrator',
    'product-manager',
    'business-strategist',
    'finance-strategist',
    'marketing-growth',
    'ux-ui-designer',
    'frontend-senior',
    'backend-senior',
    'database-engineer',
    'devops-engineer',
    'qa-engineer',
    'security-engineer',
    'software-architect',
    'tech-lead',
    'code-reviewer',
    'documentation-writer',
  ];
  const requiredSkills = [
    'caveman',
    'spec-driven-development',
    'test-driven-development',
    'context-builder',
    'requirements-discovery',
    'delegation-router',
    'product-strategy',
    'business-modeling',
    'finance-analysis',
    'marketing-strategy',
    'ux-research',
    'ui-design-system',
    'frontend-architecture',
    'backend-architecture',
    'database-design',
    'api-design',
    'devops-ci-cd',
    'security-review',
    'observability',
    'testing-strategy',
    'code-review',
    'documentation',
    'release-management',
  ];

  for (const slug of requiredAgents) {
    if (!fs.existsSync(path.join(agentsDir, `${slug}.md`))) addError(`Missing required agent: agents/${slug}.md`);
  }
  for (const slug of requiredSkills) {
    if (!fs.existsSync(path.join(skillsDir, `${slug}.md`))) addError(`Missing required skill: skills/${slug}.md`);
  }
}

function main() {
  validateFlatDir(agentsDir, 'agents', hasAgentFrontmatter);
  validateFlatDir(skillsDir, 'skills', hasSkillFrontmatter);
  validateRequiredFiles();
  validateLegacyPackageReferences();

  if (errors.length > 0) {
    console.error('Agents and skills structure validation failed:\n');
    for (const error of errors) console.error(`- ${error}`);
    process.exit(1);
  }

  console.log('Agents and skills structure validation passed.');
}

main();
