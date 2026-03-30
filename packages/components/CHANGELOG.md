# @kubit-ui-web/react-components

## 2.0.0-beta.76

### Major Changes

- Updated popover and tooltip components (#74)

## 2.0.0-beta.75

### Major Changes

- Update dependencies

## 2.0.0-beta.74

### Major Changes

- Use heredoc delimiter for multi-line commit messages in GITHUB_OUTPUT

  Multi-line commit messages (with body/bullet points) broke the
  release workflows because 'echo message=' passes
  each line as a separate file command. Lines starting with '- '
  trigger 'Invalid format' errors in GitHub Actions.

  Fix: use heredoc syntax (message<<EOF / EOF) which safely handles
  multi-line values in /home/runner/work/\_temp/\_runner_file_commands/set_output_8d453e61-483b-4570-8b34-aa1b86bc6a42.

## 2.0.0-beta.73

### Major Changes

- Include oxlint and oxfmt

## 2.0.0-beta.72

### Major Changes

- Merge branch 'feat/new-prop-variant-to-snackbar' into break/2.0.0-venus-version

## 2.0.0-beta.71

### Major Changes

- Clean project

## 2.0.0-beta.70

### Major Changes

- Clean project

## 2.0.0-beta.69

### Major Changes

- Merge branch 'feat/fix-rsstorybook-build' into break/2.0.0-venus-version

## 2.0.0-beta.68

### Major Changes

- Include rsstorybook

## 2.0.0-beta.67

### Major Changes

- Improve code and utilities (#72)

## 2.0.0-beta.66

### Major Changes

- Improve code and utilities

## 2.0.0-beta.65

### Major Changes

- Improve code and utilities

## 2.0.0-beta.64

### Major Changes

- Migrate to rslib

## 2.0.0-beta.63

### Major Changes

- Migrate to rslib

## 2.0.0-beta.62

### Major Changes

- Migrate to rslib

## 2.0.0-beta.61

### Major Changes

- Update keywords

## 2.0.0-beta.60

### Major Changes

- Include globalStyles on styles provider context

## 2.0.0-beta.59

### Major Changes

- Update dependencies and include new cssvars exports

## 2.0.0-beta.58

### Major Changes

- Fix tsc errors and improve implementation

## 2.0.0-beta.57

### Major Changes

- Improve stylesprovider props (#69)

## 2.0.0-beta.56

### Major Changes

- Update to react 19 (#68)

## 2.0.0-beta.55

### Major Changes

- Move files and improve cssTypes declaration

## 2.0.0-beta.54

### Major Changes

- Update dependencies and include bernova types (#64)

## 2.0.0-beta.53

### Major Changes

- Include borderRadius prop to skeleton (#62)

## 2.0.0-beta.52

### Major Changes

- Create isOnlyDesktop (#61)

## 2.0.0-beta.51

### Major Changes

- Modify changelog showing links (#58)

## 2.0.0-beta.50

### Major Changes

- Npm release with changesets (#57)

## 2.0.0-beta.49

### Major Changes

- Include changesets workflow (#55)

## 2.0.0-beta.48

### Major Changes

- Initial beta release of Kubit React Components v2
- Complete redesign of component architecture
- Improved accessibility across all components
- Enhanced TypeScript support with comprehensive type definitions
- Optimized bundle size with tree-shaking support

### Minor Changes

- Added 50+ production-ready React components
- Implemented design token system for consistent theming
- Added dark mode support
- Enhanced component customization through props
- Improved documentation and Storybook stories

### Patch Changes

- Fixed various accessibility issues
- Improved component performance
- Enhanced error handling
- Updated dependencies
- Fixed styling inconsistencies
