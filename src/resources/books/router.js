const express = require("express");

const booksRouter = express.Router();

const getAllBooks = require("./controller");

// get all @ /books

booksRouter.get("/", getAllBooks);

module.exports = booksRouter;
