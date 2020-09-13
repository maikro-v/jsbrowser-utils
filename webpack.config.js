const path = require('path')

module.exports = {
  mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',
  entry: './src/index.js',
  output: {
    filename: 'browser.js',
    path: path.join(__dirname, 'dist')
  }
}
