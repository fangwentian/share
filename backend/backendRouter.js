const router = require('koa-router')();
const nos = require('../lib/nos');
const fileController = require('./controllers/files');
const multer = require('koa-multer')();

router.post('/upload', multer.single('file'), async (ctx) => {
    let result = await nos(ctx.request.body.files.file);
    ctx.body = {
        code: 200,
        message: 'success',
        name: result.name,
        url: result.url
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
        let folder = await fileController.addFolder(ctx.request.body);
        ctx.body = {
            code: 200,
            message: 'success',
            result: {
                folder
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
    try {
        let fileList = await fileController.addFile(ctx.request.body);
        ctx.body = {
            code: 200,
            message: 'success',
            result: {
                fileList
            }
        };
    } catch (e) {
        ctx.body = {
            code: 500,
            message: e
        };
    }
});

router.post('/deleteFile', async (ctx) => {
    try {
        await fileController.deleteFile(ctx.request.body.fileId);
        ctx.body = {
            code: 200,
            message: 'success'
        };
    } catch (e) {
        ctx.body = {
            code: 500,
            message: e
        };
    }
});

router.post('/getBreadcrumb', async (ctx) => {
    try {
        let breadcrumb = await fileController.getBreadcrumb(ctx.request.body.folderId);
        ctx.body = {
            code: 200,
            message: 'success',
            result: {
                breadcrumb
            }
        };
    } catch (e) {
        ctx.body = {
            code: 500,
            message: e
        };
    }
});

router.post('/searchFileList', async (ctx) => {
    try {
        let list = await fileController.searchFileList(ctx.request.body.keyWords || '');
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

router.post('/getAllFiles', async (ctx) => {
    try {
        let list = await fileController.getAllFiles();
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

router.post('/move', async (ctx) => {
    try {
        let { file, targetFolder } = ctx.request.body;
        await fileController.moveFile(file, targetFolder);
        ctx.body = {
            code: 200,
            message: 'success'
        };
    } catch (e) {
        ctx.body = {
            code: 500,
            message: e
        };
    }
});

router.post('/rename', async (ctx) => {
    try {
        let { fileId, newName } = ctx.request.body;
        await fileController.renameFile(fileId, newName);
        ctx.body = {
            code: 200,
            message: 'success'
        };
    } catch (e) {
        ctx.body = {
            code: 500,
            message: e
        };
    }
});

module.exports = router;
