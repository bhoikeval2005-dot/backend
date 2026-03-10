const { request } = require("express")
const productSchema = require("../models/ProductModel")


const getAllProduct =async(req,res)=>{

 const allProducts = await productSchema.find()
  
     res.json({
        Message:"all product",
        data:allProducts
     })
}

const getProductById = async(req,res)=>{
    
    const foundProduct = await productSchema.findById(req.params.id)
    if(foundProduct){
        res.json({
            Message:"product found",
            data:foundProduct
        })
    }else{
        res.json({
            Message:"product not found"
        })
    }
}

const addProduct = async(req,res)=>{
    const savedProduct = await productSchema.create(req.body)
    res.status(201).json({
        Message:"product saved",
        data:savedProduct
    })

}
const deleteProduct = async(req,res)=>{
    
    const deleteProductObj = await productSchema.findByIdAndDelete(req.params.id)
    if(deleteProductObj){
        res.json({
            message:"product has been deleted",
            data:deleteProduct
        })
    }else{
        res.json({
            message:"product not found"
            
        })
    }
}

const updateProduct = async(req,res)=>{
    const updateObj = await productSchema.findByIdAndUpdate(req.params.id,req.body,{ returnDocument: "after" })
    res.status(300).json({
        message:"product is updated",
        data:updateObj
    })
}

module.exports = {
    
    getAllProduct,
    getProductById,
    addProduct,
    deleteProduct,
    updateProduct
}