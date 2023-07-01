const mongoose = require ('mongoose')

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        unique: true,
        require: true
    },
    class:{
        type:String,
        unique: true,
        require: true
    },
    price:{
        type: Number,
        require: true

    },
   
})

const Product = mongoose.model('Product', productSchema)
module.exports = Product
