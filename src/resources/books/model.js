const { query } = require("express");
const db = require("../../utils/database");
const { buildBooksDatabase } = require("../../utils/mockData");

function Book() {
  function createTable() {
    const sql = `
    DROP TABLE IF EXISTS books;
      CREATE TABLE IF NOT EXISTS books (
        id              SERIAL        PRIMARY KEY,
        title           VARCHAR(255)   NOT NULL,
        type            VARCHAR(255)   NOT NULL,
        author          VARCHAR(255)   NOT NULL,
        topic           VARCHAR(255)   NOT NULL,
        publicationdate DATE           NOT NULL
      );
    `;

    db.query(sql)
      .then((result) => console.log("[DB] Book table ready."))
      .catch(console.error);
  }

  function mockData() {
    const createBook = `
      INSERT INTO books
        (title, type, author, topic, publicationdate)
      VALUES
        ($1, $2, $3, $4, $5)
    `;

    const books = buildBooksDatabase();

    books.forEach((book) => {
      db.query(createBook, Object.values(book)).catch(console.error);
    });
  }

  function findAllBooks(callbackFunction) {
    const sql = `
    SELECT * FROM books
    `;
    db.query(sql).then((result) => {
      callbackFunction(result.rows);
    });
  }

  function createOneBook(newBook, callbackFunction) {
    const sql = `
    INSERT INTO books  (title, type, author, topic, publicationdate)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *
    `;
    db.query(sql, [
      newBook.title,
      newBook.type,
      newBook.author,
      newBook.topic,
      newBook.publicationdate,
    ])
      .then((result) => {
        callbackFunction(result.rows[0]);
      })
      .catch("from model :", console.error);
  }

  function findOneBook(bookId, callbackfunction) {
    const sql = `
    SELECT * FROM books
    WHERE id = ($1);
  `;

    db.query(sql, [bookId]).then((result) => {
      callbackfunction(result.rows[0]);
    });
  }

  function findAndDeleteBook(bookId, callbackfunction) {
    const sql = `
      DELETE FROM books
      WHERE id = $1;
    `;
    db.query(sql, [bookId]).then((result) => {
      callbackfunction(result.rows[0]);
    });
  }

  function upDateById(bookId, updatedBook, callbackfunction) {
    const { title, type, author, topic, publicationdate } = updatedBook;
    const sql = `
      UPDATE books
      SET title = $1
          type = $2
          author = $3
          topic = $4
          publicationdate= $5
      WHERE id = $6
      RETURNING *;
      `;
    db.query(sql, [title, type, author, topic, publicationdate, bookId])
      .then((result) => {
        callbackFunc(result.rows[0]);
      })
      .catch((error) => callbackfunction(null, error));
  }

  createTable();
  mockData();
  return {
    findAllBooks,
    createOneBook,
    findOneBook,
    findAndDeleteBook,
    upDateById,
  };
}
module.exports = Book;

// function updateById(bookId, updatedBook, callbackFunc) {
//   const { title, type, author, topic, publicationdate } = updatedBook;

//   const sql = `
//     UPDATE books
//     SET  title = $1,
//       type = $2,
//       author = $3,
//       topic = $4,
//       publicationdate = $5
//     WHERE id =
//     RETURNING *;
//   `;

//   db.query(sql, [title, type, author, topic, publicationdate, bookId])
//     .then((result) => {
//       callbackFunc(result.rows[0]);
//     })
//     .catch((error) => callbackFunc(null, error));
// }
