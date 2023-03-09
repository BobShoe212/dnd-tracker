import React, { useState, useEffect } from "react";
import PartyTracker from "./Party/partyTracker";
import HeroAdder from "./Party/heroAdder";
import CombatTracker from "./Combat/combatTracker";
import EnemyAdder from "./Combat/enemyAdder";
import { v4 as uuid } from "uuid";

export interface Character {
  id: string;
  name: string;
  hpValue: number;
  maxHP: number;
  initValue: number;
  ally: boolean;
}

function CharacterTracker() {
  //sets the state for characterList, with an initial state loaded from local storage
  const [characterList, setCharacterList] = useState(loadFromLocalStorage());

  //saves the current state to local storage if it has changed
  useEffect(() => {
    localStorage.setItem("characterListKey", JSON.stringify(characterList));
  }, [characterList]);

  //handle an hp change button click and change the hp value of the specified character, based on the id given, by the number given
  const handleHPChange = (id: string, num: number) => {
    console.log("Change hp of character with id: ", id, "by: ", num);
    let list = characterList.slice();
    const current = getCharacterIndexByID(id);
    list[current].hpValue = list[current].hpValue + num;
    if (list[current].hpValue < 0) {
      list[current].hpValue = 0;
    }
    if (list[current].hpValue > list[current].maxHP) {
      list[current].hpValue = list[current].maxHP;
    }
    setCharacterList(list);
  };

  //change the init value of the specified character, based on the id given, to the number given
  const handleInitChange = (id: string, num: number) => {
    console.log("Change init of character with id: ", id, "to: ", num);
    let list = characterList.slice();
    const current = getCharacterIndexByID(id);
    let newInit = num;
    if (isNaN(newInit)) {
      newInit = 0;
    }
    list[current].initValue = newInit;
    console.log(list);
    setCharacterList(list);
  };

  //add a character to the array
  const addCharacter = (
    newName: string,
    hp: number,
    init: number,
    ally: boolean
  ) => {
    //makes sure the values are not empty and that hp and initiative are numbers
    if (!newName || !hp || !init) return;
    if (newName === "" || !Number.isInteger(hp) || !Number.isInteger(init)) {
      return; //TODO add a popup that explains the issue
    }
    console.log("Add new Character");
    //gets a copy of the characterList and concats a new object with the given values and a unique ID
    let list = characterList.slice();

    if (ally) {
      list = list.concat({
        id: uuid(),
        name: newName,
        hpValue: hp,
        maxHP: hp,
        initValue: init,
        ally: ally,
      });
    } else {
      for (let i = 0; i < hp; i++) {
        let enemyNumber = i + 1;
        let enemyName = newName + enemyNumber;
        list = list.concat({
          id: uuid(),
          name: enemyName,
          hpValue: 1,
          maxHP: 1,
          initValue: init,
          ally: ally,
        });
      }
    }

    //sets the state
    setCharacterList(list);
  };

  //removes a character from the array given the characters id
  const removeCharacter = (id: string) => {
    console.log("Remove", id);
    const list = characterList.slice();
    const current = getCharacterIndexByID(id);
    list.splice(current, 1);
    setCharacterList(list);
  };

  const getCharacterIndexByID = (id: string) => {
    return characterList.findIndex(
      (character: Character) => character.id === id
    );
  };

  const clearList = () => {
    setCharacterList([]);
  };

  return (
    <div>
      <div className="header">TODO: HEADER</div>
      <div className="container">
        <div className="tracker bg-dark text-light">
          <h1 className="m-5 text-center">
            Bob's Character Tracker{" "}
            <small className="text-muted h4">
              For TTRPG Party and Combat tracking
            </small>
          </h1>
          <div className="row">
            <div className="col-xxl-7 col-12">
              <PartyTracker
                characters={characterList.slice()}
                handleRemove={removeCharacter}
                handleHPChange={handleHPChange}
                handleInitChange={handleInitChange}
              />
              <HeroAdder addCharacter={addCharacter} />
            </div>
            <div className="col-xxl-5 col-12">
              <CombatTracker
                characters={characterList.slice()}
                handleRemove={removeCharacter}
              />
              <EnemyAdder addCharacter={addCharacter} />
            </div>
            <button className="col-1 m-5 btn btn-danger" onClick={clearList}>
              Clear all Characters
            </button>
          </div>
        </div>
      </div>
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
