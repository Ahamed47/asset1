import React, { Fragment } from "react";

//components

import Navbar from "../navbar/Navbar";
//import ListStatus from "./ListStatus";
import RequestStatus from "./RequestStatus";

function Asset() {
  return (
    <Fragment>
      <Navbar />
      <div className="container">
        <RequestStatus />
      </div>
    </Fragment>
  );
}

export default Asset;
