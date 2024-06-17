import React from "react";

export default function Alert(props) {

  return (
    <div style={{ height: '50px' }}>
      {props.Alert && (
        <div
          className="alert alert-success"
          role="alert"
        >
          {props.Alert.msg}
        </div>)}
    </div>
  );
}
