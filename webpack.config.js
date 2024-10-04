const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: './src/index',
    mode: 'development',
    resolve: {
        extensions: ['.js']
    },
    devtool: "eval-cheap-source-map",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            // {
            //     test: /\.css$/i,
            //     use: [(
            //         process.env.NODE_ENV === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader
            //     ),'css-loader']
            // },
            // {
            //     test: /\.less$/i,
            //     use: [
            //         MiniCssExtractPlugin.loader,
            //         'css-loader',
            //         'less-loader'
            //     ]
            // },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    'postcss-loader',
                    'less-loader'
                ]
            }
        ]
    },
    plugins: [new MiniCssExtractPlugin(), new HtmlWebpackPlugin()]
}