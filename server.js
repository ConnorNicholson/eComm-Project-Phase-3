// Requiring modules: dotenv (for password protection), express (for express server), helmet (for security), and the apiRoutes.js file (for express Routing)
require('dotenv').config();
const express = require('express');
const helmet = require('helmet')
const apiRoutes = require('./routes/apiRoutes')

// Set app to express function
const app = express();
// Line 8: sets PORT to equal the enviroment variable, or if nothing exists in the the env var, than set PORT to 3000
const PORT = 3001;

app.use(express.urlencoded({extended: true})); // Parses incoming request with urlencoded payloads

app.use(helmet()); // Added security

// calls routes from apiRoutes.js file
app.use('/api', apiRoutes)

// instructs express server to listen on a specific port, than console logs the current port (Whether the env var or 3000)
app.listen(3001, function() {
    console.log(`Server now listening on port ${PORT}`);
});