import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import servicesAPI from "../utils/servicesAPI";
import { Input, FormBtn } from "../components/Form";

class Service extends Component {
  state = {
    services: [],
    name: ""
  };

  componentDidMount() {
    this.loadService();
  }

  loadService = () => {
    servicesAPI.getServices()
      .then(res =>
        this.setState({ services: res.data, name: "" })
      )
      .catch(err => console.log(err));
  };

  deleteService = id => {
    servicesAPI.deleteService(id)
      .then(res => this.loadService())
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
    if (this.state.name) {
      servicesAPI.saveService({
        name: this.state.name
      })
        .then(res => this.loadService())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Schedule a Service!</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.name}
                onChange={this.handleInputChange}
                name="name"
                placeholder="nameOfService (required)"
              />
              <FormBtn
                disabled={!(this.state.name)}
                onClick={this.handleFormSubmit}
              >
                Submit Service
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Choose a Service</h1>
            </Jumbotron>
          </Col>
            <Row>
              <Col size="md-2">
                <Link to="/">← BackToSchedulingAppointments</Link>
              </Col>
            </Row>
        </Row>
      </Container>
    );
  }
}

export default Service;
