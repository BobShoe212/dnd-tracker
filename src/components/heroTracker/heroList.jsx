import React from "react";
import Hero from "./hero";

function HeroList(props) {
  let list = props.characters.slice();
  let heroList = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i].ally) {
      heroList = heroList.concat(list[i]);
    }
  }
  if (list.length === 0)
    return (
      <React.Fragment>
        <h1>Hero List</h1>
        <h2>There are no Characters, add some below</h2>
      </React.Fragment>
    );

  //TODO add a new prop to send to Counter called ally: true/false
  return (
    <React.Fragment>
      <h1>Hero List</h1>
      {heroList.map((x) => (
        <Hero
          key={x.id}
          id={x.id}
          hpValue={x.hpValue}
          maxHP={x.maxHP}
          name={x.name}
          initValue={x.initValue}
          handleRemove={props.handleRemove}
          handleHPChange={props.handleHPChange}
          ally={x.ally}
        />
      ))}
    </React.Fragment>
  );
}

export default HeroList;
