//require packages
const {Client} = require("pg");
const pgKey = require('./keys').pg;

 //create PostgreSQL connection
const connection = new Client({
  host: "localhost",
  port: 5432,
  user: "eventonica2",
  password: "password",
  database: "apieventonica"
});

 module.exports = connection;