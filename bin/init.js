#!/usr/bin/env node

/**
 * Installs Cursor rules: .cursorrules in project root, .mdc files in .cursor/rules/
 * Run from your project root: npx cursor-rules-init
 */

const fs = require('fs');
const path = require('path');

const packageRoot = path.join(__dirname, '..');
const targetDir = process.cwd();

const cursorRulesDir = path.join(targetDir, '.cursor', 'rules');

const filesToCopy = [
  { src: '.cursorrules', dest: '.cursorrules' },
  { src: 'rules/code-quality.mdc', dest: '.cursor/rules/code-quality.mdc' },
  { src: 'rules/documentation.mdc', dest: '.cursor/rules/documentation.mdc' },
  { src: 'rules/naming-conventions.mdc', dest: '.cursor/rules/naming-conventions.mdc' },
];

if (!fs.existsSync(cursorRulesDir)) {
  fs.mkdirSync(cursorRulesDir, { recursive: true });
}

let copied = 0;
for (const { src, dest } of filesToCopy) {
  const srcPath = path.join(packageRoot, src);
  const destPath = path.join(targetDir, dest);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`  ✓ ${dest}`);
    copied++;
  }
}

if (copied > 0) {
  console.log('\nCursor rules installed.');
  console.log('  .cursorrules');
  console.log('  .cursor/rules/ (code-quality, documentation, naming-conventions)');
  console.log('\nCursor will apply them automatically.');
} else {
  console.error('No rule files found. Reinstall @avisek_yorkie/cursor-rules.');
  process.exit(1);
}
