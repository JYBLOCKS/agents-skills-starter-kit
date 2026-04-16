import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

function readJson(relativePath) {
  return JSON.parse(fs.readFileSync(path.join(root, relativePath), "utf8"));
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function assertExists(relativePath) {
  const absolutePath = path.join(root, relativePath);
  assert(fs.existsSync(absolutePath), `Missing required path: ${relativePath}`);
}

function assertReadmeIncludes(readme, value) {
  assert(readme.includes(value), `README.md is missing documented install path: ${value}`);
}

function normalizeExportPath(relativePath) {
  return relativePath.replace(/^\.\//, "").replace(/\\/g, "/").replace(/\/$/, "");
}

function normalizeByName(entries) {
  return [...entries].sort((left, right) => left.name.localeCompare(right.name));
}

function listDirectDirectoryNames(relativePath) {
  const absolutePath = path.join(root, relativePath);
  return fs
    .readdirSync(absolutePath, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();
}

function assertExportGroupMatchesDirectories(groupName, relativePath) {
  const group = manifest.exports[groupName];
  assert(Array.isArray(group), `Missing export group: ${groupName}`);

  const expectedPaths = listDirectDirectoryNames(relativePath).map((name) =>
    normalizeExportPath(path.posix.join(relativePath.replace(/\\/g, "/"), name))
  );
  const actualPaths = group
    .map((item) => normalizeExportPath(item.path))
    .sort();

  assert(
    JSON.stringify(actualPaths) === JSON.stringify(expectedPaths),
    `Export group ${groupName} does not match ${relativePath}`
  );
}

function assertEntryGroupMatchesDirectories(groupName, entries, relativePath) {
  assert(Array.isArray(entries), `Missing entry group: ${groupName}`);

  const expectedPaths = listDirectDirectoryNames(relativePath).map((name) =>
    normalizeExportPath(path.posix.join(relativePath.replace(/\\/g, "/"), name))
  );
  const actualPaths = entries
    .map((item) => normalizeExportPath(item.path))
    .sort();

  assert(
    JSON.stringify(actualPaths) === JSON.stringify(expectedPaths),
    `Entry group ${groupName} does not match ${relativePath}`
  );
}

const pkg = readJson("package.json");
const manifest = readJson("distribution/manifest.json");
const gemini = readJson("gemini-extension.json");
const codexPlugin = readJson("plugins/ai-starter-kit/.codex-plugin/plugin.json");
const marketplace = readJson(".agents/plugins/marketplace.json");
const readme = fs.readFileSync(path.join(root, "README.md"), "utf8");

assert(pkg.version === manifest.version, "package.json and distribution/manifest.json versions differ");
assert(pkg.version === gemini.version, "package.json and gemini-extension.json versions differ");
assert(pkg.version === codexPlugin.version, "package.json and Codex plugin version differ");
assert(manifest.displayName === "AI starter kit", "distribution displayName must stay stable");
assert(codexPlugin.interface.displayName === manifest.displayName, "Codex plugin displayName must match manifest");

for (const relativePath of Object.values(manifest.sourceOfTruth)) {
  assertExists(relativePath);
}

assert(manifest.installSurface?.skillsRoot, "distribution/manifest.json is missing installSurface.skillsRoot");
assertExists(manifest.installSurface.skillsRoot);

const requiredSourceOfTruth = [
  "agents",
  "skills",
  "context",
  "rules",
  "checklists",
  "runbooks",
  "specs",
  "optional",
  "templates",
  "adapters"
];

for (const key of requiredSourceOfTruth) {
  assert(manifest.sourceOfTruth[key], `distribution/manifest.json is missing sourceOfTruth.${key}`);
}

for (const group of Object.values(manifest.exports)) {
  for (const item of group) {
    assertExists(item.path);
  }
}

for (const group of Object.values(manifest.skillSourceGroups ?? {})) {
  for (const item of group) {
    assertExists(item.path);
  }
}

assertExportGroupMatchesDirectories("agents", "agents");
assertExportGroupMatchesDirectories("skills", normalizeExportPath(manifest.installSurface.skillsRoot));
assertExportGroupMatchesDirectories("optionalAgents", "optional/agents");
assertExportGroupMatchesDirectories("adapters", "adapters");

assert(
  manifest.skillSourceGroups?.core && manifest.skillSourceGroups?.optional,
  "distribution/manifest.json must define skillSourceGroups.core and skillSourceGroups.optional"
);
assertEntryGroupMatchesDirectories("skillSourceGroups.optional", manifest.skillSourceGroups.optional, "optional/skills");

const sourceSkillEntries = normalizeByName([
  ...manifest.skillSourceGroups.core,
  ...manifest.skillSourceGroups.optional
]);
const exportedSkillEntries = normalizeByName(manifest.exports.skills);

assert(
  JSON.stringify(exportedSkillEntries.map((item) => item.name)) ===
    JSON.stringify(sourceSkillEntries.map((item) => item.name)),
  "distribution/manifest.json exports.skills must match the combined skill source groups"
);

for (const sourceEntry of sourceSkillEntries) {
  const exportedEntry = exportedSkillEntries.find((item) => item.name === sourceEntry.name);
  assert(exportedEntry, `Missing exported installable skill: ${sourceEntry.name}`);

  const sourceSkillFile = path.join(root, normalizeExportPath(sourceEntry.path), "SKILL.md");
  const exportedSkillFile = path.join(root, normalizeExportPath(exportedEntry.path), "SKILL.md");
  assert(
    fs.readFileSync(sourceSkillFile, "utf8") === fs.readFileSync(exportedSkillFile, "utf8"),
    `Installable skill ${sourceEntry.name} must mirror the source SKILL.md`
  );
}

for (const host of manifest.hosts) {
  assertExists(host.adapter);
  assertExists(path.join(host.adapter, "README.md"));
  if (host.id !== "universal") {
    assertExists(path.join(host.adapter, "example-setup.md"));
  }
  if (host.install.command) {
    assertReadmeIncludes(readme, host.install.command);
  }
  if (host.install.fallbackCommand) {
    assertReadmeIncludes(readme, host.install.fallbackCommand);
  }
  if (host.install.plugin) {
    assertExists(host.install.plugin);
  }
  if (host.install.marketplace) {
    assertExists(host.install.marketplace);
  }
  if (host.install.extension) {
    assertExists(host.install.extension);
  }
}

assert(gemini.contextFileName === "GEMINI.md", "Gemini extension must point at GEMINI.md");
assertExists("GEMINI.md");

const pluginEntry = marketplace.plugins.find((plugin) => plugin.name === "ai-starter-kit");
assert(pluginEntry, "Codex marketplace must include ai-starter-kit");
assert(
  pluginEntry.source?.path === "./plugins/ai-starter-kit",
  "Codex marketplace entry must point to ./plugins/ai-starter-kit"
);
assert(
  normalizeExportPath(
    path.relative(
      root,
      path.resolve(root, "plugins/ai-starter-kit/.codex-plugin", codexPlugin.skills)
    )
  ) === normalizeExportPath(manifest.installSurface.skillsRoot),
  "Codex plugin skills path must match distribution installSurface.skillsRoot"
);

const requiredReadmeCommands = [
  "npx skills add JYBLOCKS/agents-skills-starter-kit -a claude-code",
  "npx skills add JYBLOCKS/agents-skills-starter-kit -a cursor",
  "npx skills add JYBLOCKS/agents-skills-starter-kit -a windsurf",
  "npx skills add JYBLOCKS/agents-skills-starter-kit -a github-copilot",
  "npx skills add JYBLOCKS/agents-skills-starter-kit -a cline",
  "npx skills add JYBLOCKS/agents-skills-starter-kit -a gemini-cli",
  "npx skills add JYBLOCKS/agents-skills-starter-kit -a codex",
  "npx skills add JYBLOCKS/agents-skills-starter-kit",
  "gemini extensions install https://github.com/JYBLOCKS/agents-skills-starter-kit"
];

for (const command of requiredReadmeCommands) {
  assertReadmeIncludes(readme, command);
}

console.log("Distribution validation passed.");
