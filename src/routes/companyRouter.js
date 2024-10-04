const express = require("express");
const ComapnyController = require("../controllers/companyController");
const {
  companyCreateValidator,
  companyUpdateValidator,
} = require("../validators/companyValidation");

const router = express.Router();

router.get("/", ComapnyController.getAllCompanies);

router.get("/:id", ComapnyController.getCompanyById);

router.post("/", companyCreateValidator, ComapnyController.createCompany);

router.put("/:id", companyUpdateValidator, ComapnyController.updateCompany);

router.delete("/:id", ComapnyController.deleteCompany);

module.exports = router;
