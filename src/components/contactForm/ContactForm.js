import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

class ContactForm extends Component {
  state = {
    name: "",
    number: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.submitContact({
      name: this.state.name,
      number: this.state.number,
      id: uuidv4()
    });
    this.setState({
      name: "",
      number: ""
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              Name
              <input
                placeholder="name..."
                type="text"
                name="name"
                onChange={this.handleChange}
                value={name}
              />
            </label>
          </div>
          <div>
            <label>
              Number
              <input
                type="tel"
                // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                placeholder="phone number..."
                name="number"
                onChange={this.handleChange}
                value={number}
              />
            </label>
          </div>
          <div>
            <button type="submit">ADD</button>
          </div>
        </form>
      </>
    );
  }
}

export default ContactForm;
