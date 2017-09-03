const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let schema = new Schema({
    name: String,          // 文件 || 文件夹名称
    type: String,          // 'file' or 'folder'
    url: String,           // 地址
    extention: String,     // 文件后缀
    category: String,      // 所属分类，对应电子书，照片，其他文件
    chilren: Array,        // 子文件，如果是文件夹的话
    isFirstLevel: Boolean  // 是否一级目录文件
})

let File = mongoose.model('File', schema);

module.exports = File;