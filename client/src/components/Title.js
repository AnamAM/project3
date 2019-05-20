import React from "react";

export default function Title({ name, title }) {
  return (
    <div className="row">
      <div className="col-12 mx-auto my-2 text-center text-title">
        <h1 className="font-weight-bold text-white" style={{ textAlign: "center", color: "white", fontFamily: 'Oswald, sans-serif', letterSpacing: ".2em", fontSize: "44pt",  textTransform: "uppercase" }}>
          {name} <strong className="text-white">{title}</strong>
        </h1>
      </div>
    </div>
  );
}