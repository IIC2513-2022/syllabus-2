module.exports = function babelConfig(api) {
  const babelEnv = api.env();
  const presets = [
    ['@babel/env', {
      targets: {
        ie: '9',
        browsers: ['>1%', 'last 3 versions'],
      },
      modules: babelEnv === 'test' ? 'auto' : false,
      useBuiltIns: 'usage',
      corejs: 3,
    }],
    ['@babel/preset-react', {
      development: babelEnv === 'development',
    }],
  ];

  const plugins = [
    'react-hot-loader/babel',
  ];
  return { presets, plugins };
};
