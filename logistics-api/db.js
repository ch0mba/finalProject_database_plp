const mysql = require('mysql2');

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Dickson1',
    database: 'logisticsdb'
});

connection.connect(err => {
    if (err) throw err;
    console.log("connsected to the database!");

});

module.exports = connection;
