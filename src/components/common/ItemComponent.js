import React from "react";

export const ItemComponent = ({ name, value }) => (
  <div className="row">
    <div className="col">
      <strong>{name}</strong>
    </div>

    <div className="col-10" style={{ padding: 0, alignItems: "flex-start" }}>
      <span>{value}</span>
    </div>
  </div>
);
