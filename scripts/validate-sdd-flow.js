const fs = require('fs');
const path = require('path');

const root = process.cwd();
const errors = [];

const REQUIRED_FILES = [
  'agents/sdd-orchestrator-agent/AGENT.md',
  'skills/sdd-operating-flow/SKILL.md',
  'runbooks/sdd-flow.md',
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
      addError(`Missing required SDD artifact: ${file}`);
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

function checkCrossLinks() {
  const linksToVerify = [
    ['agents/sdd-orchestrator-agent/AGENT.md', 'skills/sdd-operating-flow/SKILL.md'],
    ['agents/sdd-orchestrator-agent/AGENT.md', 'runbooks/sdd-flow.md'],
    ['skills/sdd-operating-flow/SKILL.md', 'checklists/sdd-delivery-ready.md'],
    ['skills/sdd-operating-flow/SKILL.md', 'templates/sdd-fast-forward.md'],
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
      addError(`Missing required internal link from ${source} to ${target}`);
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
  if (lines.length > 200) {
    addError(`Checklist document must be <=200 lines, found ${lines.length}`);
  }
}

function checkSddDefaultRouting() {
  const requiredRoutingChecks = [
    ['README.md', /Default Workflow:\s*SDD/i, 'README must declare SDD as default workflow'],
    ['runbooks/start-here.md', /default delivery flow \(recommended\)/i, 'start-here must expose SDD as recommended default delivery flow'],
  ];

  for (const [file, pattern, message] of requiredRoutingChecks) {
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

function checkThreeSkillGates() {
  const requiredMentions = [
    ['agents/sdd-orchestrator-agent/AGENT.md', 'skills/caveman/SKILL.md'],
    ['agents/sdd-orchestrator-agent/AGENT.md', 'skills/frontend-design/SKILL.md'],
    ['agents/sdd-orchestrator-agent/AGENT.md', 'skills/frontend-developer/SKILL.md'],
    ['skills/sdd-operating-flow/SKILL.md', 'skills/caveman/SKILL.md'],
    ['skills/sdd-operating-flow/SKILL.md', 'skills/frontend-design/SKILL.md'],
    ['skills/sdd-operating-flow/SKILL.md', 'skills/frontend-developer/SKILL.md'],
    ['checklists/sdd-delivery-ready.md', 'caveman'],
    ['checklists/sdd-delivery-ready.md', 'frontend-design'],
    ['checklists/sdd-delivery-ready.md', 'frontend-developer'],
  ];

  for (const [file, token] of requiredMentions) {
    const full = path.join(root, file);
    if (!fs.existsSync(full)) continue;
    const content = read(file);
    if (!content.includes(token)) {
      addError(`Missing required 3-skill gate reference in ${file}: ${token}`);
    }
  }
}

function main() {
  assertExists();
  checkFrontmatter();
  checkCrossLinks();
  checkChecklistDensity();
  checkSddDefaultRouting();
  checkThreeSkillGates();

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
