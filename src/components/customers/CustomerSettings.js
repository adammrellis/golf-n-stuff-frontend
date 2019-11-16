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
import { updateCustomer } from "../../store/customers/actions";
import { connect } from "react-redux";
import CustomersType from "../../store/customers/type";

class CustomerSettings extends React.Component {
  state = {
    id: this.props.match.params.id,
    name: this.props.selectedCustomer.name,
    company: this.props.selectedCustomer.company,
    email: this.props.selectedCustomer.email,
    phone: this.props.selectedCustomer.phone,
    address: this.props.selectedCustomer.address
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSelect = event => {
    const { name, value } = event.target;
    console.log("VALUE IN UPDATE Customer", value);

    this.setState({
      [name]: Number(value)
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.updateCustomer({
      id: Number(this.state.id),
      name: this.state.name,
      company: this.state.company,
      email: this.state.email,
      phone: this.state.phone,
      address: this.state.address
    });
  };

  render() {
    console.log("PARAMS", this.props.match.params.id);
    if (this.props.selectedCustomer) {
      console.log("PROPS in UPDATE Customer", this.props.selectedCustomer);
      return (
        <Container>
          <Row>
            <Col>
              <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                  <h3>Enter Customer Information</h3>
                  <hr></hr>
                  <Label for="updateCustomer">Name</Label>
                  <Input
                    className="mb-4"
                    type="text"
                    name="name"
                    id="nameId"
                    value={this.state.name}
                    onChange={this.handleChange}
                  ></Input>
                  <Label for="updateCustomer">Company</Label>
                  <Input
                    className="mb-4"
                    type="text"
                    name="company"
                    id="companyId"
                    value={this.state.company}
                    onChange={this.handleChange}
                  />
                  <Label for="updateCustomer">Email</Label>
                  <Input
                    className="mb-4"
                    type="string"
                    name="email"
                    id="emailId"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                  <Label for="updateCustomer">Phone</Label>
                  <Input
                    className="mb-4"
                    type="text"
                    name="phone"
                    id="phoneId"
                    value={this.state.phone}
                    onChange={this.handleChange}
                  />
                  <Label for="updateCustomer">Address</Label>
                  <Input
                    className="mb-4"
                    type="string"
                    name="address"
                    id="addressId"
                    value={this.state.address}
                    onChange={this.handleChange}
                  />
                  <Button
                    disabled={this.props.selectedCustomer ? false : true}
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

CustomerSettings.propTypes = {
  ...CustomersType
};

function mapStateToProps(state, props) {
  return {
    selectedCustomer: state.customers.find(
      customer => customer.id == props.match.params.id
    )
  };
}

export default connect(
  mapStateToProps,
  { updateCustomer }
)(CustomerSettings);
