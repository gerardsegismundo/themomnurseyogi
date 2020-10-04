const Joi = require('joi')

const schema = Joi.object({
  email: Joi.string()
    .min(5)
    .max(100)
    .required()
    .email(),
  title: Joi.string().required(),
  body: Joi.string().required()
})

const validateMessage = req => {
  return schema.validate({ ...req })
}

module.exports = validateMessage
