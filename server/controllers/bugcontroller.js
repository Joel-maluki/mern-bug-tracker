const Bug = require("../models/Bug");

// Create a new bug
exports.createBug = async (req, res) => {
  try {
    const { title, description } = req.body;
    const bug = new Bug({ title, description });
    await bug.save();
    res.status(201).json(bug);
  } catch (error) {
    res.status(500).json({ message: "Error creating bug", error });
  }
};

// Get all bugs
exports.getBugs = async (req, res) => {
  try {
    const bugs = await Bug.find();
    res.status(200).json(bugs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching bugs", error });
  }
};

// Update a bug status
exports.updateBug = async (req, res) => {
  try {
    const { status } = req.body;
    const bug = await Bug.findByIdAndUpdate(req.params.id, { status }, { new: true });
    if (!bug) return res.status(404).json({ message: "Bug not found" });
    res.status(200).json(bug);
  } catch (error) {
    res.status(500).json({ message: "Error updating bug", error });
  }
};

// Delete a bug
exports.deleteBug = async (req, res) => {
  try {
    const bug = await Bug.findByIdAndDelete(req.params.id);
    if (!bug) return res.status(404).json({ message: "Bug not found" });
    res.status(200).json({ message: "Bug deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting bug", error });
  }
};
