const express = require("express");

const booksRouter = express.Router();

const {
  getAllBooks,
  createOne,
  findOne,
  deleteOne,
  updateOne,
} = require("./controller");

// get all @ /books ✅

booksRouter.get("/", getAllBooks);

// post one book ✅

booksRouter.post("/", createOne);

// get a book by id ✅

booksRouter.get("/:id", findOne);

// delete a book by id ❌

booksRouter.get("/:id", deleteOne);

// update a book using id

booksRouter.patch("/:id", updateOne);

module.exports = booksRouter;

// - Build the updateOneById controller for the Books and Pets resource
// - Build an updateOneByTitle controller for the Books resource
// - Build an updateOneByName controller for the Pets resource
// - Build the deleteOneById controller for the Books and Pets resource

// Build these routes and controllers for the books resource that work with the following fetch requests:
//     -- Full CRUD base routes
//     -- /books/fiction that returns fiction books
//     -- /books/fiction?topic=a-topic that returns a specific topic of fiction books
//     -- /books/non-fiction that return non-fiction books
//     -- /books/non-fiction?topic=a-topic that returns a specific topic of non-fiction books
//     -- /books/author/name-of-author?order=recent that returns a specific authors' books ordered by publicationDate with the most recent
//     Tips
// - Use ElephantSQL to test your SQL queries and see if they are returning what you want before adding them to the code.
// - Practice SQL... do as much of the sorting and filtering using SQL queries rather than Javascript.
