const mongoose = require('mongoose');

var schema = new mongoose.Schema({ //to create mongooose schema it allow us to define the document 
    name : {
        type : String,
        required: true
    },
    author : {
        type: String,
        required: true,
        unique: true
    },
    price : Number,
    status : String
})

const Bookdb = mongoose.model('bookdb', schema);

module.exports = Bookdb;