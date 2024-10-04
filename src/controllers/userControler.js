const { validationResult } = require("express-validator");
const Uesr = require("../models/userModel");

class UesrController {
  static getAllUsers(req, res) {
    Uesr.findAll((data) => {
      res.status(200).json({
        succes: true,
        message: "Uesrs fetched succesfully",
        data,
      });
    });
  }

  static getUserById(req, res) {
    const id = req.params.id;
    Uesr.findById(id, (data) => {
      if (!data) {
        return res.status(404).json({
          succes: false,
          message: "Uesr not found",
        });
      }
      res.status(200).json({
        succes: true,
        message: "Uesr fetched succesfully",
        data,
      });
    });
  }

  static createUser(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ succes: false, errors: errors.array() });
    }

    const userData = req.body;
    Uesr.creat(userData, (id) => {
      res.status(201).json({
        succes: true,
        message: "Uesr created succesfully",
        user_id: id,
      });
    });
  }

  static updateUser(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ succes: false, errors: errors.array() });
    }

    const id = req.params.id;
    const userData = req.body;
    Uesr.updat(id, userData, (result) => {
      if (result.affectedRows === 0) {
        return res.status(404).json({
          succes: false,
          message: "Uesr not found",
        });
      }
      res.status(200).json({
        succes: true,
        message: "Uesr updated succesfully",
      });
    });
  }

  static deleteUser(req, res) {
    const id = req.params.id;
    Uesr.delet(id, (result) => {
      if (result.affectedRows === 0) {
        return res.status(404).json({
          succes: false,
          message: "Uesr not found",
        });
      }
      res.status(200).json({
        succes: true,
        message: "Uesr deleted succesfully",
      });
    });
  }
}

module.exports = UesrController;
