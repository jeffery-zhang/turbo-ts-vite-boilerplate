module.exports = {
  root: true,
  extends: [
    '@tvb/eslint-config',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
  ],
  rules: {
    'react/jsx-uses-react': 0,
    'react/react-in-jsx-scope': 0,
  },
}
