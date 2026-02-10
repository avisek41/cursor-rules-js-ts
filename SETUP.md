# Quick Setup Guide

## 🎯 Step-by-Step Setup for Your NPM Package (or Any Project)

### Step 0: Install the package

```bash
cd /avisek/to/your/project
npm install -D @avisek_yorkie/cursor-rules
```

### Step 1: Apply the rules

**Option A – One command (recommended):**
```bash
npx cursor-rules-init
```

**Option B – Manual copy:**
```bash
mkdir -p .cursor/rules
cp node_modules/@avisek_yorkie/cursor-rules/.cursorrules .
cp node_modules/@avisek_yorkie/cursor-rules/rules/*.mdc .cursor/rules/
```

**From a local clone:**
```bash
mkdir -p .cursor/rules
cp /path/to/cursor-rules/.cursorrules .
cp /path/to/cursor-rules/rules/*.mdc .cursor/rules/
```

### Step 2: Verify files are in place
```bash
ls -la .cursorrules .cursor/rules/
```

You should see:
- `.cursorrules` (project root)
- `.cursor/rules/ai-assisted-development.mdc`
- `.cursor/rules/code-quality.mdc`
- `.cursor/rules/documentation.mdc`
- `.cursor/rules/naming-conventions.mdc`
- `.cursor/rules/typescript-patterns.mdc`
- `.cursor/rules/modern-js-ts-patterns.mdc`

### Step 3: Restart Cursor (optional)
Close and reopen Cursor to ensure rules are loaded.

### Step 4: Test the rules
Create a test file and ask Cursor to help you write code. The rules will be automatically applied!

### Step 5: Add project-specific rules (optional)
Any `.mdc` file you add in `.cursor/rules/` is **automatically linked and applied** by Cursor. Create e.g. `project-conventions.mdc` in that folder with your team’s rules—no extra config needed. See README section **“Adding Project-Specific Rules (Auto-Applied)”** for format and examples.

## 📦 For NPM Package Publishing

### Before Publishing Checklist

1. **Code Quality**
   - [ ] All functions are under 50 lines
   - [ ] Error handling is implemented
   - [ ] Input validation is present
   - [ ] No hardcoded secrets

2. **Documentation**
   - [ ] README.md is complete
   - [ ] All public APIs are documented
   - [ ] Code examples are included
   - [ ] Installation instructions are clear

3. **Naming**
   - [ ] All names follow conventions
   - [ ] Consistent naming throughout
   - [ ] No abbreviations or generic names

### Publishing Command
```bash
npm publish
```

## 📤 Publishing This Package to npm

To publish **this** cursor-rules package to npm:

1. **Create an npm account** (if you don’t have one): [https://www.npmjs.com/signup](https://www.npmjs.com/signup)

2. **Log in from the terminal:**
   ```bash
   npm login
   ```
   npm will print a **login URL**. Open it in your browser, sign in (or create an account), then return to the terminal—you’ll be logged in. Use a one-time password in the browser if you have 2FA enabled.

4. **From this project root, publish:**
   ```bash
   cd /path/to/cursor-rules
   npm publish
   ```
   The package is scoped as `@avisek_yorkie/cursor-rules` and `publishConfig.access` is set to `"public"`, so it will be published as a public package.

5. **After publish**, anyone can install with:
   ```bash
   npm install @avisek_yorkie/cursor-rules
   ```

## 🔄 Updating Rules

If you update the rules (or upgrade the package), sync them to your project:

```bash
# From your project root (when using npm package)
mkdir -p .cursor/rules
cp node_modules/@avisek_yorkie/cursor-rules/.cursorrules .
cp node_modules/@avisek_yorkie/cursor-rules/rules/*.mdc .cursor/rules/
```

## ✅ Verification

To verify rules are working:
1. Ask Cursor to write a function
2. Check that it follows naming conventions
3. Verify error handling is included
4. Confirm documentation is added

---

**That's it!** Your project now has comprehensive cursor rules that will help maintain code quality across any tech stack.

