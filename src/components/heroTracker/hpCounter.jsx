import React from "react";

//TODO add a maxHP value to the characters
function HpCounter(props) {
  return (
    <React.Fragment>
      <span> HP:</span>
      <span className={getBadgeClasses(props.hpValue)}>
        {formathpValue(props.hpValue, props.maxHP)}
      </span>
      <button
        onClick={() =>
          props.handleHPChange(
            props.id,
            document.getElementById(getHeroHPID(props.id)).value
          )
        }
        className="btn btn-success btn-sm"
      >
        +
      </button>
      <input
        type="number"
        id={getHeroHPID(props.id)}
        placeholder="Heal/Damage"
        required={true}
      ></input>
      <button
        onClick={() => {
          props.handleHPChange(
            props.id,
            0 - document.getElementById(getHeroHPID(props.id)).value
          );
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

function isHPZero(hp) {
  return hp === 0;
}

function getHeroHPID(id) {
  return "heroHPTextbox" + id;
}

function getBadgeClasses(x) {
  let classes = "badge m-2 bg-";
  classes += x === 0 ? "danger" : "primary";
  return classes;
}

function formathpValue(x, y) {
  return x === 0 ? "Zero" : x + "/" + y;
}
