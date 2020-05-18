// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();

// https://expressjs.com/en/starter/basic-routing.html
app.set("view engine", "ejs");
app.use(express.urlencoded({extended: false }))

const toDoList = []

app.get("/", (req, res) => {
  res.render('index');
});
app.get("/todo", (req, res) => {
  res.render('todo')
})
app.post("/todo", (req, res) => {
  
  res.redirect('/todo')
})
// listen for requests :)
app.listen(process.env.PORT, () => {
  console.log("Server listening on port " + process.env.PORT);
});
