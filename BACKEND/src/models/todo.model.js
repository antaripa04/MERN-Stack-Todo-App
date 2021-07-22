const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
    {
    title: { type: String },
    description: { type: String },
    priority: { type: String },
    completed: { type: Boolean },
    createdAt: { type: String, default: new Date().toLocaleDateString() },
   }
);

module.exports = mongoose.model("todoItem", todoSchema);
