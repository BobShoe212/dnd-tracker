import React from "react";

//TODO: Change from a simple display to a textbox that updates the initiative value when the value of the textbox changes
function InitChanger(props) {
  return (
    <React.Fragment>
      <span> Initiative:</span>
      <span className="badge m-2 bg-primary">{props.initValue}</span>
    </React.Fragment>
  );
}

export default InitChanger;
