# @kubit-ui-web/design-system

## 2.0.0-beta.36

### Major Changes

- Updated popover and tooltip components (#74)

## 2.0.0-beta.35

### Major Changes

- Update dependencies

## 2.0.0-beta.34

### Major Changes

- Use heredoc delimiter for multi-line commit messages in GITHUB_OUTPUT

  Multi-line commit messages (with body/bullet points) broke the
  release workflows because 'echo message=' passes
  each line as a separate file command. Lines starting with '- '
  trigger 'Invalid format' errors in GitHub Actions.

  Fix: use heredoc syntax (message<<EOF / EOF) which safely handles
  multi-line values in /home/runner/work/\_temp/\_runner_file_commands/set_output_8d453e61-483b-4570-8b34-aa1b86bc6a42.

## 2.0.0-beta.33

### Major Changes

- Include oxlint and oxfmt

### Patch Changes

- Updated dependencies
  - @kubit-ui-web/react-components@2.0.0-beta.73

## 2.0.0-beta.32

### Major Changes

- Merge branch 'feat/new-prop-variant-to-snackbar' into break/2.0.0-venus-version

### Patch Changes

- Updated dependencies
  - @kubit-ui-web/react-components@2.0.0-beta.72

## 2.0.0-beta.31

### Major Changes

- Clean project

### Patch Changes

- Updated dependencies
  - @kubit-ui-web/react-components@2.0.0-beta.71

## 2.0.0-beta.30

### Major Changes

- Clean project

### Patch Changes

- Updated dependencies
  - @kubit-ui-web/react-components@2.0.0-beta.70

## 2.0.0-beta.29

### Major Changes

- Merge branch 'feat/fix-rsstorybook-build' into break/2.0.0-venus-version

### Patch Changes

- Updated dependencies
  - @kubit-ui-web/react-components@2.0.0-beta.69

## 2.0.0-beta.28

### Major Changes

- Include rsstorybook

### Patch Changes

- Updated dependencies
  - @kubit-ui-web/react-components@2.0.0-beta.68

## 2.0.0-beta.27

### Patch Changes

- Updated dependencies
  - @kubit-ui-web/react-components@2.0.0-beta.67

## 2.0.0-beta.26

### Patch Changes

- Updated dependencies
  - @kubit-ui-web/react-components@2.0.0-beta.66

## 2.0.0-beta.25

### Patch Changes

- Updated dependencies
  - @kubit-ui-web/react-components@2.0.0-beta.65

## 2.0.0-beta.24

### Patch Changes

- Updated dependencies
  - @kubit-ui-web/react-components@2.0.0-beta.64

## 2.0.0-beta.23

### Patch Changes

- Updated dependencies
  - @kubit-ui-web/react-components@2.0.0-beta.63

## 2.0.0-beta.22

### Major Changes

- Migrate to rslib

### Patch Changes

- Updated dependencies
  - @kubit-ui-web/react-components@2.0.0-beta.62

## 2.0.0-beta.21

### Major Changes

- Update keywords

### Patch Changes

- Updated dependencies
  - @kubit-ui-web/react-components@2.0.0-beta.61

## 2.0.0-beta.20

### Patch Changes

- Updated dependencies
  - @kubit-ui-web/react-components@2.0.0-beta.60

## 2.0.0-beta.19

### Major Changes

- Merge branch 'feat/improve-bernova-integration' into break/2.0.0-venus-version

### Patch Changes

- Updated dependencies
  - @kubit-ui-web/react-components@2.0.0-beta.59

## 2.0.0-beta.18

### Major Changes

- Update dependencies and include new cssvars exports

### Patch Changes

- Updated dependencies
  - @kubit-ui-web/react-components@2.0.0-beta.59

## 2.0.0-beta.17

### Major Changes

- Fix tsc errors and improve implementation

### Patch Changes

- Updated dependencies
  - @kubit-ui-web/react-components@2.0.0-beta.58

## 2.0.0-beta.16

### Patch Changes

- Updated dependencies
  - @kubit-ui-web/react-components@2.0.0-beta.57

## 2.0.0-beta.15

### Major Changes

- Update to react 19 (#68)

### Patch Changes

- Updated dependencies
  - @kubit-ui-web/react-components@2.0.0-beta.56

## 2.0.0-beta.14

### Patch Changes

- Updated dependencies
  - @kubit-ui-web/react-components@2.0.0-beta.55

## 2.0.0-beta.13

### Major Changes

- Update dependencies and include bernova types (#64)

### Patch Changes

- Updated dependencies
  - @kubit-ui-web/react-components@2.0.0-beta.54

## 2.0.0-beta.12

### Major Changes

- Include borderRadius prop to skeleton (#62)

### Patch Changes

- Updated dependencies
  - @kubit-ui-web/react-components@2.0.0-beta.53

## 2.0.0-beta.11

### Patch Changes

- Updated dependencies
  - @kubit-ui-web/react-components@2.0.0-beta.52

## 2.0.0-beta.10

### Major Changes

- Generate css build (#60)

### Patch Changes

- Updated dependencies
  - @kubit-ui-web/react-components@2.0.0-beta.51

## 2.0.0-beta.9

### Major Changes

- Include provider export (#59)

### Patch Changes

- Updated dependencies
  - @kubit-ui-web/react-components@2.0.0-beta.51

## 2.0.0-beta.8

### Major Changes

- Modify changelog showing links (#58)

### Patch Changes

- Updated dependencies
  - @kubit-ui-web/react-components@2.0.0-beta.51

## 2.0.0-beta.7

### Major Changes

- Npm release with changesets (#57)

### Patch Changes

- Updated dependencies
  - @kubit-ui-web/react-components@2.0.0-beta.50

## 2.0.0-beta.6

### Major Changes

- Include changesets workflow (#55)

### Patch Changes

- Updated dependencies
  - @kubit-ui-web/react-components@2.0.0-beta.49

## 2.0.0-beta.5

### Major Changes

- Initial beta release of Kubit Design System v2
- Powered by Bernova CSS-in-JS framework
- Complete redesign of theme architecture
- Enhanced design token system

### Minor Changes

- Implemented comprehensive design token library
- Added pre-built theme configurations
- Created component-specific style variants
- Added CSS utilities and mixins
- Implemented responsive design patterns
- Added dark mode support

### Patch Changes

- Fixed theme inheritance issues
- Improved CSS generation performance
- Enhanced type safety for theme tokens
- Updated Bernova dependency
- Fixed styling edge cases
