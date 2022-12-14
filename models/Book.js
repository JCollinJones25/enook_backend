const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "title cannot be empty"],
    },
    author: {
      type: String,
      required: [true, "author cannot be empty"],
    },
    cover: {
      type: String,
      required: [true, "cover cannot be empty"],
    },
    year: {
      type: Number,
      required: [true, "year cannot be empty"],
    },
    overview: {
      type: String,
      required: [true, "overview cannot be empty"],
    },
    genre: {
      type: String,
      required: [true, "genre cannot be empty"],
    },
    price: {
      type: Number,
      min: [0, "price cannot be negative"],
      required: [true, "price cannot be empty"],
    },
  },
  {
    timestamps: true,
  },
);

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
