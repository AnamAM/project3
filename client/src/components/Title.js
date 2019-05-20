import React from "react";

export default function Title({ name, title }) {
  return (
    <div className="row">
      <div className="col-12 mx-auto my-2 text-center text-title">
        <h1 className="text-capitalize font-weight-bold text-white" style={{ letterSpacing: ".3em", fontFamily: "Oswald"}}>
          {name} <strong className="text-white">{title}</strong>
        </h1>
      </div>
    </div>
  );
}