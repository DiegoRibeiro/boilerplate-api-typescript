import express = require('express');
import path = require('path');
import cookieParser = require('cookie-parser');
import bodyParser = require('body-parser');

// included routes
import users = require('./routes/users');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

// add your included routes here
app.use('/api/v1/users', users);


export = app;
