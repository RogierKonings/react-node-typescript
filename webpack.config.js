const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

const ENTRY_POINTS = ['./src/client/app/index'];
const DEV_ENTRY_POINTS = ENTRY_POINTS.concat(['webpack-hot-middleware/client?path=/__webpack_hmr']);

const dotenv = require('dotenv');
dotenv.config();

module.exports = {
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
    devtool: 'cheap-module-eval-source-map',
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
        hot: true,
        // contentBase: path.join(__dirname, 'dist'),
        // compress: true,
        // port: process.env.CLIENT_PORT,
        proxy: {
            '**': {
                target: `http://localhost:${process.env.PORT}`,
                secure: false,
                logLevel: 'debug'
            }
        }
    },
    plugins: [
        // new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'client', 'src', 'index.html') }),
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin()
    ]
}
