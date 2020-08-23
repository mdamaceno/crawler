const { env } = require('@adonisjs/env/build/standalone');
const fs = require('fs');
const { resolve } = require('path');

let envFile = '.env';

if (process.env.NODE_ENV === 'test') {
  envFile = '.env.test';
}

if (fs.existsSync(resolve(envFile))) {
  const content = fs.readFileSync(resolve(envFile), 'utf8');
  env.process(content);
}

module.exports = env;
