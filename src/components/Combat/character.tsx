import React from "react";
import InitCounter from "./initCounter";

function Character(props: {
  ally: boolean;
  name: string;
  initValue: any;
  id: any;
  handleRemove: any;
}) {
  return (
    <div>
      <span className={getInitBadgeClasses(props.ally)}>{props.name}</span>
      <InitCounter initValue={props.initValue} />
      {getRemoveEnemyButton(props.id, props.ally, props.handleRemove)}
    </div>
  );
}

export default Character;

function getInitBadgeClasses(ally: boolean) {
  let classes = "badge m-2 bg-";
  classes += ally ? "primary" : "danger";
  return classes;
}

function getRemoveEnemyButton(id: string, ally: boolean, handleRemove: any) {
  if (ally) {
    return;
  }
  return (
    <button
      onClick={() => {
        handleRemove(id);
      }}
      className="btn btn-warning btn-sm m-2"
    >
      Remove
    </button>
  );
}
