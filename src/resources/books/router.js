const express = require("express");

const booksRouter = express.Router();

booksRouter.get("/", (req, res) => {
  res.json({ books: "blah blah blah fucking database i hate you" });
});

// totally don't understand the below
// booksRouter.post("/", (req, res) => {
//   const newBook = req.body;

//   createOneBook(newBook, (createdBook) => {
//     res.json({ product: createdBook });
//   });
// });

module.exports = booksRouter;
