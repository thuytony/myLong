module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        // root: ['./src/'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          "@assets": ["./src/assets"],
          "@components": ["./src/components"],
          "@constants": ["./src/constants"],
          "@module": ["./src/module"],
          "@navigation": ["./src/navigation"],
          "@res": ["./src/res"],
          "@utils": ["./src/utils"],
          "@redux": ["./src/redux"],
          "@model": ["./src/model"],
          "@networking": ["./src/networking"],
        }
      },
    ],
  ]
};
