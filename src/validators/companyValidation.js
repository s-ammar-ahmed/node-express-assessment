const { body } = require("express-validator");

const companyCreateValidator = [
  body("name")
    .trim()
    .escape()
    .notEmpty()
    .withMessage("Company name is required"),
  body("address").trim().escape().optional(),
  body("email")
    .trim()
    .isEmail()
    .withMessage("Invalid email format")
    .normalizeEmail(),
  body("phone").trim().escape().optional(),
];

const companyUpdateValidator = [
  body("name")
    .trim()
    .escape()
    .notEmpty()
    .withMessage("Company name is required"),
  body("address").trim().escape().optional(),
  body("email")
    .trim()
    .isEmail()
    .withMessage("Invalid email format")
    .normalizeEmail(),
  body("phone").trim().escape().optional(),
];

module.exports = {
  companyCreateValidator,
  companyUpdateValidator,
};
