const { body } = require("express-validator");

const userCreateValidator = [
  body("name").trim().escape().notEmpty().withMessage("Name is required"),
  body("email")
    .trim()
    .isEmail()
    .withMessage("Invalid email format")
    .normalizeEmail(),
  body("role").trim().escape().notEmpty().withMessage("Role is required"),
  body("password")
    .trim()
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
];

const userUpdateValidator = [
  body("name").trim().escape().notEmpty().withMessage("Name is required"),
  body("email")
    .trim()
    .isEmail()
    .withMessage("Invalid email format")
    .normalizeEmail(),
  body("role").trim().escape().notEmpty().withMessage("Role is required"),
  body("password")
    .trim()
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
];

module.exports = {
  userCreateValidator,
  userUpdateValidator,
};
