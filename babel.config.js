module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '~': './',
            '~fonts': './src/assets/fonts/',
            '~images': './src/assets/images/',
            '~components': './src/components/',
            '~constants': './src/constants/',
            '~data/*': './src/data/',
            '~hooks': './src/hooks/',
            '~models': './src/models/',
            '~navigation': './src/navigation/',
            '~screens': './src/screens/',
          },
        },
      ],
    ],
  };
};
