import axios from "axios";

export default {
  // Gets all contact
  getContacts: function() {
    return axios.get("/api/contact");
  },
  // Gets the Contact with the given id
  getContact: function(id) {
    return axios.get("/api/contact/" + id);
  },
  // Deletes the Contact with the given id
  deleteContact: function(id) {
    return axios.delete("/api/contact/" + id);
  },
  // Saves a Contact to the database
  saveContact: function(ContactData) {
    console.log(ContactData)
    return axios.post("/api/contact", ContactData);
  }
};