const config = require('config');
const mongoose = require('mongoose');
const dbUri = config.get('db');
const db = mongoose.connect(dbUri);

module.exports = function() {
    var Cat = mongoose.model('Cat', { name: String, createTime: String });
    var kitty = new Cat({ name: 'miao', createTime: +new Date() });
    kitty.save(function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log('meow');
        }
    });
}