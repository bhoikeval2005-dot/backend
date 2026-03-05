const express =require("express");
const app=express();

 app.use(express.json())
 
const dbcollection=require("./src/utils/DBCollection")
dbcollection()

const productRoutes =  require("./src/routes/ProductRoutes")
app.use("/prod",productRoutes)
                                       
const PORT=3000;
app.listen(PORT,()=>{
    console.log(`server start on port ${PORT}`)
})
