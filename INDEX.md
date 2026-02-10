# Cursor Rules Index

## 📚 Files Overview

### Core Rule Files

1. **`.cursorrules`** - Main cursor rules file
   - Overview of all rules
   - Quick reference guide
   - Integration instructions
   - **Copy this to your project root**

2. **`.cursor/rules/ai-assisted-development.mdc`** - AI-Assisted Development (DOs and DON'Ts)
   - Plan before coding; small, reviewable steps
   - Validate structure first; re-plan when off-track
   - No blind acceptance; no legacy refactor out of scope
   - Applies to React, Angular, Node.js, React Native

3. **`.cursor/rules/code-quality.mdc`** - Code Quality Standards
   - Clean code principles
   - Error handling guidelines
   - Security best practices
   - Performance considerations
   - Testing requirements
   - Language-specific guidelines (JS/TS)

4. **`.cursor/rules/documentation.mdc`** - Documentation Standards
   - Function/method documentation
   - README requirements
   - API documentation
   - Architecture documentation
   - Inline comments guidelines
   - Documentation tools

5. **`.cursor/rules/naming-conventions.mdc`** - Naming Conventions
   - Variable and function naming
   - Class and type naming
   - File and directory naming
   - Language-specific conventions
   - Database and API naming
   - Configuration naming

6. **`.cursor/rules/typescript-patterns.mdc`** - TypeScript Patterns
   - Type safety: avoid `any`, `unknown` + type guards, strict mode, interface vs type
   - Discriminated unions; utility types; generics; `as const`, `satisfies`

7. **`.cursor/rules/modern-js-ts-patterns.mdc`** - Modern JS/TS Patterns
   - Async/await, Promise.all / allSettled; optional chaining & nullish coalescing
   - Destructuring; map/filter/reduce, some/every, find/findIndex

### Documentation Files

8. **`README.md`** - Complete documentation
   - Overview of all rules
   - Usage instructions
   - Customization guide
   - Best practices
   - Troubleshooting

9. **`SETUP.md`** - Quick setup guide
   - Step-by-step instructions
   - NPM package checklist
   - Verification steps

10. **`INDEX.md`** - This file
   - File index and navigation

## 🚀 Quick Start

### For New Projects
```bash
# 1. Install: npm install -D @avisek_yorkie/cursor-rules
# 2. Apply rules (creates .cursorrules + .cursor/rules/)
npx cursor-rules-init

# Or manual copy:
mkdir -p .cursor/rules
cp node_modules/@avisek_yorkie/cursor-rules/.cursorrules .
cp node_modules/@avisek_yorkie/cursor-rules/rules/*.mdc .cursor/rules/

# 3. Start coding - rules are automatically applied!
```

### For Existing Projects
```bash
# 1. Backup existing .cursorrules if present
cp .cursorrules .cursorrules.backup

# 2. Copy new rules
mkdir -p .cursor/rules
cp node_modules/@avisek_yorkie/cursor-rules/.cursorrules .
cp node_modules/@avisek_yorkie/cursor-rules/rules/*.mdc .cursor/rules/

# 3. Merge with existing rules if needed
```

## 📖 Rule Categories

### AI-Assisted Development
- **File**: `.cursor/rules/ai-assisted-development.mdc`
- **Focus**: Plan-first workflow, small steps, structure validation, re-plan when off
- **Key Rules**: To-do before code; ~20–30 lines per step; no legacy refactor out of scope; review for layer, naming, i18n, types, a11y

### Code Quality
- **File**: `.cursor/rules/code-quality.mdc`
- **Focus**: Clean code, error handling, security, performance
- **Key Rules**: 
  - Functions: 20-30 lines (max 50)
  - Always handle errors
  - Validate all inputs
  - No hardcoded secrets

### Documentation
- **File**: `.cursor/rules/documentation.mdc`
- **Focus**: Code docs, README, API docs, comments
- **Key Rules**:
  - Document all public APIs
  - Keep README comprehensive
  - Use appropriate doc tools
  - Include code examples

### Naming Conventions
- **File**: `.cursor/rules/naming-conventions.mdc`
- **Focus**: Variables, functions, classes, files, APIs
- **Key Rules**:
  - Descriptive names that reveal intent
  - Follow language conventions
  - Be consistent

### TypeScript Patterns
- **File**: `.cursor/rules/typescript-patterns.mdc`
- **Focus**: Type safety, utility types, generics, advanced TS features
- **Key Rules**: Avoid `any` (use `unknown` + guards); strict mode; interface vs type; discriminated unions; Partial/Pick/Omit/Record; constrained generics; `as const` / `satisfies`

### Modern JS/TS Patterns
- **File**: `.cursor/rules/modern-js-ts-patterns.mdc`
- **Focus**: Async/await, optional chaining, nullish coalescing, destructuring, array methods
- **Key Rules**: async/await over chains; try/catch; Promise.all / allSettled; no async in forEach; `?.` and `??`; map/filter/reduce, some/every, find/findIndex
  - Use appropriate prefixes

## 🎯 Use Cases

### Publishing NPM Packages
1. Copy rules to project
2. Follow code quality standards
3. Ensure comprehensive documentation
4. Use consistent naming
5. Publish with confidence!

### Code Reviews
- Use checklists from rule files
- Verify naming conventions
- Check documentation completeness
- Ensure error handling

### Team Onboarding
- Share rule files with new team members
- Use as coding standards reference
- Customize for team-specific needs

## 🔧 Customization

### Project-Specific Rules
Edit `.cursorrules` to add:
- Project-specific conventions
- Team preferences
- Technology-specific guidelines

### Language-Specific Rules
Edit the `.mdc` files to add:
- Additional language support
- Framework-specific rules
- Library-specific conventions

## 📋 Quick Reference

### Code Quality Checklist
- [ ] Functions < 50 lines
- [ ] Errors handled
- [ ] Inputs validated
- [ ] No hardcoded secrets
- [ ] Security best practices
- [ ] Tests included

### Documentation Checklist
- [ ] Public APIs documented
- [ ] README complete
- [ ] Code examples included
- [ ] Comments explain "why"

### Naming Checklist
- [ ] Descriptive names
- [ ] Follows conventions
- [ ] Consistent throughout
- [ ] No abbreviations
- [ ] Boolean prefixes correct

## 🌐 Supported Stacks & Languages

These rules target **TypeScript/JavaScript** across:
- ✅ **React** (web)
- ✅ **Angular**
- ✅ **Node.js** (APIs, services, tooling)
- ✅ **React Native** (mobile)

## 📋 AI-Assisted Development (summary)

- **DO**: Plan first (to-do list), small steps (~20–30 lines), validate structure, ask for review, re-plan when off.
- **DON'T**: Jump into big tasks, request huge diffs, keep going when wrong, refactor legacy out of scope, accept code without checking layer/naming/i18n/types/a11y.
- **One line**: Align on a plan first, then implement in small, reviewable steps.

## 📞 Need Help?

1. **Read the README.md** - Complete documentation
2. **Check SETUP.md** - Quick setup guide
3. **Review .mdc files** - Detailed rule explanations
4. **Customize as needed** - Adapt to your project

---

**Package**: `@avisek_yorkie/cursor-rules` (npm) · **Installed**: `.cursorrules` in project root, `.cursor/rules/` for `.mdc` files

**Status**: ✅ Ready to use

**Next Step**: Copy rules to your project and start coding!

