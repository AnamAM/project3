import axios from "axios";

export default {
  // Gets all appointments
  getAppointments: function() {
    return axios.get("/api/appointment");
  },
  // Gets the appointment with the given id
  getAppointment: function(id) {
    return axios.get("/api/appointment/" + id);
  },
  // Deletes the appointment with the given id
  deleteAppointment: function(id) {
    return axios.delete("/api/appointment/" + id);
  },
  // Saves a appointment to the database
  saveAppointment: function(appointmentData) {
    console.log(appointmentData)
    return axios.post("/api/appointment", appointmentData);
  }
};
