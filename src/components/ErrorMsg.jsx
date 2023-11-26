import React from "react";

const ErrorMsg = ({ message }) => {
  return (
    <div className="errorMsg">
      <p>{message}</p>
    </div>
  );
};

export default ErrorMsg;
