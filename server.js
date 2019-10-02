// Requiring modules: dotenv (for password protection), express (for express server), helmet (for security), and the apiRoutes.js file (for express Routing)
require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const logger = require('morgan');
const fs = require('file-system');
const apiRoutes = require('./routes/apiRoutes');

// Set app to express function
const app = express();
// Line 10: sets PORT to equal the enviroment variable, or if nothing exists in the the env var, than set PORT to 3000
const PORT = 3001;

app.use(express.urlencoded({extended: true})); // Parses incoming request with urlencoded payloads

app.use(helmet()); // Added security
app.use(logger('common', {
    stream: fs.createWriteStream('./logging/morgan.log', {flags: 'a'})
}));
app.use(logger('dev'));

app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

// calls routes from apiRoutes.js file
app.use('/api', apiRoutes);

// instructs express server to listen on a specific port, than console logs the current port (Whether the env var or 3000)
app.listen(3001, function() {
    console.log(`Server now listening on port ${PORT}`);
});