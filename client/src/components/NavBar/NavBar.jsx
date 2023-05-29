import React from "react";
import logo from "../../images/logo2.png";
import "./NavBar.css";
import SearchBar from "../SearchBar/SearchBar";

export default function NavBar() {
  return (
    <div className='navBar'>
      <div className='contentNavBar'>
        <img className='logoNav' src={logo} alt="logo" />
        <p className='navButton'>About</p>
        <p className='navButton'>Create Your Recipe</p>
      </div>
      <div>
        <SearchBar />
      </div>
    </div>
  );
}
