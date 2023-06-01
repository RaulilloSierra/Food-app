import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect} from "react";
import * as actions from "./redux/actions";

import Landing from "./components/Landing/Landing.jsx";
import Home from "./components/Home/Home.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Detail from "./components/Detail/Detail";
import AddRecipe from "./components/AddRecipe/AddRecipe";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const { pathname } = useLocation();

  const dispatch = useDispatch();
  const cards = useSelector((state) => state.recipes);
  useEffect(() => {
    dispatch(actions.getRecipes());
  }, [dispatch]);

  return (
    <div className="App">
      {pathname !== "/" && <NavBar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home cards={cards} />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/createrecipe" element={<AddRecipe />} />
      </Routes>
    </div>
  );
}

export default App;
