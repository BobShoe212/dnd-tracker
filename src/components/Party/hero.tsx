import React from "react";
import HpCounter from "./hpCounter";
import InitChanger from "./initChanger";

function Hero(props: {
  name: string;
  hpValue: number;
  maxHP: number;
  id: string;
  handleHPChange: any;
  initValue: any;
  handleInitChange: any;
  handleRemove: (arg0: any) => any;
  ally: boolean;
}) {
  return (
    <div className="row">
      <div className="col-1">{props.name}</div>
      <div className="col-xxl-6 col-xl-4 col-lg-5 col-md-10 col-12">
        <HpCounter
          hpValue={props.hpValue}
          maxHP={props.maxHP}
          id={props.id}
          handleHPChange={props.handleHPChange}
        />
      </div>
      <div className="col-xxl-3 col-xl-2 col-lg-3 col-md-10 col-12">
        <InitChanger
          id={props.id}
          initValue={props.initValue}
          handleInitChange={props.handleInitChange}
        />
      </div>
      <div className="col-12">
        <button
          onClick={() => {
            props.handleRemove(props.id);
          }}
          className="btn btn-warning btn-sm"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default Hero;
