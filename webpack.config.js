const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const ENTRY_POINTS = ['./client/app/index'];
const DEV_ENTRY_POINTS = ENTRY_POINTS.concat(['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000']);

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: process.NODE_ENV === 'production' ? ENTRY_POINTS : DEV_ENTRY_POINTS,
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loaders: ['react-hot-loader/webpack', 'ts-loader']
            },
            {
                test: /\.css$/,
                loaders: ['react-hot-loader/webpack', 'css-loader']
            },
            {
                test: /\.html$/,
                loaders: ['react-hot-loader/webpack', 'file-loader?name=[name].[ext]']
            },
        ]
    },
    devServer: {
        proxy: {
          '/api':{
            target: 'http://localhost:8080'
          }
      }
    },
    plugins: [
        // new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'client', 'src', 'index.html') }),
        new webpack.HotModuleReplacementPlugin()
    ]
}