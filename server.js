'use strict';

const express = require('express');
const app = express();
require('dotenv').config();
require('ejs');
const PORT = process.env.PORT || 3001;
const routes = require('./lib/routes.js')
const defaults = require('./lib/errorhandler.js')

app.set('view engine', 'ejs');
app.use(express.static('./public'));
app.use(express.urlencoded({ extended: true }));


//// routes////
app.use('/', routes.indexPage);


///Error handler////
app.get('*', defaults.notFoundHandler)
app.use(defaults.errorHandler);

app.listen(PORT, () => console.log(`Your are listening to ${PORT}`))