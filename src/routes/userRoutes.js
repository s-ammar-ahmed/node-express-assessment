const express = require("express");
const UesrController = require("../controllers/userControler");
const {
  userCreateValidator,
  userUpdateValidator,
} = require("../validators/userValidation");

const router = express.Router();

router.get("/", UesrController.getAllUsers);

router.get("/:id", UesrController.getUserById);

router.post("/", userCreateValidator, UesrController.createUser);

router.put("/:id", userUpdateValidator, UesrController.updateUser);

router.delete("/:id", UesrController.deleteUser);

module.exports = router;
