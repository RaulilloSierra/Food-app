import "./Error.css";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="error">
      <div className="textError">
        <h1 className="nameError">404</h1>
        <p className="descError">• PAGE NOT FOUND •</p>
      </div>
      <Link to="/home">
        <button className="btnError">Back to home</button>
      </Link>
    </div>
  );
}
