const mongoose = require("mongoose");

const questionSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  categorie: {
    type: String,
    enum: ["motivation", "admin", "technique"],
    required: true
  }
});

module.exports = mongoose.model("Question", questionSchema);
