const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let schema = new Schema({
    name: String,          // 文件 || 文件夹名称
    type: String,          // 'file' or 'folder'
    url: String,           // 地址
    parent: String,        // 所属的父文件夹 _id
});

schema.statics = {
    getFileListByFolderId(id) {
        const list = this.find({ parent: id });
        return list;
    }
};

let File = mongoose.model('File', schema);

module.exports = File;
