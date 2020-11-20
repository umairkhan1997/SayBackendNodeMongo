const mongoose = require("mongoose");

const RoPlantEstiCost = mongoose.Schema({
  actDes: {
    type: String,
    required: true,
  },
  qnt: {
    type: String,
    required: true,
  },
  amount: {
    type: String,
    required: true,
  },
  Notes: {
    type: String,
    required: true,
  },
});

const RoPlantEstiCostSchema = mongoose.model(
  "RoPlantEstiCostSchema",
  RoPlantEstiCost
);
module.exports = RoPlantEstiCostSchema;
