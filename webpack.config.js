
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

var autoprefixer = require('autoprefixer');
var precss       = require('precss');

var releasePath = "./release/" // http://imjeen.github.io/flag/release/";

module.exports = {

	entry: { main: "./src/main.js"},

	output: {
		publicPath: process.env.NODE_ENV === 'production' ? releasePath : "./build/",
    path: __dirname + (process.env.NODE_ENV === 'production' ? "/release/" : "/build/"),
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

	    // {
	    // 	test: /\.json/,
	    // 	loader: "json",
	    // },

    ]
  },

  postcss: function () {
    return [autoprefixer, precss];
  },

	plugins: [
		new ExtractTextPlugin("[name].css",{ allChunks: true }),
		// new webpack.optimize.CommonsChunkPlugin('common.js'),
  ],

	resolve: {
		extensions: ['', '.js'],
		alias: {
			"react": 				__dirname + "/node_modules/react/react.js",
			"react-dom": 		__dirname + "/node_modules/react/lib/ReactDOM.js",
			"react-router": __dirname + "/node_modules/react-router/lib/index.js",
			"redux": 				__dirname + "/node_modules/redux/lib/index.js",
			"react-redux":  __dirname + "/node_modules/react-redux/lib/index.js",
		}
	},

};

if(process.env.NODE_ENV === 'production'){

	console.log('\n production is processing!\n');

   module.exports.plugins 
    && module.exports.plugins.push(
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"production"'
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }),
      new webpack.optimize.OccurenceOrderPlugin(),
      new HtmlWebpackPlugin({
        filename: '../index.html',
        template: './src/index.template.html',
        inject: false,
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          minifyJS: true,
          minifyCSS: true,
        },
      })
    );

   module.exports.module.loaders 
    && module.exports.module.loaders.push(
        { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader","css-loader!postcss-loader") },
        { test: /\.scss$/, loader: ExtractTextPlugin.extract("style-loader","css-loader!postcss-loader!sass-loader")  }
    );

}else{

	module.exports.devtool = 'source-map';

	module.exports.plugins 
    && module.exports.plugins.push(
	    new HtmlWebpackPlugin({
	    	title: "react",
	      filename: '../index.html',
	      template: './src/index.template.html',
	      inject: false
	    })
    );

  module.exports.module.loaders 
    && module.exports.module.loaders.push(
        { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader","css-loader?sourceMap!postcss-loader") },
        { test: /\.scss$/, loader: ExtractTextPlugin.extract("style-loader","css-loader?sourceMap!postcss-loader!sass-loader?sourceMap")  }
    );

}
