import React, { useState } from "react";
import Card from "../Card/Card.jsx";
import "./Home.css";
import Pagination from "../Pagination/Pagination.jsx";
import Filter from "../Filters/Filter.jsx";
import Order from "../Order/Order.jsx";

function Home(props) {
  const { cards } = props;
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
      {/* <select id="orderByName" onChange={(e) => handleOrderbyName(e)}>
          <option>Order by name</option>
          <option value="asc">alphabetical order, a-z</option>
          <option value="des">alphabetical order, z-a</option>
        </select> */}
      <div className="home">
        <Filter />
        
        {/* <select onChange={handleFilterByDiet} name="diet" id="diet">
          <option value="All" defaultValue>
            All
          </option>
          {diet.map((el) => (
            <option value={el.name} key={el.id}>
              {el.name}
            </option>
          ))}
        </select> */}
        <div className="containerCards">
          {cards
            ?.map((e) => {
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
