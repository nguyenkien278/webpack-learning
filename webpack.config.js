
const path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractSass = new ExtractTextPlugin({
    filename: "[name].bundle.css",
    disable: process.env.NODE_ENV === "development"
});

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
			use: [
			  'file-loader'
			]
		},
		{ // sass / scss loader for webpack
			test: /\.scss$/,
            use: extractSass.extract({
                use: [{
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }],
                // use style-loader in development 
                fallback: "style-loader"
            })
		  }

      ],

    },
	
	plugins: [
		extractSass
	  ],
	
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};