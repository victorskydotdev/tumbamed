const path = require('path');
const commonConfig = require('./webpack.config.common.js');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(commonConfig, {
	mode: 'production',

	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname, 'public'),
	},

	plugins: [
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash].css',
		}),
		new CleanWebpackPlugin(),
	],

	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
			},
		],
	},
});
