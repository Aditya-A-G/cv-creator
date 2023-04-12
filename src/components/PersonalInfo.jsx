import React, { Component } from "react";
import { TextField } from "@mui/material";

export class PersonalInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      title: "",
      photo: "",
      address: "",
      phone: "",
      email: "",
      description: "",
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    this.props.handlePersonalInfo(this.state);
  };
  render() {
    return (
      <div>

        <TextField
          variant="outlined"
          fullWidth={true}
          placeholder="First Name"
          value={this.state.firstName}
          inputProps={{ name: "firstName", onChange: this.onChange }}
          margin="normal"
        />
        <TextField
          variant="outlined"
          fullWidth={true}
          placeholder="Last Name"
          value={this.state.lastName}
          inputProps={{ name: "lastName", onChange: this.onChange }}
          margin="normal"
        />
        <TextField
          variant="outlined"
          fullWidth={true}
          placeholder="Title"
          value={this.state.title}
          inputProps={{ name: "title", onChange: this.onChange }}
          margin="normal"
        />
        <TextField
          variant="outlined"
          fullWidth={true}
          placeholder="Photo"
          type="file"
          accept="image/*"
          value={this.state.photo}
          inputProps={{ name: "photo", onChange: this.onChange }}
          margin="normal"
        />
        <TextField
          variant="outlined"
          fullWidth={true}
          placeholder="Address"
          multiline
          rows={2}
          value={this.state.address}
          inputProps={{ name: "address", onChange: this.onChange }}
          margin="normal"
        />
        <TextField
          variant="outlined"
          fullWidth={true}
          placeholder="Phone Number"
          type="number"
          value={this.state.phone}
          inputProps={{ name: "phone", onChange: this.onChange }}
          margin="normal"
        />
        <TextField
          variant="outlined"
          fullWidth={true}
          placeholder="Email"
          type="email"
          value={this.state.email}
          inputProps={{ name: "email", onChange: this.onChange }}
          margin="normal"
        />
        <TextField
          variant="outlined"
          fullWidth={true}
          placeholder="Description"
          multiline
          rows={4}
          value={this.state.description}
          inputProps={{ name: "description", onChange: this.onChange }}
          margin="normal"
          style={{ marginBottom: "2.4em" }}
        />
      </div>
    );
  }
}

export default PersonalInfo;
