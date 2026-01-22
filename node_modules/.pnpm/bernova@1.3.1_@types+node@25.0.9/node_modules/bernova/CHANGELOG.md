# Changelog

All notable changes to Bernova will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.3.1] - 2026-01-21

### Patch

- **prevent minify provider**: Prevent minify providerTemplate.js file

## [1.3.0] - 2026-01-21

### New Features

- **Added --embed-css flag**: Added the function for embedded styles.

## [1.2.2] - 2026-01-16

### Fixed

- **Fixed the css generated into js modules folder**: Prevent the copy of the css into js modules folders
- **Fixed the css minified name**: Fixed the minified css name

## [1.2.1] - 2026-01-15

### Fixed

- **Fixed the dependencies**: Fixed the package.json dependencies types
- **Fixed the css custom output dir**: Fixed the custom css output dir

## [1.2.0] - 2026-01-14

### New Features

- **Added new bv-build cli flags**: Added flags to overwrite baseOutDir, rootDir, preventMoveJS, preventMoveDTS and set preventProcessJS

### Fixed

- **Prevent minify declaration files**: Prevent minify with terser the typescript declaration files

### Documentation

- **Added the new flags documentation**: Added the documentation about the new flags cases

## [1.1.0] - 2026-01-13

### New Features

- **Added cli bv-build flags**: Added flags to overwrite css, tools and provider customOutDirs

### Documentation

- **Added documentation for cli flags**: Added documentation about the flags uses cases

### Fixed

- **Prevent transpile declaration files**: Added logic to prevent process typescript declaration files

## [1.0.1] - 2026-01-12

### Fixed

- **Semantic problem solved**: change target for targets

### Documentatation

- **Added the bernova build script example**: Added the bv-build example.
- **Added the instalation examples with anothers packages manager**: Added examples for `'npm'` and `'yarn`

## [1.0.0] - 2026-01-08

### New Features

- **Improve library styles and tools build/dist**: Complete the buildStyle.js cli function.
- **Improve provider router hanler**: Improve the Bernova provider for handler relative doc routes.

### Fixed

- **Fixed the doc routes**: Change the absolute routes for relative routes into provides's stats.
- **Fixed Error in partial transpilation**: Fixed the function for the flags --foundationsOnly and --componentsOnly.

## [0.3.0] - 2026-01-01

### ✨ New Features

- **Modern Build System**: Migrated to Vite 7 with TypeScript configuration for improved build performance
- **Dual Package Support**: Added ESM (`.mjs`) and CommonJS (`.cjs`) support for better compatibility across different module systems
- **Custom Build Plugins**: Implemented 4 specialized Vite plugins:
  - `copyCSSPlugin`: Minifies and copies CSS files
  - `copyCLIBinariesPlugin`: Preserves CLI executables with proper shebangs
  - `copySourcePlugin`: Minifies source files with aggressive optimization
  - `removeTestFilesPlugin`: Ensures test files are excluded from distribution

### 🚀 Performance Improvements

- **Ultra-optimized Bundle**: Reduced package size from 56.4 KB to 41.4 KB (27% reduction)
- **Aggressive Minification**: Implemented Terser with 3-pass optimization removing all comments
- **Tree-shaking**: Enhanced dead code elimination for smaller bundles
- **Zero JSDoc in Distribution**: Removed all TSDoc comments as they're unnecessary for CLI tools

### 📚 Documentation

- **Professional README**: Added comprehensive badges (npm version, downloads, license, coverage, PRs welcome)
- **Package Distribution**: Created `.npmignore` to exclude unnecessary files from npm package
- **Modern Package Exports**: Updated `package.json` with conditional exports for better module resolution

### 🔧 Infrastructure

- **TypeScript Build Configuration**: Separated development and production TypeScript configs (`tsconfig.build.json`)
- **Node.js Compatibility**: Maintained Node.js >=20.0.0 target with ES2020 output
- **Build Validation**: Enhanced CI/CD with proper build verification steps

