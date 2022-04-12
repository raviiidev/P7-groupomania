const mysql = require('mysql');
console.log('Connexion à la base de données...');
const dotenv = require("dotenv").config();
let connectdb = mysql.createConnection({ 
    host: "localhost",
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});
connectdb.connect(function(err) { 
    if (err) throw err;
    console.log('Connecté!')
});

module.exports = connectdb;