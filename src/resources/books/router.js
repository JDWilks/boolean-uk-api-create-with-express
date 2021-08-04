const express = require("express");

const booksRouter = express.Router();

// get all @ /books

booksRouter.get("/", (req, res) => {
  res.json({ books: "blah blah blah fucking database i hate you" });
});

module.exports = booksRouter;
