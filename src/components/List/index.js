import React from "react";
import ListItem from "../listItem/index.js";

function List({ inputs, handleDelete }) {
  return (
    <ul>
      {inputs.map(function (input, index) {
        return (
          <ListItem
            key={input.text}
            index={index}
            text={input.text}
            handleDelete={handleDelete}
          />
        );
      })}
    </ul>
  );
}

export default List;
