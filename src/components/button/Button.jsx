import React from "react";

export const Button = (props) => {
  return (
    <button className="button" type="submit">
      {props.text}
    </button>
  );
};
