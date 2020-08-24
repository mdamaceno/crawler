const { InputValidationError } = require('../app/core/errors');

function makeValidateFn(schema) {
  return (...input) => {
    const { error, value } = schema.validate(...input);

    if (error) {
      throw new InputValidationError('Invalid user input', error.details);
    }

    return value;
  };
}

module.exports = { makeValidateFn };
