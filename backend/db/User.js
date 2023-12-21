const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
});
// exports hota hai ***
module.exports = mongoose.model("users",UserSchema);
