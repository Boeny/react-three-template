const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    context: __dirname,
    entry: {
        'app': './app/ts/main.tsx'
    },
    output: {
        path: path.join(__dirname, "public"),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['*', '.tsx', '.ts', '.js', '.styl', '.css'],
        alias: {
            '~': path.resolve(__dirname, './app/ts'),
            'react': path.resolve(__dirname, './node_modules/react/index.js'),
            'react-dom': path.resolve(__dirname, './node_modules/react-dom/index.js'),
            'lodash': path.resolve(__dirname, './node_modules/lodash'),
            'es6-promise': path.resolve(__dirname, './node_modules/es6-promise')
        }
    },
    module: {
        rules: [
            { enforce: 'pre', test: /\.tsx?$/, use: 'tslint-loader', exclude: /(node_modules)/ },
            { test: /\.ts(x?)$/, use: 'ts-loader?configFileName=./app/tsconfig.json', exclude: /(node_modules)/ },
            {
                test: /\.styl$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'postcss-loader','stylus-loader']
                }),
                exclude: /(node_modules)/
            },
            { test: /\.css/, use: ['style-loader', 'css-loader'] },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'postcss-loader']
                }),
                exclude: /(node_modules)/
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("main.css"),
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/) ,
        //new BundleAnalyzerPlugin()
    ],
    //watch: true
};