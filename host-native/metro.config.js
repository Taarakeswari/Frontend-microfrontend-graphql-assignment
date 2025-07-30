// host-native/metro.config.js
const { getDefaultConfig } = require('metro-config');

module.exports = (async () => {
  const config = await getDefaultConfig();
  config.resolver.sourceExts.push('ts', 'tsx', 'jsx', 'js');
  return config;
})();
