# Linting and Formatting Setup

This project now includes comprehensive linting and formatting tools to maintain code quality.

## What's Been Added

### 1. ESLint Configuration

- **File**: `eslint.config.js`
- **Features**:
  - Strict TypeScript linting rules
  - Astro-specific linting rules
  - Accessibility checks with jsx-a11y
  - Modern ESLint flat config format
  - Integration with Prettier

### 2. Prettier Configuration

- **File**: `.prettierrc`
- **Features**:
  - Single quotes (no double quotes)
  - No semicolons
  - Tabs instead of spaces
  - Astro file support
  - Consistent code formatting
  - Integration with ESLint

### 3. NPM Scripts

Added to `package.json`:

- `npm run lint` - Run ESLint on all files
- `npm run lint:fix` - Run ESLint with auto-fix
- `npm run format` - Format all files with Prettier
- `npm run format:check` - Check if files are properly formatted

### 4. GitHub Workflow

- **File**: `.github/workflows/lint.yml`
- **Features**:
  - Runs on push/PR to main and develop branches
  - Tests against Node.js 18.x and 20.x
  - Checks formatting, linting, type checking, and build

## Strict Rules Enabled

The configuration includes strict linting rules:

### TypeScript Rules

- No unused variables (with underscore prefix allowance)
- No explicit `any` types
- No non-null assertions

### General Rules

- No console statements (error level)
- Prefer const over let
- No var declarations
- Strict equality checks
- Curly braces required
- No eval/implied eval
- Prefer template literals
- Prefer arrow functions

### Astro-Specific Rules

- Prefer class:list directive
- No unused CSS selectors (warning)
- No conflicting set directives

## Usage

1. **Before committing**: Run `npm run lint` and `npm run format:check`
2. **Auto-fix issues**: Run `npm run lint:fix` and `npm run format`
3. **CI/CD**: The GitHub workflow will automatically check all PRs

## Current Linting Issues

The setup currently shows several linting errors in the codebase. These are intentional strict rules that should be fixed in the source code:

- Unused imports and variables
- Console statements
- Parsing errors
- Code style issues

You can fix these incrementally or run `npm run lint:fix` to auto-fix what's possible.
