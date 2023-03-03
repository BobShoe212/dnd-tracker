import React from "react";
import Character from "./character";

function InitiativeTracker(props) {
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
  const sortedList = sortList(list);
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

function sortList(list) {
  //sort the list
  let sortedList = [];
  for (let init = 30; init >= 0; init--) {
    for (let i = 0; i < list.length; i++) {
      if (list[i].initValue === init) {
        sortedList = sortedList.concat(list[i]);
      }
    }
  }
  return sortedList;
}
