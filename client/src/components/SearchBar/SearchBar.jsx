import React from "react";
import './SearchBar.css'

export default function SearchBar() {
  return (
    <div className='searchBar'>
      <input className='inputSearch' type="search" />
      <button className='btnSearch'>Search</button>
    </div>
  );
}
