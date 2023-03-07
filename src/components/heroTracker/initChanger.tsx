import React from "react";

//TODO: Change from a simple display to a textbox that updates the initiative value when the value of the textbox changes
function InitChanger(props: {
  id: string;
  initValue: number;
  handleInitChange: (arg0: string, arg1: number) => void;
}) {
  const initiativeTextBoxID = "InitiativeTextBox" + props.id;
  return (
    <React.Fragment>
      <span> Initiative:</span>
      <input
        id={initiativeTextBoxID}
        type="number"
        defaultValue={props.initValue}
        onChange={(e) => {
          props.handleInitChange(props.id, e.currentTarget.valueAsNumber);
        }}
      ></input>
    </React.Fragment>
  );
}

export default InitChanger;
