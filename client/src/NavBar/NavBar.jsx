import React from "react";
import logo from "../images/logo2.png";
import style from "./NavBar.module.css";
import SearchBar from "../components/SearchBar/SearchBar";

export default function NavBar() {
  return (
    <div className={style.navBar}>
      <div className={style.contentNavBar}>
        <img className={style.logoNav} src={logo} alt="logo" />
        <p className={style.navButton}>About</p>
        <p className={style.navButton}>Create Your Recipe</p>
      </div>
      <div>
        <SearchBar />
      </div>
    </div>
  );
}
