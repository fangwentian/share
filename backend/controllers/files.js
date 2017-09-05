const FileModel = require('../models/files');

const fileController = {
    addFile(file) {
        let instance = new FileModel(file);
        let res = instance.save();
        return res;
    },
    getFileList(folderId) {
        const list = FileModel.getFileListByFolderId(folderId);
        return list;
    }
};

module.exports = fileController;
