const mysql = require ('mysql');
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "diploma"
});
connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

let sql = "SELECT * FROM news";
let query = connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Result: ");
    console.log(result);
  });

connection.end();