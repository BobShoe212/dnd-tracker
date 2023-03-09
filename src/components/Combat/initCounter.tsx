import React from "react";

function InitCounter(props: { initValue: number }) {
  return (
    <React.Fragment>
      <span> Initiative:</span>
      <span className="badge m-2 bg-primary">{props.initValue}</span>
    </React.Fragment>
  );
}

export default InitCounter;
