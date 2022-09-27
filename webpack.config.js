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
                type: 'asset/resource',
                use: [{
                    loader: 'image-webpack-loader',
                    options: {
						quality: 10,
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
