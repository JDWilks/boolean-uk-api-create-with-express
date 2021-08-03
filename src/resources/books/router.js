const express = require("express");

const booksRouter = express.Router();

booksRouter.get("/", (req, res) => {
  res.json(console.log("route made for books"));
});

module.exports = booksRouter;
