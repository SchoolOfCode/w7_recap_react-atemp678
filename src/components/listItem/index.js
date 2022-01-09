import React from "react";

function ListItem(text, onDelete) {
  return (
    <li>
      {text}
      <button onClick={onDelete}>Delete Comment</button>
    </li>
  );
}

export default ListItem;
