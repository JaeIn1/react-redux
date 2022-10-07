import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./store";
import ToDo from "../components/ToDo";

function Home() {
  const [text, setText] = useState("");
  const onChange = (event) => {
    setText(event.target.value);
  };
  const toDo = useSelector((state) => state);
  const dispatch = useDispatch();
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(addTodo(text));
    setText("");
  };
  return (
    <div>
      <h1>To do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange}></input>
        <button type="submit">Add</button>
      </form>
      <ul>
        {toDo.map((toDos) => (
          <ToDo {...toDos} key={toDos.id} />
        ))}
      </ul>
    </div>
  );
}
export default Home;
