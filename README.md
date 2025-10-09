<p align="center">
  <a href="https://kubit-ui.com">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="./assets/banner_kubit_readme.png">
      <img src="./assets/banner_kubit_readme.png" width="70%">
    </picture>
  </a>
</p>

<div align='center'>
  
<a href='#'>
<img src='./assets/version.png' width="150px">
</a>
  
<a href='#'>
<img src='./assets/license.png' width="230px">
</a>
  
</div>

<br />

---

<br />

# Getting Started

## Installation

To install the package, run the following command:

### npm

```bash
npm install @kubit-ui-web/react-components
```

### yarn

```bash
yarn add @kubit-ui-web/react-components
```

This will install the package and its dependencies. Now you can import the components and use them in your application.

## Usage

To use the components, import them from the package and use them in your application.

```tsx
import { Button, KubitProvider } from '@kubit-ui-web/react-components';
import React from 'react';

const App = () => {
  return (
    <KubitProvider>
      <Button variant="PRIMARY" size="MEDIUM">
        Click me
      </Button>
    </KubitProvider>
  );
};

export default App;
```

This will render the button with the default styles and functionality.

> Note: The `KubitProvider` is required to use the components. It provides the theme and other context to the components.

You can foud more information about change the theme and other options in the [Customize theme](https://kubit-ui.com)

## Documentation

You can find the documentation for the web components in the [Kubit UI website](https://kubit-ui.com)

## Storybook

To run the storybook, first of all clone the repository and install the dependencies. Then run the following command:

```bash
npm run storybook

yarn storybook
```

This will start the storybook server and you can see the components in action.

## Tests

To run the tests, you can use the following command:

```bash
npm run test

yarn test
```

This will run the tests and show the results in the terminal.

## Contributing

We are open to contributions. If you want to contribute to the project, please follow the steps below:

### Development Workflow

1. **Fork the Repository**: Click the "Fork" button in the upper right corner of the repository's page on GitHub. This will create a copy of the repository in your account.

2. **Clone the Repository**: Use `git clone` to clone the repository to your local machine.

   ```sh
   git clone https://github.com/your-username/kubit-react-components.git
   ```

3. **Create a Branch**: Use proper branch naming conventions for automatic version detection.

   ```sh
   git checkout -b <branch-type>/<branch-name>
   ```

4. **Make Changes**: Make any necessary changes to the codebase and **test** the changes thoroughly.

5. **Commit Changes**: Use conventional commit messages when possible.

   ```sh
   git commit -m "feat: add new component feature"
   ```

6. **Push Changes**: Use `git push` to push your changes to your forked repository.

   ```sh
   git push origin <branch-name>
   ```

7. **Open a Pull Request**: Go to the original repository on GitHub and click the "New pull request" button. Fill out the form with details about your changes and submit the pull request.

### Branch Naming & Automatic Publishing

This repository uses an **automatic publishing system** that determines the version bump based on your branch name and PR content. When your PR is merged, the package will be automatically published to NPM.

#### Branch Naming Patterns

Use these branch prefixes to ensure automatic publishing works correctly:

| Branch Pattern | Version Bump | Example | Description |
|----------------|--------------|---------|-------------|
| `feat/` or `feature/` | **MINOR** | `feat/add-tooltip` | New features or enhancements |
| `fix/` or `bugfix/` | **PATCH** | `fix/button-hover-state` | Bug fixes |
| `break/` or `breaking/` | **MAJOR** | `break/remove-old-api` | Breaking changes |
| `hotfix/` | **PATCH** | `hotfix/critical-security-fix` | Urgent fixes |
| `chore/` | **PATCH** | `chore/update-dependencies` | Maintenance tasks |

#### Advanced Version Detection

The system also analyzes your **PR title** and **description** for more precise version detection:

##### MAJOR (Breaking Changes)
- `BREAKING CHANGE:` in PR description
- `!` in PR title (e.g., `feat!: redesign button API`)
- `[breaking]` tag in PR title
- Conventional commits with `!` (e.g., `feat(api)!: change interface`)

##### MINOR (New Features)
- PR titles starting with `feat:` or `feature:`
- `[feature]` tag in PR title
- Conventional commits like `feat(ui): add dark mode`

##### PATCH (Bug Fixes & Others)
- PR titles starting with `fix:` or `bugfix:`
- All other changes (default behavior)
- Conventional commits like `fix(button): hover state`

#### Examples

**Adding a new feature:**
```sh
git checkout -b feat/dark-mode-support
# Make your changes
git commit -m "feat(theme): add dark mode support for all components"
# Create PR with title: "feat(theme): add dark mode support"
# Result: MINOR version bump (e.g., 1.0.0 → 1.1.0)
```

**Fixing a bug:**
```sh
git checkout -b fix/button-accessibility
# Make your changes  
git commit -m "fix(button): improve keyboard navigation"
# Create PR with title: "fix(button): improve keyboard navigation"
# Result: PATCH version bump (e.g., 1.0.0 → 1.0.1)
```

**Breaking changes:**
```sh
git checkout -b break/remove-deprecated-props
# Make your changes
git commit -m "feat!: remove deprecated size prop from Button"
# Create PR with title: "feat!: remove deprecated size prop"
# PR description: "BREAKING CHANGE: The 'size' prop has been removed..."
# Result: MAJOR version bump (e.g., 1.0.0 → 2.0.0)
```

### Quality Assurance

Before publishing, the system automatically runs:

- ✅ **Linting** - Code style validation
- ✅ **Type Checking** - TypeScript validation  
- ✅ **Tests** - Full test suite execution
- ✅ **Build** - Package compilation
- ✅ **Integration Tests** - Component functionality validation

### Publishing Process

When your PR is merged:

1. **Automatic Analysis** - System analyzes branch name, PR title, and description
2. **Version Calculation** - Determines MAJOR/MINOR/PATCH version bump
3. **Quality Checks** - Runs all tests and validations
4. **NPM Publication** - Publishes to NPM with appropriate version
5. **GitHub Release** - Creates GitHub release with changelog
6. **Notifications** - Posts success/failure status in PR comments

### Manual Override

If you need to override the automatic version detection, you can:

1. Use explicit markers in your PR description:
   ```
   BREAKING CHANGE: This removes the old authentication API
   ```

2. Use conventional commit format in PR title:
   ```
   feat!: redesign component API structure
   ```

3. Add tags to PR title:
   ```
   [breaking] Update component props interface
   ```

### Testing Your Changes

Before submitting a PR, make sure to:

```bash
# Install dependencies
yarn install

# Run linter
yarn lint

# Run type checking
yarn type-check

# Run tests
yarn test

# Build the package
yarn build
```

### Getting Help

If you have questions about contributing or the automatic publishing system:

- Check existing [GitHub Issues](https://github.com/kubit-ui/kubit-react-components/issues)
- Review [GitHub Discussions](https://github.com/kubit-ui/kubit-react-components/discussions)
- Read the full `CONTRIBUTING.md` file

Once your pull request has been submitted, a maintainer will review your changes and provide feedback. If everything looks good, your pull request will be merged and your changes will be automatically published to NPM!
