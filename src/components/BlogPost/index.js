import React, { useState } from "react";

function BlogPost({
  title,
  author,
  text,
  datePosted,
  image,
  key,
  onCommentSubmit,
  valueForBlog,
  valueForComments,
  commentHandleChange,
}) {
  return (
    <div key={key}>
      <input onChange={commentHandleChange} value={valueForComments} />
      <button onClick={onCommentSubmit} id="commentButton">
        Add Comment
      </button>
      <h1>{title}</h1>
      <h2>{author}</h2>
      <p>{text}</p>
      <h3>{datePosted}</h3>
      <img src={image} alt="blog" />
      <button onClick={onCommentSubmit} id="addBlogPost">
        Add BlogPost
      </button>
      <input onChange={valueForBlog} />
    </div>
  );
}

export default BlogPost;
