import React from "react";
import CustomersList from "../customers/CustomerList";
import Tee_timesList from "../tee_times/Tee_timesList";
import { Row, Col } from "reactstrap";

const Dashboard = () => {
  return (
    <Row>
      <Col>
        <h3>List of Customers</h3>
        <hr></hr>
        <CustomersList />
      </Col>
      <Col>
        <h3>List of Tee Times</h3>
        <hr></hr>
        <Tee_timesList />
      </Col>
    </Row>
  );
};

export default Dashboard;
