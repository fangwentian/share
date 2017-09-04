const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let schema = new Schema({
    name: String,          // 文件 || 文件夹名称
    type: String,          // 'file' or 'folder'
    url: String,           // 地址
    extention: String,     // 文件后缀, 若文件名不可修改的话，这个字段可以不要
    category: String,      // 所属分类，对应 1:电子书，2:照片，3:其他文件
    chilren: Array,        // 子文件，如果是文件夹的话
    isFirstLevel: Boolean  // 是否一级目录文件
})

schema.statics = {
    async getFileList() {
        return await this.find();
    }
}

let File = mongoose.model('File', schema);

module.exports = File;