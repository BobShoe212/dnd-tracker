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
  if (heroList.length === 0)
    return (
      <React.Fragment>
        <h2>Party</h2>
        <h5>Party is empty, add some Heroes below</h5>
      </React.Fragment>
    );

  //TODO add a new prop to send to Counter called ally: true/false
  return (
    <React.Fragment>
      <h1>Party</h1>
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
          handleInitChange={props.handleInitChange}
          ally={x.ally}
        />
      ))}
    </React.Fragment>
  );
}

export default HeroList;
