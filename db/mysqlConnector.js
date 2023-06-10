const mysql = require('mysql2');

const dotenv = require('dotenv');
const ENV = process.env.NODE_ENV || 'development';
dotenv.config();
dotenv.config({
    path: `${__dirname}/../.env.${ENV}`
});
//console.log(`${__dirname}/../.env.${ENV}`)

if (!process.env.MYSQL_DEV_DATABASE && !process.env.DATABASE_URL) {
    throw new Error('MYSQL_DEV_DATABASE or DATABASE_URL not set');
}

const pool = mysql.createPool({
    connectionLimit: 10,
    host: "127.0.0.1",
    user: "root",
    password: process.env.PASSWORD,
});

module.exports = pool;