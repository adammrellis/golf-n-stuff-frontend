import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
  Container
} from "reactstrap";
import { updateTee_time } from "../../store/tee_times/actions";
import { connect } from "react-redux";
import Tee_timeType from "../../store/tee_times/type";

class Tee_timeSettings extends React.Component {
  state = {
    time: this.props.selectedTee_time.time,
    id: this.props.match.params.id
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSelect = event => {
    const { name, value } = event.target;
    console.log("VALUE IN UPDATE Tee_time", value);

    this.setState({
      [name]: Number(value)
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.updateTee_time({
      id: Number(this.state.id),
      time: this.state.time
    });
  };

  render() {
    console.log("Props in teetimesettings", this.props);

    if (this.props.selectedTee_time) {
      console.log("PROPS in UPDATE Tee_time", this.props.selectedTee_time);
      return (
        <Container>
          <Row>
            <Col>
              <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                  <h3>Update Tee Time Information</h3>
                  <hr></hr>
                  <Label for="updateTee_time">What Time?</Label>
                  {this.props.selectedTee_time.time && (
                    <Input
                      className="mb-4"
                      type="text"
                      name="time"
                      id="timeId"
                      value={this.state.time}
                      onChange={this.handleChange}
                    />
                  )}
                  <Button
                    disabled={this.props.selectedTee_time ? false : true}
                    type="submit"
                  >
                    Submit
                  </Button>
                </FormGroup>
              </Form>
            </Col>
          </Row>
        </Container>
      );
    } else {
      return <div>Please Wait</div>;
    }
  }
}

Tee_timeSettings.propTypes = {
  ...Tee_timeType
};

function mapStateToProps(state, props) {
  return {
    selectedTee_time: state.tee_times.find(
      tee_time => tee_time.id == props.match.params.id
    )
  };
}

export default connect(
  mapStateToProps,
  { updateTee_time }
)(Tee_timeSettings);
