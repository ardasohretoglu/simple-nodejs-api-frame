const express = require('express')

const { getAllEmployees } = require('../controlles/employee') 

const router = express.Router()

router.get("/", getAllEmployees)



module.exports = router;