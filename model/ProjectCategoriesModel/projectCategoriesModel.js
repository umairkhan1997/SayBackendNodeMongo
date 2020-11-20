const mongoose = require("mongoose");

const ProjectsCategories = mongoose.Schema({
  proIcon: {
    type: String,
    unique: true,
    required: true,
  },
  proName: {
    type: String,
    unique: true,
    required: true,
  },
  proDescrip: {
    type: String,
    unique: true,
    required: true,
  },
  proHrefVal: {
    type: String,
    unique: true,
    required: true,
  },
});

const ProjectsCategoriesSchema = mongoose.model(
  "ProjectsCategoriesSchema",
  ProjectsCategories
);
module.exports = ProjectsCategoriesSchema;
