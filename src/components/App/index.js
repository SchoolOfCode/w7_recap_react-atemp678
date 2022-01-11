import React, { useState } from "react";
import BlogPost from "../BlogPost/index.js";
//import Button from "../Button/index.js";
import List from "../List/index.js";

export const blogItems = {
  title: "My First Post",
  author: "Chris Meah",
  datePosted: "20/11/2019",
  text: `
      A structure used in most apps and games.
      It's a way to keep doing the same.
      While a condition is true,
      Or for one to twenty-two.
      If endless, for errors we blame
      ..........
      Loop `,
  image:
    "https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  alt: "A couple of coders.",
};
let text = "";
function App() {
  const [input, setInput] = useState("");
  const [comments, setComment] = useState([]);
  const [input2, setInput2] = useState(text);

  function handleChange(event) {
    setInput(event.target.value);
  }
  function addBlog(text) {
    setInput([...input, text]);
  }
  function removeBlog(index) {
    setInput([...removeBlog.slice(0, index), ...removeBlog.slice(index + 1)]);
  }

  function addComment() {
    console.log(input2, comments);
    setComment([...comments, { text: input2 }]);
    setInput2("");
  }

  function commentHandleChange(event) {
    console.log("commentchangeevent");
    setInput2(event.target.value);
  }

  return (
    <div className="App">
      <h1> Austyn's Blog </h1>
      <BlogPost
        valueForBlog={input}
        handleChange={handleChange}
        onCommentSubmit={addComment}
        titleText={blogItems.title}
        author={blogItems.author}
        date={blogItems.datePosted}
        text={blogItems.text}
        onClick={addComment}
        onDelete={removeBlog}
        type="text"
        image={blogItems.image}
        alt={blogItems.alt}
        valueForComments={input2}
        commentHandleChange={commentHandleChange}
      />
      <List inputs={comments} onDelete={removeBlog} />
    </div>
  );
}

export default App;
