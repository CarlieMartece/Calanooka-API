const mysql = require('mysql2');
const path = require('path');

const dotenv = require('dotenv');
const ENV = process.env.NODE_ENV || 'development';
dotenv.config({
    path: path.resolve(__dirname, `../.env.${ENV}`)
});
dotenv.config();

if (!process.env.MYSQL_DATABASE && !process.env.DATABASE_URL) {
    throw new Error('MYSQL_DATABASE or DATABASE_URL not set');
}

const pool = mysql.createPool({
    connectionLimit: 10,
    host: "127.0.0.1",
    user: "root",
    password: process.env.PASSWORD,
});

pool.getConnection(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

module.exports = pool;