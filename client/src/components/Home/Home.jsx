import React, { useState } from "react";
import Card from "../Card/Card.jsx";
import "./Home.css";
import Pagination from "../Pagination/Pagination.jsx";
import Filter from "../Filters/Filter.jsx";
import Order from "../Order/Order.jsx";

function Home(props) {
  const { cards, error } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 9;

  const totalCards = cards.length;

  const lastIndex = currentPage * cardsPerPage;
  const firstIndex = lastIndex - cardsPerPage;

  return (
    <div className="containerHome">
      <Pagination
        cardsPerPage={cardsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalCards={totalCards}
      />
      <Order />
      {error !== '' && <p className="errorHome">{error}</p>}
      <div className="home">
        <Filter />
        <div className="containerCards">
          {cards.length >= 1 && cards?.map((e) => {
              return (
                <Card
                  key={e.id}
                  id={e.id}
                  name={e.name}
                  health_score={e.health_score}
                  image={e.image}
                  diets={e.diets}
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
