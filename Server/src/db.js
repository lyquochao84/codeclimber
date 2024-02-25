const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "code_climber",
});

db.connect((err) => {
  if (!err) {
    console.log("Connected Sucessfully");
  } 
  else {
    console.log("Connected Failed");
  }
});

module.exports = db;
