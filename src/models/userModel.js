const db = require("../config/db");

class Uesr {
  static findAll(callback) {
    const sql = "SELECT * FROM users";
    db.query(sql, (err, results) => {
      if (err) throw err;
      callback(results);
    });
  }

  static findById(id, callback) {
    const sql = "SELECT * FROM users WHERE id = ?";
    db.query(sql, [id], (err, results) => {
      if (err) throw err;
      callback(results[0]);
    });
  }

  static creat(data, callback) {
    const sql = "INSERT INTO users SET ?";
    db.query(sql, data, (err, results) => {
      if (err) throw err;
      callback(results.insertId);
    });
  }

  static updat(id, data, callback) {
    const sql = "UPDATE users SET ? WHERE id = ?";
    db.query(sql, [data, id], (err, results) => {
      if (err) throw err;
      callback(results);
    });
  }

  static delet(id, callback) {
    const sql = "DELETE FROM users WHERE id = ?";
    db.query(sql, [id], (err, results) => {
      if (err) throw err;
      callback(results);
    });
  }
}

module.exports = Uesr;
