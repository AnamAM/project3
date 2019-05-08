import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import appointmentAPI from "../utils/appointmentAPI";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";

class Appointment extends Component {
  state = {
    appointment: [],
    vehicleYear: "",
    vehicleMake: "",
    vehicleColor: "",
    vehicleModel: "",
    licenseNum: "",
    time: "",
    date: ""
  };
  
  componentDidMount() {
    this.loadAppointment();
  }
  
  loadAppointment= () => {
    appointmentAPI.getAppointments()
    .then(res =>
      this.setState({ appointment: res.data, vehicleYear: "", vehicleMake: "", vehicleColor: "", vehicleModel: "", licenseNum: "", time: "", date: "" })
      )
      .catch(err => console.log(err));
      console.log(this.state.appointment);
    };

  deleteAppointment = id => {
    appointmentAPI.deleteAppointment(id)
      .then(res => this.loadAppointment())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.vehicleMake && this.state.licenseNum) {
      appointmentAPI.saveAppointment({
        vehicleYear: this.state.vehicleYear,
        vehicleMake: this.state.vehicleMake,
        vehicleColor: this.state.vehicleColor,
        vehicleModel: this.state.vehicleModel,
        licenseNum: this.state.licenseNum,
        time: this.state.time,
        date: this.state.date
      })
        .then(res => this.loadAppointment())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Schedule an Appointment!</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.vehicleColor}
                onChange={this.handleInputChange}
                name="vehicleColor"
                placeholder="Color (required)"
              />
              <Input
                value={this.state.vehicleMake}
                onChange={this.handleInputChange}
                name="vehicleMake"
                placeholder="Make (required)"
              />
              <Input
                value={this.state.vehicleModel}
                onChange={this.handleInputChange}
                name="vehicleModel"
                placeholder="Model (required)"
              />
              <Input
                value={this.state.vehicleYear}
                onChange={this.handleInputChange}
                name="vehicleYear"
                placeholder="Year (required)"
              />
              <Input
                value={this.state.licenseNum}
                onChange={this.handleInputChange}
                name="licenseNum"
                placeholder="License (required)"
              />
              <Input
                value={this.state.time}
                onChange={this.handleInputChange}
                name="time"
                placeholder="time (required)"
              />
              <Input
                value={this.state.date}
                onChange={this.handleInputChange}
                name="date"
                placeholder="date (required)"
              />
              <FormBtn
                disabled={!(this.state.vehicleMake && this.state.licenseNum)}
                onClick={this.handleFormSubmit}
              >
                Submit Appointment
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Choose a Service</h1>
            </Jumbotron>
            {this.state.appointment.length ? (
              <List>
                {this.state.appointment.map(appointments => (
                  <ListItem key={appointments._id}>
                    <Link to={"/appointment/" + appointments._id}>
                      <strong>
                        {appointments.vehicleModel} by {appointments.vehicleColor}
                      </strong>
                    </Link>
                    {/* <DeleteBtn onClick={() => this.deleteBook(book._id)} /> */}
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Appointment;