## [0.1.2] - 2025-10-28

### 🔧 Changed

- **License update**: Changed project license from ISC to Apache-2.0 for better open source compliance
- **Package management**: Improved gitignore configuration to exclude package-lock.json for better npm/yarn compatibility

### 🗑️ Removed

- Removed package-lock.json file from version control to avoid package manager conflicts

## [0.1.1] - 2025-10-22

### 🐛 Fixed

- **Build system**: Resolved NPM versioning and authentication issues
- **Package metadata**: Improved package.json with complete metadata for open source distribution
- **Workflow automation**: Fixed auto-publish workflow build validation and authentication verification

### 🔧 Changed

- **Node.js compatibility**: Updated minimum Node.js version requirements
- **Build optimization**: Enhanced build process for better distribution

## [0.1.0] - 2025-10-21

All notable changes to Bernova will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.2] - 2025-10-28

## [0.1.1] - 2025-10-21

## [0.1.0] - 2025-10-21

### 🎉 Initial Release

Bernova is a powerful CSS-in-JS framework that allows you to write CSS with JavaScript syntax, providing a comprehensive solution for modern web styling.

### ✨ Core Features

#### 🏗️ **CSS Generation System**

- **JavaScript-to-CSS compilation**: Transform JavaScript objects into optimized CSS
- **BEM methodology support**: Automatic generation of BEM-compliant class names
- **Modular architecture**: Separate compilation for foundations, components, and global styles
- **Build optimization**: Minification, tree-shaking, and dead code elimination

#### 🎨 **Styling Architecture**

##### **Foundations System**

- CSS custom properties (CSS variables) generation from JavaScript objects
- Automatic kebab-case conversion for CSS variable names
- Centralized design token management
- Type-safe access to CSS variables through generated tools

##### **Component Styling**

- Object-based style definitions with JavaScript syntax
- Nested element styling using BEM element syntax (`_element`)
- Style variants using BEM modifier syntax (`--variant`)
- Dynamic class name generation with TypeScript support

##### **Global Styles Management**

- Project-wide CSS rules configuration
- Element selector targeting (`html`, `body`, `*`)
- CSS class generation for utility styles
- Automatic tool generation for class name access

#### 🎯 **Advanced CSS Features**

##### **Pseudo-classes & Pseudo-elements**

- Full support for CSS pseudo-classes (`:hover`, `:focus`, `:active`, etc.)
- Pseudo-element support (`::before`, `::after`, etc.)
- Nested pseudo-class/element combinations
- Automatic CSS selector generation

##### **Media Queries**

- Responsive design system with JavaScript configuration
- Custom media query definitions with type and values
- Reusable breakpoint system across components
- Mobile-first and desktop-first approaches supported

##### **HTML Attributes**

- Conditional styling based on data attributes
- Boolean and value-based attribute selectors
- Multiple attribute value handling
- Complex attribute-based style variations

##### **Advanced Selectors**

- CSS combinator support (descendant, child, sibling)
- Target-specific styling with `$target` syntax
- Complex selector chains
- Advanced DOM tree navigation

#### 🔧 **Development Tools**

##### **CLI Commands**

- **`bernova`**: Main CSS compilation command
- **`bv-config`**: Interactive configuration file generator
- **`bv-build`**: Optimized build process for production
- **Compilation modes**: Foundation-only (`--foundationOnly`) and component-only (`--componentOnly`)

##### **Generated Development Tools**

- **CSS Variables Tools**: Type-safe access to CSS custom properties
- **CSS Classes Tools**: Generated class name constants for JavaScript/TypeScript
- **Component Registry**: Available component tracking and management
- **Media Query Tools**: Responsive breakpoint access utilities
- **Global Style Tools**: Utility class name management

#### 📦 **Multi-Theme Support**

- **Multiple theme configurations**: Support for light/dark themes and brand variations
- **Theme-specific CSS generation**: Separate CSS files for each theme
- **Provider-based theme management**: Dynamic theme switching capabilities
- **Foreign theme integration**: Support for external CSS files and legacy stylesheets

