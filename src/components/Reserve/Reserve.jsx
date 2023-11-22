import React from "react";
import "./Reserve.css";

const Reserve = () => {
  return (
    <div className="container">
      <h1>To book a reserve, please complete the following form.</h1>
      <form className="form">
        <input type="text" name="name" placeholder="Enter your name" />
        <input type="email" name="email" placeholder="Enter your email" />
        <input type="tel" name="tel" placeholder="Enter a phone number" />
        <input type="date" name="date" />
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="Anything else?"
        ></textarea>
        <button id="button" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default Reserve;
