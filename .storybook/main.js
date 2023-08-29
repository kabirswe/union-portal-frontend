const path = require('path');
module.exports = {
  stories: [
    '../docs/storybook/**/*.stories.mdx',
    '../src/components/atoms/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/components/molecules/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/components/organisms/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/components/templates/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/components/utils/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
    '@whitespace/storybook-addon-html',
  ],

  // The Webpack config to use when compiling your react app for development or production.
  webpack: function (config) {
    // ...add your webpack config
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        {
          loader: 'sass-resources-loader',
          options: {
            // Or array of paths
            resources: [
              './src/styles/index.scss',
              './src/components/atoms/**/*.scss',
              './src/components/molecules/**/*.scss',
              './src/components/organisms/**/*.scss',
              './src/components/templates/**/*.scss',
              './src/components/utils/**/*.scss',
            ],
            hoistUseStatements: true,
          },
        },
      ],
    });

    return config;
  },
  // https://github.com/styleguidist/react-docgen-typescript/issues/356
  typescript: {
    reactDocgen: 'none',
  },
};
