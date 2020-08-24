const Joi = require('../../../../lib/joi');
const { makeValidateFn } = require('../../../../lib/validation');
const { searchSchema } = require('../../../validation-schemas');

const getProductsFromMLSchema = Joi.object().keys({
  search: searchSchema.extract('search').required(),
  limit: searchSchema.extract('limit'),
});

module.exports = makeValidateFn(getProductsFromMLSchema);
