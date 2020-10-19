
const path = require("path");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: [
        "./src/index.js",
        "./src/index.scss",
    ],
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "www/dist"),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(jpg|png|gif|woff|woff2|eot|ttf|svg)$/,
                loader: "file-loader"
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "index.css",
        }),
        new BrowserSyncPlugin({
            host: "localhost",
            port: 9000,
            server: {
                baseDir: [
                    "./www/"
                ]
            },
            files: [
                "www/index.html"
            ]
        })
    ],

};