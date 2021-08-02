const express = require("express");
const router = express.Router();
//const checkAuth = require ("../../middleware/checkAuth");
//checkAuth,

const topics = {
  topic: "Music",
};
//login
router.post("/", function (req, res) {
  console.log("llego request");
  let post = req.body;

  if (post.topic === "Music") {
    res.json({ topics });
  } else {
    res.json({ err: "Topic doesnt exists" });
  }
});

router.post("/", function (req, res) {
  res.send("you selected a topic");
});

module.exports = router;
