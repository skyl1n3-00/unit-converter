const path = require('path');
module.exports = {
  entry: ['./src/index.js', './src/js/main.js'],
  module: {
    rules: [
      {
        test: /\.(png|jpeg|jpg|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'img/[name].[ext]',
            },
          },
        ],
      },
    ],
  },
};
