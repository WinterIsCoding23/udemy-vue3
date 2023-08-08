/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    // following rules make sure eslint & prettier dont clash:
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  overrides: [
    {
      files: ['cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}'],
      extends: ['plugin:cypress/recommended']
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  // environment variable: node: true --> eslint learns that (part of) our app runs inside node
  //...default is that app runs in browser --> causes eslint to throw error for module.exports in tailwind.config
  env: {
    node: true
  }
}
