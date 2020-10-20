const path = require('path');
const webpack = require('webpack');
const isDev = process.env.NODE_ENV === 'development';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');


module.exports = {
    entry: {
        main: './src/pages/index/index.js',
        articles: './src/pages/articles/articles.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './js/[name].[chunkhash].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                        ],
                        plugins: [
                            "@babel/plugin-syntax-dynamic-import",
                            "@babel/plugin-proposal-class-properties"
                        ]
                    }
                }
            },

            {
                test: /\.css$/i,
                use: [
                    isDev ? 'style-loader'
                        : {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                publicPath: '../',
                            },
                        },
                    'css-loader',
                    'postcss-loader',
                ],
            },

            { // настройка image-webpack-loader
                test: /\.(png|jpg|gif|ico|svg)$/,
                use: [
                    'file-loader?name=./images/[name].[ext]',
                    {
                        loader: 'image-webpack-loader',
                        options: {},
                    },
                ],
            },
            {
                test: /\.(eot|woff|woff2)$/,
                use: [
                    {
                        loader: 'file-loader?name=./vendor/fonts/[name].[ext]'
                    },

                ]
            },

        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'pages/[name].[contenthash].css'
        }),

        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
                preset: ['default'],
            },
            canPrint: true
        }),

        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/pages/index/index.html',
            filename: 'index.html',
            chunks: ['main'],
        }),

        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/pages/articles/articles.html',
            filename: 'articles.html',
            chunks: ['articles']
        }),

        new WebpackMd5Hash(),


        new webpack.DefinePlugin({
            'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),


    ]
};
