const express = require("express");

const petsRouter = express.Router();

// get all @ /pets

petsRouter.get("/", (req, res) => {
  res.json({ Pets: "I eat pets for breakfast" });
});

module.exports = petsRouter;
