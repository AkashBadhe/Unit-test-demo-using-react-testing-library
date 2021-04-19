import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TodoForm(props) {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const addItem = () => {
    if (value && value !== "") {
      props.onAddItem({ newItemValue: value });
      setValue("");
    }
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      addItem();
    }
  };

  return (
    <div className="pure-form pure-form-aligned">
      <input
        type="text"
        value={value}
        data-testid="newItemField"
        className="form-control"
        placeholder="add a new item..."
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <button
        className="pure-button pure-button-primary"
        data-testid="addBtn"
        onClick={addItem}
      >
        Add
      </button>
    </div>
  );
}

TodoForm.propTypes = {
  onAddItem: PropTypes.func,
};
