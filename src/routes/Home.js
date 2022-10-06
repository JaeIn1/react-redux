import React, { useState } from "react";

function Home() {
  const [text, setText] = useState("");
  const onChange = (event) => {
    setText(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    setText("");
  };
  return (
    <div>
      <h1>To do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange}></input>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
export default Home;
