import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { addTee_time } from "../../store/tee_times/actions";
import { connect } from "react-redux";
import Tee_timeType from "../../store/tee_times/type";

class NewTee_timeForm extends React.Component {
  state = {
    time: ""
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleSelect = event => {
    const { name, value } = event.target;
    console.log("VALUE", value);

    this.setState({
      [name]: Number(value)
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addTee_time({
      time: this.state.time
    });
    this.setState({
      time: ""
    });
  };

  render() {
    console.log("STATE in Tee_time form", this.state);

    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <h3>Enter Tee Time Information</h3>
            <hr></hr>
            <Label for="newTee_time">Time</Label>
            <Input
              className="mb-4"
              type="text"
              name="time"
              id="timeId"
              value={this.state.time.value}
              onChange={this.handleChange}
            ></Input>
            <Button disabled={this.state.time ? false : true} type="submit">
              Submit
            </Button>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

NewTee_timeForm.propTypes = {
  ...Tee_timeType
};

function mapStateToProps(state, props) {
  return {
    tee_time: state.tee_time
  };
}

export default connect(
  mapStateToProps,
  { addTee_time }
)(NewTee_timeForm);
