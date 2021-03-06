const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    firstName : { type: String, required : true },
    lastName : { type: String, required : true },
    email : { type: String, required : true, unique: true },
    phone : { type: Number, required : true },
    imagePath : { type: String, required : true }
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('users', userSchema);