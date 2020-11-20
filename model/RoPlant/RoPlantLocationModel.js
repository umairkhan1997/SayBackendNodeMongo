const mongoose = require("mongoose");

const RoPlantLocation = mongoose.Schema({
  locName: {
    type: String,
    required: true,
  },
  locAddress: {
    type: String,
    required: true,
  },
});

const RoPlantLocationSchema = mongoose.model(
  "RoPlantLocationSchema",
  RoPlantLocation
);
module.exports = RoPlantLocationSchema;
