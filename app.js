const path = require('path');
const koa = require('koa');
const config = require('config');
const tplSetting = require('./lib/tplSetting.js');
const render = require('./lib/render.js');
const router = require('./lib/router.js');
const app = new koa();
const port = config.get('port');

// koa-ejs参数设置
tplSetting(app, __dirname);

// 模板渲染
app.use(render);

// 路由配置
app.use(router);

app.listen(port);
