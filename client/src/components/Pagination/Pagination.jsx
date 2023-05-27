import React from "react";
import style from "./Pagination.module.css";

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
    <div className={style.containerPag}>
      <ul className={style.pagination}>
        <li className={style.sectionPag}>
          <p
            className={`${style.onPag} ${
              currentPage === 1 ? style.disable : ""
            }`}
            onClick={onPrevPage}
          >
            Previous
          </p>
        </li>
        {pageNumbers.map((e) => {
          return (
            <li className={style.sectionPag} key={e}>
              <p
                className={`${e === currentPage ? style.active : style.number}`}
                onClick={() => onSpecificPage(e)}
              >
                {e}
              </p>
            </li>
          );
        })}
        <li className={style.sectionPag}>
          <p
            className={`${style.onPag} ${
              currentPage >= pageNumbers.length ? style.disable : ""
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
