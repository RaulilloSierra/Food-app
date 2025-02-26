import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions";

import "./Filter.css";

export default function Filter() {
  const dispatch = useDispatch();
  const diet = useSelector((state) => state.typeDiets);
  console.log('Dietas', diet)

  useEffect(() => {
    dispatch(actions.getDiets());
  }, [dispatch]);

  function handleFilterByDiet(e) {
    dispatch(actions.filterByDiet(e.target.value));
  }
  function handleFilterByOrigin(e) {
    dispatch(actions.filterbyOrigin(e.target.value));
  }
  return (
    <div className="filter">
      <h2 className="titleFilter">Filter by</h2>
      <h3 className="subtitleFilter">Diet</h3>
      <form
        className="filterDiet"
        onChange={handleFilterByDiet}
        name="diet"
      >
        <div>
          <label>
            <input type="radio" value="All" name="dietFilter" />
            All
          </label>
        </div>

        {diet.map((el) => (
          <div key={el.id}>
            <label>
              <input
                type="radio"
                value={el.name}
                key={el.id}
                name="dietFilter"
              />
              {el.name}
            </label>
          </div>
        ))}
      </form>
      <h3 className="subtitleFilter">Origin</h3>
      <form
        className="filterDiet"
        onChange={handleFilterByOrigin}
        name="origin"
      >
        <div>
          <label>
            <input type="radio" value="All" name="originFilter" />
            All
          </label>
        </div>
        <div>
          <label>
            <input type="radio" value="API" name="originFilter" />
            API
          </label>
          </div>
          <div>
          <label>
            <input type="radio" value="DB" name="originFilter" />
            DB
          </label>
        </div>
      </form>
    </div>
  );
}
