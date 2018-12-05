const withTypescript = require('@zeit/next-typescript');
const withSourceMaps = require('@zeit/next-source-maps');
const withSass = require('@zeit/next-sass');

module.exports = withTypescript(withSourceMaps(withSass({
    webpack(config, options) {
      return config
    }
})));
