const express = require('express');
const app = express();
const mysql = require('mysql2');

const dotenv = require('dotenv');
const ENV = process.env.NODE_ENV || 'development';
dotenv.config();
dotenv.config({
    path: `${__dirname}/.env.${ENV}`
});
//console.log(`${__dirname}/.env.${ENV}`)

if (!process.env.MYSQL_DEV_DATABASE && !process.env.DATABASE_URL) {
    throw new Error('MYSQL_DEV_DATABASE or DATABASE_URL not set');
}

const pool = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: process.env.PASSWORD,
    database: 'calanooka'
});

app.get("/", (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err;
        console.log('connected as id ' + connection.threadId);
    });
});
 
app.listen(3141, () => {
    console.log('Server is running at port 3141');
});

//module.exports = app;