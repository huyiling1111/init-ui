const baseConfig = require('./webpack.base.js')
const merge = require('webpack-merge')

const prodConfig = {
	mode: 'production',
	output: {
		publicPath: "./"
	}
};
module.exports =merge(baseConfig, prodConfig)