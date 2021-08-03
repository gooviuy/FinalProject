const express = require("express");
const router = express.Router();
const fs = require('fs').promises;
//const path = require("path");


//const checkAuth = require ("../../middleware/checkAuth");
//checkAuth,

const topics = ["Music", "Sports", "Node"]


//login
router.post("/", async function (req, res) {
  console.log("llego request al microservice");
  let post = req.body;
  console.log("body que llega al ms")

  if (topics.includes(post.topic)) {
    let jsonQuiz = {}
 jsonQuiz =  await fs.readFile(__dirname + `/${post.topic}.json`, "utf8", (err, data) => {
        if (err) {
            console.log("error leyendo archivo")
          console.log(err.stack);
          return;
        }
        console.log("tenemos data")
      });
      console.log(jsonQuiz.toString())
    res.json({quiz:jsonQuiz});
  } else {
    res.json({ message: "Error del MS" });
  }
});



module.exports = router;
