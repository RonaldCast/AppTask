'use strict'
const mongoose = require('mongoose')
const { Schema } = mongoose

const TaskSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  tag: {
    type: String,
    enum: ["Low", "Medium", "High"]
  },
  dateStart: {
    type: Date
  },
  dateEnd: {
    type: Date
  },
  idUser: {
    type: Schema.ObjectId,
    ref: "users"
  }
});



module.exports =  mongoose.model('Tasks', TaskSchema)

