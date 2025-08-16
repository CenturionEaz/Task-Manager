const db = require('../config/db');

// Create a new user
function createUser(id, username, email, hashedPassword, callback) {
  const q = 'INSERT INTO users (id, username, email, password) VALUES (?, ?, ?, ?)';
  db.query(q, [id, username, email, hashedPassword], callback);
}

// Find user by email
function findUserByEmail(email, callback) {
  const q = 'SELECT * FROM users WHERE email = ?';
  db.query(q, [email], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results[0]); // return first user (or undefined)
  });
}

module.exports = {
  createUser,
  findUserByEmail
};