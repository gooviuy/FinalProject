const express = require("express");
const router = express.Router();
const axios = require("axios")
//const checkAuth = require ("../../middleware/checkAuth");
//checkAuth,

const topics = ["Music", "Sports", "Node"]


//login
router.post("/", async function (req, res) {
  console.log("llego request");
  let post = req.body;

  if (topics.includes(post.topic)) {
   const msResponse = await  axios.post("http://localhost:8002/quiz",{topic:post.topic})
   console.log(msResponse.data.quiz)
    res.json({ quiz:msResponse.data.quiz });
  } else {
    res.json({ err: "Topic doesnt exists" });
  }
});



module.exports = router;
