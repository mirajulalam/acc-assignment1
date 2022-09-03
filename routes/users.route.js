const express = require("express");
const usersControllers = require("../controllers/users.controller");

const router = express.Router()

router
.route("/all")
.get(usersControllers.getAllUser)


module.exports = router;