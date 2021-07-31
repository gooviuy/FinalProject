const express = require("express");
const router = express.Router();
const checkAuth = require ("../../middleware/checkAuth");

router.get("/topic", checkAuth, function (req, res) {
  res.send("if you are viewing this page it means you are logged in");
});

module.exports = router;
