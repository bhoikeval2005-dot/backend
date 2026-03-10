const mongoose = require('mongoose')
const Schema = mongoose.Schema

const citySchema = new Schema({
    
     cityName:{
        type:String
    },
    cityPincode:{
        type:Number

    }

})

module.exports = mongoose.model("city",citySchema)



   
