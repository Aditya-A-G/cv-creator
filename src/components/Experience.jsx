import React, { Component } from "react";
import { TextField, Button } from "@mui/material";

export class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      experience: {
        position: "",
        company: "",
        city: "",
        from: "",
        to: "",
      },
      helperState: {
        position: !this.props.position ? "" : this.props.position,
        company: !this.props.company ? "" : this.props.company,
        city: !this.props.city ? "" : this.props.city,
        from: !this.props.from ? "" : this.props.from,
        to: !this.props.to ? "" : this.props.to,
        displayDeleteBtn: !this.props.displayDeleteBtn
          ? false
          : this.props.displayDeleteBtn,
        editExperience: false,
      },
    };
  }

  onChange = (e) => {
    if (this.state.helperState.displayDeleteBtn) {
      //do nothing
    } else {
      this.setState({
        experience: {
          ...this.state.experience,
          [e.target.name]: e.target.value,
        },
      });
    }
  };
  addExperience = () => {
    this.props.addExperience(this.state.experience);
  };
  deleteExperience = () => {
    this.props.deleteExperience(this.props.experienceKey);
  };

  handleEdit = () => {
    this.setState({
      experience: {
        position: this.props.position,
        company: this.props.company,
        city: this.props.city,
        from: this.props.from,
        to: this.props.to,
      },
      helperState: {
        position: "",
        company: "",
        city: "",
        from: "",
        to: "",
        editExperience: true,
        displayDeleteBtn: false,
      },
    });
  };
  updateExperience = () => {
    this.setState({
      helperState: {
        editExperience: false,
        displayDeleteBtn: true,
      },
    });
    this.props.updateExperience(
      this.state.experience,
      this.props.experienceKey
    );
  };
  render() {
    return (
      <div>
        <TextField
          variant="outlined"
          fullWidth={true}
          placeholder="Position"
          value={
            !this.state.helperState.position
              ? this.state.experience.position
              : this.state.helperState.position
          }
          inputProps={{ name: "position", onChange: this.onChange }}
          margin="normal"
        />
        <TextField
          variant="outlined"
          fullWidth={true}
          placeholder="Company"
          value={
            !this.state.helperState.company
              ? this.state.experience.company
              : this.state.helperState.company
          }
          inputProps={{ name: "company", onChange: this.onChange }}
          margin="normal"
        />
        <TextField
          variant="outlined"
          fullWidth={true}
          placeholder="City"
          value={
            !this.state.helperState.city
              ? this.state.experience.city
              : this.state.helperState.city
          }
          inputProps={{ name: "city", onChange: this.onChange }}
          margin="normal"
        />

        <TextField
          variant="outlined"
          fullWidth={true}
          placeholder="From"
          value={
            !this.state.helperState.from
              ? this.state.experience.from
              : this.state.helperState.from
          }
          inputProps={{ name: "from", onChange: this.onChange }}
          margin="normal"
        />
        <TextField
          variant="outlined"
          fullWidth={true}
          placeholder="To"
          value={
            !this.state.helperState.to
              ? this.state.experience.to
              : this.state.helperState.to
          }
          inputProps={{ name: "to", onChange: this.onChange }}
          margin="normal"
        />
        {this.props.displayDeleteBtn ? (
          <>
            {this.state.helperState.editExperience ? (
              <Button
                variant="contained"
                fullWidth={true}
                size="large"
                style={{ margin: ".6em 0 .4em 0" }}
                onClick={this.updateExperience}
              >
                Update
              </Button>
            ) : (
              <Button
                variant="contained"
                fullWidth={true}
                size="large"
                style={{ margin: ".6em 0 .4em 0" }}
                onClick={this.handleEdit}
              >
                Edit
              </Button>
            )}
            <Button
              variant="contained"
              fullWidth={true}
              size="large"
              style={{ margin: ".6em 0 2.4em 0" }}
              onClick={this.deleteExperience}
            >
              Delete
            </Button>
          </>
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
