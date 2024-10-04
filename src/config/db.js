const mysql = require("mysql2");
const dotenv = require("dotenv");

dotenv.config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

connection.connect((err) => {
  if (err) throw err;
  connection.query(
    `CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`,
    (err) => {
      if (err) throw err;
      connection.changeUser({ database: process.env.DB_NAME }, (err) => {
        if (err) throw err;
        createTables();
      });
    }
  );
});

const createTables = () => {
  const companyTable = `
    CREATE TABLE IF NOT EXISTS companies (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      address VARCHAR(255),
      email VARCHAR(255),
      phone VARCHAR(50),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`;

  const userTable = `
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL UNIQUE,
      company_id INT,
      role VARCHAR(50),
      password VARCHAR(255),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (company_id) REFERENCES companies(id) ON DELETE SET NULL
    )`;

  connection.query(companyTable, (err) => {
    if (err) throw err;
  });

  connection.query(userTable, (err) => {
    if (err) throw err;
  });
};

module.exports = connection;
