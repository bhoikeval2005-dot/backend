const mongoosh =require('mongoose')
const Schema = mongoosh.Schema;

const stateSchema = new Schema({
    stateName:{
        type:String,
        required:true
    },
    countryName:{
        type:String,
        required:true
    }
})
module.exports = mongoosh.model("states",stateSchema)