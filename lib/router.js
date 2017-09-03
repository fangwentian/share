const router = require('koa-router')();
const fileController = require('../backend/controllers/files');

router.post('/upload', async ctx => {
    ctx.body = {
        code: 200,
        message: 'success',
        url: 'https://haitao.nos.netease.com/76a00512-7522-4d4f-a7fd-ea9cac79adc0.png'
    };
})

router.post('/addFolder', async ctx => {
    // const { name, type, category, children, isFirstLevel } = ctx.request.body;
    console.log(ctx.request.body)
    console.log(fileController)
    await fileController.addFolder(...ctx.request.body);
    ctx.body = {
        code: 200,
        message: 'success'
    };
})

module.exports = router;
