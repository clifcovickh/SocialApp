const express = require("express");
const router = express.Router();
const { Comments } = require("../models");

router.get("/:postId", async (req, res) => {
  const postId = req.params.postId;//this is z
  const comments = await Comments.findAll({ where: { PostId: postId } });//ambil semua di PostId(table db) yang == z
  res.json(comments);//tampilin semua comment yang udah diambil berdasarkan id post yang sama
});

router.post("/", async (req, res) => {//route to post/create comment
  const comment = req.body;
  await Comments.create(comment);
  res.json(comment);
});

module.exports = router;//biar bisa di access index.js 
