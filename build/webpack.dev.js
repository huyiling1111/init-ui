const baseConfig = require('./webpack.base.js')
const merge = require('webpack-merge')

const webpack = require('webpack')
const devConfig = {
	mode: 'development',
	//建立打包后的文件与源代码所在行的映射
	devtool: 'eval',
	devServer: {
		//指定服务器根目录
		contentBase: './dist',
		port: 9000,
		hot: true,
	},
	
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
};
module.exports = merge(baseConfig, devConfig)