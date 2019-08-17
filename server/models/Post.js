const mongoose = require('mongoose')
const Joi = require('joi')
const Schema = mongoose.Schema

const Post = mongoose.model(
  'post',
  new Schema({
    title: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    },
    imgURL: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true
    }
  })
)

const validatePost = post => {
  const schema = {
    title: Joi.string()
      .min(3)
      .max(50)
      .required(),
    imgURL: Joi.string().uri({
      scheme: [/https?/]
    }),
    body: Joi.string()
      .min(3)
      .required()
  }

  return Joi.validate(post, schema)
}

exports.Post = Post
exports.validate = validatePost
