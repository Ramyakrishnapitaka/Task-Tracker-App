var mongoose = require("mongoose");

var taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  status: { type: String, default: "pending" }
});

module.exports = mongoose.model("Task", taskSchema);
