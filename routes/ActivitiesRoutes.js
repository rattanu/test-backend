const { Router } = require("express");
const {
  getActivities,
  saveActivity,
  updateActivity,
  deleteActivity,
} = require("../controller/ActivitiesController")

const router = Router();

router.get("/get", getActivities);
router.post("/save", saveActivity);
router.put("/update/:id", updateActivity);
router.delete("/delete/:id", deleteActivity);

module.exports = router;
