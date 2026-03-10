 const router = require("express").Router()
 const productcontroller= require("../controllers/ProductControler")
 router.get("/products",productcontroller.getAllProduct)
 router.get("/product/:id",productcontroller.getProductById)
 router.post("/addproduct",productcontroller.addProduct)
 router.delete("/deleteproduct/:id",productcontroller.deleteProduct)
 router.put("/updateproduct/:id",productcontroller.updateProduct)
 module.exports = router