import React, { Component } from "react";
import { TextField, Button } from "@mui/material";

export class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: "",
      company: "",
      city: "",
      from: "",
      to: "",
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.value);
  };
  addExperience = () => {
    console.log(this.state);
    this.props.addExperience(this.state);
  };
  deleteExperience = () => {
    this.props.deleteExperience(this.props.key);
  };

  render() {
    const { position, company, city, from, to } = this.props;
    return (
      <div>
        <TextField
          variant="outlined"
          fullWidth={true}
          placeholder="Position"
          value={!this.state.position ? position : this.state.position}
          inputProps={{ name: "position", onChange: this.onChange }}
          margin="normal"
        />
        <TextField
          variant="outlined"
          fullWidth={true}
          placeholder="Company"
          value={!this.state.company ? company : this.state.company}
          inputProps={{ name: "company", onChange: this.onChange }}
          margin="normal"
        />
        <TextField
          variant="outlined"
          fullWidth={true}
          placeholder="City"
          value={this.state.city ? city : this.state.city}
          inputProps={{ name: "city", onChange: this.onChange }}
          margin="normal"
        />

        <TextField
          variant="outlined"
          fullWidth={true}
          placeholder="From"
          value={this.state.from ? from : this.state.from}
          inputProps={{ name: "from", onChange: this.onChange }}
          margin="normal"
        />
        <TextField
          variant="outlined"
          fullWidth={true}
          placeholder="To"
          value={this.state.to ? to : this.state.to}
          inputProps={{ name: "to", onChange: this.onChange }}
          margin="normal"
        />
        {this.props.displayDeleteBtn ? (
          <Button
            variant="contained"
            fullWidth={true}
            size="large"
            style={{ margin: ".6em 0 2.4em 0" }}
            onClick={this.props.deleteExperience}
          >
            Delete
          </Button>
        ) : (
          <Button
            variant="contained"
            fullWidth={true}
            size="large"
            style={{ margin: ".6em 0 2.4em 0" }}
            onClick={this.addExperience}
          >
            Add
          </Button>
        )}
      </div>
    );
  }
}

export default Experience;
