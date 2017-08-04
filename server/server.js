const express = require('express');
const app = express();
const mongoose = require('mongoose');

const api = require('./api/api');
const config = require('./config/config');

// handles serving static assets and returning json body from requests
require('./middleware/middleware')(app, express);

mongoose.Promise = global.Promise;
// Connect to mongodb URI
mongoose.connect(config.db.url, { useMongoClient: true });

//setup routes
app.use('/api', api);

module.exports = app;