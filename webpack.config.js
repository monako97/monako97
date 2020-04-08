const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    mode: 'production',
    entry: [
        path.resolve(__dirname, "./src/index.js"),
    ],
    optimization: {
        splitChunks: {
            chunks: "async",
            minSize: 30000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    minSize: 30000,
                    minChunks: 1,
                    chunks: 'all',
                    priority: 1
                },
                commons: {
                    test: /[\\/]src[\\/]/,
                    name: 'commons',
                    minSize: 30000,
                    minChunks: 2,
                    chunks: 'all',
                    priority: -1,
                    reuseExistingChunk: true
                }
            }
        },
        runtimeChunk: {
            name:'index'
        },
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true,
                extractComments: {
                    condition: true,
                    filename(file) {
                        return `${file}.LICENSE`;
                    },
                    banner(commentsFile) {
                        return null;
                    }
                }, // 移除注释
                uglifyOptions: {
                    warnings: false,
                    ecma: 8,
                    compress: {
                        unused: true,
                        drop_console: true,
                        drop_debugger: true
                    },
                    output: {
                        comments: false
                    }
                }
            }),
            // 用于优化css文件
            new OptimizeCSSAssetsPlugin({
                cssProcessor: require('cssnano'),
                cssProcessorOptions: {
                    safe: true,
                    autoprefixer: { disable: true },
                    mergeLonghand: true,
                    discardComments: {
                        removeAll: true
                    }
                },
                canPrint: true
            })
        ]
    },
    plugins: [
        // 压缩 css
        new MiniCssExtractPlugin({
            filename: "[name].min.css"
        }),
        new CopyWebpackPlugin([{from: path.resolve(__dirname, './src/fonts'), to: 'fonts'}])
    ],
    resolve: {
        extensions: ['.js', '.scss', '.jsx', 'css'],
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc)ss$/,
                use: [
                    process.env.NODE_ENV === 'development' ? 'style-loader' : {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'development',
                            modules: true,
                            publicPath: '../'
                        },
                    },
                    {
                        loader: "css-loader",
                        options: {
                            // modules：启用模块化
                            modules: {
                                // localIdentName：自定类名 [path] ：使用文件路径, [name]：文件名称
                                localIdentName: "[name]-[hash:5]"
                            }
                        }
                    },
                    "sass-loader",
                    'postcss-loader'
                ],
                exclude: /node_modules/, // 排除项
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: false,
                            modules: false,
                            publicPath: '../'
                        },
                    },
                    "css-loader",
                    "sass-loader",
                    'postcss-loader'
                ],
                exclude: /node_modules/, // 排除项
            },
            {
                test: /\.(eot|ttf|woff|woff2|svg|mp4)$/,
                loader: 'url-loader',
                options: {
                    limit: 5000,
                    name: 'fonts/[name].[ext]'
                },
                exclude: /node_modules/, // 排除项
            },
            {
                test: /\.js|.jsx$/,
                exclude: /node_modules/, // 排除项
                loader: ['babel-loader'],
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './[name].js',
        chunkFilename: './[name].js',
    }
};
