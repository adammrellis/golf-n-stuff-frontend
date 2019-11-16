import React from "react";
import { ListGroupItem, Row, Col, Button, Container } from "reactstrap";
import { connect } from "react-redux";
import { removeCustomer } from "../../store/customers/actions";
import { NavLink, Link, withRouter } from "react-router-dom";
import CustomerType from "../../store/customers/type";

const Customer = ({ singleCustomer, removeCustomer }) => {
  const handleRemove = event => {
    console.log("delete", singleCustomer.id);
    removeCustomer(singleCustomer.id);
  };

  //console.log("customer is here", customer)

  return (
    <ListGroupItem>
      <Container className="mb-2">
        <Row>
          <Col>
            <h5>Name: </h5>
            <h4>{singleCustomer.name}</h4>
          </Col>
        </Row>
        <Row>
          <Col xs="4">
            <p>Company: {singleCustomer.company}</p>
            <p>Address: {singleCustomer.address}</p>
          </Col>
          <Col>
            <p>Email: {singleCustomer.email}</p>
            <p>Phone: {singleCustomer.phone}</p>
          </Col>
          <Row>
            <Col>
              <Button
                className="btn btn-danger sm-text btn-sm"
                onClick={handleRemove}
              >
                Remove From List
              </Button>
            </Col>
            <NavLink to={`/customerSettings/${singleCustomer.id}`}>
              <Button>Edit Customer Info</Button>
            </NavLink>
          </Row>
        </Row>
      </Container>
    </ListGroupItem>
  );
};

Customer.propTypes = {
  ...CustomerType
};

function mapStateToProps(state, props) {
  return {
    customer: state.customers
    // customerLocation: state.customers.map(customer => customer.location_id === props.locations.id),
    // location: state.locations.map(location => location.id === props.customer.location_id)
  };
}

export default connect(
  mapStateToProps,
  { removeCustomer }
)(withRouter(Customer));
