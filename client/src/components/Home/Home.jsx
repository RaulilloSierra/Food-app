import React from "react";
import Card from "../Card/Card.jsx";
import style from "./Home.module.css";

function Home(props) {
  const { characters } = props;
  return (
    <div className={style.home}>
      <div className={style.filter}>
        <h1>Hola a todos</h1>
        <p>Uno</p>
        <p>Dos</p>
        <p>Tres</p>
        <p>Cuatro</p>
      </div>
      <div className={style.containerCards}>
        {characters?.map((e) => {
          return (
            <Card
              key={e.id}
              id={e.id}
              name={e.name}
              health_score={e.health_score}
              image={e.image}
            />
          );
        })}
      </div>
      
    </div>
  );
}

export default Home;
