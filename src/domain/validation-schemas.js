const Joi = require('../lib/joi');

exports.searchSchema = Joi.object({
  search: Joi.string().trim(),
  limit: Joi.number().integer().min(1),
});
