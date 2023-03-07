import React from "react";
import Character from "./character";

function InitiativeTracker(props: { characters: any[]; handleRemove: any }) {
  let list = props.characters.slice();
  if (list.length === 0) {
    return (
      <React.Fragment>
        <h1>Initiative Tracker</h1>
        <h2>There are no Characters, add some Heroes above or Enemies below</h2>
      </React.Fragment>
    );
  }

  //sort the list based on initiative value, before rendering it.
  const sortedList = list.sort((a, b) => b.initValue - a.initValue);
  return (
    <React.Fragment>
      <h1>Initiative Tracker</h1>
      {sortedList.map((x) => (
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
