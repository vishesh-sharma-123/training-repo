const path = require('path');

module.exports = {
  entry: './main.js', //entry file
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  mode:"production",
};