const path = require('path')
const pkg = require('./package.json')
module.exports = {
	entry: './src/main.ts',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
		modules: [path.join(__dirname, 'node_modules')],
	},
	resolveLoader: {
		modules: [path.join(__dirname, 'node_modules')],
	},
	output: {
		filename: `figura_blockbench.js`,
		path: path.resolve(__dirname, 'dist')
	},
	externalsType: 'node-commonjs',
}
