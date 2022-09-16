const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    user: {
      type: String,
    },
    title: {
      type: String,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
    },
    comment: {
      type: String,
    },
    recipe: {
      type: mongoose.Types.ObjectId,
      ref: "Recipe",
    },
  },
  {
    timestamps: true, // fields createdAt and updatedAt
  }
);

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
