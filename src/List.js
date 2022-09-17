import React, { useReducer } from "react";

export const List = (props) => {
  const { component: Component } = props;
  return (
    <ul>
      {props.items.map((item, i) => (
        <Component
          key={i}
          first_name={item.first_name}
          last_name={item.last_name}
          id={item.id}
          index={i}
        />
      ))}
    </ul>
  );
};
