import React from "react";
import "./Home.css";

function Home(props) {
  return (
    <div className="title">
      <h1>Dishes:</h1>
      <div className="dishes">
        <ul>
          {props.dishes.map((dish) => (
            <li key={dish.id}>
              El {dish.name} cuesta: {dish.price}. Un poco sobre él:{" "}
              {dish.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
