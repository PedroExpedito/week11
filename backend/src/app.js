const express = require('express');
const routes = require('./routes');
const { errors } = require('celebrate')
const cors = require('cors');

const app = express();

app.use(cors()); // muito importante para segurança causo usar ele 
app.use(express.json());
app.use(routes);
app.use(errors())

module.exports = app;

/* O banco de dados sera sqlite 
usando o querybuilder knex.js */
