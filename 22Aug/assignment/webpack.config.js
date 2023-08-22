const path = require('path');

module.exports = {
  entry: './ts/functions.js', //entry file
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  mode:"development",
};