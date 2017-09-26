const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let schema = new Schema({
    // 文件 || 文件夹名称
    name: {
        type: String,
        required: true
    },
    // file or folder
    type: {
        type: String,
        required: true
    },
    // 地址
    url: {
        type: String,
    },
    // 所属的父文件夹 _id
    parent: {
        type: String,
        required: true
    },
    // 文件的MIME type
    fileType: {
        type: String
    }
});

schema.statics = {
    
};

let File = mongoose.model('File', schema);

module.exports = File;
