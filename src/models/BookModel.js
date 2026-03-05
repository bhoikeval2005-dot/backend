const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BookSchema = new Schema({

        bookName:{
            type:String
        },
        bookPrice:{
            type:Number
        },
    
})

module.exports= mongoose.model("book",BookSchema)