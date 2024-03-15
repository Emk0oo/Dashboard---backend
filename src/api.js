const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const port = 3000;
const connection= require('./services/database')

app.use(bodyparser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use('/api/authentification', require('./routers/authentification.router'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
