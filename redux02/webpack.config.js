




const path = require('path')

const webpack = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    entry: {
        main: './src/index.js'
    },
    output: {
        // publicPath可以用于所有bundle文件的公共路径，例如上传到cdn路径，
        // publicPath: 'https://cdn.cloud.com/scripts/'
        // publicPath: '/',                     
        path: path.join(__dirname, 'dist'),     // 指定构建时输出目录，绝对路径
        filename: '[name].[hash:8].bundle.js'   // 指定输出文件名规则，[name]会替换成入口文件名，[hash:8]输出文件hash值前8位
    },
    devtool: "eval-source-map",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
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