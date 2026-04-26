import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const errors = [];

const SPANISH_MARKERS = [
  "que",
  "para",
  "flujo",
  "navegacion",
  "especificacion",
  "carpeta",
  "archivo",
  "conviene",
  "empieza",
  "quiero",
  "si eres",
  "primero",
  "validacion",
];

const REQUIRED_TOP_LEVEL_README_DIRS = [
  "adapters",
  "agents",
  "checklists",
  "context",
  "creators",
  "distribution",
  "plugins",
  "rules",
  "runbooks",
  "scripts",
  "shared",
  "skills",
  "specs",
  "templates",
];

function assert(condition, message) {
  if (!condition) {
    errors.push(message);
  }
}

function walkMarkdownFiles(startDir) {
  const results = [];
  const entries = fs.readdirSync(startDir, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.name === ".git" || entry.name === "node_modules") {
      continue;
    }

    const fullPath = path.join(startDir, entry.name);

    if (entry.isDirectory()) {
      results.push(...walkMarkdownFiles(fullPath));
      continue;
    }

    if (entry.isFile() && entry.name.toLowerCase().endsWith(".md")) {
      results.push(fullPath);
    }
  }

  return results;
}

function stripCodeFences(markdown) {
  return markdown.replace(/```[\s\S]*?```/g, "");
}

function validateSpanishMarkers(filePath, content) {
  const normalized = stripCodeFences(content).toLowerCase();

  for (const marker of SPANISH_MARKERS) {
    const escaped = marker.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const pattern = new RegExp(`\\b${escaped}\\b`, "i");
    if (pattern.test(normalized)) {
      errors.push(`${path.relative(root, filePath)} contains disallowed Spanish marker: ${marker}`);
    }
  }
}

function resolveLinkTarget(sourceFile, linkTarget) {
  const [rawPath] = linkTarget.split("#", 1);
  const cleaned = rawPath.trim();

  if (!cleaned || cleaned.startsWith("http://") || cleaned.startsWith("https://") || cleaned.startsWith("mailto:")) {
    return null;
  }

  if (cleaned.startsWith("/")) {
    return path.join(root, cleaned.replace(/^\//, ""));
  }

  return path.resolve(path.dirname(sourceFile), cleaned);
}

function validateMarkdownLinks(filePath, content) {
  const cleaned = stripCodeFences(content);
  const linkPattern = /\[[^\]]+\]\(([^)\s]+)\)/g;

  let match;
  while ((match = linkPattern.exec(cleaned)) !== null) {
    const target = match[1];

    if (target.startsWith("#")) {
      continue;
    }

    const resolved = resolveLinkTarget(filePath, target);
    if (!resolved) {
      continue;
    }

    assert(fs.existsSync(resolved), `${path.relative(root, filePath)} has broken link: ${target}`);
  }
}

function validateTopLevelReadmes() {
  for (const dir of REQUIRED_TOP_LEVEL_README_DIRS) {
    const dirPath = path.join(root, dir);
    const readmePath = path.join(dirPath, "README.md");

    assert(fs.existsSync(dirPath), `Required top-level directory missing: ${dir}`);
    assert(fs.existsSync(readmePath), `Missing required top-level README: ${dir}/README.md`);
  }
}

function validateTopLevelCoverageList() {
  const topLevelDirs = fs
    .readdirSync(root, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .filter((name) => !name.startsWith(".") && name !== "node_modules")
    .sort();

  const missingFromRequired = topLevelDirs.filter((name) => !REQUIRED_TOP_LEVEL_README_DIRS.includes(name));
  assert(
    missingFromRequired.length === 0,
    `REQUIRED_TOP_LEVEL_README_DIRS is missing entries: ${missingFromRequired.join(", ")}`,
  );
}

function main() {
  const markdownFiles = walkMarkdownFiles(root);

  for (const filePath of markdownFiles) {
    const content = fs.readFileSync(filePath, "utf8");
    validateSpanishMarkers(filePath, content);
    validateMarkdownLinks(filePath, content);
  }

  validateTopLevelReadmes();
  validateTopLevelCoverageList();

  if (errors.length > 0) {
    console.error("Docs validation failed:\n");
    for (const error of errors) {
      console.error(`- ${error}`);
    }
    process.exit(1);
  }

  console.log("Docs validation passed.");
}

main();
