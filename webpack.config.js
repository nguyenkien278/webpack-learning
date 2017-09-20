
const path = require('path');

module.exports = {
  entry: ['./src/main.js'],
  module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        },
		{
			test: /\.(png|svg|jpg|gif)$/,
			use: [
			  'file-loader'
			]
		},

      ],

    },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};