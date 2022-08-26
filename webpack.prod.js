const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const webpack = require('webpack')
module.exports = {
	mode: 'production',
	entry: './src/app.js',
	//建立打包后的文件与源代码所在行的映射
	// devtool: 'eval',
	// devServer: {
	// 	//指定服务器根目录
	// 	contentBase: './dist',
	// 	port: 9000,
	// 	hot: true,
	// },
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',
		//打包的时候需配置路径
		publicPath: "./"
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
			},
			{
				test: /\.css$/,
				use: [
					//使用<style>将css-loader内部样式注入到我们的HTML页面
					'vue-style-loader',
					//加载css文件
					'css-loader',
				]
			},
			{
				test: /\.scss$/,
				use: [
					'vue-style-loader',
					'css-loader',
					'sass-loader'
				]
			}
		],

	},
	plugins: [
		new CleanWebpackPlugin(),
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin(
			{ template: './index.html' }
		),
		// new webpack.HotModuleReplacementPlugin()
	]
};