const stateSchema = require("../models/StateModel")

const getAllState = async(req,res)=>{
    const allState = await stateSchema.find()
    res.json({
        message:"all state is clear",
        data:allState
    })
}
const getStateById = async(req,res)=>{
    const findState = await stateSchema.findById(req.params.id)
    if(findState){res.json({
        message:"state is found",
        data:findState
    })}else{
        res.json({
            message:"state is no found"
        })
    }
}
const addState =async(req,res)=>{
    const savedState = await stateSchema.create(req.body)
    res.status(201).json({
        message:"State is saved",
        data:savedState
    })
}
const deleteState = async(req,res)=>{
    const deleteStateObj = await stateSchema.findByIdAndDelete(req.params.id)
    if(deleteStateObj){
        res.status(202).json({
            message:"state is deleted",
            data:deleteStateObj
        })
    }else{
        res.status(501).json({
            message:"state is not found"
        })
    }
}
module.exports ={
    getAllState,
    getStateById,
    addState,
    deleteState
}
