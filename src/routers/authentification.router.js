const express = require("express");
const router = express.Router();
const authentificationController = require('../controllers/authentification.controller')

router.post('/login', authentificationController.login);
router.post('/register', authentificationController.register);
router.post('/forgot-password', authentificationController.forgotPassword);

module.exports = router;