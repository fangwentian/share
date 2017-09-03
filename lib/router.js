const router = require('koa-router')();

router.post('/upload', async (ctx, next) => {
    ctx.body = {
        code: 200,
        message: 'success',
        url: 'https://haitao.nos.netease.com/76a00512-7522-4d4f-a7fd-ea9cac79adc0.png'
    };
})

router.post('/addFolder', async (ctx, next) => {
    ctx.body = {
        code: 200,
        message: 'success'
    };
})

module.exports = router;
