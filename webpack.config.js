const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = ({ mode }) => {

    console.log(mode);

    return {
        mode,
        output: {
            filename: "bundle.js"
        },
        plugins: [
            new HtmlWebpackPlugin(),
            new webpack.ProgressPlugin()
        ]
    }
};