module.exports = {
  root:true,
  extends:'@react-native-community',
    plugins: ['import'],
    settings: {
      'import/resolver': {
        node: {
          paths: ['src'],
          alias: {
            Assets:'./src/assets',
            Components:'./src/components',
            Atoms:'./src/components/atoms',
            Molecules:'./src/components/molecules',
            Organisms:'./src/components/organisms',
            Navigations:'./src/navigations',
            Screens:'./src/screens',
            Styles:'./src/styles',
            Utils:'./src/utils',
          },
        },
      },
    },
};
