import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const exts = new Set([".md", ".yaml", ".yml"]);

const knownBodyHeadings = [
  "## Identity",
  "## Mission",
  "## Scope",
  "## Trigger Conditions",
  "## Decision Boundaries",
  "## Inputs",
  "## Outputs",
  "## Dependencies",
  "## Runbooks and Checklists",
  "## Default Asset Use",
  "## Purpose",
  "## Use When",
  "## Do Not Use When",
  "## Workflow",
  "## Rules",
  "## Checklist",
  "## Non-Negotiable Rules",
  "## References",
  "## Examples",
  "## Supported Tools",
  "## Guardrails",
  "## Process",
  "## Adapter Notes",
  "## Canonical Package Contents",
  "## Shared Contracts",
  "## Delivery Agents",
  "## Required Structure",
  "## Files",
  "## Source of Truth",
  "## Unified Install Surface",
  "## Design Goals",
  "## Core Pieces",
  "## Standard Creator Flow",
  "### Example Trigger",
  "### Example Output Shape",
  "# Agent Contract",
  "# Skill Contract",
  "# Agents",
  "# Skills",
];

const headingSpecs = knownBodyHeadings
  .map((heading) => {
    const match = /^(#+)\s+(.*)$/.exec(heading);
    return {
      depth: match[1].length,
      title: match[2],
    };
  })
  .sort((a, b) => b.title.length - a.title.length);

const frontmatterKeys = [
  "name",
  "description",
  "trigger",
  "metadata",
  "author",
  "version",
  "scope",
  "auto-invoke",
  "allowed-tools",
  "tools",
];

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (entry.name === ".git" || entry.name === "node_modules") continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walk(fullPath));
      continue;
    }
    if (exts.has(path.extname(entry.name))) {
      files.push(fullPath);
    }
  }
  return files;
}

function lineCount(text) {
  return text.split(/\r?\n/).length;
}

function parseListItems(text) {
  const items = [];
  const matches = text.match(/-\s*[A-Za-z0-9-]+/g);
  if (matches) {
    for (const match of matches) {
      items.push(match.replace(/^-+\s*/, "").trim());
    }
    return items;
  }

  const trimmed = text.trim();
  if (trimmed && /^[A-Za-z0-9-]+$/.test(trimmed)) {
    return [trimmed];
  }

  return [];
}

function reflowFrontmatter(raw) {
  let text = raw.replace(/\r\n/g, "\n");

  const keyPattern = new RegExp(
    `\\s*\\.?\\s*(?=(?:${frontmatterKeys.map((key) => `${key}:`).join("|")}))`,
    "g",
  );
  text = text.replace(keyPattern, "\n").trim();

  const lines = text
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  const out = [];
  let currentSection = null;

  for (const line of lines) {
    if (/^(name|description|trigger):/.test(line)) {
      out.push(line);
      currentSection = null;
      continue;
    }

    if (line.startsWith("metadata:")) {
      out.push("metadata:");
      const rest = line.slice("metadata:".length).trim();
      if (rest) {
        const nested = rest
          .replace(/\s*\.?\s*(?=(author|version|scope|auto-invoke):)/g, "\n")
          .split("\n")
          .map((item) => item.trim())
          .filter(Boolean);
        for (const item of nested) {
          out.push(`  ${item}`);
        }
      }
      currentSection = "metadata";
      continue;
    }

    if (/^(author|version|scope|auto-invoke):/.test(line)) {
      out.push(`  ${line}`);
      currentSection = "metadata";
      continue;
    }

    if (line.startsWith("allowed-tools:")) {
      out.push("allowed-tools:");
      const rest = line.slice("allowed-tools:".length).trim();
      for (const item of parseListItems(rest)) {
        out.push(`  - ${item}`);
      }
      currentSection = "allowed-tools";
      continue;
    }

    if (line.startsWith("tools:")) {
      out.push(`tools: ${line.slice("tools:".length).trim()}`.trimEnd());
      currentSection = null;
      continue;
    }

    if (currentSection === "allowed-tools") {
      const items = parseListItems(line);
      if (items.length) {
        for (const item of items) {
          out.push(`  - ${item}`);
        }
        continue;
      }
    }

    if (currentSection === "metadata") {
      const nested = line
        .replace(/\s*\.?\s*(?=(author|version|scope|auto-invoke):)/g, "\n")
        .split("\n")
        .map((item) => item.trim())
        .filter(Boolean);

      if (nested.length && nested.every((item) => /^(author|version|scope|auto-invoke):/.test(item))) {
        for (const item of nested) {
          out.push(`  ${item}`);
        }
        continue;
      }
    }

    out.push(line);
    currentSection = null;
  }

  return out.join("\n");
}

