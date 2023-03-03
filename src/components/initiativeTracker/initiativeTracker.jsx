import React from "react";
import Character from "./character";

function InitiativeTracker(props) {
  let list = props.characters;
  if (list.length === 0)
    return (
      <React.Fragment>
        <h1>Character List</h1>
        <h2>There are no Characters, add some heros above and enemies below</h2>
      </React.Fragment>
    );

  //TODO add a new prop to send to Counter called ally: true/false
  return (
    <React.Fragment>
      <h1>Initiative Tracker</h1>
      {props.characters.map((x) => (
        <Character
          key={x.id}
          id={x.id}
          hpValue={x.hpValue}
          name={x.name}
          initValue={x.initValue}
          handleRemove={props.handleRemove}
          handleIncrement={props.handleIncrement}
          handleDecrement={props.handleDecrement}
          ally={x.ally}
        />
      ))}
    </React.Fragment>
  );
}

export default InitiativeTracker;
