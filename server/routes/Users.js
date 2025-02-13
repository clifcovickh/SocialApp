const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");//hashing library

router.post("/", async (req, res) => {//insert elements into user table
  const { username, password } = req.body;//tiap bikin request kan pasti ada username and password
  bcrypt.hash(password, 10).then((hash) => {//dimasukin hashed password as hash'
    Users.create({
      username: username,//username ya we pass the username value
      password: hash,//for password we pass the hash
    });
    res.json("SUCCESS");
  });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;//this is z

  const user = await Users.findOne({ where: { username: username } });//await sampe di tabel Users ketemu 1 yang dimana username == z

  if (!user) res.json({ error: "User Doesn't Exist" });//error log

  bcrypt.compare(password, user.password).then((match) => {//function bcrypt buat compare password yang masuk sama hashed password kita yang di db
    if (!match) res.json({ error: "Wrong Username And Password Combination" });

    res.json("YOU LOGGED IN!!!");
  });
});

module.exports = router;
