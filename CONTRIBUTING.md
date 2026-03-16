## Contributing to Kubit React Components (Monorepo)

We welcome contributions to **@kubit-ui-web/react-components**! This is a **monorepo** containing multiple packages, and we use **[Changesets](https://github.com/changesets/changesets)** for automated version management and publishing.

### 📦 Monorepo Structure

This repository contains three packages:

- **`@kubit-ui-web/react-components`** - React component library
- **`@kubit-ui-web/design-system`** - CSS-in-JS styles and themes (powered by Bernova)
- **`@kubit-ui-web/storybook`** - Component documentation and showcase (private)

### Why Fork-Based Contributing?

This project follows the **fork-based contribution model** to:

- Maintain code quality and security
- Ensure all changes are reviewed before merging
- Keep the main repository clean and stable
- Allow contributors to work independently on features

---

## Development Workflow

### 1. Fork the Repository

Click the "Fork" button in the upper right corner of the [kubit-react-components repository](https://github.com/kubit-ui/kubit-react-components) on GitHub.

### 2. Clone Your Fork

```sh
git clone https://github.com/YOUR_USERNAME/kubit-react-components.git
cd kubit-react-components
```

### 3. Add Original Repository as Upstream

```sh
git remote add upstream https://github.com/kubit-ui/kubit-react-components.git
git fetch upstream
```

### 4. Install Dependencies

This monorepo uses **Yarn** and **Turbo** for workspace management:

```sh
# Enable Corepack (includes Yarn)
corepack enable

# Install dependencies
yarn install
```

### 5. Create a Feature Branch

**IMPORTANT:** Your branch name determines the version bump type. Use the correct prefix:

```sh
git checkout -b <type>/<description>
```

**Branch naming patterns:**

| Branch Pattern | Version Bump | When to Use |
|----------------|--------------|-------------|
| `feat/` or `feature/` | **MINOR** | New features or components |
| `fix/` or `bugfix/` | **PATCH** | Bug fixes |
| `break/` or `breaking/` | **MAJOR** | Breaking changes |
| `hotfix/` | **PATCH** | Urgent fixes |
| `chore/` | **PATCH** | Maintenance, deps, refactoring |
| `docs/` | **PATCH** | Documentation only |
| `style/` | **PATCH** | Code style/formatting |
| `refactor/` | **PATCH** | Code refactoring |
| `test/` | **PATCH** | Adding or updating tests |

### 6. Make Your Changes

Work on the appropriate package:

```sh
# Work on components
cd packages/components

# Work on design-system
cd packages/design-system

# Work on storybook
cd packages/storybook
```

**Development commands:**

```sh
# Run Storybook for development
yarn dev

# Build all packages
yarn build

# Run tests (components only)
yarn test

# Run type checking
yarn typecheck

# Run linting
yarn lint

# Format code
yarn format
```

### 7. Commit Your Changes

**CRITICAL:** Your commit messages must follow [Conventional Commits](https://www.conventionalcommits.org/) format **with a scope** that indicates which package you're modifying:

```
<type>(<scope>): <description>
```

**Scopes for this monorepo:**

- `components` - Changes to `@kubit-ui-web/react-components`
- `design-system` - Changes to `@kubit-ui-web/design-system`
- `storybook` - Changes to `@kubit-ui-web/storybook` (documentation only, not published)
- `all` or `monorepo` - Changes affecting multiple packages
- **No scope** - Defaults to all packages (not recommended, use explicit scope)

**Examples:**

```sh
# Adding a new component
git commit -m "feat(components): add Tooltip component with accessibility support"

# Fixing a bug in design-system
git commit -m "fix(design-system): resolve button hover state color issue"

# Breaking change in components
git commit -m "feat(components)!: redesign Modal API for better composition"

# Changes affecting both packages
git commit -m "feat(all): add dark mode support across all components"

# Documentation update
git commit -m "docs(components): add usage examples for Button component"

# Storybook documentation
git commit -m "docs(storybook): add new component examples"

# Without scope (publishes all packages - not recommended)
git commit -m "chore: update dependencies"
```

**Why scopes are important:**

The scope in your commit determines **which package will be published** when your PR is merged:

- **With scope** (`components`, `design-system`, `storybook`, `all`) → Publishes only specified package(s)
- **Without scope** → Defaults to publishing **all packages** (use explicit scope when possible for clarity)

### 8. Keep Your Fork Updated

```sh
git fetch upstream
git rebase upstream/main
```

### 9. Push to Your Fork

```sh
git push origin <branch-name>
```

### 10. Open a Pull Request

- Go to the original [kubit-react-components repository](https://github.com/kubit-ui/kubit-react-components)
- Click "New pull request"
- Select "compare across forks"
- Choose your fork and branch as the source
- **IMPORTANT:** Your PR title must follow the same format as your commits

**PR Title Format (Required):**

```
<type>(<scope>): <description>
```

**Examples:**

- ✅ `feat(components): add Tooltip component`
- ✅ `fix(design-system): resolve button styling issue`
- ✅ `feat(all): add dark mode support`
- ✅ `docs(storybook): update Button examples`
- ❌ `Added new component` (missing type and scope)
- ❌ `fix: button issue` (missing scope)

---

## Automatic Publishing with Changesets

### How It Works

When you open a PR with proper branch naming and scope:

1. **Automated validation** checks:
   - ✅ Branch name follows conventions
   - ✅ PR title follows conventional commits with scope
   - ✅ TypeScript type checking passes
   - ✅ Tests pass (for components)
   - ✅ Linting passes
   - ✅ Code quality checks pass

2. **Bot comments** with:
   - Validation results
   - Detected packages affected
   - Expected version bump type

3. **On merge**:
   - Changeset is auto-generated based on your scope
   - Version is bumped in the affected package(s)
   - CHANGELOG is updated
   - Package(s) are built and published to NPM
   - GitHub Release is created
   - PR comment confirms published version(s)

**No manual changeset needed - it's all automatic!** 🚀

### Version Bump Detection

The system determines version bumps based on:

1. **Branch name** (primary):
   - `feat/` → MINOR
   - `fix/` → PATCH
   - `break/` or `breaking/` → MAJOR

2. **PR title** (secondary):
   - `feat:` → MINOR
   - `fix:` → PATCH
   - `break:` or `feat!:` → MAJOR
   - `BREAKING CHANGE:` in description → MAJOR

### Package Detection

The system detects which packages to publish based on:

1. **Commit/PR scope** (primary):
   - `(components)` → publishes `@kubit-ui-web/react-components`
   - `(design-system)` → publishes `@kubit-ui-web/design-system`
   - `(storybook)` → no publish (private package)
   - `(all)` or `(monorepo)` → publishes both public packages

2. **File changes** (fallback):
   - Changes in `packages/components/` → publishes components
   - Changes in `packages/design-system/` → publishes design-system
   - Changes in both → publishes both

---

## Complete Workflow Examples

### Example 1: Adding a New Component (MINOR)

```sh
# 1. Create feature branch
git checkout -b feat/tooltip-component

# 2. Make changes in packages/components
cd packages/components
# ... create Tooltip component ...

# 3. Commit with proper scope
git add .
git commit -m "feat(components): add Tooltip component with accessibility support"
git commit -m "test(components): add unit tests for Tooltip"
git commit -m "docs(storybook): add Storybook story for Tooltip"

# 4. Push to your fork
git push origin feat/tooltip-component

# 5. Create PR with title: "feat(components): add Tooltip component"
# Result after merge: @kubit-ui-web/react-components 2.0.0 → 2.1.0
```

### Example 2: Fixing a Design System Bug (PATCH)

```sh
# 1. Create fix branch
git checkout -b fix/button-hover-color

# 2. Fix the issue in packages/design-system
cd packages/design-system
# ... fix button hover color ...

# 3. Commit the fix
git add .
git commit -m "fix(design-system): resolve button hover state color inconsistency"

# 4. Push to your fork
git push origin fix/button-hover-color

# 5. Create PR with title: "fix(design-system): resolve button hover color"
# Result after merge: @kubit-ui-web/design-system 2.0.0 → 2.0.1
```

### Example 3: Breaking Change Affecting Both Packages (MAJOR)

```sh
# 1. Create breaking change branch
git checkout -b break/theme-api-redesign

# 2. Make breaking changes in both packages
# ... restructure theme API ...

# 3. Commit with breaking change indicator
git add .
git commit -m "feat(all)!: redesign theme API for better type safety"
git commit -m "docs(all): add migration guide for v3.0.0"

# 4. Push to your fork
git push origin break/theme-api-redesign

# 5. Create PR with title: "feat(all)!: redesign theme API"
# PR description should include:
# "BREAKING CHANGE: Theme API has been redesigned. See migration guide."
# Result after merge:
# - @kubit-ui-web/react-components 2.5.3 → 3.0.0
# - @kubit-ui-web/design-system 2.3.1 → 3.0.0
```

---

## PR Validation Checks

When you open a PR, automated checks will validate:

### Required Checks (Must Pass)

✅ **Branch Naming** - Must follow `type/description` pattern
✅ **PR Title** - Must follow `type(scope): description` format
✅ **Scope** - Must be `components`, `design-system`, `storybook`, or `all`
✅ **TypeScript** - Type checking must pass for affected packages
✅ **Tests** - All tests must pass (components package)
✅ **Linting** - Code style must be consistent

### Warning Checks (Non-blocking)

⚠️ **Title Length** - Should be ≤ 72 characters
⚠️ **Console Logs** - No `console.log` in production code
⚠️ **TODOs** - Must reference GitHub issues (e.g., `// TODO: #123`)

---

## Development Guidelines

### Component Development (packages/components)

- Use TypeScript for all components
- Follow React best practices and hooks guidelines
- Ensure accessibility (ARIA attributes, keyboard navigation)
- Write comprehensive tests with Vitest
- Create Storybook stories for all components
- Document props with JSDoc comments
- Follow the existing component structure

### Design System Development (packages/design-system)

- Use Bernova for CSS-in-JS styles
- Follow the established theme structure
- Ensure cross-browser compatibility
- Test responsive behavior
- Document CSS custom properties
- Maintain consistency with design tokens

### Code Quality

- **TypeScript**: All code must be properly typed
- **Testing**: Write unit tests for components
- **Accessibility**: Follow WCAG 2.1 AA standards
- **Performance**: Optimize bundle size and runtime performance
- **Documentation**: Update docs for new features

### Testing Your Changes

```sh
# Run all checks before pushing
yarn validate

# Or run individual checks
yarn typecheck          # Type checking
yarn lint               # Linting
yarn test               # Tests
yarn format:check       # Format checking
yarn build              # Build packages
```

---

## Requirements

Before contributing, ensure you have:

- **Node.js**: v22.x or higher
- **Yarn**: v4.x or higher (via Corepack)
- **Git**: Latest version

Check your versions:

```sh
node --version  # Should show v22.x.x
yarn --version  # Should show 4.x.x
```

---

## Important Notes for Contributors

- **Never push directly** to the main repository
- Always work on **your own fork** and create pull requests
- Keep your fork **synchronized** with the upstream repository
- **Test thoroughly** before submitting
- Include **screenshots or videos** for UI changes
- Update **Storybook stories** for component changes
- Follow the existing **code style** and patterns
- **Scope is mandatory** in commits and PR titles for monorepo

---

## Getting Help

- 📖 [Documentation](https://www.kubit-ui.com/)
- 💬 [GitHub Discussions](https://github.com/kubit-ui/kubit-react-components/discussions)
- 🐛 [Report Issues](https://github.com/kubit-ui/kubit-react-components/issues)
- 📧 [Email Support](mailto:kubit@opendigitalservices.com)

---

## Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](./CODE_OF_CONDUCT.md). Please be respectful and inclusive in all interactions.

---

## License

By contributing to this project, you agree that your contributions will be licensed under the Apache-2.0 License.
