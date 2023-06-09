const dotenv = require('dotenv');
dotenv.config();

const mysql = require('mysql2');
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.PASSWORD
});

con.connect (function(err) {
    if(err) throw err;
    console.log("Connected!");
});