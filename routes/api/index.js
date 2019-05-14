const router = require("express").Router();
const serviceRoute = require("./services");
const appointmentRoute = require("./appointment");
const contactRoute = require("./contact");


// Book routes
router.use("/services", serviceRoute);
router.use("/appointment", appointmentRoute);
router.use("/contact", contactRoute);

module.exports = router;
