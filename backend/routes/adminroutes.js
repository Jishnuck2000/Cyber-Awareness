const express = require('express')
const adminroutes = express.Router()
const complaint = require('../models/complaintschema')


//add

adminroutes.post('/addcomplaint', (req, res) => {
    const Data = new complaint({
        
        Name: req.body.Name,
        Age: req.body.Age,
        Address:req.body.Address,
        Phone_no: req.body.Phone_no,
        Email: req.body.Email,
        Discription:req.body.Discription,

    })

    Data.save()
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            res.send(err)
        })
})

//view

adminroutes.get('/view', (req, res) => {
    complaint.find()
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            res.send(err)
        })
})

//view one

adminroutes.get('/view/:id', (req, res) => {
    complaint.findOne({
        _id: req.params.id,
    })
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            res.send(err)
        })
})


// Delete One

adminroutes.delete('/delete/:id', (req, res) => {
    complaint.deleteOne({
        _id: req.params.id
    })
        .then(() => {
            res.send('Deleted Successfully')
        })
        .catch((err) => {
            res.send(err)
        })
})


// Update One

adminroutes.put('/update/:id', (req, res) => {
    complaint.findOne({
        _id: req.params.id,
    })
        .then((data) => {
            data.Name=req.body.Name,
                data.Age=req.body.Age,
                data.Address=req.body.Address,
                data.Phone_no=req.body.Phone_no,
                data.Email=req.body.Email,
                data.Discription=req.body.Discription,
            data.save()
                .then((data) => {
                    res.send(data)
                })
                .catch((err) => {
                    res.send(err)
                })
        })


})





module.exports = adminroutes