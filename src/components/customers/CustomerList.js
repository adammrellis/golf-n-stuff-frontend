import React from "react";
import Customer from "./Customer";
import { connect } from "react-redux";
import { ListGroup } from "reactstrap";
import CustomersType from "../../store/customers/type";

const CustomersList = props => {
  console.log("props in customersList", props);
  const listOfCustomers = props.customers.map(customer => {
    //console.log("single customer", customer)
    return <Customer key={customer.id} singleCustomer={customer} />;
  });
  if (props.customers) {
    return (
      <div>
        <ListGroup className="mb-4">{listOfCustomers}</ListGroup>
      </div>
    );
  } else {
    return <div>Loading..</div>;
  }
};
CustomersList.propTypes = {
  ...CustomersType
};

const mapStateToProps = (state, props) => {
  console.log("state in customersList", state.customers);
  return {
    customers: state.customers
  };
};

export default connect(mapStateToProps)(CustomersList);
