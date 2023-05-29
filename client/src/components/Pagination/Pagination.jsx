import React from "react";
import "./Pagination.css";

export default function Pagination(props) {
  const { cardsPerPage, currentPage, setCurrentPage, totalCards } = props;

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pageNumbers.push(i);
  }

  const onPrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const onNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const onSpecificPage = (n) => {
    setCurrentPage(n);
  };

  return (
    <div className='containerPag'>
      <ul className='pagination'>
        <li className='sectionPag'>
          <p
            className={`onPag ${
              currentPage === 1 ? 'disable' : ""
            }`}
            onClick={onPrevPage}
          >
            Previous
          </p>
        </li>
        {pageNumbers.map((e) => {
          return (
            <li className='sectionPag' key={e}>
              <p
                className={`${e === currentPage ? 'active' : 'number'}`}
                onClick={() => onSpecificPage(e)}
              >
                {e}
              </p>
            </li>
          );
        })}
        <li className='sectionPag'>
          <p
            className={`onPag ${
              currentPage >= pageNumbers.length ? 'disable' : ""
            }`}
            onClick={onNextPage}
          >
            Next
          </p>
        </li>
      </ul>
    </div>
  );
}
