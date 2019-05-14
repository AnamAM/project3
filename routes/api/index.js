const router = require("express").Router();
const serviceRoute = require("./services");
const appointmentRoute = require("./appointment");
const productRoute = require("./product")
const contactRoute = require("./contact")


// Book routes
router.use("/services", serviceRoute);
router.use("/appointment", appointmentRoute);
router.use("/products", productRoute);
router.use("/contact", contactRoute);

module.exports = router;
