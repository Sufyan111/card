import React from "react";
import { CardChild } from "./CardChild";
import { CardReducer } from "../reducers/CardReducer";

export const CardParent = () => {
  return (
    // <div className="trending-card-container">
      <div id="card-container">
        <div className="row">
          {CardReducer.Data.map((item) => (
            <CardChild aamer={item} />
          ))}
        </div>
      </div>
    // </div>
  );

};
