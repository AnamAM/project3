const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/OAS"
);

const shopProducts = [
  {
      name: "Shampoo Bath",
      quantity: 100,
      price: 11.99,
      isActive: false
      
  },
  {
      name: "Tire Shine",
      quantity: 100,
      price: 11.99,
      isActive: false
  
  },
  {
      name: "Waterless Wash",
      quantity:100,
      price: 13.99,
      isActive: false
     
  }
 
];

db.Products
  .remove({})
  .then(() => db.Products.collection.insertMany(shopProducts))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    // process.exit(0); it will exit out of your server and you do not want that.
  })
  .catch(err => {
    console.error(err);
  });

