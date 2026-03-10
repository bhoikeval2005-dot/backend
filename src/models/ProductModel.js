const mongoose= require("mongoose")
const Schema = mongoose.Schema

const productSchema =new Schema({

    ProductName:{
       type :String
    },
    ProductPrice:{
       type :Number 
    },
    ProductColor:[{
       type :String
    }],
    ProductSize:{
      enum:["L","XL","X","3XL"],
      type:String
    }
})
module.exports= mongoose.model("products",productSchema)