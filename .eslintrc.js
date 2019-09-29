module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true
  },
  extends: ['standard'],
  globals: {
    use: 'readonly',
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    camelcase: 'off'
  }
}
