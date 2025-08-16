const { v4: uuidv4 } = require('uuid');
const taskModel = require('../models/taskModel');

// Create a task
exports.createTask = (req, res) => {
  const { title, description, dueDate, status } = req.body;
  const userId = req.user.id;
  const taskId = uuidv4();

  taskModel.createTask(taskId, userId, title, description, dueDate, status, (err, result) => {
    if (err) return res.status(500).json({ message: 'Error creating task' });
    res.status(201).json({ message: 'Task created successfully' });
  });
};

// Get all tasks for logged-in user
exports.getAllTasks = (req, res) => {
  const userId = req.user.id;

  taskModel.getTasksByUser(userId, (err, tasks) => {
    if (err) return res.status(500).json({ message: 'Error fetching tasks' });
    res.json(tasks);
  });
};

// Get single task by ID
exports.getTask = (req, res) => {
  const { id } = req.params;

  taskModel.getTaskById(id, (err, task) => {
    if (err) return res.status(500).json({ message: 'Error fetching task' });
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.json(task);
  });
};

// Update task
exports.updateTask = (req, res) => {
  const { id } = req.params;
  const updatedFields = req.body;

  taskModel.updateTask(id, updatedFields, (err, result) => {
    if (err) return res.status(500).json({ message: 'Error updating task' });
    res.json({ message: 'Task updated successfully' });
  });
};

// Delete task
exports.deleteTask = (req, res) => {
  const { id } = req.params;

  taskModel.deleteTask(id, (err, result) => {
    if (err) return res.status(500).json({ message: 'Error deleting task' });
    res.json({ message: 'Task deleted successfully' });
  });
};