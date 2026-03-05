const BookSchema = require("../models/BookModel")

const getAllBooks = async(req,res)=>{

    const allBooks = await BookSchema.find()

    res.json({
        message:"all product",
        data:allBooks
    })
}

const getBookById = async(req,res)=>{
const findbook = await  BookSchema.findById(req.params.id)

    if(findbook){
        res.json({
        message:"book has found",
        data:findbook
    })
    }else(
        res.json({
        message:"book has  not found",
       
    })
    )

}
const addBooks =async(req,res)=>{
    const savedBooks = await BookSchema.create(req.body)
 
     res.status(202).json({
            message:"books has been add",
            data:savedBooks
        })
    
}
const deleteBooksById = async(req,res)=>{
    const deleteBooksobj = await BookSchema.findByIdAndDelete(req.params.id)
    if(deleteBooksobj){
        res.status(301).json({
            message:"book is deleted"
        })
    }else(
        res.json({
            message:"book is not found"
        })
    )
}
module.exports = {
    getAllBooks,
    getBookById,
    addBooks,
    deleteBooksById
}