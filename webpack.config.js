const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Restaurant Page',
			template: 'src/index.html',
		}),
	],
	module: {
		rules: [
			{
				test: /\.css$/,
				use:  [
					'style-loader',
					'css-loader'
				]
			},
            {
                test: /\.(png|jpg)$/i,
                type: 'asset',
                use: [
				{
                    loader: 'webpack-image-resize-loader',
                    options: {
						quality: 75,
						width: 300,
                    }
                }],
                generator: {
                    filename: 'img/[name]-[hash][ext]'
                }
            }
		]
	},
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
};
