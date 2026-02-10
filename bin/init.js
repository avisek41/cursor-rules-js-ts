#!/usr/bin/env node

/**
 * Copies .cursorrules and rules/*.mdc from this package to the current working directory.
 * Run from your project root: npx cursor-rules-init
 */

const fs = require('fs');
const path = require('path');

const packageRoot = path.join(__dirname, '..');
const targetDir = process.cwd();

const filesToCopy = [
  { src: '.cursorrules', dest: '.cursorrules' },
  { src: 'rules/code-quality.mdc', dest: 'code-quality.mdc' },
  { src: 'rules/documentation.mdc', dest: 'documentation.mdc' },
  { src: 'rules/naming-conventions.mdc', dest: 'naming-conventions.mdc' },
];

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
  console.log('\nCursor rules installed. Cursor will apply them automatically.');
} else {
  console.error('No rule files found. Reinstall @avisek_yorkie/cursor-rules.');
  process.exit(1);
}
