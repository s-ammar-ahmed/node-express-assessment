const express = require("express");
const UesrController = require("../controllers/userControler");

const router = express.Router();

router.get("/", UesrController.getAllUsers);
router.get("/:id", UesrController.getUserById);
router.post("/", UesrController.createUser);
router.put("/:id", UesrController.updateUser);
router.delete("/:id", UesrController.deleteUser);

module.exports = router;
