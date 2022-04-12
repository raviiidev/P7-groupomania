const mysql = require('mysql')
console.log('Connexion à la base de données...')

/*const app = require('./app')
const dotenv = require('dotenv').config()*/

let connectdb = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Kookie02!',
  database: 'groupomania_database',
})
connectdb.connect(function (err) {
  if (err) throw err
  console.log('Connecté!')
})

module.exports = connectdb
