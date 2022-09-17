import React, { useEffect, useReducer } from "react";

const initalFormState = {
  first_name: "",
  last_name: "",
};

const createUserReducer = (state, action) => {
  switch (action.type) {
    case "HANDLE_INPUT_TEXT":
      return {
        ...state,
        [action.field]: action.payload,
      };
    default:
      return state;
  }
};

export const CreateUserForm = () => {
  const [state, dispatch] = useReducer(createUserReducer, initalFormState);

  useEffect(() => {
    console.log({ state }, "state");
  }, [state]);

  const handleChange = (e) => {
    dispatch({
      field: e.target.name,
      payload: e.target.value,
      type: "HANDLE_INPUT_TEXT",
    });
  };

  const handleSubmit = () => {
    console.log(state);
    fetch("https://capstone-backend.vercel.app/customers", {
      method: "POST",
      body: JSON.stringify(state),
      headers: { "Content-Type": "application/json" },
    });
    // .then((res) => res.json())
    // .then((data) => data);
  };
  return (
    <form>
      <label htmlFor="first_name">
        First name:
        <input type="text" name="first_name" onChange={handleChange} />
      </label>
      <label htmlFor="last_name">
        Last name:
        <input type="text" name="last_name" onChange={handleChange} />
      </label>
      <input
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      />
    </form>
  );
};
