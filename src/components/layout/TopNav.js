import React from "react";
import { connect } from "react-redux";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  Button,
  Row,
  Col
} from "reactstrap";
import { NavLink, Link, withRouter } from "react-router-dom";

class TopNav extends React.Component {
  render() {
    // const user = this.props.users[0] ? this.props.users.filter(user => user.id === 16)[0] : []

    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">
            <h3>Customer Tee Times</h3>
          </NavbarBrand>
          <NavbarToggler />
          <Collapse navbar>
            <Nav className="ml-auto" navbar>
              <Col>
                <NavLink to={`/newCustomerForm`}>
                  <Button>Add a Customer</Button>
                </NavLink>
              </Col>
              <NavLink to={`/newTee_timeForm`}>
                <Button>Add a Tee Time</Button>
              </NavLink>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    //users: state.users
  };
};

export default connect(mapStateToProps)(withRouter(TopNav));
