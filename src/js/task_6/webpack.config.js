const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CheckerPlugin} = require('awesome-typescript-loader');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = (env, options) => {
    var isDevMode = options.mode !== 'production';

    var config = {
        entry: './src/app.ts',
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: 'app.bundle.js'
        },
        module: {
            rules: [{
                    test: /\.ts$/,
                    loaders: ['awesome-typescript-loader', 'angular2-template-loader'],
                    exclude: [/\.(spec|e2e)\.ts$/]
                },
                {
                    test: /\.html$/,
                    loader: 'raw-loader',
                    exclude: /\.async\.(html|css)$/
                },
                {
                    test: /\.async\.html$/,
                    loaders: ['file?name=[name].[hash].[ext]', 'extract']
                },
                {
                    test: /\.scss$/,
                    use: [
                        'raw-loader',
                        'sass-loader'
                    ],
                    exclude: /node_modules/
                },
                {
                    test: /\.(png|jpg|gif)$/,
                    use: [{
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]'
                        }
                    }]
                }
            ]
        },
        plugins: [
            new CheckerPlugin(),
            new HtmlWebpackPlugin({
                template: './index.html',
                filename: "./index.html"
            }),
            new MiniCssExtractPlugin({
                filename: "[name].css",
                chunkFilename: "[id].css"
            })
        ],
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx']
        },
        optimization: {
            minimizer: [new UglifyJsPlugin()]
        },
        devServer: {
            overlay: true,
            contentBase: path.join(__dirname, 'dist'),
            compress: true,
            port: 9000
        },
        devtool: isDevMode
            ? 'eval-source-map'
            : false
    }

    return config;
}