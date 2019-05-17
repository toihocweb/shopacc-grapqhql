const webpack = require('webpack');
const merge = require('webpack-merge');

const webpackCommonConfig = require('./webpack.config.common');

module.exports = merge(webpackCommonConfig, {
	output: {
		publicPath: '/dist/',
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.EnvironmentPlugin({ NODE_ENV: 'development' }),
	],
	devServer: {
		hot: true,
	}
});
