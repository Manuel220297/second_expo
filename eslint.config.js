// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ['dist/*'],
  },
  {
    // Add this block to enable the rule
    plugins: {
      'react-native': require('eslint-plugin-react-native'),
    },
    rules: {
      'react-native/no-raw-text': [
        'error',
        {
          skip: ['Trans', 'FormattedMessage'], // You can add custom components to skip
        },
      ],
    },
  },
]);
