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
      <div className="input-group row">
        <span className="input-group-text col-7"> Initiative:</span>
        <input
          id={initiativeTextBoxID}
          type="number"
          className="input-group-text col-5"
          defaultValue={props.initValue}
          onChange={(e) => {
            props.handleInitChange(props.id, e.currentTarget.valueAsNumber);
          }}
        ></input>
      </div>
    </React.Fragment>
  );
}

export default InitChanger;
