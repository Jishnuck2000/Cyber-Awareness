const express = require('express')
const server = express()
const usersroutes = require('./routes/usersroutes')
const adminroutes = require('./routes/adminroutes')
const registerroutes = require('./routes/registerroutes')
const loginroutes = require('./routes/loginroutes')
const mongoose = require('mongoose')
const cors = require('cors')
const volunteerroutes = require('./routes/volunteerroutes')
server.use(cors())
server.use(express.json())
server.use(express.urlencoded({extended:true}))


mongoose.connect('mongodb+srv://jeochirrakkal26:jishnu123@cybersecurity.bm4aee8.mongodb.net/CyberSecurity',{
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







const port = 1111;
server.listen(port, () => {
    console.log(`Server Started on ${port}`)
})