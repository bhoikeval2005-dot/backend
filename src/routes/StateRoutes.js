const router = require("express").Router()
const stateController = require("../controllers/Statecontroller")
router.get("/allstates",stateController.getAllState)
router.get("/states/:id",stateController.getStateById)
router.post("/addstate",stateController.addState)
router.delete("/deletestate/:id",stateController.deleteState)
module.exports = router