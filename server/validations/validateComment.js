const Joi = require('joi')

const validateComment = req => {
  const schema = {
    text: Joi.string().required()
  }

  return Joi.validate(req, schema)
}

module.exports = validateComment
