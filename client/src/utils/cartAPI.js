import axios from "axios";

export default {
  // Gets all cart
  getCarts: function() {
    return axios.get("/api/cart");
  },
  // Gets the Cart with the given id
  getCart: function(id) {
    return axios.get("/api/cart/" + id);
  },
  // Deletes the cart with the given id
  deleteCart: function(id) {
    return axios.delete("/api/cart/" + id);
  },
  // Saves a Cart to the database
  saveCart: function(CartData) {
    console.log(CartData)
    return axios.post("/api/cart", CartData);
  }
};
