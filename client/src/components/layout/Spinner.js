import React, { Fragment } from "react";
import spinner from "./spinner.gif";

const Spinner = (props) => (
  <Fragment>
    <img
      src={spinner}
      style={{
        width: "50px",
        margin: "auto",
        display: "block",
        borderBottom: "0",
      }}
      alt="Loading"
    />
  </Fragment>
);

export default Spinner;
