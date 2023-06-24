const path = require('path');

module.exports = {
    entry: {
        main: path.resolve(__dirname, 'src','index.js')
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'dist/images'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ "style-loader", "css-loader"],
                exclude: /node_modules/,
            },
            {
                test: /\.(png | jpg | gif | svg)$/,
                use: ['file-loader'],
                exclude: /node_modules/,
            }
        ]
    },
    devServer:{
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        compress: true,
        port: 8080,
        hot: true,
        open: true,
        historyApiFallback: true
    },
    mode: 'development'

};