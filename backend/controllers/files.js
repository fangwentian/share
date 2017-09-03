const FileModel = require('../models/files');

module.exports = {
    async addFolder(file) {
        let instance = new FileModel(file);
        await instance.save();
    }
}