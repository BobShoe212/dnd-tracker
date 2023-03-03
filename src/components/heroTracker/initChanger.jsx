import React from "react";

//TODO: Change from a simple display to a textbox that updates the initiative value when the value of the textbox changes
function InitChanger(props) {
  const initiativeTextBoxID = "InitiativeTextBox" + props.id;
  return (
    <React.Fragment>
      <span> Initiative:</span>
      <input
        id={initiativeTextBoxID}
        type="number"
        defaultValue={props.initValue}
        onChange={() => {
          props.handleInitChange(
            props.id,
            document.getElementById(initiativeTextBoxID).value
          );
        }}
      ></input>
    </React.Fragment>
  );
}

export default InitChanger;
