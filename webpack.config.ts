import CopyWebpackPlugin from 'copy-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'

import path from 'path'
import webpack from 'webpack'
import { Configuration as DevServerConfiguration } from 'webpack-dev-server'

type WebpackConfig = webpack.Configuration & { devServer?: DevServerConfiguration }


export default (_: any, options: any): WebpackConfig => {
    const HOST = process.env.HOST ?? 'localhost'
    const PORT = parseInt(process.env.PORT ?? '3000', 10)
    const hmrDisabled = false;

    const isProduction = options.mode === 'production'
    const isDevelopment = options.mode === 'development'
    const  WebpackBundleAnalyzer = require( 'webpack-bundle-analyzer').BundleAnalyzerPlugin;
    const config: WebpackConfig = {}

    /*
     * -------------------------------------------------------------
     * Entry points
     * -------------------------------------------------------------
     */

    config.entry = {
        '/index': path.resolve(__dirname, 'src/index'),
        // "/donation": path.resolve(__dirname, 'src/index'),
        // "/EVERswap":  path.resolve(__dirname, 'src/index'),
        // "/swap": "path.resolve(__dirname, 'src/index')",
        // "/donation/auction": path.resolve(__dirname, 'src/index'),
    }

    /*
     * -------------------------------------------------------------
     * Output
     * -------------------------------------------------------------
     */

    config.output = {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    }

    /*
     * -------------------------------------------------------------
     * Optimization
     * -------------------------------------------------------------
     */

    config.optimization = isDevelopment ? {
        splitChunks: {
            cacheGroups: {
                default: false,
                vendors: false,
            },
        },
    } : {
        splitChunks: {
            cacheGroups: {
                default: false,
                vendors: false,
            },
        },
    }

    /*
     * -------------------------------------------------------------
     * Plugins
     * -------------------------------------------------------------
     */

    config.plugins = []
    if (isDevelopment && !hmrDisabled) {
        config.plugins.push(new webpack.HotModuleReplacementPlugin())
    }

    config.plugins.push(
        new HtmlWebpackPlugin({
            title: 'DemeterGift',
            favicon: 'public/favicon.ico',
            filename: path.resolve(__dirname, 'dist/index.html'),
            template: 'public/index.html',
            inject: false,
        })
        , new HtmlWebpackPlugin({
            title: 'DemeterGift - Donation',
            favicon: 'public/favicon.ico',
            filename: path.resolve(__dirname, 'dist/donation/index.html'),
            template: 'public/index.html',
            inject: false,
        })
        , new HtmlWebpackPlugin({
            title: 'DemeterGift - Login',
            favicon: 'public/favicon.ico',
            filename: path.resolve(__dirname, 'dist/login/index.html'),
            template: 'public/index.html',
            inject: false,
        })
        , new HtmlWebpackPlugin({
            title: 'DemeterGift - Create Events',
            favicon: 'public/favicon.ico',
            filename: path.resolve(__dirname, 'dist/CreateEvents/index.html'),
            template: 'public/index.html',
            inject: false,
        })
        , new HtmlWebpackPlugin({
            title: 'DemeterGift - Auction',
            filename: path.resolve(__dirname, 'dist/donation/auction/index.html'),
            template: 'public/index.html',
            inject: false,
        }),

        new webpack.ProvidePlugin({
            process: "process"
        }),
        new webpack.ProvidePlugin({
            Buffer: ['buffer', 'Buffer'],
        }),
        
        // new WebpackBundleAnalyzer()

    )


    /*
     * -------------------------------------------------------------
     * Module
     * -------------------------------------------------------------
     */

    config.module = {
        rules: [
            {
                test: /\.(ts|tsx|js|jsx)$/i,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
                exclude: /node_modules/,               
            },
            {
                test: /\.(png|jpe?g|gif|webp|svg|woff2?)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        publicPath: '/',
                        outputPath: 'assets/',
                        esModule: false,
                        name: '[hash:16].[ext]',
                    },
                },
                exclude: /node_modules/,
            },
        ],
    }




    /*
     * -------------------------------------------------------------
     * Resolve
     * -------------------------------------------------------------
     */

    config.resolve = {
        alias: {
            '@': path.resolve(__dirname, 'src')
        },

        extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss', '.css'],

        modules: [
            path.resolve(__dirname, 'src'),
            'node_modules',
        ],
        fallback: {
            //fs: require.resolve('expo-file-system'),
            http: require.resolve('stream-http'),
            https: require.resolve('https-browserify'),
            // net: require.resolve('react-native-tcp'),
            // os: require.resolve('os-browserify/browser.js'),
            //path: require.resolve('path-browserify'),
            // stream: require.resolve('readable-stream'),
            "fs": false,
            "tls": false,
            "net": false,
            "path": false,
            "zlib": false,
            //"http":require.resolve("https-browserify"),
            //"https": require.resolve('https-browserify') ,
            "os": false,
            "assert": require.resolve("assert"),
            "os-browserify": require.resolve('os-browserify'), //if you want to use this module also don't forget npm i crypto-browserify 
            crypto: require.resolve('crypto-browserify'),
            stream: require.resolve('stream-browserify'),
            buffer: require.resolve('buffer'),

        }
    }
    config.externals = {
        "node:zlib": "{}",
        "node:util": "{}",
        "node:url": "{}",
        "node:stream": "{}",
        "node:stream/web": "{}",
        "node:process": "{}",
        "node:path": "{}",
        "node:net": "{}",
        "node:fs": "{}",
        "node:buffer": "{}",
        "node:https": require.resolve("https-browserify")
    }

    /*
     * -------------------------------------------------------------
     * Devtool
     * -------------------------------------------------------------
     */

    if (isDevelopment) {
        config.devtool = 'inline-source-map'
    }

    /*
     * -------------------------------------------------------------
     * Dev Server
     * -------------------------------------------------------------
     */

    if (isDevelopment) {
        config.devServer = {
            host: HOST,
            port: PORT,
            contentBase: [
                path.resolve(__dirname + '/dist'),
            ],
            inline: hmrDisabled ? false : true,
            hot: hmrDisabled ? false : true,
            quiet: false,
            historyApiFallback: true,
            stats: {
                colors: true,
            },
        }
    }

    if (isProduction) {
        config.devServer = {
            host: HOST,
            port: PORT,
                 contentBase: [
                path.resolve(__dirname + '/dist'),
            ],
            historyApiFallback: true,
        }
    }


    /*
     * -------------------------------------------------------------
     * Watch
     * -------------------------------------------------------------
     */

    if (isDevelopment) {
        config.watchOptions = {
            aggregateTimeout: 5,
            ignored: /node_modules/,
            poll: true,
        }
    }

    /*
     * -------------------------------------------------------------
     * Stats
     * -------------------------------------------------------------
     */

    config.stats = 'summary'

    return config
}
