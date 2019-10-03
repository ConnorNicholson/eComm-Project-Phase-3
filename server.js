// Requiring modules: dotenv (for password protection), express (for express server), helmet (for security), and the apiRoutes.js file (for express Routing)
require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const logger = require('morgan');
const fs = require('file-system');
const apiRoutes = require('./routes/apiRoutes');

// Set app to express function
const app = express();
// Sets PORT to equal 3000
const PORT = 3001;

app.use(helmet()); // Added security

// Morgan logging - will log all HTTP request to the morgan.log file
app.use(logger('common', {
    stream: fs.createWriteStream('./logging/morgan.log', {flags: 'a'})
}));
// morgan format
app.use(logger('dev'));

// calls routes from apiRoutes.js file
app.use('/api', apiRoutes);

// instructs express server to listen on a specific port, than console logs the current port (Whether the env var or 3000)
app.listen(3001, function() {
    console.log(`Server now listening on port ${PORT}`);
});