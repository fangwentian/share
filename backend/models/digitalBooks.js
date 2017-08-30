var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var digitalBooksSchema = new Schema({
    name: String,
    url: String
})

var DigitalBooks = mongoose.model('DigitalBooks', digitalBooksSchema);

module.exports = DigitalBooks;