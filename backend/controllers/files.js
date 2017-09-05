const FileModel = require('../models/files');

const fileController = {
    async addFile(file) {
        let instance = new FileModel(file);
        await instance.save();
    },
    async getFileList(folderId) {
        const list = await FileModel.getFileList(folderId);
        return list;
    }
};

module.exports = fileController;
