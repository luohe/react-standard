const rewireReactHotLoader = require('react-app-rewire-hot-loader');

module.exports = function override(config, env) {
  config = rewireReactHotLoader(config, env);
  if (env === 'production') {
    config.devtool = false;
  }
  return config;
}
