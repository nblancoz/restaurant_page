import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Dishes from "./components/Dishes/Dishes";
import Home from "./components/Home/Home";
import Reserve from "./components/Reserve/Reserve";

function App() {
  const dishes = [
    {
      id: 1,
      name: "plato 1",
      description: "Este es el plato 1",
      price: 10,
    },
    {
      id: 2,
      name: "plato 2",
      description: "Este es el plato 2",
      price: 20,
    },
    {
      id: 3,
      name: "plato 3",
      description: "Este es el plato 3",
      price: 15,
    },
  ];

  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="container">
          <div className="dishes-img">
            <div className="dishes">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Dishes dishes={dishes} />} />
                <Route path="/reserve" element={<Reserve />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
