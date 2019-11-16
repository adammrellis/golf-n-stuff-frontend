import React from "react";
import "./App.css";

import TopNav from "./components/layout/TopNav";
import Dashboard from "./components/layout/Dashboard";
import Tee_timeSettings from "./components/tee_times/Tee_timeSettings";
import CustomerSettings from "./components/customers/CustomerSettings";
import NewTee_timeForm from "./components/tee_times/NewTee_timeForm";
import NewCustomerForm from "./components/customers/NewCustomerForm";
import AddCustomer from "./components/tee_times/AddCustomer";

import { Col, Row, Container } from "reactstrap";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { fetchAllTee_times } from "./store/tee_times/actions";
import { fetchAllCustomers } from "./store/customers/actions";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchAllTee_times());
    this.props.dispatch(fetchAllCustomers());
  }

  render() {
    return (
      <div className="App">
        <div>
          <Router>
            <TopNav />
            <Row>
              <Col>
                <Container>
                  <Row>
                    <Route exact path="/" component={Dashboard} />
                    <Route
                      exact
                      path="/tee_timeSettings/:id"
                      component={Tee_timeSettings}
                    />
                    <Route
                      exact
                      path="/CustomerSettings/:id"
                      component={CustomerSettings}
                    />
                    <Route
                      exact
                      path="/newTee_timeForm"
                      component={NewTee_timeForm}
                    />
                    <Route
                      exact
                      path="/newCustomerForm"
                      component={NewCustomerForm}
                    />
                    <Route
                      exact 
                      path="/addCustomer/:id"
                      component={AddCustomer}
                      />
                  </Row>
                </Container>
              </Col>
            </Row>
          </Router>
        </div>
      </div>
    );
  }
}

export default connect()(App);
