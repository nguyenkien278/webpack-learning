
const path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

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
	
	plugins: [
		new ExtractTextPlugin({ // define where to save the file
		  filename: '[name].bundle.css',
		  disalbe:false,
		  allChunks: true,
		}),
	  ],
	
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};