# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.2.0] - 2025-10-28

### Added

- **Global ignores configuration** - New `ignores` parameter allows specifying files, patterns, or directories that ESLint should ignore
- **Enhanced configuration flexibility** - Support for glob patterns, specific files, and directory exclusions
- **Improved JSDoc documentation** - Updated parameter documentation to include the new `ignores` option

### Changed

- **Configuration API enhancement** - Added `ignores` array parameter to the main configuration function
- **Better ESLint flat config compliance** - Proper implementation of global ignores following ESLint 9.x standards

## [1.0.1] - 2025-10-16

### Added

- New workflow for review Pull Requests

## [1.0.0] - 2025-10-15

🎉 **Major Release** - Production Ready ESLint Configuration

### 🚀 Added

- **Professional documentation** with detailed usage examples and configuration options
- **Contributing guidelines** (`CONTRIBUTING.md`) for open source collaboration
- **Example configurations** for different project types (React, Node.js, etc.)
- **Browser compatibility checking** with configurable browser support lists
- **Advanced import management** with sorting and cycle detection
- **Accessibility rules** (a11y) for inclusive web development
- **Jest testing rules** for better test code quality
- **Code organization rules** with perfectionist plugin integration
- **Enhanced error handling** for configuration edge cases
- **Simplified package structure** - Focused on essential files: `index.js`, `README.md`, `LICENSE`, and `CHANGELOG.md`

### 🔧 Changed

- **Complete code refactoring** with improved maintainability and readability
- **Modular rule organization** using helper functions for better code structure
- **Enhanced package.json** with proper metadata and exports configuration (no build/test scripts for simplicity)
- **Improved dependency management** with cleaner peer dependencies
- **Better configuration API** with proper default values and optional parameters
- **Optimized plugin loading** for better performance
- **Updated documentation** with comprehensive examples and best practices
- **Lightweight package** - No TypeScript definitions or test suite for faster installation

### 🛠️ Fixed

- **Configuration loading issues** with proper parameter handling
- **TypeScript integration** with correct parser and plugin configurations
- **Rule conflicts** between different plugins resolved
- **Import resolution** for various project structures
- **Browser compatibility** checks working correctly
- **Test suite** passing all scenarios

### 📦 Technical Improvements

- **ESLint 9.x flat config** full compatibility
- **TypeScript 5.x** support with latest features
- **React 18+** rules and hooks support
- **Node.js 18+** compatibility with modern features
- **Prettier integration** with consistent formatting
- **Performance optimizations** for large codebases

### 🔒 Security

- **Updated all dependencies** to latest secure versions
- **Removed vulnerable packages** and replaced with secure alternatives
- **Enhanced security rules** for preventing common vulnerabilities

### 📚 Documentation

- **Complete README rewrite** with examples and best practices
- **Comprehensive usage documentation** with practical examples
- **Contributing guide** for community involvement
- **Changelog** following standard conventions
- **License clarification** with Apache 2.0

### 📋 Configuration

- **Comprehensive ESLint rules** covering all major use cases
- **Plugin integration** for enhanced code quality
- **Rule validation** for consistent configurations
