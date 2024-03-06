const express = require("express");
const Sequelize = require("sequelize");
const app = express();
// parse incoming requests
app.use(express.json());

// set db url
const dbUrl = 'postgres://webadmin:BXNxiq80565@node57004-phuwadon-noderest.proen.app.ruk-com.cloud:11799';

// create a connection to the database
const sequelize = new Sequelize(dbUrl);