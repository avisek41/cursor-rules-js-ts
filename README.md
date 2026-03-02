# Cursor Rules - Generic Tech Stack

This directory contains comprehensive cursor rules designed to work with any technology stack. These rules help maintain code quality, consistency, and best practices across all your projects.

## Install & Integrate

**1. Install the package** (as a dev dependency so it doesn’t ship to production):

```bash
npm install -D @avisek_yorkie/cursor-rules
```

**2. Apply the rules to your project** (run from your project root):

```bash
npx cursor-rules-init
```

`npx cursor-rules-init` is the primary CLI output path and always shows setup progress in the terminal.

This creates:

- **`.cursorrules`** in your project root  
- **`.cursor/rules/`** with `ai-assisted-development.mdc`, `code-quality.mdc`, `documentation.mdc`, `naming-conventions.mdc`, `typescript-patterns.mdc`, and `modern-js-ts-patterns.mdc`

Cursor will **use and apply** these rules automatically when you write code, refactor, get completions, or ask for reviews.

**Manual copy (alternative):**

```bash
mkdir -p .cursor/rules
cp node_modules/@avisek_yorkie/cursor-rules/.cursorrules .
cp node_modules/@avisek_yorkie/cursor-rules/rules/*.mdc .cursor/rules/
```

**3. Verify:** Ensure `.cursorrules` exists and `.cursor/rules/` contains the six `.mdc` files. Restart Cursor if needed. You’re done.

**Resulting structure in your project:**

```
your-project/
├── .cursorrules
├── .cursor/
│   └── rules/
│       ├── ai-assisted-development.mdc
│       ├── code-quality.mdc
│       ├── documentation.mdc
│       ├── naming-conventions.mdc
│       ├── typescript-patterns.mdc
│       └── modern-js-ts-patterns.mdc
├── src/
└── ...
```

## 📁 Directory Structure (this package)

```
cursor-rules/
├── rules/
│  ├── ai-assisted-development.mdc  # AI workflow (plan-first, small steps)
│  ├── code-quality.mdc             # Code quality standards and best practices
│  ├── documentation.mdc           # Documentation standards and guidelines
│  ├── naming-conventions.mdc       # Naming conventions (JS/TS)
│  ├── typescript-patterns.mdc       # TypeScript patterns and type safety
│  ├── modern-js-ts-patterns.mdc    # Modern JS/TS - async, optional chaining, array methods
├── .cursorrules            # Main cursor rules file (copy to project root)
├── README.md
└── SETUP.md
```

## 🚀 Quick Start

### Step 1: Install

```bash
npm install -D @avisek_yorkie/cursor-rules
```

### Step 2: Apply rules (choose one)

**Option A – One command (recommended):**
```bash
npx cursor-rules-init
```

This command always shows the setup banner and progress output.

**Option B – Manual copy from node_modules:**
```bash
mkdir -p .cursor/rules
cp node_modules/@avisek_yorkie/cursor-rules/.cursorrules .
cp node_modules/@avisek_yorkie/cursor-rules/rules/*.mdc .cursor/rules/
```

**Option C – From a local clone:**
```bash
mkdir -p .cursor/rules
cp /path/to/cursor-rules/.cursorrules .
cp /path/to/cursor-rules/rules/*.mdc .cursor/rules/
```

### Step 3: Verify integration

Cursor will automatically detect and use the `.cursorrules` file in your project root. The rules will be applied when:
- Writing new code
- Refactoring existing code
- Code completion suggestions
- Code review assistance

### Step 4: Customize (Optional)

You can customize these rules for your specific project by:
- Adding project-specific rules to `.cursorrules`
- **Adding new `.mdc` files in `.cursor/rules/`** (see below — they are automatically linked and applied)
- Modifying the existing `.mdc` files to include team-specific conventions

## ➕ Adding Project-Specific Rules (Auto-Applied)

**Yes — any `.mdc` file you add inside `.cursor/rules/` is automatically loaded and applied by Cursor.** You don’t need to “link” it anywhere. Cursor scans the `.cursor/rules/` folder and uses every rule file. **You do not need to add the new file to `.cursorrules`**—it is picked up automatically.

### How to add a project-specific rule

1. Create a new file in your project’s `.cursor/rules/` folder, e.g. `project-conventions.mdc` or `react-patterns.mdc`.
2. Use the same format as the existing rules: YAML frontmatter + markdown content.

**Example: rule that always applies**

```markdown
---
description: Our project's React and API conventions
alwaysApply: true
---

# Project Conventions

- Use our design system components from `@company/ui`.
- API base URL from env: `process.env.VITE_API_URL`.
- All new screens go under `src/screens/`.
```

**Example: rule that applies only for certain files**

```markdown
---
description: React component patterns for this project
globs: "**/*.tsx"
alwaysApply: false
---

# React Patterns

- Functional components only; use hooks for state.
- Add testID to interactive elements for E2E.
```

### Frontmatter options

