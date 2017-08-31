const PROD = process.env.NODE_ENV === 'production';   // 是否生产环境
const path = require('path');
const Koa = require('koa');
const config = require('config');
const serve = require('koa-static');
const tplSetting = require('./lib/tplSetting.js');
const render = require('./lib/render.js');
const router = require('./lib/router.js');
const KWM = require('koa-webpack-middleware');
const favicon = require('koa-favicon');
const chalk = require('chalk');
// const connectDB = require('./lib/connectDB');

const devMiddleware = KWM.devMiddleware;
const hotMiddleware = KWM.hotMiddleware;
const app = new Koa();
const port = config.get('port');
const publicPath = config.get('publicPath');

// connectDB();

// hot reload
if (!PROD) {
    const webpack = require('webpack');
    const webpackConfig = require('./webpack.config');
    const compile = webpack(webpackConfig);
    app.use(devMiddleware(compile, {
        noInfo: true,
        publicPath
    }));
    app.use(hotMiddleware(compile));
}

// koa-ejs参数设置
tplSetting(app, __dirname);

// favicon
app.use(favicon(path.join(__dirname, 'favicon.ico')));

// 静态资源
app.use(serve(path.join(__dirname, publicPath)));

// 模板渲染
app.use(render);

// 路由配置 || 假数据
app.use(router);

app.listen(port);

