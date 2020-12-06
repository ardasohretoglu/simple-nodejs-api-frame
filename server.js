const express = require('express')
const dotenv = require("dotenv")

const connectDatabase = require('./helpers/database/connectDatabase')

const customErrorHandler = require('./middlewares/errors/customErrorHandler')

const routers = require("./routers")




// Environment Variables
dotenv.config({
    path:"./config/env/config.env"
});

//MongoDb Connection
connectDatabase()


const app = express()

//Express - Body Middleware
app.use(express.json());

const PORT = process.env.PORT



//routers middleware
app.use("/api",routers);


app.use(customErrorHandler)

app.listen(PORT, () => {
    console.log(`App staerted on ${PORT} : ${process.env.NODE_ENV} `)
})