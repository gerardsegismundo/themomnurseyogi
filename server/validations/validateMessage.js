const Joi = require('joi')

const validateMessage = req => {
  const schema = {
    name: Joi.string().required(),
    email: Joi.string()
      .min(5)
      .max(100)
      .required()
      .email(),
    title: Joi.string().required(),
    text: Joi.string().required()
  }

  return Joi.validate(req, schema)
}

module.exports = validateMessage
