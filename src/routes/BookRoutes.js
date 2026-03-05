const router = require("express").Router()
const bookControler = require("../controllers/BookControler")
router.get("/books",bookControler.getAllBooks)
router.get("/book/:id",bookControler.getBookById)
router.post("/addbooks",bookControler.addBooks)
router.delete("/deletebook/:id",bookControler.deleteBooksById)

module.exports = router