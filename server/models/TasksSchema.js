const { Schema, model } = require('mongoose');

const TaskSchema = new Schema({
  taskTitle: {
    type: String,
    required: true,
  },
  taskDescription: String,
  taskStartTime: {
    type: Number,
    required: true,
    default: Date.now(),
  },
  taskEndTime: Number,
  alreadyDone: {
    type: Boolean,
    required: true,
    default: false,
  },
});

module.exports = model('Task', TaskSchema);
