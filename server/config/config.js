const _ = require('lodash');

// default config obj for our api
const config = {
  port: process.env.PORT || 3333,
  db: {url: 'mongodb://127.0.0.1:27017/houses'}
};

module.exports = config;