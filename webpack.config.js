
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const extractSass = new ExtractTextPlugin({
    // filename: "[name].bundle.css",
// });
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: ['./src/main.js','./src/main.scss'],
  module: {
      rules: [
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: "css-loader"
         })
        },
		{
			test: /\.(png|svg|jpg|gif)$/,
			use: ['file-loader']
		},
		{ // sass / scss loader for webpack
			test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                use: [
						{loader: "css-loader"},
						{loader: "sass-loader"}
					],
            })
		}
      ],

    },
	
	plugins: [
		new ExtractTextPlugin({
			filename: "[name].bundle.css",
		}),
		new HtmlWebpackPlugin({
		  title: "Output Management"
		})
	],
	
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};