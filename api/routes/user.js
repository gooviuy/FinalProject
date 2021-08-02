const express = require("express");
const router = express.Router();
const user = {
  name:"Gonzalo Fontes",
  email:"gonzalito@gmail.com",
  age:27
}
//login
router.post("/", function (req, res) {
  console.log("llgo requet")
  let post = req.body;
  //console.log(req.body)
  if (post.username === "gonza" && post.password === "gonza123") {
    // req.session.user_id = gonza_user_id_here;
    //res.statusCode(200)
    //res.send({user})
    res.json({ user });
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
