import React from "react";

//render function for the character adder section       TODO add 2 radio boxes to check either Hero or Monster, pass the result of the to add character as a boolean ally: true/false

function HeroAdder(props) {
  return (
    <div className="m-5">
      <input
        type="text"
        id="nameTextbox"
        placeholder="Enter Name"
        required={true}
      ></input>
      <input
        type="text"
        id="hpTextbox"
        placeholder="Enter HP"
        required={true}
      ></input>
      <input
        type="text"
        id="initTextbox"
        placeholder="Enter Initiative"
        required={true}
      ></input>
      <button
        onClick={() =>
          props.addCharacter(
            document.getElementById("nameTextbox"),
            document.getElementById("hpTextbox"),
            document.getElementById("initTextbox"),
            true
          )
        }
      >
        Add Hero
      </button>
    </div>
  );
}

export default HeroAdder;
