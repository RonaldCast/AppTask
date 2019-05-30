'use strict'
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs');
const { Schema } = mongoose

const UserSchema = new Schema({
    name:{
        type : String,
    },
    lastName:{
        type : String 
    },
    email:{
        type : String,
        unique : true,
        required: true
    },
    password:{
        type : String,
        required : true
    }
})

//type: Schema.ObjectId, ref: "Autor" 

UserSchema.pre('save', async function(next){
    const hash = await bcrypt.hashSync(this.password, 10) 
    this.password = hash
    next()
})

UserSchema.methods.isValidPassword = async function(password){
    const user = this 
    const compare = await bcrypt.compare(password, user.password)
    return compare; 
}

module.exports = mongoose.model('users', UserSchema)