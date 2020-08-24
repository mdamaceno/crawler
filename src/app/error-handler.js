const config = require('../config');

module.exports = (err, req, res, next) => {
  if (res.headersSent) return next(err);

  const status = err.code || 500;
  const details = err.details || [];

  const jsonError = {
    type: 'error',
    status,
    message: err.message.trim(),
  };

  if (Object.keys(details).length) {
    jsonError.details = details;
  }

  if (config.get('app.env') !== 'production') {
    jsonError.stack = err.stack;
  }

  return res.status(jsonError.status).json(jsonError);
};
