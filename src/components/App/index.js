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

function App() {
  const [input, setInput] = useState("");

  function handleChange(event) {
    setInput(event.target.value);
  }
  function addBlog(text) {
    setInput([...input, text]);
  }
  function removeBlog(index) {
    setInput([...removeBlog.slice(0, index), ...removeBlog.slice(index + 1)]);
  }

  return (
    <div className="App">
      <h1> Austyn's Blog </h1>
      <BlogPost
        value={input}
        onSubmit={addBlog}
        titleText={blogItems.title}
        author={blogItems.author}
        date={blogItems.datePosted}
        text={blogItems.text}
        onChange={handleChange}
        type="text"
        image={blogItems.image}
        alt={blogItems.alt}
      />

      <h2 id="Blog Display">Your Blog here.</h2>
    </div>
  );
}

export default App;
