const render = require('koa-ejs');
const config = require('config');
const path = require('path');

module.exports = (app, baseName) => {
    render(app, {
        root: path.join(baseName, config.get('templateRoot')),
        layout: false,
        viewExt: 'html',
        cache: true,
        debug: false
    });
};
