const connection = require("../services/database");
const User = require("../class/user");
const jwt = require("jsonwebtoken");
const dotenv= require('dotenv');
dotenv.config({path: './.env'});
const secret= process.env.JWT_SECRET_KEY;

exports.login = async (req, res) => {
    const request = `SELECT * FROM users WHERE email = ? AND password = ?`;
    const values = [req.body.email, req.body.password];
    connection.query(request, values, function (error, results) {
        if (error) {
        return res.status(500).json({ error: "Erreur lors de la récupération des données" });
        }
        if (results.length === 0) {
          console.log(request, values, results.length)
        return res.status(404).json({ error: "Utilisateur non trouvé"});
        }
        const user = User.fromMap(results[0]);
        console.log(user);
        const token = jwt.sign({ id: user.id, email: user.email }, secret, { expiresIn: "24h" });
        return res.status(200).json({ dashboard: "user found", token: token});
    });
};

exports.register = async (req, res) => {
    let user = User.fromMap(req.body);
    const request = `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`;
    const values = [user.username, user.email, user.password];
    connection.query(request, values, function (error, results) {
      if (error) {
        return res.status(500).json({ error: "Erreur lors de l'insertion"+error });
      }
      user.id = results.insertId;
      return res.status(200).json({ dashboard: "user added" });
    });
  };

exports.forgotPassword = async (req, res) => {
  return res.status(200).json({ message: "forgot password" });
};

module.exports = exports;
