const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: ["@babel/polyfill", "./src/public/checkout.js", "./src/public/product.js", "./src/public/shopping_cart.js", "./src/public/single_page.js", "./src/public/index.js"]
    },
    output: {
        path: path.join(__dirname, 'dist/public'),
        publicPath: "/",
        filename: "js/[name].js"
    },
    target: 'web',
    devtool: "#source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                use: ['file-loader']
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/public/index.html',
            filename: 'index.html',
            excludeChunks: ['server']
        }),
        new HtmlWebpackPlugin({
            template: 'src/public/checkout.html',
            filename: 'checkout.html',
            excludeChunks: ['server']
        }),
        new HtmlWebpackPlugin({
            template: 'src/public/single_page.html',
            filename: 'single_page.html',
            excludeChunks: ['server']
        }),
        new HtmlWebpackPlugin({
            template: 'src/public/shopping_cart.html',
            filename: 'shopping_cart.html',
            excludeChunks: ['server']
        }),
        new HtmlWebpackPlugin({
            template: 'src/public/product.html',
            filename: 'product.html',
            excludeChunks: ['server']
        })
    ]
};
