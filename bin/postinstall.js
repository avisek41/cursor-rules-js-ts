#!/usr/bin/env node

const { version } = require("../package.json");
const packageVersion = `v${version}`;

const lines = [
  "",
  `YORK Cursor Rules ${packageVersion}`,
  "────────────────────────",
  "",
  "✔ Detecting project type (JS/TS)",
  "✔ Validating environment",
  "✔ Generating .cursor rules",
  "✔ Applying YORK standards",
  "",
  "✓ Setup Complete",
  "",
  "Next Steps:",
  "→ npx cursor-rules-init",
  "",
];

console.log(lines.join("\n"));
