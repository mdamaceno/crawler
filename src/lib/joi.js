const baseJoi = require('@hapi/joi');

const Joi = baseJoi.defaults((schema) => {
  return schema.prefs({ abortEarly: false, stripUnknown: true });
});

module.exports = Joi;
