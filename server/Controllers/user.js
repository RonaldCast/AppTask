'use strict'

const express = require('express')
const router = express.Router()
const User = require('../Models/User')

//GET (/user/:id)
router.get('/', async (req, res) => {
    
    try {
        let user = await User.findById({_id : req.user._id}) 
        let getUser = {
            name : user.name,
            lastName : user.lastName,
            email : user.email

        }
        res.send({
          user: getUser
        })

    } catch (e) {
        res.send({
            message : e,
            code : 400
        })
    }
})

//PUT (/user/:id)
router.put('/', async (req, res) => {

    try {

        let updateUser = await User.findByIdAndUpdate(
          { _id: req.user._id },
          {
            $set: {
              name: req.body.name,
              lastName: req.body.lastName
            }
          }
        );
        
        res.send({
          message : 'User updated'
        })

    } catch (e) {
     res.send({
       message : e
     });
    }
})


















module.exports = router