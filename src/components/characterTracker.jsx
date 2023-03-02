import React, { useState, useEffect } from "react";
import HeroList from "./heroList";
import HeroAdder from "./heroAdder";

function CharacterTracker() {
  //sets the state for characterList, with an initial state loaded from local storage
  const [characterList, setCharacterList] = useState(loadFromLocalStorage());

  //saves the current state to local storage if it has changed
  useEffect(() => {
    localStorage.setItem("characterListKey", JSON.stringify(characterList));
  }, [characterList]);

  //handle an increment button click and increment the hp value of the specified character, based on the id given
  const handleIncrement = (id) => {
    console.log("Increment hp of character with id: ", id);
    const list = characterList.slice();
    const current = getCharacterIndexByID(id);
    list[current].hpValue++;
    setCharacterList(list);
  };

  //handle a deccrement button click and decrement the hp value of the specified character, based on the id given
  const handleDecrement = (id) => {
    console.log("Decrement hp of character with id: ", id);
    const list = characterList.slice();
    const current = getCharacterIndexByID(id);
    list[current].hpValue--;
    if (list[current].hpValue < 0) {
      removeCharacter(id);
      return;
    }
    setCharacterList(list);
  };

  //add a character to the array
  const addCharacter = (newName, hp, init, ally) => {
    //makes sure the values are not empty and that hp and initiative are numbers
    if (
      newName.value === "" ||
      !Number.isInteger(Number.parseInt(hp.value)) ||
      !Number.isInteger(Number.parseInt(init.value))
    ) {
      return;
    }
    console.log("Add new Character");
    //gets a copy of the characterList and concats a new object with the given values and a unique ID
    let list = characterList.slice();
    console.log(list);
    list = list.concat({
      id: getUniqueID(),
      name: newName.value,
      hpValue: Number.parseInt(hp.value),
      initValue: Number.parseInt(init.value),
      ally: ally,
    });

    //sets the state and clears the textboxes
    setCharacterList(list);
    newName.value = "";
    hp.value = "";
    init.value = "";
  };

  //checks the list of characters for and returns the lowest unique id possible
  const getUniqueID = () => {
    let list = characterList.slice();
    for (let newID = 0; ; newID++) {
      let unique = true;
      for (let i = 0; i < list.length; i++) {
        if (newID === list[i].id) {
          unique = false;
        }
      }
      if (unique) {
        return newID;
      }
    }
  };

  //removes a character from the array given the characters id
  const removeCharacter = (id) => {
    console.log("Remove", id);
    const list = characterList.slice();
    const current = getCharacterIndexByID(id);
    list.splice(current, 1);
    setCharacterList(list);
  };

  const getCharacterIndexByID = (id) => {
    return characterList.findIndex((character) => character.id === id);
  };

  return (
    <div className="m-2">
      <HeroList
        characters={characterList.slice()}
        handleRemove={removeCharacter}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
      <HeroAdder addCharacter={addCharacter} />
    </div>
  );
}

export default CharacterTracker;

//returns the characterList from local storage, returns an empty array if there is nothing stored
function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem("characterListKey");
    if (!serializedState) {
      return [];
    }
    return JSON.parse(serializedState);
  } catch {
    return [];
  }
}
