const mongoose = require("mongoose");

const HomeIntro = mongoose.Schema({
  imgUrl: {
    type: String,
    unique: true,
    required: true,
  },
  introTxt: {
    type: String,
    unique: true,
    required: true,
  },
});

const HomeIntroSchema = mongoose.model("HomeIntroSchema", HomeIntro);
module.exports = HomeIntroSchema;
