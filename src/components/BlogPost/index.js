import React, { useState } from "react";

export const blogItems=[
    "Title",
    "author",
    "datePosted",
    "text",
    "image",
    "altImage"
];

function BlogPost({ title, author, text, datePosted, image, key, onSubmit }) {
  const [blogItems, setBlog] = useState([]);
  function handleChange(event) {
    setBlog(event.target.value);
  }

  return (
    <div key={key}>
          <input onChange={handleChange} value={blogItems} />
          <h1>{title}</h1>
          <h2>{author}</h2>
          <p>{text}</p>
          <h3>{datePosted}</h3>
          <button onClick={onSubmit}> Add BlogPost</button>
    </div>
  );
}

export default BlogPost;
