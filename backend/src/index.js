const express = require('express');
const routes = require('./routes');

const app = express();

app.use(routes);

app.listen(3000);

/* O banco de dados sera sqlite 
usando o querybuilder knex.js */
