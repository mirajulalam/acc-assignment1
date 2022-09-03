const express = require("express");
const usersControllers = require("../controllers/users.controller");

const router = express.Router()

router.route("/all").get(usersControllers.getAllUser)
router.route("/save").post(usersControllers.saveAUser)

module.exports = router;