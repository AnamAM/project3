const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/OAS"
);

const shopProducts = [
  {
    id: 1,
    name: "Shampoo Bath",
    img: "img/product1.png",
    price: 11.99,
    company: "OAS",
    description:
      "Shampoo Bath has the best gloss-boosting soap formula which will allow your car to have a beautiful sheen.",
    inCart: false,
    count: 0,
    total: 0

  },
  {
    id: 2,
    name: "Tire Shine",
    img: "img/product2.png",
    price: 11.99,
    company: "OAS",
    description:
      "Tire Shine is the perfect product to apply to your tires for that wet, shiny look.",
    inCart: false,
    count: 0,
    total: 0
  },
  {
    id: 3,
    name: "Waterless Wash",
    img: "img/product3.png",
    price: 13.99,
    company: "OAS",
    description:
      "Waterless Wash is a detailing spray that can be used without a hose. For use, simply spray on a generous amount of the product on the surface of your car and wipe away with a microfiber towel.",
    inCart: false,
    count: 0,
    total: 0

  }

];

db.Products
  .remove({})
  .then(() => db.Products.collection.insertMany(shopProducts))
  .then(data => {
    console.log(data.result.n + " records inserted!");
  })
  .catch(err => {
    console.error(err);
  });


