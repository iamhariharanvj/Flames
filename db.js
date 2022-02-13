const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    nameOne: String,
    nameTwo: String,
    answer: String,

})

const User = mongoose.model('User', userSchema);
module.exports = User;