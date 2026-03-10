const router = require('express').Router()
const cityController=require("../controllers/CityController")
router.get("/allcity",cityController.getAllCity)
router.get("/citys/:id",cityController.getCityById)
router.post("/addcity",cityController.addCity)
router.delete("/deletecity/:id",cityController.deleteCityById)
module.exports = router