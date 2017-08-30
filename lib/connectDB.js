const mongoose = require('mongoose');
const db = mongoose.connect('mongodb://localhost/test');

module.exports = function() {
    var Cat = mongoose.model('Cat', { name: String });
    var kitty = new Cat({ name: 'Zildjian' });
    kitty.save(function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log('meow');
        }
    });
}