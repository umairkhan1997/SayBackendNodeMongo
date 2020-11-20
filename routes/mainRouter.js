const express = require("express");
const router = express.Router();

router.use("/home", require("./HomeRouter/HomeRoute"));
router.use("/media", require("./mediaRouter/MediaRoute"));
router.use("/project", require("./projectRouter/projectRoute"));
router.use("/smit", require("./smitRouter/SmitRoute"));
router.use("/dastarkhwan", require("./DastarkhwanRouter/DastarkhwanRoute"));
router.use("/roPlant", require("./RoPlantRouter/RoPlantRoute"));
router.use(
  "/OnlineIsthikhara",
  require("./OnlineIsthikharaRouter/OnlineIsthikharaRoute")
);
router.use("/QuranAppTaf", require("./QuranAppTafRouter/QuranAppTafRoute"));
router.use("/JobBank", require("./JobBankRouter/JobBankRoute"));
router.use("/Welfare", require("./WelfareRouter/WelfareRoute"));
router.use("/Incubation", require("./IncubationRouter/IncubationRoute"));
router.use(
  "/OnlineMasjidReg",
  require(".//OnlineMasjidRegRouter/OnlineMasjidRegRoute")
);
router.use(
  "/OnlineQuranReg",
  require("./OnlineQuranRegRouter/OnlineQuranRegRoute")
);
router.use("/Books", require(".//BooksRouter/BookRoute"));
module.exports = router;
