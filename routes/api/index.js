const router = require("express").Router();
const serviceRoute = require("./services");
const appointmentRoute = require("./appointment");


// Book routes
router.use("/services", serviceRoute);
router.use("/appointment", appointmentRoute);

module.exports = router;
