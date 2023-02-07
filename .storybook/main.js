const path = require('path');
const toPath = (filePath) => path.join(process.cwd(), filePath);
module.exports = {
  reactOptions: { legacyRootApi: true },
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-knobs',
    // '@storybook/addon-viewport',
    // '@storybook/addon-measure',
    // '@storybook/addon-controls',
    // 'storybook-addon-mock/register', // Do not use, will break storybook
    // '@storybook/preset-create-react-app', // Do not use, will break storybook
  ],

  webpackFinal: async (config) => ({
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        '@emotion/core': toPath('node_modules/@emotion/react'),
        'emotion-theming': toPath('node_modules/@emotion/react'),
      },
    },
  }),
  core: {
    builder: 'webpack5',
  },
  docs: {
    docsPage: 'automatic', // see below for alternatives
    defaultName: 'Docs', // set to change the name of generated docs entries
  },
};
