module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'eslint:recommended',
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  plugins: [
    'react',
  ],
  rules: {

    semi: [2, 'never'],
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'linebreak-style': 0,

    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    indent: ['error', 2],

  },
  globals: {
    React: 'writable',
  },
}
