const path = require('path');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.config.common.js');

module.exports = merge(commonConfig, {
	mode: 'development',

	devtool: 'inline-source-map',

	devServer: {
		static: {
			directory: path.join(__dirname, 'dist'),
		},
		compress: true,
		port: 8000,
		hot: true,
		open: true,
	},

	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'public'),
	},
});
