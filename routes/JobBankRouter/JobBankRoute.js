const express = require("express");
const router = express.Router();
const JobBankContactCon = require("../../controller/JobBankController/JobBankContactCon");
const JobBankJobHuntCon = require("../../controller/JobBankController/JobBankJobHuntCon");

//Ro Plant Esti Cost
router.post("/JobBankJobHuntAdd", JobBankJobHuntCon.JobBankJobHuntAdd);
router.get("/JobBankJobHuntGet", JobBankJobHuntCon.JobBankJobHuntGet);
router.put("/JobBankJobHuntUpdate", JobBankJobHuntCon.JobBankJobHuntUpdate);
router.delete("/JobBankJobHuntDel", JobBankJobHuntCon.JobBankJobHuntDel);

module.exports = router;
