module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            components: "./src/components",
            navigation: "./src/navigation",
            screens: "./src/screens",
            utils: "./src/utils",
            styles: "./src/styles",
          },
        },
      ],
      "nativewind/babel",
    ],
  };
};
