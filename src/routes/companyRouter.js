const express = require("express");
const ComapnyController = require("../controllers/companyController");

const router = express.Router();

router.get("/", ComapnyController.getAllCompanies);
router.get("/:id", ComapnyController.getCompanyById);
router.post("/", ComapnyController.createCompany);
router.put("/:id", ComapnyController.updateCompany);
router.delete("/:id", ComapnyController.deleteCompany);

module.exports = router;
