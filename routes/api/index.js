const router = require("express").Router();
const serviceRoute = require("./services");
const appointmentRoute = require("./appointment");
const productRoute = require("./product");
const contactRoute = require("./contact");
const cartRoute = require("./cart");


router.use("/services", serviceRoute);
router.use("/appointment", appointmentRoute);
router.use("/products", productRoute);
router.use("/contact", contactRoute);
router.use("/cart", cartRoute);

module.exports = router;
