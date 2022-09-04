const express = require("express");
const usersControllers = require("../controllers/users.controller");

const router = express.Router()

router.route("/random").get(usersControllers.getRandomUser)
router.route("/all").get(usersControllers.getAllUser)
router.route("/save").post(usersControllers.saveAUser)
router.route("/update/:id").patch(usersControllers.updateUser)
router.route("/:id").delete(usersControllers.deleteUser)
router.route("/bulk-update/:id").patch(usersControllers.updateAllUser)
module.exports = router;