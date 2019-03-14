
const path = require('path');

const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        publicPath: '/',
        path: path.join(__dirname, 'dist'),
        filename: '[name].[hash:6].bundle.js'
    },
    devtool: 'eval-source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: path.join(__dirname, 'src'),
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 8000,
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]

}