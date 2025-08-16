const db = require('../config/db');

// Create a new task
function createTask(id, userId, title, description, dueDate, status, callback) {
  const q = 'INSERT INTO tasks (id, user_id, title, description, due_date, status) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(q, [id, userId, title, description, dueDate, status], callback);
}

// Get all tasks for a user
function getTasksByUser(userId, callback) {
  const q = 'SELECT * FROM tasks WHERE user_id = ?';
  db.query(q, [userId], callback);
}

// Get single task by ID
function getTaskById(id, callback) {
  const q = 'SELECT * FROM tasks WHERE id = ?';
  db.query(q, [id], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results[0]);
  });
}

// Update task
function updateTask(id, updatedFields, callback) {
  const q = 'UPDATE tasks SET ? WHERE id = ?';
  db.query(q, [updatedFields, id], callback);
}

// Delete task
function deleteTask(id, callback) {
  const q = 'DELETE FROM tasks WHERE id = ?';
  db.query(q, [id], callback);
}

module.exports = {
  createTask,
  getTasksByUser,
  getTaskById,
  updateTask,
  deleteTask
};
