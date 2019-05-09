const router = require("express").Router();
const appointmentsController = require("../../controllers/appointmentController");

// Matches with "/api/appointment"
router.route("/")
  .get(appointmentsController.findAll)
  .post(appointmentsController.create);

// Matches with "/api/appointment/:id"
router.route("/:id")
  .get(appointmentsController.findById)
  .put(appointmentsController.update)
  .get(appointmentsController.populates)
  .post(appointmentsController.joining)
  .delete(appointmentsController.remove);

module.exports = router;