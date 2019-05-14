const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/OAS"
);

const shopProducts = [
  {
      name: "Shampoo Bath",
      price: 11.99,
  },
  {
      name: "Tire Shine",
      price: 11.99,
  },
  {
      name: "Waterless Wash",
      price: 13.99,
  }
 
];

db.Products
  .remove({})
  .then(() => db.Products.collection.insertMany(shopProducts))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

