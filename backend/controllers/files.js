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
    async addFolder(folder) {
        let instance = new FileModel(folder);
        let res = instance.save();
        return res;
    },
    async getFileList(folderId) {
        return FileModel.find({ parent: folderId });
    },
    async getAllFiles() {
        const list = FileModel.find();
        return list;
    },
    async searchFileList(keyWords) {
        let regx = new RegExp(keyWords, 'i');
        const list = FileModel.find({ name: { $regex: regx }, type: 'file' });
        return list;
    },
    async deleteFile(fileId) {
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
    },
    async moveFile(file, targetFolder) {
        return FileModel.update({ _id: file._id }, { $set: { parent: targetFolder._id } });
    }
};

module.exports = fileController;
