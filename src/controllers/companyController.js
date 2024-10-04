const Comapny = require("../models/companyModel");

class ComapnyController {
  static getAllCompanies(req, res) {
    Comapny.findAll((data) => {
      res.status(200).json({
        succes: true,
        message: "Companeis fetched succesfully",
        data,
      });
    });
  }

  static getCompanyById(req, res) {
    const id = req.params.id;
    Comapny.findById(id, (data) => {
      if (!data) {
        return res.status(404).json({
          succes: false,
          message: "Comapny not found",
        });
      }
      res.status(200).json({
        succes: true,
        message: "Comapny fetched succesfully",
        data,
      });
    });
  }

  static createCompany(req, res) {
    const companyData = req.body;
    Comapny.creat(companyData, (id) => {
      res.status(201).json({
        succes: true,
        message: "Comapny created succesfully",
        company_id: id,
      });
    });
  }

  static updateCompany(req, res) {
    const id = req.params.id;
    const companyData = req.body;
    Comapny.updat(id, companyData, (result) => {
      if (result.affectedRows === 0) {
        return res.status(404).json({
          succes: false,
          message: "Comapny not found",
        });
      }
      res.status(200).json({
        succes: true,
        message: "Comapny updated succesfully",
      });
    });
  }

  static deleteCompany(req, res) {
    const id = req.params.id;
    Comapny.delet(id, (result) => {
      if (result.affectedRows === 0) {
        return res.status(404).json({
          succes: false,
          message: "Comapny not found",
        });
      }
      res.status(200).json({
        succes: true,
        message: "Comapny deleted succesfully",
      });
    });
  }
}

module.exports = ComapnyController;
