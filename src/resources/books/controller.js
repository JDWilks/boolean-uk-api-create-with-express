const Book = require("./model");
const { findAllBooks } = Book();

// function getAllBooks(req, res) {
//   findAllBooks((result) => {
//     res.json({ result });
//   });
// }

// above same as below - below easier for me to sort of understand

function getAllBooks(req, res) {
  const callBackFunction = (result) => res.json({ result });
  findAllBooks(callBackFunction);
}

module.exports = getAllBooks;
