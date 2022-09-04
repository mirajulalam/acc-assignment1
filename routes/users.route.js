const express = require("express");
const usersControllers = require("../controllers/users.controller");

const router = express.Router()

router.route("/all").get(usersControllers.getAllUser)
router.route("/save").post(usersControllers.saveAUser)
router.route("/:id")
.patch(usersControllers.updateUser)
.delete(usersControllers.deleteUser)

module.exports = router;