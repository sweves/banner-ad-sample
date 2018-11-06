// Plugin imports
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

// Config
module.exports = {
  plugins: {
    autoprefixer: { browsers: ['last 10 versions'] },
    cssnano: {}
  },
}
