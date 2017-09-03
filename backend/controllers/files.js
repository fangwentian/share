const FileModel = require('../models/files');

const fileController = {
    async addFolder(file) {
        let instance = new FileModel(file);
        await instance.save();
    }
}

module.exports = fileController;