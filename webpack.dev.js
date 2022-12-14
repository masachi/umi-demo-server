const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

console.error(common)

module.exports = merge(common, {

    mode: 'development',

    devtool: 'inline-source-map',

    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ]

});