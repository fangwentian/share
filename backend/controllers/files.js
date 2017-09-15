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
        const list = FileModel.find({ parent: folderId });
        return list;
    },
    getAllFiles() {
        const list = FileModel.find();
        return list;
    },
    searchFileList(keyWords) {
        let regx = new RegExp(keyWords);
        const list = FileModel.find({ name: { $regex: regx }, type: 'file' });
        return list;
    },
    deleteFile(fileId) {
        return FileModel.remove({ _id: fileId });
    },
    async getBreadcrumb(folderId, breadCrumb) {
        if (!breadCrumb) {
            breadCrumb = [];
        }
        if (!/^[0-9a-fA-F]{24}$/.test(folderId)) {
            return breadCrumb;
        }
        let list = await FileModel.find({ _id: folderId, type: 'folder' });
        let folder = list[0];
        breadCrumb.push(folder);

        if (folder.parent && ['1', '2', '3'].indexOf(`${folder.parent}`) === -1) {
            return this.getBreadcrumb(folder.parent, breadCrumb);
        }
        return breadCrumb;
    }
};

module.exports = fileController;
