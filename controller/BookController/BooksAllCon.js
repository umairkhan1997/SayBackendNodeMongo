const BooksAllModel = require("../../model/BookModel/BooksAll");
const cloudinary = require("../../cloudinary");
const checkField = require("../../FieldValidation/checkField");

BooksAllAdd = async (req, res) => {
  const {
    bookName,
    bookImgUrl,
    bookLang,
    bookAuthor,
    bookPublisher,
    bookDnldUrl,
  } = req.body;
  // console.log(data, "imgurl");
  if (!bookName) {
    return res.status(400).json(checkField("Book Name"));
  } else if (!bookImgUrl) {
    return res.status(400).json(checkField("Book Image"));
  } else if (!bookLang) {
    return res.status(400).json(checkField("Book Language"));
  } else if (!bookAuthor) {
    return res.status(400).json(checkField("Book Author"));
  } else if (!bookPublisher) {
    return res.status(400).json(checkField("Book Publisher"));
  } else if (!bookDnldUrl) {
    return res.status(400).json(checkField("Book Download URL"));
  } else {
    try {
      const fileStr = bookImgUrl;
      const uploadResponse = await cloudinary.uploader.upload(fileStr, {
        upload_preset: "prime-asset",
      });
      // console.log(uploadResponse, "successfully image add");
      try {
        const result = new BooksAllModel({
          bookImgUrl: uploadResponse.url,
          bookName,
          bookLang,
          bookAuthor,
          bookPublisher,
          bookDnldUrl,
        });
        await result.save();
        return res.status(200).json({ message: "Book Added" });
        // console.log("Faculty Added");
      } catch (err) {
        return res.status(422).send({ message: err.message });
        // console.log(err, "err");
      }
    } catch (err) {
      // console.error(err, "err");
      return res.status(500).json({ message: err.message });
      // console.log(err, "err 500");
    }
  }
};

BooksAllGet = async (req, res) => {
  // checkField;
  const result = await BooksAllModel.find();
  res.status(200).json({
    success: true,
    data: result,
  });
};

BooksAllDel = async (req, res, next) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400).json(checkField("Book ID"));
  } else {
    let resu = await BooksAllModel.findById(id);
    try {
      if (!resu) {
        return res.status(404).json({
          success: false,
          message: "Book Not Found",
        });
      } else {
        await BooksAllModel.findByIdAndDelete(id, function (err, result) {
          if (err) {
            return res.status(422).json({
              success: false,
              message: err.message,
            });
          } else {
            return res.status(200).json({
              success: true,
              message: "Book Deleted",
            });
          }
        });
      }
    } catch (err) {
      return res.status(422).json({ success: false, message: err.message });
    }
  }
};

module.exports = {
  BooksAllAdd,
  BooksAllGet,
  BooksAllDel,
};
