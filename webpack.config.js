const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
    },
    devtool: 'inline-source-map',
    plugins: [

        new HtmlWebpackPlugin({

            title: 'Todo List',

        }),
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'icons/[hash][ext][query]',
        clean: true,
    },
    module: {

        rules: [

            {

                test: /\.css$/i,

                use: [MiniCssExtractPlugin.loader, "css-loader"],

            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                type: 'asset/resource'
              },

        ],

    },
};