import React, { Component } from "react";
import { Input } from "../Form";
import { Container } from "../Grid";

class Contact extends Component {
  state = {
    name: "",
    email: "",
    subject: "",
    message: ""
  };


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (!this.state.name || !this.state.email) {
      alert("Please enter your name and email address.");
    }
    else {
      alert(`Thank you, ${this.state.name}! We'll get back to you as soon as possible.`);
    }
    this.setState({ name: "", email: "", subject: "", message: "" });
  };

  render() {
    return (
      <div>
      <Container fluid>
        <h1 style={{textAlign: "center", color: "white"}}>Contact Us!</h1>
        <Input style={{ width: "30%" }}
          type="text"
          placeholder="Name"
          name="name"
          value={this.state.name}
          onChange={this.handleInputChange}
        />
        <Input style={{ width: "30%" }}
          type="text"
          placeholder="Email"
          name="email"
          value={this.state.email}
          onChange={this.handleInputChange}
        />
        <Input style={{ width: "30%" }}
          type="text"
          placeholder="Subject"
          name="Subject"
          value={this.state.subject}
          onChange={this.handleInputChange}
        />
        <Input style={{ width: "30%" }}
          type="text"
          placeholder="Message"
          name="message"
          value={this.state.message}
          onChange={this.handleInputChange}
        />
        <button className="waves-effect waves-light btn-small" onClick={this.handleFormSubmit}>Submit</button>
        </Container>
      </div>
    );
  }
}

export default Contact;