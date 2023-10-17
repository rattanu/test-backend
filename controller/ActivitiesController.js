const ActivitiesModel = require("../models/ActivitiesModel");

module.exports.getActivities = async (req, res) => {
  try {
    const activities = await ActivitiesModel.find();
    res.status(200).json(activities);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports.saveActivity = async (req, res) => {
  const { activityType, activityName, activityDescription, duration, distance, date } = req.body;

  if (!activityType || !activityName) {
    res.status(400).json({ error: "activityType, activityName, are required fields" });
    return;
  }

  try {
    const newActivity = new ActivitiesModel({ activityType, activityName, activityDescription, duration, distance, date });
    const savedActivity = await newActivity.save();
    res.status(201).json(savedActivity);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports.updateActivity = async (req, res) => {
  const { id } = req.params;
  const { activityType, activityName, activityDescription, duration, distance, date } = req.body;

  if (!activityType || !activityName || !date) {
    res.status(400).json({ error: "activityType, activityName, and date are required fields" });
    return;
  }

  try {
    const updatedActivity = await ActivitiesModel.findByIdAndUpdate(id, {
      activityType,
      activityName,
      activityDescription,
      duration,
      distance,
      date,
    }, { new: true });
    res.status(200).json(updatedActivity);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports.deleteActivity = async (req, res) => {
  const { id } = req.params;
  try {
    await ActivitiesModel.findByIdAndDelete(id);
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
