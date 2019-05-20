import React from "react";
import Title from "../Title";

export default function Default(props) {
  console.log(props);

  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
          {/* <h1 className="display-3">404 ERROR</h1>
          <h2>PAGE NOT FOUND</h2> */}
          <Title name="404 ERROR" title="page not found"></Title>
        </div>
      </div>
    </div>
  );
}