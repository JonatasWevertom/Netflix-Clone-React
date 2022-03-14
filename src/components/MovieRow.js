import React from "react";
import "./MovieRow.css";

export default ({ title, items }) => {
  return (
    <div>
      <h2>{title}</h2>
      <h2>{items}</h2>
    </div>
  );
};
