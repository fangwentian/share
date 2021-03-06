const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const PROD = process.env.NODE_ENV === 'production';

module.exports = {
    entry: {
        index: PROD ?
            './public/src/javascript/page/index/index/index' :
            [
                'eventsource-polyfill',
                'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
                './public/src/javascript/page/index/index/index'
            ],
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js',
            root: path.join(__dirname, 'public'),
            jsComp: path.join(__dirname, 'public/src/javascript/components'),
            jsModules: path.join(__dirname, 'public/src/javascript/modules'),
            jsUtil: path.join(__dirname, 'public/src/javascript/util')
        },
        extensions: ['.js', '.vue', '.json'],
        modules: [path.join(__dirname, 'public'), 'node_modules']
    },
    devtool: PROD ? 'cheap-source-map' : 'source-map',
    output: {
        publicPath: PROD ? '/' : '/dist/',
        path: path.join(__dirname, 'dist'),
        filename: PROD ? 'javascript/[name]-[hash].js' : 'javascript/[name].js'
    },
    module: {
        rules: [
            { test: /\.js|jsx$/, loader: 'babel-loader', include: [path.join(__dirname, 'public')] },
            { test: /\.html$/, loader: 'raw-loader' },
            { test: /\.css$/, loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader'] }) },
            { test: /\.less$/, loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader', 'less-loader'] }) },
            { test: /\.json$/, use: 'json-loader' },
            { test: /\.vue$/, use: 'vue-loader' },
            { test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/, loader: 'file-loader' }
        ]
    },
    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons',
            minChunks: 2
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'template/index.html'),
            filename: 'template/index.html',
            inject: true,
            chunks: ['commons', 'index']
        }),
        new ExtractTextPlugin(PROD ? '[name]-[contenthash].css' : '[name].css'),
        new CleanWebpackPlugin(['dist'], {
            verbose: true
        })
    ].concat(PROD ? [
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false }
        })
    ] : []),
    watch: !PROD
};
