const express = require('express')
const server = express()
const usersroutes = require('./routes/usersroutes')
const adminroutes = require('./routes/adminroutes')
const registerroutes = require('./routes/registerroutes')
const loginroutes = require('./routes/loginroutes')
const mongoose = require('mongoose')
const cors = require('cors')
const volunteerroutes = require('./routes/volunteerroutes')
const productsroutes = require('./routes/productsroutes')
const cartroutes = require('./routes/cartroutes')
server.use(cors())
server.use(express.json())
server.use(express.urlencoded({extended:true}))
require("dotenv").config()


mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

    .then(() => {
        console.log('Database Connected')
    })
    .catch((err) => {
        console.log(err)
    })



server.use('/api/user', usersroutes)
server.use('/api/admin', adminroutes)
server.use('/api/register', registerroutes)
server.use('/api/volunteer', volunteerroutes)
server.use('/api/login', loginroutes)
server.use('/api/product',productsroutes)
server.use('/api/cart',cartroutes)








server.listen(process.env.PORT, () => {
    console.log(`Server Started on ${process.env.PORT}`)
})