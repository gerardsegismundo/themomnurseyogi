const Joi = require('joi')

const validateComment = req => {
  const schema = {
    user: Joi.string().required(),
    name: Joi.string()
      .required()
      .max(100)
      .min(2),
    text: Joi.string().required(),
    avatar: Joi.string().uri()
  }

  return Joi.validate(req, schema)
}

module.exports = validateComment
