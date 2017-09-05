const router = require('koa-router')();
const fileController = require('../backend/controllers/files');

router.post('/upload', async (ctx) => {
    ctx.body = {
        code: 200,
        message: 'success',
        url: 'https://haitao.nos.netease.com/76a00512-7522-4d4f-a7fd-ea9cac79adc0.png'
    };
});

router.post('/getFileList', async (ctx) => {
    const { folderId } = ctx.request.body;
    try {
        // 查找某个文件夹下的文件
        const list = await fileController.getFileList(folderId);
        ctx.body = {
            code: 200,
            message: 'success',
            result: {
                list
            }
        };
    } catch (e) {
        ctx.body = {
            code: 500,
            message: e
        };
    }
});

router.post('/addFolder', async (ctx) => {
    try {
        let file = await fileController.addFile(ctx.request.body);
        ctx.body = {
            code: 200,
            message: 'success',
            result: {
                file
            }
        };
    } catch (e) {
        ctx.body = {
            code: 500,
            message: e
        };
    }
});

router.post('/addFile', async (ctx) => {

});

module.exports = router;
