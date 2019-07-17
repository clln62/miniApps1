const express = require('express');
const mysql = require('mysql');

const app = express();



const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password"
});

con.connect(function(err) {
  if (err) {
      console.error(err);
      return;
  };
  console.log("Connected!");
  
});


app.use(express.static('public'));

app.get('/', (req, res) => {
    // for one-on-one, go over how to find what goes in here

});

app.post('/', (req, res) => {
    // for one-on-one, go over how to find what goes in here

});



