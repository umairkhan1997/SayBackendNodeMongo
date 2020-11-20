const express = require("express");
const router = express.Router();
const bookSpecialCon = require("../../controller/BookController/bookSpecialCon");

///SMIT TEACHER ROUTES
router.post("/BookSpecialAdd", bookSpecialCon.BookSpecialAdd);
router.get("/BookSpecialGet", bookSpecialCon.BookSpecialGet);
router.delete("/BookSpecialDel", bookSpecialCon.BookSpecialDel);
