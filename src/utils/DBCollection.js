const mongoosh=require('mongoose')


const dbcollction = ()=>{

    mongoosh.connect("mongodb://127.0.0.1:27017/2026_learning").then(()=>{
        console.log("db connected")
    }).catch((err)=>{
        console.log("db not connected",err)
    })
}
module.exports = dbcollction