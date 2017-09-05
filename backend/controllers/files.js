const FileModel = require('../models/files');

const fileController = {
    addFile(file) {
        let instance = new FileModel(file);
        return instance.save();
    },
    getFileList(folderId) {
        const list = FileModel.getFileListByFolderId(folderId);
        return list;
    }
};

module.exports = fileController;
