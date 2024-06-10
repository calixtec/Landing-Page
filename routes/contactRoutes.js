const router = require("express").Router()
homeController = require("../controllers/homeController");
//requires the relative userRoutes file
// userRoutes = require("./userRoutes")
//returns index homecontroller
// router.get("/",  homeController.addUser, homeController.indexView);
router.get("/",  homeController.index, homeController.indexView);
router.post("/submit",homeController.addUser)

//defines namespace

//exports it to be used elsewhere
module.exports = router;