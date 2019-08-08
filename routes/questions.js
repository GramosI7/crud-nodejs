const express = require("express");
const router = express.Router();

const Question = require("../models/questionModel");

// Find all question
router.get("/", (req, res) => {
  Question.find()
    .then(result => res.json(result))
    .catch(err => res.json(err));
});

// Post question
router.post("/", (req, res) => {
  const question = new Question({
    name: req.body.name,
    categorie: req.body.categorie
  });
  question
    .save()
    .then(result => res.json(result))
    .catch(err => res.json(err));
});

// find by categorie
router.get("/categorie/:categorie", (req, res) => {
  const categorieVar = req.params.categorie;
  Question.find({ categorie: categorieVar })
    .then(result => res.json(result))
    .catch(err => res.json(err));
});

// find by id
router.get("/:id", (req, res) => {
  const id = req.params.id;
  Question.findById(id)
    .then(result => res.json(result))
    .catch(err => res.json(err));
});

// modifie by id
router.put("/:id", (req, res) => {
  const id = req.params.id;
  const questionField = {
    name: req.body.name,
    categorie: req.body.categorie
  };
  Question.findOneAndUpdate({ _id: id }, { $set: questionField }, { new: true })
    .then(result => res.json(result))
    .catch(err => res.json(err));
});

// Delete by id
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  Question.findByIdAndRemove(id)
    .then(result => res.json(result))
    .catch(err => res.json(err));
});

module.exports = router;
