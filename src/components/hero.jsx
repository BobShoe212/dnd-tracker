import React from "react";

function Hero(props) {
  return (
    //TODO add a function to change the name badge to show Heros in Green and Monsters in red based on a new prop. ally: true/false
    <div>
      <span className="badge bg-primary">{props.name}</span>
      <span> Initiative:</span>
      <span className={getBadgeClasses(props.hpValue)}>{props.initValue}</span>
      <span> HP:</span>
      <span className={getBadgeClasses(props.hpValue)}>
        {formathpValue(props.hpValue)}
      </span>
      <button
        onClick={() => {
          props.handleIncrement(props.id);
        }}
        className="btn btn-success btn-sm"
      >
        +1
      </button>
      <button
        onClick={() => {
          props.handleDecrement(props.id);
        }}
        className="btn btn-danger btn-sm"
      >
        -1
      </button>
      <button
        onClick={() => {
          props.handleRemove(props.id);
        }}
        className="btn btn-warning btn-sm m-2"
      >
        Remove
      </button>
    </div>
  );
}

export default Hero;

function getBadgeClasses(x) {
  let classes = "badge m-2 bg-";
  classes += x === 0 ? "danger" : "primary";
  return classes;
}

function formathpValue(x) {
  const hpValue = x;
  return hpValue === 0 ? "Zero" : hpValue;
}
