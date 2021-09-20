'use strict';
const mysql = require("mysql");
const db = mysql.createConnection({
  user:"Amila",
  host: "127.0.0.1",
  password: "123@123",
  database: "employeeSystem",
  insecureAuth : true

})
db.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = db;