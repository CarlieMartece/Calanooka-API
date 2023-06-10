const pool = require("./mysqlConnector");

pool.getConnection(function(err) {
    if (err) throw err;
    console.log("Connected!");
    pool.query("DROP DATABASE IF EXISTS calanooka", function (err, result) {
        if (err) throw err;
        console.log("Database deleted");
    })
});

pool.getConnection(function(err) {
    if (err) throw err;
    pool.query("CREATE DATABASE calanooka", function (err, result) {
        if (err) throw err;
        console.log("Database created!");
    })
});