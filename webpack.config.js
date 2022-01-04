module.exports = {
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'postcss-loader'],
			},
			{
				test: /\.jsx?$/,
				use: ['babel-loader', 'astroturf/loader'],
			}
		]
	},
	optimization: {
		usedExports: true,
	},
}