function reflowBody(raw) {
  let text = raw.replace(/\r\n/g, "\n");

  while (text.includes("\n#\n#\n# ")) {
    text = text.replace(/\n#\n#\n# /g, "\n### ");
  }
  while (text.includes("\n#\n# ")) {
    text = text.replace(/\n#\n# /g, "\n## ");
  }

  for (const marker of ["###### ", "##### ", "#### ", "### ", "## ", "# "]) {
    const escaped = marker.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    text = text.replace(new RegExp(`([^\\n])(${escaped})`, "g"), "$1\n$2");
  }

  text = text.replace(/([^\n])(> )/g, "$1\n$2");
  text = text.replace(/([^\n])(\d+\. )/g, "$1\n$2");
  text = text.replace(/([^\n])(- )/g, "$1\n$2");

  for (const heading of knownBodyHeadings) {
    const escaped = heading.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    text = text.replace(new RegExp(`\\s*${escaped}`, "g"), `\n${heading}`);
    text = text.replace(new RegExp(`${escaped}(?=\\S)`, "g"), `${heading}\n\n`);
    text = text.replace(new RegExp(`${escaped}\\n(?!\\n)`, "g"), `${heading}\n\n`);
  }

  text = text.replace(/([a-z0-9`])\.([A-Z])/g, "$1.\n\n$2");
  text = text.replace(/`(?=`[A-Za-z])/g, "`\n\n");
  text = text.replace(/(-\s+.*?`)([A-Z])/g, "$1\n\n$2");

  const normalizedLines = [];
  for (const rawLine of text.split("\n")) {
    const line = rawLine.trimEnd();
    if (line.trim() === "#") {
      continue;
    }

    const headingMatch = /^(#{1,6})\s*(.*)$/.exec(line.trim());
    if (headingMatch && headingMatch[2]) {
      const content = headingMatch[2].trim();
      let normalized = false;

      for (const spec of headingSpecs) {
        if (content.startsWith(spec.title)) {
          const rest = content.slice(spec.title.length).trimStart();
          normalizedLines.push(`${"#".repeat(spec.depth)} ${spec.title}`);
          normalizedLines.push("");
          if (rest) {
            normalizedLines.push(rest);
          }
          normalized = true;
          break;
        }
      }

      if (normalized) {
        continue;
      }
    }

    normalizedLines.push(line);
  }

  text = normalizedLines.join("\n");
  text = text.replace(/\n{3,}/g, "\n\n").trim();
  return `${text}\n`;
}

function reflowFile(filePath) {
  const original = fs.readFileSync(filePath, "utf8");
  const needsReflow =
    lineCount(original) <= 2 ||
    /name: .*description:/.test(original) ||
    /\n#\n# /.test(original) ||
    /# [^\n]+## /.test(original);

  if (!needsReflow) {
    return false;
  }

  let text = original.replace(/\r\n/g, "\n").trim();

  let next = text;
  if (next.startsWith("---")) {
    let frontmatter = "";
    let body = "";

    const normalized = next.replace(/^---(?=\S)/, "---\n");
    const explicitEnd = normalized.indexOf("\n---\n", 4);
    const firstHeading = normalized.indexOf("# ", 3);

    if (explicitEnd !== -1) {
      frontmatter = normalized.slice(4, explicitEnd);
      body = normalized.slice(explicitEnd + 5);
    } else if (firstHeading !== -1) {
      frontmatter = normalized.slice(3, firstHeading);
      body = normalized.slice(firstHeading);
    } else {
      frontmatter = normalized.slice(3);
    }

    next = body
      ? `---\n${reflowFrontmatter(frontmatter)}\n---\n${reflowBody(body)}`
      : `---\n${reflowFrontmatter(frontmatter)}\n---\n`;
  } else {
    next = `${reflowBody(next)}\n`;
  }

  if (next !== original) {
    fs.writeFileSync(filePath, next, "utf8");
    return true;
  }

  return false;
}

const changed = [];
for (const filePath of walk(root)) {
  if (reflowFile(filePath)) {
    changed.push(path.relative(root, filePath));
  }
}

for (const filePath of changed) {
  console.log(filePath);
}