| Field | Meaning |
|-------|--------|
| `alwaysApply: true` | Rule is included in every conversation. |
| `alwaysApply: false` | Rule is included only when relevant (e.g. when matching files are open). |
| `globs: "**/*.tsx"` | When set, rule is applied when you work with files matching that pattern. |

### Resulting structure (example)

```
your-project/
├── .cursorrules
├── .cursor/
│   └── rules/
│       ├── ai-assisted-development.mdc   # from this package
│       ├── ai-assisted-development.mdc   # from this package
│       ├── code-quality.mdc               # from this package
│       ├── documentation.mdc              # from this package
│       ├── naming-conventions.mdc        # from this package
│       ├── typescript-patterns.mdc        # from this package
│       ├── modern-js-ts-patterns.mdc     # from this package
│       └── project-conventions.mdc        # your project-specific rule ✅
├── src/
└── ...
```

Package rules and your own rules work together: Cursor applies all of them. Keep package rules as-is and add project-specific ones in the same folder.

## 📚 Rule Files Overview

### 1. Code Quality (`.cursor/rules/code-quality.mdc`)

Covers:
- ✅ Clean code standards
- ✅ Error handling best practices
- ✅ Security guidelines
- ✅ Performance considerations
- ✅ Code complexity management
- ✅ Testing requirements
- ✅ Language-specific guidelines

**Key Principles:**
- Functions should be 20-30 lines (max 50)
- Always handle errors explicitly
- Validate all inputs
- Never hardcode secrets
- Keep cyclomatic complexity low

### 2. Documentation (`.cursor/rules/documentation.mdc`)

Covers:
- ✅ Function/method documentation standards
- ✅ README file requirements
- ✅ API documentation guidelines
- ✅ Architecture documentation
- ✅ Inline comments best practices
- ✅ Documentation tools and generators

**Key Principles:**
- Document all public APIs
- Write self-documenting code
- Include code examples
- Keep documentation up-to-date
- Use appropriate documentation tools

### 3. Naming Conventions (`.cursor/rules/naming-conventions.mdc`)

Covers:
- ✅ Variable and function naming
- ✅ Class and type naming
- ✅ File and directory naming
- ✅ TypeScript/JavaScript conventions
- ✅ Database naming
- ✅ API endpoint naming
- ✅ Configuration naming

**Key Principles:**
- Use descriptive names that reveal intent
- Follow language-specific conventions
- Be consistent throughout codebase
- Avoid abbreviations and generic names
- Use appropriate prefixes for booleans

### 4. TypeScript Patterns (`.cursor/rules/typescript-patterns.mdc`)

Covers:
- ✅ Type safety: avoid `any`, use `unknown` and type guards; strict mode
- ✅ Interface vs type; discriminated unions for complex state
- ✅ Utility types: Partial, Pick, Omit, Record, ReturnType, Parameters, Awaited
- ✅ Generics: constraints, default params; avoid over-engineering
- ✅ Advanced: `as const`, `satisfies`, readonly, template literal types

**Key Principles:**
- Enable `strict: true`; prefer `unknown` + type guards over `any`
- Use interfaces for object shapes; types for unions and complex types
- Use built-in utility types; constrain generics; 1–2 type params preferred

### 5. Modern JS/TS Patterns (`.cursor/rules/modern-js-ts-patterns.mdc`)

Covers:
- ✅ Async/await over promise chains; try/catch; Promise.all / Promise.allSettled
- ✅ No async in forEach—use for...of or Promise.all
- ✅ Optional chaining (`?.`) and nullish coalescing (`??`)
- ✅ Destructuring for params and defaults; rename when needed
- ✅ Prefer map/filter/reduce, some/every, find/findIndex over imperative loops

**Key Principles:**
- Use `?.` and `??` instead of nested `&&` and `||` for optional/default values
- Use array methods for transformation and boolean checks; avoid filter()[0] in favor of find()

## 📐 Coding Styles & Principles

All rule styles referenced in the code-quality and related rules, in one place.

### Core acronyms

| Style | Full name | Meaning |
|-------|-----------|----------|
| **SOLID** | **S**ingle Responsibility, **O**pen/Closed, **L**iskov Substitution, **I**nterface Segregation, **D**ependency Inversion | One thing per class/function; extend without modifying; depend on abstractions. |
| **DRY** | Don't Repeat Yourself | Extract repeated logic; use configuration over duplication; no copy-paste without refactoring. |
| **KISS** | Keep It Simple, Stupid | Simple solution > clever; readable > clever; avoid over-engineering. |
| **YAGNI** | You Aren't Gonna Need It | Build what you need now; don't build for hypotheticals; remove unused code. |

### Golden rules (summary)

