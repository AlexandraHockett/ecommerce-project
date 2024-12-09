module.exports = {
  root: true,
  extends: [
    'plugin:@next/next/recommended', // Next.js specific linting rules
    '@payloadcms', // Payload CMS-specific rules
    'eslint:recommended', // ESLint recommended rules
    'plugin:@typescript-eslint/recommended', // TypeScript rules
    'plugin:prettier/recommended', // Prettier integration
  ],
  ignorePatterns: ['**/payload-types.ts'], // Files to ignore
  plugins: ['prettier', 'simple-import-sort'], // Include Prettier and import sort plugins
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }], // Prettier rules
    'no-console': 'off', // Allow console logs
    'simple-import-sort/imports': 'error', // Enforce sorted imports
    'simple-import-sort/exports': 'error', // Enforce sorted exports
  },
}
