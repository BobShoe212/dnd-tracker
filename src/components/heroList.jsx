import React from "react";
import Hero from "./hero";

function HeroList(props) {
  if (props.characters.length === 0)
    return (
      <div>
        <h2>There are no Characters, add some below</h2>
      </div>
    );

  //TODO add a new prop to send to Counter called ally: true/false
  return (
    <div>
      {props.characters.map((x) => (
        <Hero
          key={x.id}
          id={x.id}
          hpValue={x.hpValue}
          name={x.name}
          initValue={x.initValue}
          handleRemove={props.handleRemove}
          handleIncrement={props.handleIncrement}
          handleDecrement={props.handleDecrement}
          ally={x.ally}
        />
      ))}
    </div>
  );
}

export default HeroList;
