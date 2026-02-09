# Cursor Rules - Generic Tech Stack

This directory contains comprehensive cursor rules designed to work with any technology stack. These rules help maintain code quality, consistency, and best practices across all your projects.

## 📁 Directory Structure

```
cursor-rules/
├── rules/
│  ├── code-quality.mdc      # Code quality standards and best practices
│  ├── documentation.mdc    # Documentation standards and guidelines
│  ├── naming-conventions.mdc # Naming conventions (JS/TS)
├── .cursorrules            # Main cursor rules file (copy to project root)
├── README.md
└── SETUP.md
```

## 🚀 Quick Start

### Step 1: Install (optional)

```bash
npm install @avisek_yorkie/cursor-rules
```

### Step 2: Copy Rules to Your Project

Copy the `.cursorrules` file and all rule files from `rules/` to your project root:

```bash
# From your project root (after npm install @avisek_yorkie/cursor-rules)
cp node_modules/@avisek_yorkie/cursor-rules/.cursorrules .
cp node_modules/@avisek_yorkie/cursor-rules/rules/*.mdc .
```

Or from a local clone:
```bash
cp /path/to/cursor-rules/.cursorrules .
cp /path/to/cursor-rules/rules/*.mdc .
```

Manual copy:
- `.cursorrules` → Your project root
- `rules/code-quality.mdc` → Your project root (as `code-quality.mdc`)
- `rules/documentation.mdc` → Your project root (as `documentation.mdc`)
- `rules/naming-conventions.mdc` → Your project root (as `naming-conventions.mdc`)

### Step 3: Verify Integration

Cursor will automatically detect and use the `.cursorrules` file in your project root. The rules will be applied when:
- Writing new code
- Refactoring existing code
- Code completion suggestions
- Code review assistance

### Step 4: Customize (Optional)

You can customize these rules for your specific project by:
- Adding project-specific rules to `.cursorrules`
- Modifying the `.mdc` files to include team-specific conventions
- Adding language-specific rules for your tech stack

## 📚 Rule Files Overview

### 1. Code Quality (`rules/code-quality.mdc`)

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

### 2. Documentation (`rules/documentation.mdc`)

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

### 3. Naming Conventions (`rules/naming-conventions.mdc`)

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

## 🎯 Usage Examples

### Example 1: Starting a New Project

```bash
# Create new project
mkdir my-new-project
cd my-new-project

# Copy cursor rules
cp node_modules/@avisek_yorkie/cursor-rules/.cursorrules .
cp node_modules/@avisek_yorkie/cursor-rules/rules/*.mdc .

# Initialize your project (npm, pip, etc.)
npm init -y  # or your package manager

# Start coding - Cursor will apply the rules automatically!
```

### Example 2: Adding Rules to Existing Project

```bash
# Navigate to your project
cd /path/to/your/project

# Copy rules (backup existing .cursorrules if present)
cp node_modules/@avisek_yorkie/cursor-rules/.cursorrules .
cp node_modules/@avisek_yorkie/cursor-rules/rules/*.mdc .

# Review and merge with existing rules if needed
```

### Example 3: Publishing NPM Package

When publishing an npm package, these rules ensure:
- ✅ Proper documentation in README
- ✅ Consistent naming conventions
- ✅ High code quality
- ✅ Proper error handling
- ✅ Security best practices

```bash
# Your package will follow all rules automatically
npm publish
```

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
# In rules/code-quality.mdc

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
2. Verify `.mdc` files are in project root (copied from `rules/`)
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

