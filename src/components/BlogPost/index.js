import React, { useState } from "react";

function BlogPost({
  title,
  author,
  text,
  datePosted,
  image,
  key,
  onSubmit,
  onChange,
}) {
  return (
    <div key={key}>
      <input onChange={onChange} />
      <h1>{title}</h1>
      <h2>{author}</h2>
      <p>{text}</p>
      <h3>{datePosted}</h3>
      <h4>{image}</h4>
      <button onClick={onSubmit}> {onChange}Add BlogPost</button>
    </div>
  );
}

export default BlogPost;
