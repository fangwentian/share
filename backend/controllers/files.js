const FileModel = require('../models/files');

const fileController = {
    addFile(fileList) {
        return fileList.map(async (file) => {
            let instance = new FileModel(file);
            let res = await instance.save();
            return res;
        });
    },
    addFolder(folder) {
        let instance = new FileModel(folder);
        let res = instance.save();
        return res;
    },
    getFileList(folderId) {
        const list = FileModel.getFileListByFolderId(folderId);
        return list;
    }
};

module.exports = fileController;
