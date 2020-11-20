const checkValueMethod = require("../CheckValueMethod");

module.exports = (req, res, next) => {
  console.log(req.body, "middle ware ro plant");
  if (checkValueMethod(req.body.Notes)) {
    return false;
  } else {
    next();
  }
};
