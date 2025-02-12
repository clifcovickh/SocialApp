const express = require("express");//import express
const router = express.Router();// express udah punya library router() dan digunain disini basically bilang this file is a router
const { Posts } = require("../models");//ngambil model posts kita dari folder model

//GET
router.get("/", async (req, res) => {// anonymous function that takes 2 argument, disini its a standard to just use ( req + res )
  const listOfPosts = await Posts.findAll(); //dbname.findAll() buat narik data yang diminta di db tersebut
  res.json(listOfPosts);// return / tampilin data yang diambil
});

router.get("/byId/:id", async (req, res) => {
  const id = req.params.id;
  const post = await Posts.findByPk(id);
  res.json(post);
});

//POST
router.post("/", async (req, res) => {// disini kita POST buat ngirim data
  const post = req.body; //datanya adalah req.body yang menampung title,posttext,username dari models kita
  await Posts.create(post);//sequelize .create ini bisa ngemasukin data ke database kita langsung 
  res.json(post); //return in json format of post buat check berhasil/engga aja. 
});

module.exports = router;//so index.js can access this file.(exports)

//req = request
//res = respond