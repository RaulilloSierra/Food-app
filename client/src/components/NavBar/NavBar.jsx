import logo from "../../images/logo2.png";
import "./NavBar.css";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navBar">
      <div className="contentNavBar">
        <Link to="/home"><img className="logoNav" src={logo} alt="logo" /></Link>
        <Link to="/about" className="navButton"><p className="navButton">About</p></Link>
        <Link className="navButton" to="/createrecipe">
          <p className="navButton">Create Your Recipe</p>
        </Link>
      </div>
      <div>
        <SearchBar />
      </div>
    </div>
  );
}
