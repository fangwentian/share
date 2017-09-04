const config = require('config');
const mongoose = require('mongoose');
const dbUri = config.get('db');

module.exports = function() {
    const db = mongoose.connect(dbUri);
}