import React, { useState } from "react";

function BlogPost({ onSubmit }) {
  const [text, setText] = useState("");
  function handleChange(event) {
    setText(event.target.value);
  }

  return (
    <div>
      <input onChange={handleChange} value={text} />
      <button onClick={onSubmit}> Add BlogPost</button>
    </div>
  );
}

export default BlogPost;
