const router = require("express").Router(), 
contactRoutes = require("./contactRoutes");

/* GET home page. */
router.use("/", contactRoutes)

module.exports = router;
