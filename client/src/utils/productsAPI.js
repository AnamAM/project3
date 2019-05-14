import axios from "axios";

export default {
  // Gets all products
  getProducts: function() {
    console.log({});
    return axios.get("/api/products");
  },
  // Gets the service with the given id
  getProduct: function(id) {
    return axios.get("/api/products/" + id);
  },
  // Deletes the service with the given id
  deleteProducts: function(id) {
    return axios.delete("/api/products/" + id);
  },
  // Saves a service to the database
  saveProduct: function(productData) {
    return axios.post("/api/products", productData);
  }
};
