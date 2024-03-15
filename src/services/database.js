const mysql = require("mysql2");
const dotenv= require('dotenv');
const databaseHost= process.env.DB_HOST;
const databaseUser= process.env.DB_USER;
const databasePassword= process.env.DB_PASSWORD;
const databaseName= process.env.DB_NAME;


const connection = mysql.createConnection({
  host: "localhost",
  user: "admin",
  password: "abcde",
  database: "dashboard",
});

connection.connect(function (error) {
  if (error) {
    throw error;
  } else {
    console.log("connecté");
  }
});

module.exports = connection;
