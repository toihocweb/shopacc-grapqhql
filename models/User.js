const mongoose = require('mongoose')
const Schema = mongoose.Schema


const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required
    },
    password: {
        type: String,
        required: true
    },
    accounts: {
        type: Array,
    }

})

module.exports = mongoose.model('User', UserSchema)