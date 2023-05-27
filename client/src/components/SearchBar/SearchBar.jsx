import React from "react";
import style from './SearchBar.module.css'

export default function SearchBar() {
  return (
    <div className={style.searchBar}>
      <input className={style.inputSearch} type="search" />
      <button className={style.btnSearch}>Search</button>
    </div>
  );
}
