const mongoose = require ('mongoose');

const ProductSchema = new mongoose.Schema({
    name:String,
    Price:String,
    Category:String,
    userId:String,
    Company: String
});

module.exports = mongoose.model("Products",ProductSchema);