const path = require('path');
const Koa = require('koa');
const config = require('config');
const serve = require('koa-static');
const tplSetting = require('./lib/tplSetting.js');
const render = require('./lib/render.js');
const router = require('./lib/router.js');

const app = new Koa();
const port = config.get('port');

// koa-ejs参数设置
tplSetting(app, __dirname);

// 静态资源
app.use(serve(path.join(__dirname, '/dist')));

// 模板渲染
app.use(render);

// 路由配置
app.use(router);

app.listen(port);
