import React from "react";
import Character from "./character";

function InitiativeTracker(props) {
  let list = props.characters;
  if (list.length === 0)
    return (
      <React.Fragment>
        <h1>Initiative Tracker</h1>
        <h2>There are no Characters, add some Heroes above or Enemies below</h2>
      </React.Fragment>
    );

  return (
    <React.Fragment>
      <h1>Initiative Tracker</h1>
      {props.characters.map((x) => (
        <Character
          key={x.id}
          id={x.id}
          name={x.name}
          initValue={x.initValue}
          handleRemove={props.handleRemove}
          ally={x.ally}
        />
      ))}
    </React.Fragment>
  );
}

export default InitiativeTracker;
