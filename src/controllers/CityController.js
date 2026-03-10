const citySchema = require("../models/CityModel")

const getAllCity = async (req, res) => {
    const citys = await citySchema.find()

    res.json({
        message: "all city data",
        data: citys
    })
}

const getCityById = async (req, res) => {
    const findCity = await citySchema.findById(req.params.id)

    if (findCity) {
        res.json({
            message: "city is found",
            data: findCity
        })
    } else {
        res.json({
            message: "city is not found",

        })
    }
}

const addCity = async (req, res) => {
    const cityAdd = await citySchema.create(req.body)

   
        res.status(201).json({
            message: "city is add",
            data: cityAdd
        })
} 

const deleteCityById = async(req,res)=>{
    const deleteCityObj = await citySchema.findByIdAndDelete(req.params.id)
    if(deleteCityObj){
        res.json({
        message:"city is deleted",
        data:deleteCityObj
    })
    }else(
        res.json({
        message:"city is not avaible",
        
    })
    )
}
    


module.exports = {
    getAllCity,
    getCityById,
    addCity,
    deleteCityById
}