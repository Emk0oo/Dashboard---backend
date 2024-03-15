const connection = require("../services/database");
const User = require("../class/user");

exports.login = async (req, res) => {
    const request = `SELECT * FROM users WHERE email = ? AND password = ?`;
    const values = [req.body.email, req.body.password];
    connection.query(request, values, function (error, results) {
        if (error) {
        return res.status(500).json({ error: "Erreur lors de la récupération des données" });
        }
        if (results.length === 0) {
        return res.status(404).json({ error: "Utilisateur non trouvé" });
        }
        const user = User.fromMap(results[0]);
        return res.status(200).json({ dashboard: "user found" });
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
