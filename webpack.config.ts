import CopyWebpackPlugin from 'copy-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
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

    const config: WebpackConfig = {}

    /*
     * -------------------------------------------------------------
     * Entry points
     * -------------------------------------------------------------
     */

    config.entry = {
         '/index': path.resolve(__dirname, 'src/index'),
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

    config.optimization = {
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
        })
    )
    
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
            http: require.resolve('stream-http'),
            https: require.resolve('https-browserify'),
           "fs":false,
            "tls": false,
            "net": false,
            "path": false,
            "zlib": false,
            "os": false,
            "assert": require.resolve("assert"),
            "os-browserify": require.resolve('os-browserify'), //if you want to use this module also don't forget npm i crypto-browserify 
            crypto: require.resolve('crypto-browserify'),
            stream: require.resolve('stream-browserify'),
            buffer: require.resolve('buffer'),
        
        }
    }
    
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
                    'css-loader',
                    'sass-loader',
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader',

                    'sass-loader',
                ],
                include: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader',
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
                        esModule: true,
                    },
                },
                exclude: /node_modules/,
            },
        ],
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
