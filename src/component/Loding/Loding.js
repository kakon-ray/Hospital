import React from "react";
import { Spinner } from "react-bootstrap";

const Loding = () => {
  return (
    <div className="text-center">
      <Spinner animation="border" variant="info" className="text-center" />
    </div>
  );
};

export default Loding;
