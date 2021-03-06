import React, { Component } from "react";
import { Input } from "../Form";
// import { Container } from "../Grid";
import Title from "../Title";
import contactAPI from "../../utils/contactAPI";

class Contact extends Component {
  state = {
    contacts: [],
    name: "",
    email: "",
    subject: "",
    message: ""

  };

  loadContacts = () => {
    contactAPI.getContacts()
      .then(res =>
        this.setState({ contacts: res.data, name: "", email: "", subject: "", message: "" })
      )
      .catch(err => console.log(err));
    console.log(this.state.contacts);
  }

  deleteContact = id => {
    contactAPI.deleteContact(id)
      .then(res => this.loadContacts())
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
    if (this.state.name && this.state.email) {
      contactAPI.saveContact({
        name: this.state.name,
        email: this.state.email,
        subject: this.state.subject,
        message: this.state.message
      })
        .then(res => this.loadContacts())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div>
       <div className="container py-3">
        <Title name="Contact" title="Us"  />
        <div className="row">
        <div className="col-10 mx-auto col-md-8 my-3">
          <Input style={{ width: "90%" }}
            type="text"
            placeholder="Name"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
          <br></br>
          <Input style={{ width: "90%" }}
            type="text"
            placeholder="Email"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
          <br></br>
          <Input style={{ width: "90%" }}
            type="text"
            placeholder="Subject"
            name="subject"
            value={this.state.subject}
            onChange={this.handleInputChange}
          />
          <br></br>
          <Input style={{ width: "90%" }}
            type="text"
            placeholder="Message"
            name="message"
            value={this.state.message}
            onChange={this.handleInputChange}
          />
          <br></br>
          <button className="waves-effect waves-light btn-small" style={{ marginLeft: "65%%" }} onClick={this.handleFormSubmit}>Send Email {' '}<i className="fas fa-paper-plane"></i></button>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;