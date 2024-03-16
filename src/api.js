const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const port = 3000;
const connection= require('./services/database')

app.use(bodyparser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173'); // Remplacez ceci par l'URL de votre application React
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use('/api/authentification', require('./routers/authentification.router'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
