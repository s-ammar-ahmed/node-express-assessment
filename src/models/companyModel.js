const db = require("../config/db");

class Comapny {
  static findAll(callback) {
    const sql = "SELECT * FROM companies";
    db.query(sql, (err, results) => {
      if (err) throw err;
      callback(results);
    });
  }

  static findById(id, callback) {
    const sql = "SELECT * FROM companies WHERE id = ?";
    db.query(sql, [id], (err, results) => {
      if (err) throw err;
      callback(results[0]);
    });
  }

  static creat(data, callback) {
    const sql = "INSERT INTO companies SET ?";
    db.query(sql, data, (err, results) => {
      if (err) throw err;
      callback(results.insertId);
    });
  }

  static updat(id, data, callback) {
    const sql = "UPDATE companies SET ? WHERE id = ?";
    db.query(sql, [data, id], (err, results) => {
      if (err) throw err;
      callback(results);
    });
  }

  static delet(id, callback) {
    const sql = "DELETE FROM companies WHERE id = ?";
    db.query(sql, [id], (err, results) => {
      if (err) throw err;
      callback(results);
    });
  }
}

module.exports = Comapny;
