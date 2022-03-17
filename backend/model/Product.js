const { mongoose } = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: {type: String, required: true}, 
    brand: {type: String},
    price: {type: Number ,required: true },
    description: {type: String},
}, {collection: 'users'})

//mongoose.model('Product', ProductSchema)

const Product = mongoose.model('Procduct', ProductSchema)
module.exports = Product