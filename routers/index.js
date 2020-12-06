const express = require("express")

const router = express.Router()

const employee = require('./employee')
const auth = require('./auth');



router.use("/employee",employee)
router.use("/auth",auth)

module.exports = router;