import React from "react";

const Animal = ({ id, name, onRemoveAnimal }) => {
  return <p onClick={() => onRemoveAnimal(id)}> Hello I am a {name} </p>;
};
export default Animal;
