import React from "react";
import "./Dishes.css";

function Dishes(props) {
  return (
      <div>
      <h1>Dishes:</h1>
        <ul>
          {props.dishes.map((dish) => (
            <li key={dish.id}>
              El {dish.name} cuesta: {dish.price}. Un poco sobre él: {dish.description}
            </li>
          ))}
        </ul>
      </div>
  );
}

export default Dishes;
