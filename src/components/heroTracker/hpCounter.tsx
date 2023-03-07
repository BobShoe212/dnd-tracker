import React, { useState } from "react";

//TODO add a maxHP value to the characters
function HpCounter(props: {
  id: string;
  hpValue: number;
  maxHP: number;
  handleHPChange: (arg0: string, arg1: number) => void;
}) {
  const heroTextBoxID = "heroHPTextbox" + props.id;
  const [hpChange, setHPChange] = useState(0);

  return (
    <React.Fragment>
      <span> HP:</span>
      <span className={getBadgeClasses(props.hpValue)}>
        {formathpValue(props.hpValue, props.maxHP)}
      </span>
      <button
        onClick={() => props.handleHPChange(props.id, hpChange)}
        className="btn btn-success btn-sm"
      >
        +
      </button>
      <input
        type="number"
        id={heroTextBoxID}
        placeholder="Heal/Damage"
        required={true}
        onChange={(e) => setHPChange(e.currentTarget.valueAsNumber)}
      ></input>
      <button
        onClick={() => {
          props.handleHPChange(props.id, 0 - hpChange);
        }}
        className="btn btn-danger btn-sm"
        disabled={isHPZero(props.hpValue)}
      >
        -
      </button>
    </React.Fragment>
  );
}

export default HpCounter;

function isHPZero(hp: number) {
  return hp === 0;
}

function getHeroHPID(id: string) {
  return "heroHPTextbox" + id;
}

function getBadgeClasses(x: number) {
  let classes = "badge m-2 bg-";
  classes += x === 0 ? "danger" : "primary";
  return classes;
}

function formathpValue(x: number, y: number) {
  return x === 0 ? "Zero" : x + "/" + y;
}
