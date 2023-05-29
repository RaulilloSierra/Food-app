import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";

import cards from './data'
import Landing from "./components/Landing/Landing.jsx";
import Home from "./components/Home/Home.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Detail from "./components/Detail/Detail";

function App() {
  const { pathname } = useLocation();
  // const [cards, setCards] = useState([]);

  // const recipeList = async () => {
  //   const URL = "http://localhost:3001/recipes/home";
  //   const { data } = await axios(URL);
  //   setCards(data);
  // };
  // useEffect(() => {
  //   recipeList();
  // }, []);

  return (
    <div className="App">
      {pathname !== "/" && <NavBar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home cards={cards} />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
