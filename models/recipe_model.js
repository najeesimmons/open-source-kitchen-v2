const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  user: {
    type: String,
    required: [true],
  },
  date: {
    type: Date,
    default: Date.now,
    required: [true],
  },
  title: {
    type: String,
    required: [true],
  },
  category: {
    type: String,
    required: [true],
    enum: ["breakfast", "lunch", "dinner"],
    // enum makes it so that only provided answers will be accepted
  },
  description: {
    type: String,
  },
  ingredients: {
    type: [String],
    required: [true],
  },
  recipe: {
    type: [String],
    required: [true],
  },
  image: {
    type: String,
    required: [true],
  },
  review: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
});

const Recipe = mongoose.model("Recipe", recipeSchema);
module.exports = Recipe;