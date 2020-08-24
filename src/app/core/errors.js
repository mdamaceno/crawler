class InputValidationError extends Error {
  constructor(message, details = []) {
    super(message);
    this.name = 'InputValidation';
    this.message = message;
    this.code = 422;
    this.details = details;
  }
}

module.exports = { InputValidationError };
