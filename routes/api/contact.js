const router = require("express").Router();
const contactController = require("../../controllers/contactController");

// Matches with "/api/appointment"
router.route("/")
  .get(contactController.findAll)
  .post(contactController.create);

// Matches with "/api/appointment/:id"
router.route("/:id")
  .get(contactController.findById)
  .post(contactController.joining)
  .delete(contactController.remove);

module.exports = router;