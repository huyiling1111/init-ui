const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
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
          'vue-style-loader',
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
			new VueLoaderPlugin()
		]
};