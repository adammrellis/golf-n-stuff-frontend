import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
  Container,
  ListGroup,
  ListGroupItem
} from "reactstrap";
import { updateTee_time } from "../../store/tee_times/actions";
import { connect } from "react-redux";
import Tee_timeType from "../../store/tee_times/type";

class AddCustomer extends React.Component {
  state = {
    id: this.props.match.params.id,
    customer: this.props.selectedTee_time.customers
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

  handleRemove = event => {
    console.log("delete", this.state.customer.id);
    updateTee_time(this.state.customer.id);
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.updateTee_time({
      id: Number(this.state.id)
    });
  };

  render() {
    console.log("Props in AddCustomerTo TeeTime", this.props);

    const teeTimeCustomers = this.props.selectedTee_time.customers.map(
      customer => customer.id
    );
    const singleCustomers = this.props.selectedTee_time.customers.map(customer => 
        <ListGroupItem>
            <Container className="mb-2">
            <Row>
                <Col>
                <h5>Name: </h5>
                <h4>{customer.name}</h4>
                <Button
                    className="btn btn-danger sm-text btn-sm"
                    //onClick={handleRemove}
                >
                    Remove From List
                </Button>
                </Col>
            </Row>
            </Container>
        </ListGroupItem>);

    const filteredCustomers = this.props.customers
      .filter(customer => !teeTimeCustomers.includes(customer.id))
      .map((customer, i) => {
        return (
          <option sm={2} key={i} value={customer.id}>
            {customer.name}
          </option>
        );
      });

    return (
      <Container>
        <Row>
          <Col>
            <h3>Add Customer to Tee Time</h3>
            <hr></hr>
            <Form>
              <FormGroup>
                <Input
                  className="mb-4"
                  type="select"
                  name="customer_id"
                  id="customerId"
                  value={this.state.customer}
                  onChange={this.handleSelect}
                >
                  {filteredCustomers}
                </Input>
                <Button
                  disabled={teeTimeCustomers.length < 4 ? false : true}
                  type="submit"
                >
                  Submit
                </Button>
              </FormGroup>
            </Form>
          </Col>
          <Col>
            <h3>List of Customers in Tee Time</h3>
            <hr></hr>
            <ListGroup className="mb-4">
              {singleCustomers}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

AddCustomer.propTypes = {
  ...Tee_timeType
};

function mapStateToProps(state, props) {
  return {
    selectedTee_time: state.tee_times.find(
      tee_time => tee_time.id === Number(props.match.params.id)
    ),
    customers: state.customers
  };
}

export default connect(
  mapStateToProps,
  { updateTee_time }
)(AddCustomer);
