
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

	devtool: 'source-map',

	entry: { main: "./src/main.js"},

	output: {
		path: __dirname + "/build/",
		publicPath: './build/',
		filename: "[name].js"
	},

	module: {
		loaders: [

			{
				test: /\.js?$/,
	      exclude: /(node_modules|bower_components)/,
	      loader: 'babel',
	      query: {
	          cacheDirectory: true,
	          presets: ['react','es2015'],
	          plugins: ['transform-runtime']
	      }
	    },

	    {
	    	test: /\.scss/,
	    	loader: ExtractTextPlugin.extract("style-loader","css-loader?sourceMap!sass-loader?sourceMap"),
	    },

	    {
	    	test: /\.json/,
	    	loader: "json",
	    },

    ]
  },

	plugins: [
		new ExtractTextPlugin("[name].css",{ allChunks: true }),
    new HtmlWebpackPlugin({
    	title: "react",
      filename: '../index.html',
      template: './src/index.template.html',
      inject: false,
      minify: {
      	removeComments: true,
      	// collapseWhitespace: true,
      	removeTagWhitespace: true,
      },
    })
  ],

	resolve: {
		extensions: ['', '.js'],
		alias: {
			"react": 				__dirname + "/node_modules/react/react.js",
			"react-dom": 		__dirname + "/node_modules/react-dom/index.js",
			"react-router": __dirname + "/node_modules/react-router/lib/index.js",
			"redux": 				__dirname + "/node_modules/redux/lib/index.js",
			"react-redux":  __dirname + "/node_modules/react-redux/lib/index.js",
		}
	},

};
