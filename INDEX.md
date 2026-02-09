# Cursor Rules Index

## 📚 Files Overview

### Core Rule Files

1. **`.cursorrules`** - Main cursor rules file
   - Overview of all rules
   - Quick reference guide
   - Integration instructions
   - **Copy this to your project root**

2. **`rules/code-quality.mdc`** - Code Quality Standards
   - Clean code principles
   - Error handling guidelines
   - Security best practices
   - Performance considerations
   - Testing requirements
   - Language-specific guidelines (JS/TS)

3. **`rules/documentation.mdc`** - Documentation Standards
   - Function/method documentation
   - README requirements
   - API documentation
   - Architecture documentation
   - Inline comments guidelines
   - Documentation tools

4. **`rules/naming-conventions.mdc`** - Naming Conventions
   - Variable and function naming
   - Class and type naming
   - File and directory naming
   - Language-specific conventions
   - Database and API naming
   - Configuration naming

### Documentation Files

5. **`README.md`** - Complete documentation
   - Overview of all rules
   - Usage instructions
   - Customization guide
   - Best practices
   - Troubleshooting

6. **`SETUP.md`** - Quick setup guide
   - Step-by-step instructions
   - NPM package checklist
   - Verification steps

7. **`INDEX.md`** - This file
   - File index and navigation

## 🚀 Quick Start

### For New Projects
```bash
# 1. Install (optional): npm install cursor-rules
# 2. Copy rules to your project root
cp node_modules/cursor-rules/.cursorrules .
cp node_modules/cursor-rules/rules/*.mdc .

# 3. Start coding - rules are automatically applied!
```

### For Existing Projects
```bash
# 1. Backup existing .cursorrules if present
cp .cursorrules .cursorrules.backup

# 2. Copy new rules
cp node_modules/cursor-rules/.cursorrules .
cp node_modules/cursor-rules/rules/*.mdc .

# 3. Merge with existing rules if needed
```

## 📖 Rule Categories

### Code Quality
- **File**: `rules/code-quality.mdc`
- **Focus**: Clean code, error handling, security, performance
- **Key Rules**: 
  - Functions: 20-30 lines (max 50)
  - Always handle errors
  - Validate all inputs
  - No hardcoded secrets

### Documentation
- **File**: `rules/documentation.mdc`
- **Focus**: Code docs, README, API docs, comments
- **Key Rules**:
  - Document all public APIs
  - Keep README comprehensive
  - Use appropriate doc tools
  - Include code examples

### Naming Conventions
- **File**: `rules/naming-conventions.mdc`
- **Focus**: Variables, functions, classes, files, APIs
- **Key Rules**:
  - Descriptive names that reveal intent
  - Follow language conventions
  - Be consistent
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

## 🌐 Supported Languages

These rules work with:
- ✅ JavaScript/TypeScript

## 📞 Need Help?

1. **Read the README.md** - Complete documentation
2. **Check SETUP.md** - Quick setup guide
3. **Review .mdc files** - Detailed rule explanations
4. **Customize as needed** - Adapt to your project

---

**Package**: `cursor-rules` (npm) · **Structure**: `rules/` contains the `.mdc` rule files

**Status**: ✅ Ready to use

**Next Step**: Copy rules to your project and start coding!

