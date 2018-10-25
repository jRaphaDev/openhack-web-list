import React from "react";

export const RefreshButtonComponent = ({ isLoading, clicked }) => {
  let css = `fas fa-sync-alt ${isLoading ? "fa-spin" : ""}`;

  return (
    <i
      className={css}
      style={{ padding: 5, cursor: "pointer", marginRight: 6 }}
      onClick={clicked}
    />
  );
};
