const express = require("express");
const router = express.Router();

//login
router.post("/", function (req, res) {
  let post = req.body;
  //console.log(req.body)
  if (post.username === "gonza" && post.password === "gonza123") {
    // req.session.user_id = gonza_user_id_here;
    res.json({ username: "gonza" });
    //res.redirect('/topic')
  } else {
    //res.send('Bad username/password');
    res.json({ err: "login failed" });
  }
});


//logout
router.get("/logout", function (req, res) {
  delete req.session.user_id;
  res.redirect("/login");
});

module.exports = router;