#### 🎭 **Provider System**

- **JavaScript Provider**: Centralized styling API for large applications
- **Dynamic CSS injection**: Runtime CSS loading and management
- **Theme switching**: Hot-swappable themes without page reload
- **Component style resolution**: Intelligent class name resolution with variants
- **External CSS integration**: Seamless integration with existing CSS files

#### 🔍 **Advanced Features**

##### **Foreign Components**

- Style reuse across different components
- Component composition with existing styles
- Variant inheritance from parent components
- Modular style architecture

##### **Dynamic Values**

- Runtime CSS custom property injection
- JavaScript variable binding to CSS
- Dynamic styling based on component props
- CSS-in-JS style object generation

##### **Font Management**

- Google Fonts integration with automatic import generation
- Custom font loading and configuration
- Font weight and style variant management
- Optimized font loading strategies

##### **CSS Reset System**

- Built-in CSS reset styles for cross-browser consistency
- Configurable reset rules
- Modern CSS normalization
- Custom reset rule definitions

#### 🎯 **TypeScript Integration**

- **Full TypeScript support**: Generated type definitions for all tools
- **CSS property validation**: IntelliSense for CSS properties and values
- **Component type generation**: Automatic interface generation for styled components
- **Style type checking**: Compile-time validation of style objects

#### ⚡ **Performance Features**

- **Build-time optimization**: CSS minification and compression
- **Tree-shaking**: Dead code elimination for unused styles
- **CSS bundling**: Efficient CSS file generation and organization
- **Development mode**: Fast compilation for development workflows

#### 🏗️ **Build System**

- **Vite integration**: Modern build tooling with Vite
- **TypeScript compilation**: Automatic type definition generation
- **Source mapping**: Debug-friendly source maps for development
- **Production optimization**: Minified output for production deployments

### 📋 **Configuration System**

- **JSON-based configuration**: `bernova.config.json` for project setup
- **Flexible theme configuration**: Multi-theme project support
- **Tool generation options**: Customizable development tool generation
- **Path resolution**: Flexible file path configuration for different project structures

### 🧪 **Testing Infrastructure**

- **Vitest integration**: Modern testing framework setup
- **Unit test coverage**: Comprehensive test suite for core functionality
- **Coverage reporting**: Code coverage analysis with @vitest/coverage-v8
- **Test utilities**: Testing helpers and mock utilities

### 📚 **Documentation & Examples**

- **Comprehensive README**: Detailed usage examples and API documentation
- **Configuration examples**: Sample configurations for different use cases
- **Best practices guide**: Recommended patterns and architectures
- **Migration guides**: Instructions for integrating with existing projects

### 🔧 **Development Experience**

- **Hot reload support**: Fast development iteration with instant CSS updates
- **Error reporting**: Detailed error messages for debugging
- **CLI feedback**: Progress indicators and success/error notifications
- **IDE support**: Enhanced developer experience with TypeScript definitions

### 📦 **Package Features**

- **Multiple output formats**: CommonJS and ES modules support
- **CLI binaries**: Executable commands for project automation
- **Dependency optimization**: Minimal runtime dependencies
- **Cross-platform compatibility**: Works on Windows, macOS, and Linux

### 🎨 **Styling Capabilities**

- **Complete CSS property support**: All modern CSS properties and values
- **Vendor prefix handling**: Automatic vendor prefix generation
- **CSS custom property support**: Full CSS variables integration
- **Modern CSS features**: Grid, Flexbox, and modern layout support

---

### 📝 **Notes**

- This release establishes the foundation for a comprehensive CSS-in-JS framework
- Full backward compatibility will be maintained in future releases
- The API is considered stable for production use
- Community contributions and feedback are welcome

### 🔗 **Links**

- [Documentation](README.md)
- [Contributing Guidelines](CONTRIBUTING.md)
- [Code of Conduct](CODE_OF_CONDUCT.md)
- [Security Policy](SECURITY.md)
