const db = require("./config/db");
const bcrypt = require("bcrypt");

const seedCompanies = [
  {
    name: "PakTech Solutions",
    address: "101 Tech Avenue, Lahore",
    email: "info@paktech.com",
    phone: "042-111-222333",
  },
  {
    name: "Innovative Minds",
    address: "202 Innovation Street, Karachi",
    email: "contact@innovativeminds.com",
    phone: "021-333-444555",
  },
];

const seedUsers = [
  {
    name: "Ali Khan",
    email: "alikhan@paktech.com",
    company_id: 1,
    role: "Manager",
    password: bcrypt.hashSync("password123", 10),
  },
  {
    name: "Sara Ahmed",
    email: "saraahmed@innovativeminds.com",
    company_id: 2,
    role: "Developer",
    password: bcrypt.hashSync("password123", 10),
  },
  {
    name: "Bilal Siddiqui",
    email: "bilalsiddiqui@paktech.com",
    company_id: 1,
    role: "Developer",
    password: bcrypt.hashSync("password123", 10),
  },
  {
    name: "Ayesha Malik",
    email: "ayeshamalik@innovativeminds.com",
    company_id: 2,
    role: "Designer",
    password: bcrypt.hashSync("password123", 10),
  },
];

const insertCompanies = () => {
  return new Promise((resolve, reject) => {
    const sql = "INSERT INTO companies (name, address, email, phone) VALUES ?";
    const values = seedCompanies.map((company) => [
      company.name,
      company.address,
      company.email,
      company.phone,
    ]);

    db.query(sql, [values], (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
};

const insertUsers = () => {
  return new Promise((resolve, reject) => {
    const sql =
      "INSERT INTO users (name, email, company_id, role, password) VALUES ?";
    const values = seedUsers.map((user) => [
      user.name,
      user.email,
      user.company_id,
      user.role,
      user.password,
    ]);

    db.query(sql, [values], (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
};

const runSeeder = async () => {
  try {
    await new Promise((resolve, reject) => {
      db.changeUser({ database: process.env.DB_NAME }, (err) => {
        if (err) return reject(err);
        resolve();
      });
    });

    await insertCompanies();
    await insertUsers();

    process.exit();
  } catch (error) {
    process.exit(1);
  }
};

runSeeder();
