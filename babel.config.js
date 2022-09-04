module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            // This needs to be mirrored in tsconfig.json
            src: './src',
            components: './src/components',
            commons: './src/components/commons',
            features: './src/screens/Features',
            gql: './src/screens/graphql',
            auth: './src/screens/Auth',
            store: './store',
            assets: './assets'
          }
        }
      ]
    ]
  }
};
