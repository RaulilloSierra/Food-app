import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as actions from "../../redux/actions";
import "./SearchBar.css";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(actions.searchByName(name));
  }

  return (
    <div className="searchBar">
      <input className="inputSearch" type="search" onChange={handleChange}/>
      <button className="btnSearch" onClick={handleSubmit}>Search</button>
    </div>
  );
}
