const fs = require('fs');
const path = require('path');

const root = process.cwd();
const errors = [];

const REQUIRED_FILES = [
  'agents/orchestrator.md',
  'runbooks/sdd-flow.md',
  'skills/spec-driven-development.md',
  'skills/test-driven-development.md',
  'skills/caveman.md',
  'checklists/sdd-delivery-ready.md',
  'templates/sdd-fast-forward.md',
];

const FRONTMATTER = /^---\r?\n[\s\S]*?\r?\n---\r?\n?/;

function addError(msg) {
  errors.push(msg);
}

function assertExists() {
  for (const file of REQUIRED_FILES) {
    const full = path.join(root, file);
    if (!fs.existsSync(full)) {
      addError(`Missing required canonical-flow artifact: ${file}`);
    }
  }
}

function read(file) {
  return fs.readFileSync(path.join(root, file), 'utf8');
}

function hasFrontmatter(content) {
  return FRONTMATTER.test(content);
}

function checkFrontmatter() {
  for (const file of REQUIRED_FILES) {
    const full = path.join(root, file);
    if (!fs.existsSync(full)) continue;
    const content = read(file);
    if (!hasFrontmatter(content)) {
      addError(`Missing YAML frontmatter: ${file}`);
    }
  }
}

function checkCanonicalLinks() {
  const linksToVerify = [
    ['AGENTS.md', 'agents/orchestrator.md'],
    ['README.md', 'agents/orchestrator.md'],
    ['README.md', 'runbooks/sdd-flow.md'],
    ['runbooks/start-here.md', 'agents/orchestrator.md'],
    ['runbooks/sdd-flow.md', 'agents/orchestrator.md'],
    ['runbooks/sdd-flow.md', 'skills/spec-driven-development.md'],
    ['runbooks/sdd-flow.md', 'skills/test-driven-development.md'],
    ['runbooks/sdd-flow.md', 'skills/caveman.md'],
    ['runbooks/sdd-flow.md', 'checklists/sdd-delivery-ready.md'],
  ];

  const extractLinks = (content) => {
    const matches = [...content.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)];
    return matches.map((m) => m[1].split('#')[0].trim()).filter(Boolean);
  };

  for (const [source, target] of linksToVerify) {
    const sourcePath = path.join(root, source);
    if (!fs.existsSync(sourcePath)) continue;
    const content = read(source);
    const links = extractLinks(content);
    const sourceDir = path.dirname(sourcePath);
    const targetAbs = path.resolve(root, target);
    const hasTarget = links.some((link) => {
      if (link.startsWith('http://') || link.startsWith('https://') || link.startsWith('mailto:')) return false;
      const resolved = path.resolve(sourceDir, link);
      return resolved === targetAbs;
    });
    if (!hasTarget) {
      addError(`Missing required canonical link from ${source} to ${target}`);
    }
  }
}

function checkSingleEntryLanguage() {
  const requiredChecks = [
    ['README.md', /single entry/i, 'README must declare single entry workflow'],
    ['runbooks/start-here.md', /one entrypoint only/i, 'start-here must enforce one entrypoint'],
    ['AGENTS.md', /one public workflow entrypoint/i, 'AGENTS must declare one public entrypoint'],
  ];

  for (const [file, pattern, message] of requiredChecks) {
    const full = path.join(root, file);
    if (!fs.existsSync(full)) {
      addError(`Missing routing file: ${file}`);
      continue;
    }
    const content = read(file);
    if (!pattern.test(content)) {
      addError(message);
    }
  }
}

function checkForbiddenAltRouting() {
  const files = ['AGENTS.md', 'README.md', 'runbooks/start-here.md', 'runbooks/sdd-flow.md'];
  const forbidden = [
    'secondary/legacy',
    'decompose or route work',
    'business-agent',
    'spec-agent',
    'implementation-agent',
    'review-agent',
    'docs-agent',
    'creator-orchestrator-agent',
    'sdd-orchestrator-agent',
  ];

  for (const file of files) {
    const full = path.join(root, file);
    if (!fs.existsSync(full)) continue;
    const content = read(file).toLowerCase();
    for (const token of forbidden) {
      if (content.includes(token.toLowerCase())) {
        addError(`Forbidden alternate-route token in ${file}: ${token}`);
      }
    }
  }
}

function checkChecklistDensity() {
  const file = 'checklists/sdd-delivery-ready.md';
  const full = path.join(root, file);
  if (!fs.existsSync(full)) return;

  const content = read(file);
  const lines = content.split(/\r?\n/);
  const taskCount = lines.filter((line) => /^- \[ \]/.test(line.trim())).length;
  if (taskCount < 128) {
    addError(`Checklist must include at least 128 tasks, found ${taskCount}`);
  }
  if (lines.length > 220) {
    addError(`Checklist document must be <=220 lines, found ${lines.length}`);
  }
}

function main() {
  assertExists();
  checkFrontmatter();
  checkCanonicalLinks();
  checkSingleEntryLanguage();
  checkForbiddenAltRouting();
  checkChecklistDensity();

  if (errors.length > 0) {
    console.error('SDD flow validation failed:\n');
    for (const error of errors) {
      console.error(`- ${error}`);
    }
    process.exit(1);
  }

  console.log('SDD flow validation passed.');
}

main();
