const express = require("express");
const app = express();
const mongoose = require("mongoose");

const question = require("./routes/questions");

mongoose.connect(
  `mongodb+srv://Gramos:monmdp@cluster0-mibr8.mongodb.net/test?retryWrites=true&w=majority`,
  { useNewUrlParser: true }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
  console.log("Connecté a MongoDB Atlas");
});

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/question", question);

app.listen(3000, () => {
  console.log("Le serveur fonctionne");
});
