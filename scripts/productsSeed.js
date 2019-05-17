const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/OAS"
);

const shopProducts = [
  {
    name: "Shampoo Bath",
    image: "https://optimumautostyling.webnode.com/_files/200000015-3308434042/SHAMPOO%20BATH.JPG",
    price: 11.99,
    description: "Shampoo Bath has the best gloss-boosting soap formula which will allow your car to have a beautiful sheen."
},
{
    name: "Tire Shine",
    image: "https://optimumautostyling.webnode.com/_files/200000014-520b953074/TIRE%20SHINE.JPG",
    price: 11.99,
    description: "Tire Shine is the perfect product to apply to your tires for that wet, shiny look."
},
{
    name: "Waterless Wash",
    image: "https://optimumautostyling.webnode.com/_files/200000016-2aa772ba30/WATERLESS%20WASH.JPG",
    price: 13.99,
    description: "Waterless Wash is a detailing spray that can be used without a hose. For use, simply spray on a generous amount of the product on the surface of your car and wipe away with a microfiber towel."
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