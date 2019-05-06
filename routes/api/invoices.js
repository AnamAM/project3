const router = require("express").Router();
const invoicesController = require("../../controllers/invoicesController");

// Matches with "/api/books"
router.route("/")
  .get(invoicesController.findAll)
  .post(invoicesController.create);

// Matches with "/api/books/:id"
router.route("/:id")
  .get(invoicesController.findById)
  .put(invoicesController.update)
  .delete(invoicesController.remove);

module.exports = router;