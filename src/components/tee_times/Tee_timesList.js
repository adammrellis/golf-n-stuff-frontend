import React from "react";
import PropTypes from "prop-types";
import Tee_time from "./Tee_time";
import { connect } from "react-redux";
import { ListGroup } from "reactstrap";
import Tee_timeType from "../../store/tee_times/type";

const Tee_timesList = props => {
  console.log("props in tee_timeList", props);

  const listOfTee_times = props.tee_times.map(tee_time => {
    //console.log("single tee_time", tee_time)

    return <Tee_time key={tee_time.id} singleTee_time={tee_time} />;
  });

  if (props.tee_times) {
    return (
      <>
        <ListGroup className="mb-4">{listOfTee_times}</ListGroup>
      </>
    );
  } else {
    return <div>Loading..</div>;
  }
};

Tee_timesList.propTypes = {
  ...Tee_timeType
};

const mapStateToProps = (state, props) => {
  console.log("state in Tee_timesList", state.tee_times);
  return {
    tee_times: state.tee_times
  };
};

export default connect(mapStateToProps)(Tee_timesList);
