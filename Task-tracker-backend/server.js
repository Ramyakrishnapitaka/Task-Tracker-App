require("dotenv").config()
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const Task = require("./models/taskschema");
const PORT=process.env.PORT||8976
app.use(cors());
app.use(express.json());
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("Database connected"))
.catch(err => console.log("DB not connected", err));
app.post("/api/task", async (req, res) => {
    try {
        const task = new Task(req.body);
        const saved = await task.save();
        res.json(saved);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
app.get("/api/task", async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
});
app.put("/api/task/:id", async (req, res) => {
    try {
        const updated = await Task.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(updated);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
app.delete("/api/task/:id", async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.json({ message: "Task deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
app.listen(PORT, () => {
    console.log("Server running on 8976");
});
