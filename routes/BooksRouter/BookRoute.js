const express = require("express");
const router = express.Router();
const bookSpecialCon = require("../../controller/BookController/bookSpecialCon");
const BooksAllCon = require("../../controller/BookController/BooksAllCon");

///SPECIAL BOOKS ROUTE
router.post("/BookSpecialAdd", bookSpecialCon.BookSpecialAdd);
router.get("/BookSpecialGet", bookSpecialCon.BookSpecialGet);
router.delete("/BookSpecialDel", bookSpecialCon.BookSpecialDel);

///ALL BOOKS ROUTE
router.post("/BooksAllAdd", BooksAllCon.BooksAllAdd);
router.get("/BooksAllGet", BooksAllCon.BooksAllGet);
router.delete("/BooksAllDel", BooksAllCon.BooksAllDel);

module.exports = router;
