import "./Card.css";
import { Link } from "react-router-dom";

export default function Card(props) {
  const { id, name, health_score, image, diets } = props;

  function removerCharDiets(str) {
    if (str === null || str === "") return false;
    else str = str.toString();

    return str.replace(/\s/g, "");
  }

  return (
    <div key={id} className="cardContainer">
      <p className="idCard">#{id}</p>
      <Link to={`/detail/${id}`}>
        <img className="imageCard" src={image} alt={name} />
      </Link>
      <Link className="nameCard" to={`/detail/${id}`}>
        <h1 className="nameCard">{name}</h1>
      </Link>
      <p className="healthCard">Health score: {health_score}</p>
      <div className="diet">
        {diets.map((diet) => (
          <p key={diet.name} className={`${removerCharDiets(diet.name)}Card`}>{diet.name}</p>
        ))}
      </div>
    </div>
  );
}
