import React from "react";

export const CustomerItem = (props) => {
  return (
    <li key={props.index}>
      {props.first_name} {props.last_name}
    </li>
  );
};