1. **Readability > Cleverness** — Code is read 10× more than written  
2. **Simple > Complex** — Simplest solution that works  
3. **Small Functions** — One function, one responsibility (~20–30 lines, max 50)  
4. **Meaningful Names** — Names should reveal intent  
5. **Handle Errors** — Never fail silently  
6. **Delete Code** — Remove dead code; don't just comment it out  
7. **Test Your Code** — If you can't test it, refactor it  
8. **Composition over Inheritance** — Compose small pieces; avoid deep hierarchies (especially in React)  
9. **Immutability** — Prefer `const` and immutable updates; avoid hidden mutation  
10. **Explicit over Implicit** — Clear types and APIs; no magic; avoid `any`  

### Additional JS/TS principles

| Principle | One-line meaning |
|-----------|-------------------|
| **Pure functions when possible** | Same inputs → same output; no hidden side effects; isolate I/O at boundaries. |
| **Single source of truth** | One canonical place per piece of state; avoid syncing duplicate state. |
| **Declarative over imperative** | Describe *what* you want (e.g. JSX) over step-by-step *how*. |
| **Principle of least surprise** | APIs and behavior should match what a reasonable developer would expect. |
| **Colocate / locality** | Keep related code together (component + styles + tests; route + handler + types). |
| **Encapsulation** | Don't leak implementation details; expose a small, stable API surface. |
| **Strict TypeScript** | Use `strict: true`; avoid `any`; prefer `unknown` and type guards when needed. |

### Documentation & naming (from rule files)

- **Document WHY, not WHAT** — Explain decisions and non-obvious logic.  
- **Names reveal intent** — Descriptive, specific names from the problem domain; avoid `data`, `info`, `handler`, `manager`.  
- **Verbs for functions** — e.g. `get`, `set`, `create`, `validate`, `is`, `has`, `can`.  
- **Boolean prefixes** — `is`, `has`, `can` (e.g. `isActive`, `hasPermission`, `canEdit`).

## 🔧 Customization Guide

### Adding Project-Specific Rules

Edit `.cursorrules` to add project-specific rules:

```markdown
# Project-Specific Rules

## React/React Native Specific
- Always use functional components
- Add testID to interactive components
- Use hooks for state management

## Your Custom Rules
- Follow our internal API conventions
- Use our design system components
```

### Language-Specific Customization

Edit the appropriate `.mdc` file to add language-specific rules:

```markdown
# In .cursor/rules/code-quality.mdc

### Your Language
- Follow your language style guide
- Use your preferred linter configuration
- Follow your team's conventions
```

## 📋 Code Review Checklist

Use this checklist during code reviews:

### Code Quality
- [ ] Functions are small and focused (20-30 lines)
- [ ] All errors are handled appropriately
- [ ] Input validation is present
- [ ] No security vulnerabilities
- [ ] No hardcoded secrets or values
- [ ] Code complexity is manageable

### Documentation
- [ ] All public APIs are documented
- [ ] README is complete and up-to-date
- [ ] Code examples are included where needed
- [ ] Comments explain "why" not "what"

### Naming
- [ ] Names are descriptive and reveal intent
- [ ] Follows language-specific conventions
- [ ] Consistent throughout codebase
- [ ] Boolean names use appropriate prefixes
- [ ] No abbreviations or generic names

## 🌐 Supported Stack

These rules target **JavaScript/TypeScript** (Node.js, React, React Native, Vue, Angular, etc.). Core principles are universal; conventions are JS/TS-specific.

## 🔄 Maintenance

### Updating Rules

1. Edit the `.mdc` files as needed
2. Update `.cursorrules` if structure changes
3. Test rules in a sample project
4. Document any breaking changes

### Version Control

Consider versioning your rules:
- Tag releases: `v1.0.0`, `v1.1.0`, etc.
- Document changes in CHANGELOG
- Keep rules in sync across projects

## 📖 Best Practices

1. **Start Early**: Add rules at project inception
2. **Team Alignment**: Ensure all team members use the same rules
3. **Regular Review**: Review and update rules quarterly
4. **Consistency**: Use the same rules across all projects
5. **Documentation**: Document any project-specific exceptions

## 🐛 Troubleshooting

### Rules Not Being Applied

1. Check that `.cursorrules` is in project root
2. Verify `.cursor/rules/` contains the three `.mdc` files
3. Restart Cursor if needed
4. Check for syntax errors in rule files

### Conflicts with Existing Rules

1. Review existing `.cursorrules` in your project
2. Merge rules carefully
3. Test in a sample file
4. Document any conflicts resolved

## 📝 License

These rules are provided as-is for use in your projects. Customize as needed for your team and organization.

## 🤝 Contributing

To improve these generic rules:

1. Test changes in multiple projects
2. Ensure rules remain generic (not project-specific)
3. Document language-specific additions
4. Keep examples clear and practical

## 📞 Support

For questions or issues:
- Review the rule files for detailed guidelines
- Check language-specific sections
- Customize rules for your needs
- Consult your team's coding standards

---

**Happy Coding! 🚀**

These rules will help you maintain high-quality, consistent code across all your projects, regardless of the technology stack.

