const express = require('express')
const app = express()
const xss = require('xss-clean')
const helmet = require('helmet')
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv').config;

const routesPosts = require('./routes/routesPosts')
const routesUsers = require('./routes/routesUsers')
const routesMod = require('./routes/routesMod')


app.use(xss())
app.use(helmet())
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization',
  )
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS',
  )
  next()
})

app.use('/images', express.static(path.join(__dirname, 'images')))
app.use('/api/posts', routesPosts)
app.use('/api/auth', routesUsers)
app.use('/api/moderation', routesMod)

module.exports = app
