const { model, Schema } = require('mongoose')
const Joi = require('joi')

const Post = model(
  'posts',
  new Schema({
    title: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true
    },
    hashtags: Array,
    imgURL: {
      type: String,
      required: true
    },
    date: {
      type: Date,
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

exports.validate = validatePost
