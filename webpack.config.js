const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

const ENTRY_POINTS = ['./application/client/app/index'];
const DEV_ENTRY_POINTS = ENTRY_POINTS.concat(['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000']);

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: process.NODE_ENV === 'production' ? ENTRY_POINTS : DEV_ENTRY_POINTS,
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        chunkFilename: '[name].js',
        publicPath: '/',
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all',
            maxInitialRequests: Infinity,
            minSize: 0,
            cacheGroups: {
                reactVendor: {
                    test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
                    name: 'react-vendor'
                },
                utilityVendor: {
                    test: /[\\/]node_modules[\\/](lodash|moment|moment-timezone)[\\/]/,
                    name: 'utility-vendor'
                },
                bootstrapVendor: {
                    test: /[\\/]node_modules[\\/](react-bootstrap)[\\/]/,
                    name: 'bootstrap-vendor'
                },
                vendor: {
                    test: /[\\/]node_modules[\\/](!react-bootstrap)(!lodash)(!moment)(!moment-timezone)[\\/]/,
                    name: 'vendor'
                }
            }
        }
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loaders: ['ts-loader']
            },
            {
                test: /\.css$/,
                loaders: ['css-loader']
            },
            {
                test: /\.html$/,
                loaders: ['file-loader?name=[name].[ext]']
            },
        ]
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:3000'
            }
        }
    },
    plugins: [
        // new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'client', 'src', 'index.html') }),
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin()
    ]
}