const mongoose = require('mongoose');

var houseSchema = mongoose.Schema({
        Address: {
            type: String,
            required: true
        },
        NumRooms: {
            type: String,
            required: true
        },
        photo: {
            type: String,
            required: false
        }
});
module.exports = mongoose.model('house',houseSchema);