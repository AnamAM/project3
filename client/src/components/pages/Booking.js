import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
// import Jumbotron from "../components/Jumbotron";
import appointmentAPI from "../../utils/appointmentAPI";
import servicesAPI from '../../utils/servicesAPI'

// import { Link } from "react-router-dom";
// import { List, ListItem } from "../components/List";
import { Input,FormBtn } from "../../components/Form";
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
    currentServiceId: [],
    services: [],
    name: ""
  };

  serviceSelectInstance;

  componentDidMount() {
    this.loadAppointment();
    // this.getServices();
    this.loadServices();

    // M.FormSelect.init(document.querySelectorAll('select'));
  }

  loadAppointment = () => {
    appointmentAPI.getAppointments()
    
    .then(res => 
      this.setState({ appointment: res.data, firstName: "", lastName: "", email: "", vehicleMake: "", vehicleColor: "", vehicleModel: "", date: "", time: "" })
      )
      .catch(err => console.log(err));
      // console.log(this.state.appointment);
  };
  
  // loadAppointment = () => {
  // appointmentAPI.getAppointments()
  // .then( res => console.log(res))
  // .catch(err => console.log(err))
  //   }
  
    loadServices = () => {
    servicesAPI.getServices()
    .then(res => {
      this.setState({ services: res.data, },()=>{
        // console.log(document.getElementsByClassName('service-select')[0])
        this.serviceSelectInstance = M.FormSelect.init(document.getElementsByClassName('service-select')[0]);
      })
      // console.log(this.serviceSelectInstance)
    }
    )
      .catch(err => console.log(err));
      console.log(this.state.services);
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    // console.log(event.target.name);
  };
  // handleDropChange = (event) => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   },()=>{
  //     console.log(this.state.services)
  //   });
  //   console.log(event.target.value)
  
  // }

  selectService(e) {
    const serviceArr = this.serviceSelectInstance .getSelectedValues();
    console.log(serviceArr)
    this.setState(lastState => ({
      currentServiceId:serviceArr
    }))
    // console.log(this.refs.serviceSelector.value);
  }


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
        services: this.state.currentServiceId,
        date: this.state.date,
        time: this.state.time
      })
        .then(res => this.loadAppointment())
        .catch(err => console.log(err));
    }
  };
  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   if (this.state.name) {
  //     servicesAPI.getServices()
  //       .then(res => this.loadServices())
  //       .catch(err => console.log(err));
  //   }
  // };


  render() {
    var options = this.state.services.map(service => {
      return <option key={`option_${service._id}`}  value={service._id}>{service.name}</option>
    })
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
          <div>
            <select className="service-select" multiple={true} ref="serviceSelector"  onChange={(e) => {this.selectService(e);}}>{options}</select>
          </div>
          
          {/* <DropDown
            value={this.state.name}
            onChange={this.handleDropChange}
            services={this.state.services}
            name="name"
          /> */}
          
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
            onClick={this.handleFormSubmit}
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