const express = require("express");

const petsRouter = express.Router();

const getAllPets = require("./controller");

// get all @ /pets

petsRouter.get("/", getAllPets);

module.exports = petsRouter;
