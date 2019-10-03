// Requiring express, setting a constant variable 'router' to the express.Router() method, requiring mysql (for the MySQL DataBase)
const express = require('express');
const router = express.Router();
const mysql = require('mysql');

// sets a constant var to a MySQL query that is used multiple times
const mainQuery = "SELECT product_name, product_description, img_url, Prices.price FROM Products INNER JOIN Prices ON price_id = Products.product_id";

// Create database connection
const connection = mysql.createConnection({
    host: 'localhost',
    // dB port
    port: 3306,
    user: 'root',
    password: process.env.MYPASSWORD,
    database: 'products_db'
});

// Connect to MySQL database and execute the mainQuery var, display content in table in Terminal
connection.connect(function(err) {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}`);
    connection.query(mainQuery, function(err, data) {
        console.table(data);
    });
});

// HTTP requests/API endpoints

// First Router.get method. Currently sends a string 'Hi'. Update to send Home Page of React site
router.get('/', function(req, res) {
    if (err) {
        throw err;
    } else {
        res.status(200).send('Server is running');
    }
});

// Second Router.get method. Sends all products and their matching prices
router.get('/products', function(req, res) {

    // query products
    connection.query(mainQuery, function(err, data) {
        if (err) {
            throw err;
        } else {
            res.status(200).send(data);
        };
    });
    
});

// Third Router.get() method. Sends all data from Contacts table
router.get('/contacts', function(req, res) {

    connection.query("SELECT contact_name, comments FROM Contacts ORDER BY RAND() LIMIT 3", function(err, data) {
        if (err) {
            throw err;
        } else {
            res.status(200).send(data);
        };
    });

});

// Fourth Router.get() method. Sends filtered data from Products table
router.get('/productfilter/:query', function(req, res) {
    
    let filter = req.params.query
    connection.query(mainQuery + " WHERE category = ?", filter, function(err, data) {
        if (err) {
            throw err;
        } else {
            res.status(200).send(data);
        };
    });

});

router.get('/productprice/lowprice', function(req, res) {
    connection.query(mainQuery + " WHERE Prices.price < 1000", function(err, data) {
        if (err) {
            throw err;
        } else {
            res.status(200).send(data);
        };
    });
});

module.exports = router;