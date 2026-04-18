const fs = require('fs');
const path = require('path');

const TOOL_PERMISSIONS_PATH = 'shared/tool-permissions.md';
const SECTION_NAME = 'standard-tool-set';
const ERRORS = [];

function readFile(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch (e) {
    return null;
  }
}

function parseToolPermissions(fileContent) {
  const lines = fileContent.split('\n');
  let inSection = false;
  let tools = [];
  
  for (const line of lines) {
    if (line.startsWith('## ')) {
      inSection = line === `## ${SECTION_NAME}`;
      continue;
    }
    if (inSection) {
      if (line.startsWith('## ') || line.trim() === '') {
        break;
      }
      if (line.startsWith('- ')) {
        tools.push(line.substring(2).trim());
      }
    }
  }
  return tools;
}

function findMarkdownFiles(dir) {
  const files = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === 'node_modules' || entry.name === '.git') continue;
      files.push(...findMarkdownFiles(fullPath));
    } else if (entry.name.endsWith('.md')) {
      files.push(fullPath);
    }
  }
  return files;
}

function validateFile(filePath, canonicalTools, rootDir) {
  const content = readFile(filePath);
  if (!content) return [];
  
  const errors = [];
  const toolRefPattern = /tools:\s*(shared\/tool-permissions\.md#[^\s]+)/g;
  let match;
  
  while ((match = toolRefPattern.exec(content)) !== null) {
    const reference = match[1];
    const [file, section] = reference.split('#');
    
    const refFilePath = path.join(rootDir, file);
    const refContent = readFile(refFilePath);
    
    if (!refContent) {
      errors.push(`${filePath}: Referenced file not found: ${file}`);
      continue;
    }
    
    const sectionExists = refContent.toLowerCase().includes(`## ${section}`.toLowerCase());
    if (!sectionExists) {
      errors.push(`${filePath}: Section '${section}' not found in ${file}`);
    }
  }
  
  return errors;
}

function main() {
  const rootDir = process.cwd();
  const toolPermContent = readFile(path.join(rootDir, TOOL_PERMISSIONS_PATH));
  
  if (!toolPermContent) {
    console.error(`ERROR: ${TOOL_PERMISSIONS_PATH} not found`);
    process.exit(1);
  }
  
  const canonicalTools = parseToolPermissions(toolPermContent);
  console.log(`Canonical tools (${canonicalTools.length}):`, canonicalTools.join(', '));
  
  const allMdFiles = findMarkdownFiles(rootDir);
  console.log(`Scanning ${allMdFiles.length} markdown files...`);
  
  for (const file of allMdFiles) {
    const errors = validateFile(file, canonicalTools, rootDir);
    ERRORS.push(...errors);
  }
  
  if (ERRORS.length > 0) {
    console.error('\nVALIDATION ERRORS:');
    ERRORS.forEach(e => console.error(`  - ${e}`));
    process.exit(1);
  } else {
    console.log('\nAll tool references valid.');
    process.exit(0);
  }
}

main();
