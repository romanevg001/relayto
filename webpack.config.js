var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    resolve: {
        extensions: ["", ".js"]
    },
    output: {
        publicPath: "/public/",
        path: path.join(__dirname, '/public/'),
        filename: '[name].build.js'
    },
     debug: true,
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude:  /node_modules/,
                loader: "babel",
                query: {
                    presets: ['es2015'],
                    compact: false
                }

            },
            {
                test: /\.html$/,
                loaders: ['html-loader']
            },
            {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
                loader: "file"
            },
        ]
    },
    
    // plugins: [
    //     new webpack.optimize.UglifyJsPlugin()
    // ]
};