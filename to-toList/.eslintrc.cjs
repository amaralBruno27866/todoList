// Objective:
// Configure ESLint to enforce coding standards and best practices for the project.

// Why:
// Ensures code consistency, prevents common errors, and improves code quality, especially when working with TypeScript and React.

// Result:
// Provides linting rules and plugins tailored for TypeScript and React, helping developers write cleaner and more maintainable code.

// How to implement:
// Add this configuration file to the root of the project and install the required ESLint plugins and dependencies.

module.exports = {
  root: true, // Indicates that this is the root ESLint configuration
  env: { 
    browser: true, // Enables browser global variables
    es2020: true, // Enables ES2020 syntax
  },
  extends: [
    'eslint:recommended', // Uses recommended ESLint rules
    'plugin:@typescript-eslint/recommended', // Adds TypeScript-specific linting rules
    'plugin:react-hooks/recommended', // Adds rules for React Hooks
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'], // Files and directories to ignore
  parser: '@typescript-eslint/parser', // Specifies the TypeScript parser
  plugins: ['react-refresh'], // Adds the React Refresh plugin
  rules: {
    // Custom rule: Warns if components are not exported properly
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true }, // Allows constant exports
    ],
  },
}