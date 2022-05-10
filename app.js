const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');

// parse application/json
app.use(bodyParser.json());

//create database connection
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mysql'
});

//connect to database
conn.connect((err) =>{
  if(err) throw err;
  console.log('Mysql Connected...');
});

//get all courses
app.get('/api/courses',(req, res) => {
  let sql = "SELECT * FROM courses";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
//get user table
app.get('/api/users',(req, res) => {
    let sql = "SELECT * FROM users";
    let query = conn.query(sql, (err, results) => {
      if(err) throw err;
      res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
  });
  
//Server listening
app.listen(9000,() =>{
    console.log('Server started on port 9000...');
  });