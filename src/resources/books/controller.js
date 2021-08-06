const Book = require("./model");
const {
  findAllBooks,
  createOneBook,
  findOneBook,
  findAndDeleteBook,
  upDateById,
} = Book();

function getAllBooks(req, res) {
  findAllBooks((resultOfFindBooksFunction) => {
    res.json({ resultOfFindBooksFunction });
  });
}

function createOne(req, res) {
  const newBook = { ...req.body };
  const callBackFunction = (createdBook) => {
    res.json({ data: createdBook });
  };
  createOneBook(newBook, callBackFunction);
}

function findOne(req, res) {
  const bookId = req.params.id;
  const callbackfunction = (bookToFind) => {
    res.json({ bookToFind });
  };
  findOneBook(bookId, callbackfunction);
}

function deleteOne(req, res) {
  const bookId = req.params.id;
  const callbackfunction = (bookToFind) => {
    res.json({ bookToFind });
  };
  findAndDeleteBook(bookId, callbackfunction);
}

function updateOne(req, res) {
  const bookId = req.params.id;
  const keysToUpdate = req.body;
  console.log(keysToUpdate);

  const callbackfunction = (bookToFind) => {
    res.json({ bookToFind });
  };

  findOne(bookId, callbackfunction);
  const patchedBook = { ...bookToFind, ...keysToUpdate };

  const callBackFunc = (updatedBook) => {
    res.json({ data: updatedBook });
  };

  upDateById(bookId, patchedBook, callbackfunc);
}

module.exports = { getAllBooks, createOne, findOne, deleteOne, updateOne };

// tati's code (below) rewritten (from above deleteOne)

// function deleteOne(req, res) {
//   const bookId = req.params.id;
//   findAndDeleteBook(bookId, (bookTofind) => res.json({ bookTofind }));
// }

//test 2
