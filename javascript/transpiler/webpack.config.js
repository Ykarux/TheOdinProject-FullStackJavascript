const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	mode: 'production',
	module: {
		rules: [{
			loader: 'babel-loader',
			options: {
				presets: [['@babel/preset-env', {targets: 'defaults'}]]
			}
		}]
	}
};