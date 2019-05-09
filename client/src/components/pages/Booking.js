import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
// import Jumbotron from "../components/Jumbotron";
import appointmentAPI from "../../utils/appointmentAPI";
import servicesAPI from '../../utils/servicesAPI'
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
import { Input, DropDown, FormBtn } from "../../components/Form";
import M from 'materialize-css';
import { Container, Col, Row } from "../Grid";

class Booking extends Component {
  state = {
    appointment: [],
    firstName: "",
    lastName: "",
    email: "",
    vehicleMake: "",
    vehicleColor: "",
    vehicleModel: "",
    date: "",
    time: "",
    services: [],
    name: ""
  };

  componentDidMount() {
    this.loadAppointment();
    servicesAPI.getServices();

    M.FormSelect.init(document.querySelectorAll('select'));
    // M.Datepicker.init(document.querySelectorAll('elems', 'option'));
    // M.Timepicker.init(document.querySelectorAll('elems', 'option'));
  }

  loadAppointment = () => {
    appointmentAPI.getAppointments()
      .then(res =>
        this.setState({ appointment: res.data, firstName: "", lastName: "", email: "", vehicleMake: "", vehicleColor: "", vehicleModel: "", date: "", time: "" })
      )
      .catch(err => console.log(err));
    console.log(this.state.appointment);
  };

  loadServices = () => {
    servicesAPI.getServices()
      .then(res =>
        this.setState({ services: res.data, name: "" })
      )
      .catch(err => console.log(err));
    console.log(this.state.appointment);
  }

  deleteAppointment = id => {
    appointmentAPI.deleteAppointment(id)
      .then(res => this.loadAppointment())
      .catch(err => console.log(err));
  };

  deleteServices = id => {
    servicesAPI.deleteServices(id)
      .then(res => this.loadServices())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleInputChange2 = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.vehicleMake && this.state.vehicleModel) {
      appointmentAPI.saveAppointment({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        vehicleMake: this.state.vehicleMake,
        vehicleColor: this.state.vehicleColor,
        vehicleModel: this.state.vehicleModel,
        date: this.state.date,
        time: this.state.time
      })
        .then(res => this.loadAppointment())
        .catch(err => console.log(err));
    }
  };

  handleFormSubmit2 = event => {
    event.preventDefault();
    if (this.state.name) {
      servicesAPI.saveService({
        name: this.state.name
      })
        .then(res => this.loadServices())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div>
        <form>
        <Container fluid>
        <Row>
        <Col size="md-12">
        <h1>Book a Service!</h1>

        <Row>
        <Col size="sm-4">
          <Input
            value={this.state.firstName}
            onChange={this.handleInputChange}
            name="firstName"
            placeholder="First Name *"
          />
          </Col>
          <Col size="sm-4">
          <Input
            value={this.state.lastName}
            onChange={this.handleInputChange}
            name="lastName"
            placeholder="Last Name *"
          />
          </Col>
          </Row>

          <Row>
          <Col size="sm-4">
          <Input
            value={this.state.email}
            onChange={this.handleInputChange}
            name="email"
            placeholder="Email *"
          />
          </Col>
          </Row>

          <Row>
          <Col size="md-6">
          <DropDown
            value={this.state.name}
            onChange={this.handleInputChange2}
            name="name"
          />
          </Col>
          </Row>

          <Row>
          <Col size="sm-4">
          <Input
            value={this.state.vehicleMake}
            onChange={this.handleInputChange}
            name="vehicleMake"
            placeholder="Vehicle Make *"
          />
          </Col>
          <Col size="sm-4">
          <Input
            value={this.state.vehicleModel}
            onChange={this.handleInputChange}
            name="vehicleModel"
            placeholder="Vehicle Model *"
          />
          </Col>
          <Col size="sm-4">
          <Input
            value={this.state.vehicleColor}
            onChange={this.handleInputChange}
            name="vehicleColor"
            placeholder="Vehicle Color *"
          />
          </Col>
          </Row>

          <Row>
          <Col size="sm-4">
          <Input
            value={this.state.date}
            onChange={this.handleInputChange}
            name="date"
            placeholder="Date *"
          />
          </Col>
          <Col size="sm-4">
          <Input
            value={this.state.time}
            onChange={this.handleInputChange}
            name="time"
            placeholder="Time *"
          />
          </Col>
          </Row>
          <Col size="md-6">
            
          <FormBtn
            disabled={!(this.state.vehicleMake && this.state.vehicleModel)}
            onClick={this.handleFormSubmit && this.handleFormSubmit2}
          >
            Schedule Service
              </FormBtn>
          </Col>
          </Col>
          </Row>
          </Container>
        </form>
      </div>
    );
  }
}
export default Booking;