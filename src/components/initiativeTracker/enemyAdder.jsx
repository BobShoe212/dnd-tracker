import React from "react";

function EnemyAdder(props) {
  return (
    <div>
      <h1>Enemy Adder</h1>
      <input
        type="text"
        id="enemyNameTextbox"
        placeholder="Enter Name"
        required={true}
      ></input>
      <input
        type="number"
        id="enemyNumberTextbox"
        placeholder="Enter Quantity"
        required={true}
      ></input>
      <input
        type="number"
        id="enemyInitTextbox"
        placeholder="Enter Initiative"
        required={true}
      ></input>
      <button
        onClick={() =>
          props.addCharacter(
            document.getElementById("enemyNameTextbox"),
            document.getElementById("enemyNumberTextbox"),
            document.getElementById("enemyInitTextbox"),
            false
          )
        }
      >
        Add Enemy
      </button>
    </div>
  );
}

export default EnemyAdder;
