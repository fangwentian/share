const FileModel = require('../models/files');

const fileController = {
    async addFile(fileList) {
        let list = [];
        for (let file of fileList) {
            let instance = new FileModel(file);
            let res = await instance.save();
            list.push(res);
        }
        return list;
    },
    addFolder(folder) {
        let instance = new FileModel(folder);
        let res = instance.save();
        return res;
    },
    getFileList(folderId) {
        const list = FileModel.getFileListByFolderId(folderId);
        return list;
    },
    deleteFile(fileId) {
        return FileModel.remove({ _id: fileId });
    }
};

module.exports = fileController;
