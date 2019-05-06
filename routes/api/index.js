const router = require("express").Router();
const appointmentRoute = require("./appointment");
const customerRoute = require("./customer");
const invoiceRoute = require("./invoices");
const orderItemRoute = require("./orderItems");
const productRoute = require("./products");
const serviceRoute = require("./services");

// Oas routes
router.use("/appointment", appointmentRoute);
router.use("/customer", customerRoute);
router.use("/invoices", invoiceRoute);
router.use("/orderItems", orderItemRoute);
router.use("/products", productRoute);
router.use("/services", serviceRoute);

module.exports = router;
