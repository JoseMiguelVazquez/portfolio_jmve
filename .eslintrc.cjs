module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'standard',
    'standard-jsx'
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react/no-unknown-property': ['error', {
      ignore:
      ['intensity', 'groundColor', 'object', 'position', 'rotation', 'angle', 'penumbra', 'castShadow', 'shadow-mapSize', 'options', 'receiveShadow', 'args', 'polygonOffset', 'polygonOffsetFactor', 'flatShading', 'position-y', 'rotation-y']
    }],
    'react-refresh/only-export-components': 'warn'
  }
}
