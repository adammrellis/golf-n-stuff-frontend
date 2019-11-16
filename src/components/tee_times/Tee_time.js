import React from "react";
import moment from "moment";
import Tee_timeType from "../../store/tee_times/type";
import { ListGroupItem, Row, Col, Button, Container } from "reactstrap";
import { connect } from "react-redux";
import { removeTee_time } from "../../store/tee_times/actions";
import { NavLink, Link, withRouter } from "react-router-dom";

const Tee_time = ({ singleTee_time, removeTee_time }) => {
  const handleRemove = event => {
    console.log("delete", singleTee_time.id);
    removeTee_time(singleTee_time.id);
  };

  const customersTee_times = singleTee_time.customers.map(customer => (
    <li key={customer.id}>{customer.name}</li>
  ));

  return (
    <ListGroupItem>
      <Container className="mb-2">
        <Row>
          <Col xs="4">
            <h4>Tee Time Schedule</h4>
          </Col>
          <Col>
            <NavLink to={`/tee_timeSettings/${singleTee_time.id}`}>
              <Button>Edit Tee Time</Button>
            </NavLink>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5>Scheduled Customers: </h5>
            <Col>{customersTee_times}</Col>
          </Col>
          <Row>
            <Col>
              <h5>Time:</h5>
              <h6>
                {moment(singleTee_time.time).format("MMMM Do YYYY, h:mm:ss a")}
              </h6>
              <Button
                className="btn btn-danger sm-text btn-sm"
                onClick={handleRemove}
              >
                Remove Time
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <NavLink to={`/addCustomer/${singleTee_time.id}`}>
                <Button>Add/Remove Customers</Button>
              </NavLink>
            </Col>
          </Row>
        </Row>
      </Container>
    </ListGroupItem>
  );
};

Tee_time.propTypes = {
  ...Tee_timeType
};

function mapStateToProps(state, props) {
  return {
    tee_times: state.tee_times
  };
}

export default connect(
  mapStateToProps,
  { removeTee_time }
)(withRouter(Tee_time));
