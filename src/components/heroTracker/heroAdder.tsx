import React, { useState } from "react";

//render function for the character adder section       TODO add 2 radio boxes to check either Hero or Monster, pass the result of the to add character as a boolean ally: true/false

function HeroAdder(props: {
  addCharacter: (
    arg0: string,
    arg1: number,
    arg2: number,
    arg3: boolean
  ) => void;
}) {
  const [newName, setNewName] = useState("Enter Name");
  const [newHP, setNewHP] = useState(0);

  //document.getElementById("nameTextbox")
  // document.getElementById("hpTextbox")
  function handleNameChange(newName: string) {
    setNewName(newName);
  }
  function handleHPChange(newHP: number) {
    newHP <= 0 ? setNewHP(1) : setNewHP(newHP);
  }

  function handleAddClick(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    event.preventDefault();
    props.addCharacter(newName, newHP, 1, true);
  }

  return (
    <div>
      <span>Add a new Hero: </span>
      <input
        type="text"
        id="nameTextbox"
        placeholder="Enter Name"
        required={true}
        onChange={(e) => handleNameChange(e.currentTarget.value)}
      ></input>
      <input
        type="number"
        id="hpTextbox"
        placeholder="Enter HP"
        required={true}
        onChange={(e) => handleHPChange(Number.parseInt(e.currentTarget.value))}
      ></input>
      <button onClick={(e) => handleAddClick(e)}>Add Hero</button>
    </div>
  );
}

export default HeroAdder;
