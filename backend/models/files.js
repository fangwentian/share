const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let schema = new Schema({
    name: String,          // 文件 || 文件夹名称
    type: String,          // 'file' or 'folder'
    url: String,           // 地址
    extention: String,     // 文件后缀, 若文件名不可修改的话，这个字段可以不要
    parent: String,        // 所属的父文件夹 _id
    chilren: Array,        // 子文件，如果是文件夹的话
});

schema.statics = {
    async getFileList() {
        const list = await this.find();
        return list;
    }
};

let File = mongoose.model('File', schema);

module.exports = File;
