// import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import axios from 'axios'

import "./Detail.css";
import data from "../../data";

export default function Detail() {
  const { id } = useParams();
  // const [recipeDetail, setRecipeDetail] = useState({})
  // const dataDetail = async () => {
  //   const URL = "http://localhost:3001/recipes/"+id;
  //   const { data } = await axios(URL);
  //   console.log('soy la data', data)
  //   setRecipeDetail(data);
  // };
  // useEffect(() => {
  //   dataDetail();
  // }, [id]);

  const dataDetail = () => {
    const result = data.filter((e) => e.id === Number(id));
    return result;
  };

  function removerCaracteres(str) {
    if (str === null || str === "") return false;
    else str = str.toString();

    return str.replace(/(<([^>]+)>)/gi, "");
  }

  function removerCharDiets(str) {
    if (str === null || str === "") return false;
    else str = str.toString();

    return str.replace(/\s/g, "");
  }

  const recipeDetail = dataDetail();
  // const resul = recipeDetail.map((e) =>
  //   e.diets.map((i) => {
  //     return i.name;
  //   })
  // );
  // console.log("soy una dieta: ", resul);

  return (
    <div className="detail">
      {recipeDetail.map((e) => {
        return (
          <div>
            <Link to="/home">
              <button className="btnDetail">← To Back</button>
            </Link>
            <h1 className="nameDetail">{e.name}</h1>
            <p className="idDetails">#{e.id}</p>
            <div className="imgAndDietDetail">
              <div>
                <img src={e.image} alt={e.name} className="imgDetail" />
              </div>
              <div>
                {e.diets.map((i) => {
                  return (
                    <p className={`${removerCharDiets(i.name)}Detail`}>
                      {i.name}
                    </p>
                  );
                })}
              </div>
            </div>
            <p className="summaryDetail">
              {e.food_summary && removerCaracteres(e.food_summary)}
            </p>
            <div>
              <h2 className="ingredients">Ingredients: </h2>
              <ul>
                {e.ingredients.map((i) => {
                  return (
                    <li className="ingredientsDetail">{`${i.name} (${Math.ceil(i.amount)} ${i.unitShort ? i.unitShort : "units"})`}</li>
                  );
                })}
              </ul>
            </div>
            <div>
              <h2>Instructions</h2>
              {e.instructions.map((step) => {
                return (
                  <div className="instructionDetail">
                    <p>
                      <span className="instructionNumber">{step.number}</span> -{" "}
                      {step.step}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
      {/* <h1>{recipeDetail.name}</h1> */}
      {/* <img src={recipeDetail.image} alt={recipeDetail.name} />
      <p>
        {recipeDetail.food_sumary &&
          removerCaracteres(recipeDetail.food_sumary)}
      </p> */}
    </div>
  );
}
