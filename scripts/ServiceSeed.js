const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/OAS"
);

const bookServices = [
  {
      name: "Wrapping",
  },
  {
      name: "Tinting",
  },
  {
      name: "Powder Coating",
  },
  {
      name: "Caliper Painting",
  },
  {
      name: "Tire Lettering & Stickers",
  }
];

db.Services
  .remove({})
  .then(() => db.Services.collection.insertMany(bookServices))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  // db.Appointment.collection.insert({
  //   vehicleYear: 1260,
  //   vehicleName: "asdfasdf",
  //   serviceID: [
  //     _id: '23412341234234'
  //   ]
  // })