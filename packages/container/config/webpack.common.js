const path = require('path');

module.exports = {
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-react', '@babel/preset-env'],
							plugins: ['@babel/plugin-transform-runtime'],
						},
					},
					{
						loader: 'ts-loader',
					},
				],
			},
		],
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.mjs'],
	},
};
