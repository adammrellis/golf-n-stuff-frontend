import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { addCustomer } from "../../store/customers/actions";
import { connect } from "react-redux";
import CustomersType from "../../store/customers/type";

class NewCustomerForm extends React.Component {
  state = {
    name: "",
    company: "",
    email: "",
    phone: "",
    address: ""
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
    this.props.addCustomer({
      name: this.state.name,
      company: this.state.company,
      email: this.state.email,
      phone: this.state.phone,
      address: this.state.address
    });
    this.setState({
      name: "",
      company: "",
      email: "",
      phone: "",
      address: ""
    });
  };

  render() {
    console.log("STATE in customer form", this.state);

    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <h3>Enter Customer Information</h3>
            <hr></hr>
            <Label for="newCustomer">Name</Label>
            <Input
              className="mb-4"
              type="text"
              name="name"
              id="nameId"
              value={this.state.name.value}
              onChange={this.handleChange}
            ></Input>
            <Label for="newCustomer">Company</Label>
            <Input
              className="mb-4"
              type="text"
              name="company"
              id="companyId"
              value={this.state.company.value}
              onChange={this.handleChange}
            />
            <Label for="newCustomer">Email</Label>
            <Input
              className="mb-4"
              type="text"
              name="email"
              id="emailId"
              value={this.state.email.value}
              onChange={this.handleChange}
            ></Input>
            <Label for="newCustomer">Phone</Label>
            <Input
              className="mb-4"
              type="text"
              name="phone"
              id="phoneId"
              value={this.state.phone.value}
              onChange={this.handleChange}
            ></Input>
            <Label for="newCustomer">Address</Label>
            <Input
              className="mb-4"
              type="text"
              name="address"
              id="addressId"
              value={this.state.address.value}
              onChange={this.handleChange}
            ></Input>
            <Button disabled={this.state.address ? false : true} type="submit">
              Submit
            </Button>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

NewCustomerForm.propTypes = {
  ...CustomersType
};

function mapStateToProps(state, props) {
  return {
    customers: state.customers
  };
}

export default connect(
  mapStateToProps,
  { addCustomer }
)(NewCustomerForm);
