import React, { useState } from "react";
import Card from "../Card/Card.jsx";
import style from "./Home.module.css";
import Pagination from "../Pagination/Pagination.jsx";

function Home(props) {
  const { cards } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 9;

  const totalCards = cards.length;

  const lastIndex = currentPage * cardsPerPage;
  const firstIndex = lastIndex - cardsPerPage;

  console.log(lastIndex, "-", firstIndex);

  return (
    <div>
      <div className={style.home}>
        <div className={style.filter}>
          <h1>Hola a todos</h1>
          <p>Uno</p>
          <p>Dos</p>
          <p>Tres</p>
          <p>Cuatro</p>
        </div>
        <div className={style.containerCards}>
          {cards
            ?.map((e) => {
              return (
                <Card
                  key={e.id}
                  id={e.id}
                  name={e.name}
                  health_score={e.health_score}
                  image={e.image}
                />
              );
            })
            .slice(firstIndex, lastIndex)}
        </div>
      </div>
        <Pagination
          cardsPerPage={cardsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalCards={totalCards}
        />
    </div>
  );
}

export default Home;
