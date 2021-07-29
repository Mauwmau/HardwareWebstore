const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    phone: {
        type: Number,
    },
    address: {
        type: String,
    },
    password: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('User', schema);