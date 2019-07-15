webpack = require('webpack'),
HtmlWebpackPlugin = require('html-webpack-plugin'),
path = require('path');

module.exports = {
entry: {
    app: ['./client/src/index.tsx', 'webpack-hot-middleware/client'],
    vendor: ['react', 'react-dom']
},
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
            loaders: 'ts-loader'
        },
        {
            test: /\.css$/,
            loader: 'css-loader'
        },
        {
            test: /\.html$/,
            loader: "file-loader?name=[name].[ext]"
        },
        {
            test: /\.(ts|tsx)$/,
            include: /node_modules/,
            use: ['react-hot-loader/webpack'],
        },
    ]
},
plugins: [
    // new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'client', 'src', 'index.html') }),
    new webpack.HotModuleReplacementPlugin()
]
}