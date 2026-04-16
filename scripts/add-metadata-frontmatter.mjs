import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const checkOnly = process.argv.includes("--check");
const packageJson = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
const version = packageJson.version;

const skipDirs = new Set([".git", "node_modules"]);
const allowedTools = [
  "generic",
  "openai",
  "claude-code",
  "opencode",
  "cursor",
  "windsurf",
  "github-copilot",
  "cline",
  "gemini-cli",
  "codex"
];

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (entry.isDirectory()) {
      if (skipDirs.has(entry.name)) {
        continue;
      }
      files.push(...walk(path.join(dir, entry.name)));
      continue;
    }

    if (entry.isFile() && entry.name.endsWith(".md")) {
      files.push(path.join(dir, entry.name));
    }
  }

  return files;
}

function toPosix(value) {
  return value.split(path.sep).join("/");
}

function titleCase(slug) {
  return slug
    .replace(/\.md$/i, "")
    .split(/[-_]/g)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function sentenceCase(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function parseFrontmatter(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!match) {
    return null;
  }

  const frontmatter = match[1];
  const body = content.slice(match[0].length);

  const readScalar = (key) => {
    const scalarMatch = frontmatter.match(new RegExp(`^${key}:\\s*(.+)$`, "m"));
    return scalarMatch ? scalarMatch[1].trim() : null;
  };

  const readMetadataValue = (key) => {
    const metadataMatch = frontmatter.match(/^metadata:\r?\n([\s\S]*?)(?:\r?\n[a-zA-Z-]+:|$)/m);
    if (!metadataMatch) {
      return null;
    }
    const valueMatch = metadataMatch[1].match(new RegExp(`^\\s{2}${key}:\\s*(.+)$`, "m"));
    return valueMatch ? valueMatch[1].trim() : null;
  };

  return {
    raw: match[1],
    body,
    values: {
      name: readScalar("name"),
      description: readScalar("description"),
      trigger: readScalar("trigger"),
      scope: readMetadataValue("scope")
    }
  };
}

function isStandardizedFrontmatter(parsed) {
  if (!parsed) {
    return false;
  }

  const raw = parsed.raw;
  const requiredSnippets = [
    /^name:\s+.+$/m,
    /^description:\s+.+$/m,
    /^trigger:\s+.+$/m,
    /^metadata:$/m,
    /^  author:\s+starter-kit$/m,
    new RegExp(`^  version:\\s+${version.replace(".", "\\.")}.*$`, "m"),
    /^  scope:\s+.+$/m,
    /^  auto-invoke:\s+(true|false)$/m,
    /^allowed-tools:$/m
  ];

  for (const pattern of requiredSnippets) {
    if (!pattern.test(raw)) {
      return false;
    }
  }

  for (const tool of allowedTools) {
    const toolPattern = new RegExp(`^  - ${tool.replace("-", "\\-")}$`, "m");
    if (!toolPattern.test(raw)) {
      return false;
    }
  }

  return !/^type:/m.test(raw) && !/^owner:/m.test(raw) && !/^status:/m.test(raw);
}

function inferDocKind(relativePath) {
  const normalized = toPosix(relativePath);
  const parts = normalized.split("/");
  const base = path.basename(normalized, ".md");

  if (normalized === "README.md") {
    return { kind: "readme", slug: "agents-skills-starter-kit" };
  }
  if (normalized === "AGENTS.md") {
    return { kind: "routing-guide", slug: "agents-guide" };
  }
  if (normalized === "GEMINI.md") {
    return { kind: "host-bootstrap", slug: "gemini-bootstrap" };
  }
  if (parts[0] === "skills" && parts[2] === "SKILL.md") {
    return { kind: "skill", slug: parts[1] };
  }
  if (parts[0] === "optional" && parts[1] === "skills" && parts[3] === "SKILL.md") {
    return { kind: "skill", slug: parts[2] };
  }
  if (parts[0] === "agents" && parts.length === 3) {
    return { kind: `agent-${base}`, slug: parts[1] };
  }
  if (parts[0] === "optional" && parts[1] === "agents" && parts.length === 4) {
    return { kind: `agent-${base}`, slug: parts[2] };
  }
  if (parts[0] === "adapters" && parts.length === 3) {
    return { kind: base === "README" ? "adapter" : "adapter-example-setup", slug: parts[1] };
  }
  if (parts[0] === "adapters" && parts.length === 2) {
    return { kind: base === "README" ? "catalog" : "contract", slug: base === "README" ? "adapters" : "adapters-contract" };
  }
  if (parts[0] === "agents" && parts.length === 2) {
    return { kind: base === "README" ? "catalog" : "contract", slug: base === "README" ? "agents" : "agents-contract" };
  }
  if (parts[0] === "checklists") {
    return { kind: base === "README" ? "catalog" : "checklist", slug: base === "README" ? "checklists" : base };
  }
  if (parts[0] === "context") {
    return { kind: base === "README" ? "catalog" : "context", slug: base === "README" ? "context" : base };
  }
  if (parts[0] === "distribution") {
    return { kind: base === "README" ? "distribution" : "contract", slug: base === "README" ? "distribution" : "distribution-contract" };
  }
  if (parts[0] === "optional" && parts.length === 2 && base === "README") {
    return { kind: "catalog", slug: "optional" };
  }
  if (parts[0] === "optional" && parts[1] === "creators") {
    if (parts.length === 3) {
      return { kind: base === "README" ? "catalog" : "contract", slug: base === "README" ? "optional-creators" : base.toLowerCase() };
    }
    if (parts[2] === "questionnaires" || parts[2] === "templates") {
      return { kind: base === "README" ? "catalog" : "document", slug: base === "README" ? `${parts[2]}` : base };
    }
  }
  if (parts[0] === "optional" && parts[1] === "runbooks") {
    return { kind: "runbook", slug: base };
  }
  if (parts[0] === "plugins") {
    return { kind: "plugin-doc", slug: parts[1] ?? base };
  }
  if (parts[0] === "rules") {
    return { kind: base === "README" ? "catalog" : "rule", slug: base === "README" ? "rules" : base };
  }
  if (parts[0] === "runbooks") {
    return { kind: base === "README" ? "catalog" : "runbook", slug: base === "README" ? "runbooks" : base };
  }
  if (parts[0] === "specs") {
    if (parts.length === 2) {
      return { kind: base === "README" ? "catalog" : "contract", slug: base === "README" ? "specs" : "specs-contract" };
    }
    if (parts[1] === "examples") {
      return { kind: "spec-example", slug: base };
    }
  }
  if (parts[0] === "templates") {
    if (parts.length === 2 && base === "README") {
      return { kind: "catalog", slug: "templates" };
    }
    return { kind: "template", slug: parts.length > 2 ? `${parts[1]}-${base}` : base };
  }

  return { kind: "document", slug: base };
}

function getDefaultDescription(kind, slug) {
  const title = titleCase(slug);

  switch (kind) {
    case "skill":
      return `Reusable skill package for ${slug}.`;
    case "readme":
      return "Top-level installation, onboarding, and distribution guide for the starter kit.";
    case "routing-guide":
      return "Primary routing map and resource index for the starter kit.";
    case "host-bootstrap":
      return "Gemini CLI bootstrap context for the AI starter kit extension.";
    case "agent-agent":
      return `Role definition and operating contract for ${slug}.`;
    case "agent-prompt":
      return `Starter prompt for ${slug}.`;
    case "agent-rules":
      return `Local behavioral rules for ${slug}.`;
    case "agent-checklist":
      return `Completion checklist for ${slug}.`;
    case "agent-handoff-template":
      return `Standard downstream handoff template for ${slug}.`;
    case "agent-example":
      return `Example invocation and output shape for ${slug}.`;
    case "adapter":
      return `Tool adapter guidance for ${slug}.`;
    case "adapter-example-setup":
      return `Example installation and bootstrap steps for ${slug}.`;
    case "rule":
      return `Shared rule document for ${title}.`;
    case "context":
      return `Reusable shared context for ${title}.`;
    case "checklist":
      return `Checklist and done criteria for ${title}.`;
    case "runbook":
      return `Repeatable workflow document for ${title}.`;
    case "template":
      return `Starter template for ${title}.`;
    case "contract":
      return `Canonical contract document for ${title}.`;
    case "distribution":
      return "Overview of the starter kit distribution surface and source-of-truth mapping.";
    case "plugin-doc":
      return "Plugin wrapper documentation for the AI starter kit.";
    case "spec-example":
      return `Example specification document for ${title}.`;
    case "catalog":
      return `Catalog and usage guidance for ${title}.`;
    default:
      return `Repository document for ${title}.`;
  }
}

function getDefaultTrigger(kind, slug) {
  const title = titleCase(slug);

  switch (kind) {
    case "skill":
      return `Use this when ${slug} is the right reusable capability for the task and you want its workflow, rules, and output shape applied consistently.`;
    case "readme":
      return "Use this when you need the top-level install commands, onboarding path, or public distribution surface for the starter kit.";
    case "routing-guide":
      return "Use this when you need to choose the right agent, skill, rule, or repository resource before starting work.";
    case "host-bootstrap":
      return "Use this when Gemini CLI needs a host-specific bootstrap that still points back to the neutral repository core.";
    case "agent-agent":
      return `Use this when the task matches the role, mission, and decision boundaries owned by ${slug}.`;
    case "agent-prompt":
      return `Use this when you need the starter prompt that anchors ${slug} in a host tool.`;
    case "agent-rules":
      return `Use this when ${slug} is active and its local behavioral constraints need to be applied.`;
    case "agent-checklist":
      return `Use this when verifying whether ${slug} has met its completion gates.`;
    case "agent-handoff-template":
      return `Use this when ${slug} needs to hand work to another agent in the standard repository format.`;
    case "agent-example":
      return `Use this when you need a concrete example of how ${slug} should be invoked or how it should respond.`;
    case "adapter":
      return `Use this when mapping the neutral core into ${slug} without forking the shared repository content.`;
    case "adapter-example-setup":
      return `Use this when you need a concrete install and bootstrap example for ${slug}.`;
    case "rule":
      return `Use this when shared operating constraints from ${title} must govern the work.`;
    case "context":
      return `Use this when work depends on stable shared context from ${title}.`;
    case "checklist":
      return `Use this when deciding whether the ${title} gate is satisfied.`;
    case "runbook":
      return `Use this when you need the repeatable workflow documented in ${title}.`;
    case "template":
      return `Use this when creating or updating artifacts that should follow the ${title} template.`;
    case "contract":
      return `Use this when you need the canonical structure, requirements, or constraints defined in ${title}.`;
    case "distribution":
      return "Use this when you need the canonical distribution surface, export map, or installation metadata for the starter kit.";
    case "plugin-doc":
      return "Use this when installing or maintaining the local Codex plugin wrapper for the starter kit.";
    case "spec-example":
      return `Use this when you need a concrete example spec based on ${title}.`;
    case "catalog":
      return `Use this when browsing the available ${title} resources in the repository.`;
    default:
      return `Use this when ${title} is the relevant repository document for the task.`;
  }
}

function getDefaultScope(kind, slug) {
  const title = titleCase(slug);

  switch (kind) {
    case "skill":
      return `Owns the ${slug} workflow, guardrails, and expected outputs, but does not replace broader repository rules or agent selection.`;
    case "readme":
      return "Owns top-level onboarding, installation guidance, and public package framing, but does not replace deeper contracts in the repository.";
    case "routing-guide":
      return "Owns repository navigation and routing guidance, but does not replace the underlying source documents it points to.";
    case "host-bootstrap":
      return "Owns Gemini-specific bootstrap context, but does not fork the neutral starter content.";
    case "agent-agent":
      return `Owns the role definition, mission, and decision boundaries for ${slug}, but does not replace shared rules, context, or approved specs.`;
    case "agent-prompt":
      return `Owns the starter prompt for ${slug}, but does not replace the full agent contract, rules, or checklist.`;
    case "agent-rules":
      return `Owns local behavioral constraints for ${slug}, but does not replace repository-wide rules.`;
    case "agent-checklist":
      return `Owns completion gates for ${slug}, but does not replace formal approval or review.`;
    case "agent-handoff-template":
      return `Owns the standard handoff shape for ${slug}, but does not replace the governing spec or final implementation details.`;
    case "agent-example":
      return `Owns a reference example for ${slug}, but does not redefine the canonical contract.`;
    case "adapter":
      return `Owns the mapping from the neutral core into ${slug}, but does not replace the repository source of truth.`;
    case "adapter-example-setup":
      return `Owns an example install path for ${slug}, but does not replace the adapter contract or canonical repository structure.`;
    case "rule":
      return `Owns shared operating constraints in ${title}, but does not replace task-specific agent or skill guidance.`;
    case "context":
      return `Owns stable shared context for ${title}, but does not replace approved specs or current repository facts.`;
    case "checklist":
      return `Owns done criteria for ${title}, but does not replace the work itself.`;
    case "runbook":
      return `Owns the repeatable workflow for ${title}, but does not replace underlying contracts or repository rules.`;
    case "template":
      return `Owns the starter structure for ${title}, but does not replace approved repository-specific decisions.`;
    case "contract":
      return `Owns the canonical requirements for ${title}, but does not replace the concrete artifacts that implement them.`;
    case "distribution":
      return "Owns the distribution surface and source-of-truth mapping, but does not replace the canonical repository content.";
    case "plugin-doc":
      return "Owns Codex plugin wrapper guidance, but does not replace the neutral starter content in the repository root.";
    case "spec-example":
      return `Owns an illustrative spec example for ${title}, but does not replace an approved project spec.`;
    case "catalog":
      return `Owns discoverability for ${title}, but does not replace the canonical documents it references.`;
    default:
      return `Owns the repository guidance for ${title}, but does not replace the source artifacts it describes.`;
  }
}

function getAutoInvoke(kind) {
  return kind === "skill";
}

function buildFrontmatter(relativePath, existingValues) {
  const { kind, slug } = inferDocKind(relativePath);
  const name = existingValues.name ?? slug;
  const description = existingValues.description ?? getDefaultDescription(kind, slug);
  const trigger = existingValues.trigger ?? getDefaultTrigger(kind, slug);
  const scope = existingValues.scope ?? getDefaultScope(kind, slug);
  const autoInvoke = getAutoInvoke(kind) ? "true" : "false";

  const lines = [
    "---",
    `name: ${name}`,
    `description: ${description}`,
    `trigger: ${trigger}`,
    "metadata:",
    "  author: starter-kit",
    `  version: ${version}`,
    `  scope: ${scope}`,
    `  auto-invoke: ${autoInvoke}`,
    "allowed-tools:",
    ...allowedTools.map((tool) => `  - ${tool}`),
    "---",
    ""
  ];

  return lines.join("\n");
}

let updated = 0;
const stale = [];

for (const absolutePath of walk(root)) {
  const relativePath = path.relative(root, absolutePath);
  const content = fs.readFileSync(absolutePath, "utf8");
  const parsed = parseFrontmatter(content);
  const body = parsed ? parsed.body : content;
  const existingValues = parsed ? parsed.values : {};
  const nextContent = buildFrontmatter(relativePath, existingValues) + body.replace(/^\s*/, "");

  if (content === nextContent) {
    continue;
  }

  if (checkOnly) {
    if (isStandardizedFrontmatter(parsed)) {
      continue;
    }
    stale.push(toPosix(relativePath));
    continue;
  }

  fs.writeFileSync(absolutePath, nextContent, "utf8");
  updated += 1;
}

if (checkOnly) {
  if (stale.length > 0) {
    console.error("Markdown files with stale or missing standardized metadata:");
    for (const file of stale) {
      console.error(`- ${file}`);
    }
    process.exit(1);
  }

  console.log("All markdown files already contain standardized metadata.");
  process.exit(0);
}

console.log(`Standardized metadata frontmatter in ${updated} markdown files.`);
