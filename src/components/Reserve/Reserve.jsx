import React, { useEffect, useState } from "react";
import "./Reserve.css";
import { useNavigate } from "react-router-dom";

const Reserve = () => {
  const initialValue = {
    name: "",
    email: "",
    phone: "",
    date: null,
    time: "",
    message: "",
  };
  const [data, setData] = useState(initialValue);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const email = data.email;
  const navigate = useNavigate();
  const [dateError, setDateError] = useState("");

  const validateEmail = (email) => {
    const emailVerification = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailVerification.test(email);
  };

  const isSameDay = (date1, date2) => {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  };

  useEffect(() => {
    const validation = () => {
      if (data.name.length < 4) {
        setMessage("The name must be 4 characters long");
        setBtnDisabled(true);
      } else if (!validateEmail(email)) {
        setMessage("Enter a valid email");
        setBtnDisabled(true);
      } else if (data.date === null) {
        setDateError("Please select a date");
        setBtnDisabled(true);
      } else {
        const selectedDate = new Date(data.date);
        const currentDate = new Date();
        if (
          selectedDate < currentDate &&
          !isSameDay(selectedDate, currentDate)
        ) {
          setDateError("Please select a valid date");
          setBtnDisabled(true);
        } else {
          setMessage(null);
          setDateError("");
          setBtnDisabled(false);
        }
      }
    };
    validation();
  }, [data]);

  const inputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const submit = (event) => {
    event.preventDefault();
    setMessage("Form sent successfully");
    setTimeout(() => {
      setData({ ...initialValue });
      navigate("/");
    }, 2000);
    localStorage.setItem("formData", JSON.stringify(data));
  };

  return (
    <div className="container">
      <h1>To book a reserve, please complete the following form.</h1>
      <form className="form" onSubmit={submit}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          onChange={inputChange}
          value={data.name}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          onChange={inputChange}
          value={data.email}
        />
        <input
          type="phone"
          name="phone"
          placeholder="Enter a phone number"
          onChange={inputChange}
          value={data.phone}
        />
        <input
          type="date"
          name="date"
          onChange={inputChange}
          value={data.date}
        />
        <input
          type="time"
          name="time"
          onChange={inputChange}
          value={data.time}
        />
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="Something to add?"
          onChange={inputChange}
          value={data.message}
        ></textarea>
        <button id="button" type="submit" disabled={btnDisabled}>
          Send
        </button>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
};

export default Reserve;
