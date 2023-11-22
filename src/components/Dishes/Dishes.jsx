import React from "react";
import "./Dishes.css";

function Dishes(props) {
  return (
    <div>
      <h1>Dishes:</h1>
      <ul>
        {props.dishes.map((dish) => (
          <li key={dish.id}>
            The "{dish.name}" costs {dish.price}€. A little description of it: {dish.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dishes;
