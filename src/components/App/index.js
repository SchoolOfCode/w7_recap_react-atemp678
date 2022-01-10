import React, { useState } from "react";
import BlogPost from "../BlogPost/index.js";
//import Button from "../Button/index.js";
import List from "../List/index.js";
import blogItems from "../BlogPost/index.js";

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
        // titleText={title}
        //author={author}
        //  date={datePosted}

        onChange={handleChange}
        type="text"
        //  image={image}
        //  alt={imageAltText}
      />

      <h2 id="Blog Display">Your Blog here.</h2>
    </div>
  );
}

export default App;
