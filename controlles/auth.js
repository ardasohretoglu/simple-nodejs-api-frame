const User = require('../models/User')

const asyncErrorWrapper = require("express-async-handler")

const register = asyncErrorWrapper(async (req,res,next) =>{

    const body = req.body

        const user = await User.create(body)
        res.status(200).json({
            success: true,
            data : user
        })
   
    
})

module.exports = {
    register
}