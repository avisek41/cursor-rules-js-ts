# Quick Setup Guide

## 🎯 Step-by-Step Setup for Your NPM Package (or Any Project)

### Step 0: Get the Rules (choose one)

**From npm:**
```bash
npm install @avisek_yorkie/cursor-rules
```

**Or clone the repo** and use the path to your local `cursor-rules` folder in the steps below.

### Step 1: Navigate to Your Project
```bash
cd /path/to/your/project
```

### Step 2: Copy Cursor Rules

**From the package (after `npm install @avisek_yorkie/cursor-rules`):**
```bash
cp node_modules/@avisek_yorkie/cursor-rules/.cursorrules .
cp node_modules/@avisek_yorkie/cursor-rules/rules/*.mdc .
```

**From a local clone:**
```bash
# Copy main file and all rule files to your project root
cp /path/to/cursor-rules/.cursorrules .
cp /path/to/cursor-rules/rules/*.mdc .
```

### Step 3: Verify Files Are in Place
```bash
ls -la .cursorrules *.mdc
```

You should see:
- `.cursorrules`
- `code-quality.mdc`
- `documentation.mdc`
- `naming-conventions.mdc`

### Step 4: Restart Cursor (Optional)
Close and reopen Cursor to ensure rules are loaded.

### Step 5: Test the Rules
Create a test file and ask Cursor to help you write code. The rules will be automatically applied!

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
cp node_modules/@avisek_yorkie/cursor-rules/.cursorrules .
cp node_modules/@avisek_yorkie/cursor-rules/rules/*.mdc .
```

## ✅ Verification

To verify rules are working:
1. Ask Cursor to write a function
2. Check that it follows naming conventions
3. Verify error handling is included
4. Confirm documentation is added

---

**That's it!** Your project now has comprehensive cursor rules that will help maintain code quality across any tech stack.

