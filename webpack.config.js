const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './app/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
	
	entry: {
		javascript: './app/index.jsx'
	},
	
	output: {
		path: path.resolve('dist'),
		filename: 'bundle.js'
	},
	
	devServer: {
		inline: true,
		port: 9000
	},
	
	module: {
		loaders: [
			{ test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
			{ test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
			{ test: /\.css$/, loader: 'css-loader', exclude: /node_modules/ },

		]
	},
	
	

	plugins: [HtmlWebpackPluginConfig]	
}
