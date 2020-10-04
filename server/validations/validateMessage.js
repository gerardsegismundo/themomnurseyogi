const Joi = require('joi')

const schema = Joi.object({
  email: Joi.string()
    .min(5)
    .max(100)
    .required()
    .email(),
  title: Joi.string().required(),
  message: Joi.string().required()
})

const validateMessage = args => {
  return schema.validate(args, { abortEarly: false })
}

module.exports = validateMessage
