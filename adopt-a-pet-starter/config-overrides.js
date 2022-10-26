// module.exports = function override(config, env) {
//     //do stuff with the webpack config...
//     return config;
//   }

const path = require('path');

module.exports = { 
  webpack(config) {
    config.resolve.alias['react']
      = path.resolve(__dirname, 'node_modules/react');
      
    return config;
  }
};