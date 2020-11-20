const express = require("express");
const router = express.Router();
const SmitFacultyCon = require("../../controller/SmitController/SmitFaculty");
const SmitStdCounCon = require("../../controller/SmitController/SmitStdCounCon");
const SmitCoursesCon = require("../../controller/SmitController/SmitCoursesCon");
const SmitContactCon = require("../../controller/SmitController/SmitContactCon");
const SmitTeacherCon = require("../../controller/SmitController/SmitTeacherCon");
const SmitCollaborationCon = require("../../controller/SmitController/SmitCollaborationCon");

router.post("/SmitFacultyadd", SmitFacultyCon.SmitFacultyadd);
router.get("/SmitFacultyGet", SmitFacultyCon.SmitFacultyGet);
router.put("/SmitFacultyUpdate", SmitFacultyCon.SmitFacultyUpdate);
router.delete("/SmitFacultyDel", SmitFacultyCon.SmitFacultyDel);

// SMIT Student Counts ROUTES
router.post("/SmitStdCounCon", SmitStdCounCon.SmitCounAdd);
router.get("/SmitCounGet", SmitStdCounCon.SmitCounGet);
router.put("/SmitCounUpdate", SmitStdCounCon.SmitCounUpdate);
router.delete("/SmitCounDel", SmitStdCounCon.SmitCounDel);

// SMIT COURSES ROUTES
router.post("/smitCoursesAdd", SmitCoursesCon.smitCoursesAdd);
router.get("/smitCoursesGet", SmitCoursesCon.smitCoursesGet);
router.put("/smitCoursesUpdate", SmitCoursesCon.smitCoursesUpdate);
router.delete("/smitCoursesDelete", SmitCoursesCon.smitCoursesDelete);

// SMIT Contact ROUTES
router.post("/SmitContactAdd", SmitContactCon.SmitContactAdd);
router.get("/SmitContactGet", SmitContactCon.SmitContactGet);
router.put("/SmitContactUpdate", SmitContactCon.SmitContactUpdate);

///SMIT TEACHER ROUTES
router.post("/SmitTeacheradd", SmitTeacherCon.SmitTeacheradd);
router.get("/SmitTeacherGet", SmitTeacherCon.SmitTeacherGet);
router.delete("/SmitTeacherDel", SmitTeacherCon.SmitTeacherDel);

///Smit Collaboration ROUTES
router.post("/SmitCollaborationadd", SmitCollaborationCon.SmitCollaborationadd);
router.get("/SmitCollaborationGet", SmitCollaborationCon.SmitCollaborationGet);
router.delete(
  "/SmitCollaborationDel",
  SmitCollaborationCon.SmitCollaborationDel
);

module.exports = router;
