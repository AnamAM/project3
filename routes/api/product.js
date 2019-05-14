const router = require("express").Router();
const productsController = require("../../controllers/productsController");

// Matches with "/api/services"
router.route("/")
  .get(productsController.findAll)
  .post(productsController.create);

// Matches with "/api/services/:id"
router.route("/:id")
  .get(productsController.findById)
  .put(productsController.update)
  .delete(productsController.remove);

module.exports = router;