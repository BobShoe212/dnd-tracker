import React from "react";
import HpCounter from "./hpCounter";
import InitChanger from "./initChanger";

function Hero(props) {
  return (
    <div>
      <span className="badge bg-primary">{props.name}</span>
      <HpCounter
        hpValue={props.hpValue}
        maxHP={props.maxHP}
        id={props.id}
        handleHPChange={props.handleHPChange}
      />
      <InitChanger
        id={props.id}
        initValue={props.initValue}
        handleInitChange={props.handleInitChange}
      />
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
