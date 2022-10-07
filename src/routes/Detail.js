import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Detail = () => {
  const toDos = useSelector((state) => state);
  console.log(toDos);
  const idd = useParams().id;
  console.log(idd);
  const todoText = toDos.find((todo) => todo.id === parseInt(idd));

  // console.log(todoText.id);
  // console.log(todoText.text);

  return (
    <>
      {todoText?.text}
      Created at:{todoText?.id}
    </>
  );
};
export default Detail;
