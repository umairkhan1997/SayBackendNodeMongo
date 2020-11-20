const express = require("express");
const router = express.Router();
const QuranAppTafHeadCon = require("../../controller/QuranAppTafController/QuranAppTafHeadCon");

//Ro Plant Esti Cost
router.post("/QuranAppTafHeadAdd", QuranAppTafHeadCon.QuranAppTafHeadAdd);
router.get("/QuranAppTafHeadGet", QuranAppTafHeadCon.QuranAppTafHeadGet);
router.put("/QuranAppTafHeadUpdate", QuranAppTafHeadCon.QuranAppTafHeadUpdate);

module.exports = router;
