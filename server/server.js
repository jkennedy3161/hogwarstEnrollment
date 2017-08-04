const express = require('express');
const app = express();
const api = require('./api/api');

// handles serving static assets and returning json body from requests
require('./middleware/middleware')(app, express);

//setup routes
app.use('/api', api);

module.exports = app;