const express = require("express");// import package express
const app = express();// usage of the library
const cors = require("cors");//import cors to whitelist

app.use(express.json());//biar express bisa nerima dalam bentuk json langsung (soalnya by default belum di parsing)
app.use(cors());//use cors

const db = require("./models");// db structure connection

// Routers
const postRouter = require("./routes/Posts");//si path router kita ditampung di variable postRouter"
app.use("/posts", postRouter);//syntax to use a router so we can use get/post requests di file routernya

const commentsRouter = require("./routes/Comments");
app.use("/comments", commentsRouter);

const usersRouter = require("./routes/Users");
app.use("/auth", usersRouter);

db.sequelize.sync().then(() => { //panggil si variable db diatas biar di run setiap sebelum app.listen

  app.listen(3001, () => {// define port kita dimana (entry point api)
    console.log("Server running on port 3001");
  });

});
