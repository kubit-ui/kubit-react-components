## Contributing

We welcome contributions to **@kubit-ui-web/react-components**! This project is open source and we encourage community participation through **forks and pull requests**. All contributions must be made through the fork workflow - we do not accept direct pushes to the main repository.

### Why Fork-Based Contributing?

This project follows the **fork-based contribution model** to:

- Maintain code quality and security
- Ensure all changes are reviewed before merging
- Keep the main repository clean and stable
- Allow contributors to work independently on features

### Development Workflow

1. **Fork the Repository**: Click the "Fork" button in the upper right corner of the [kubit-react-components repository](https://github.com/kubit-ui/kubit-react-components) on GitHub. This will create a copy of the repository in your GitHub account.

2. **Clone Your Fork**: Clone your forked repository to your local machine (not the original repository).

   ```sh
   git clone https://github.com/YOUR_USERNAME/kubit-react-components.git
   cd kubit-react-components
   ```

3. **Add Original Repository as Upstream**: Add the original repository as a remote to keep your fork synchronized.

   ```sh
   git remote add upstream https://github.com/kubit-ui/kubit-react-components.git
   git fetch upstream
   ```

4. **Create a Feature Branch**: Always create a new branch for your changes. Use proper branch naming conventions for automatic version detection.

   ```sh
   git checkout -b <branch-type>/<branch-name>
   ```

5. **Make Changes**:
   - Make your changes to the React components
   - Follow the coding standards outlined in our style guide
   - Add or update tests for your changes
   - Update Storybook stories if necessary
   - Update documentation if necessary
   - Test your changes thoroughly using `yarn test`
   - Verify components in Storybook using `yarn storybook`

6. **Commit Changes**: Use conventional commit messages for automatic versioning.

   ```sh
   git commit -m "feat(button): add loading state animation"
   ```

7. **Keep Your Fork Updated**: Before pushing, sync with the upstream repository.

   ```sh
   git fetch upstream
   git rebase upstream/main
   ```

8. **Push to Your Fork**: Push your changes to your forked repository (never to the original).

   ```sh
   git push origin <branch-name>
   ```

9. **Open a Pull Request**:
   - Go to the original [kubit-react-components repository](https://github.com/kubit-ui/kubit-react-components)
   - Click "New pull request"
   - Select "compare across forks"
   - Choose your fork and branch as the source
   - Fill out the PR template with details about your changes
   - Submit the pull request for review

### Branch Naming & Automatic Publishing

This repository uses an **automatic publishing system** that determines the version bump based on your branch name and PR content. When your PR is merged, the package will be automatically published to NPM.

#### Branch Naming Patterns

Use these branch prefixes to ensure automatic publishing works correctly:

| Branch Pattern          | Version Bump | Example                         | Description                    |
| ----------------------- | ------------ | ------------------------------- | ------------------------------ |
| `feat/` or `feature/`   | **MINOR**    | `feat/button-loading-state`     | New components or features     |
| `fix/` or `bugfix/`     | **PATCH**    | `fix/input-focus-behavior`      | Bug fixes in components        |
| `break/` or `breaking/` | **MAJOR**    | `break/remove-deprecated-props` | Breaking API changes           |
| `hotfix/`               | **PATCH**    | `hotfix/critical-a11y-issue`    | Urgent accessibility/bug fixes |
| `chore/`                | **PATCH**    | `chore/update-deps`             | Maintenance tasks              |

#### Advanced Version Detection

The system also analyzes your **PR title** and **description** for more precise version detection:

##### MAJOR (Breaking Changes)

- `BREAKING CHANGE:` in PR description
- `!` in PR title (e.g., `feat!: redesign Button API`)
- `[breaking]` tag in PR title
- Conventional commits with `!` (e.g., `feat(button)!: change prop interface`)

##### MINOR (New Features)

- PR titles starting with `feat:` or `feature:`
- `[feature]` tag in PR title
- Conventional commits like `feat(input): add mask support`

##### PATCH (Bug Fixes & Others)

- PR titles starting with `fix:` or `bugfix:`
- All other changes (default behavior)
- Conventional commits like `fix(button): hover state rendering issue`

#### Examples for Kubit React Components

**Adding a new component feature:**

```sh
git checkout -b feat/button-icon-support
# Make your changes in your fork
git commit -m "feat(button): add icon prop support for leading/trailing icons"
# Create PR with title: "feat(button): add icon prop support"
# Result: MINOR version bump (e.g., 2.0.0 → 2.1.0)
```

**Fixing a component bug:**

```sh
git checkout -b fix/input-validation-error
# Make your changes in your fork
git commit -m "fix(input): resolve validation error display timing"
# Create PR with title: "fix(input): resolve validation error display timing"
# Result: PATCH version bump (e.g., 2.0.0 → 2.0.1)
```

**Breaking API changes:**

```sh
git checkout -b break/button-api-redesign
# Make your changes in your fork
git commit -m "feat!: redesign Button component API with new prop structure"
# Create PR with title: "feat!: redesign Button component API"
# PR description: "BREAKING CHANGE: Button component now uses 'variant' instead of 'type' prop..."
# Result: MAJOR version bump (e.g., 2.0.0 → 3.0.0)
```

### Important Notes for Contributors

- **Never push directly** to the main kubit-react-components repository
- Always work on **your own fork** and create pull requests
- Keep your fork **synchronized** with the upstream repository
- **Test your components** thoroughly before submitting
- Include **Storybook stories** for new components or features
- Update **TypeScript types** for any prop changes
- Follow the existing **code style** and patterns used in the project
- Ensure **accessibility** standards are met (WCAG 2.1 AA)

### Development Setup

Before contributing, make sure you have the development environment set up:

```sh
# Install dependencies
yarn install

# Build the component library
yarn build

# Run tests
yarn test

# Watch mode for tests
yarn test:watch

# Start Storybook for component development
yarn storybook

# Build Storybook for production
yarn build-storybook

# Lint your code
yarn lint

# Fix linting issues
yarn lint:fix
```

### Component Development Guidelines

When contributing React components to kubit-react-components:

#### Component Structure

- Use TypeScript for all components with strict types
- Follow functional component patterns with hooks
- Implement proper prop validation with TypeScript interfaces
- Export component types for consumer usage
- Include JSDoc comments for complex props

#### Accessibility (A11y)

- Use semantic HTML elements
- Implement proper ARIA attributes
- Ensure keyboard navigation support
- Test with screen readers
- Follow WCAG 2.1 AA guidelines
- Include focus management

#### Styling

- Use styled-components or the project's styling solution
- Support theming and customization
- Ensure responsive behavior
- Test across different browsers
- Consider dark mode support

#### Testing

- Write unit tests for component logic
- Include accessibility tests with `vitest-axe`
- Test user interactions and edge cases
- Aim for high test coverage (>80%)
- Test with React Testing Library patterns

#### Storybook Stories

- Create stories for all component variants
- Include interactive controls (args)
- Document prop usage and examples
- Show different states (loading, error, success)
- Add accessibility addon checks

### Testing Your Changes

Before submitting your PR:

1. **Build the library**: Run `yarn build` to ensure no build errors
2. **Run all tests**: Use `yarn test` to run the test suite
3. **Check test coverage**: Ensure new code is adequately tested
4. **Lint your code**: Run `yarn lint` to check for code style issues
5. **Test in Storybook**: Verify components render correctly in all states
6. **Check accessibility**: Use Storybook's a11y addon to validate
7. **Test responsive behavior**: Check components on different screen sizes
8. **Cross-browser testing**: Test on Chrome, Firefox, Safari, and Edge

### Code Review Process

Once you submit your PR:

1. **Automated Checks**: GitHub Actions will run tests and validations
2. **Code Review**: Maintainers will review your code
3. **Feedback**: Address any requested changes
4. **Approval**: Once approved, your PR will be merged
5. **Auto-publish**: The package will be automatically published to NPM

### Getting Help

If you need help or have questions:

- Check the [README](./README.md) for documentation
- Review existing components for patterns
- Open an issue for discussion before major changes
- Join our community discussions
- Tag maintainers in your PR for guidance

### Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](./CODE_OF_CONDUCT.md). Please be respectful and inclusive in all interactions.

### License

By contributing to kubit-react-components, you agree that your contributions will be licensed under the [Apache 2.0 License](./LICENSE).
