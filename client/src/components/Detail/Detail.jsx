import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import * as actions from "../../redux/actions";
import "./Detail.css";
import data from "../../data";

export default function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getRecipesByiD(id));
  });

  let recipeDetail = useSelector((state) => state.detail);

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

  // const dataDetail = () => {
  //   const result = data.filter((e) => e.id === Number(id));
  //   return result;
  // };

  // const recipeDetail = dataDetail();

  return (
    <div className="detail">
      <div>
        <Link to="/home">
          <button className="btnDetail">← To Back</button>
        </Link>
        <h1 className="nameDetail">{recipeDetail.name}</h1>
        <p className="idDetails">#{recipeDetail.id}</p>
        <div className="imgAndDietDetail">
          <div>
            <img
              src={recipeDetail.image}
              alt={recipeDetail.name}
              className="imgDetail"
            />
          </div>
          <div>
            {recipeDetail.diets &&
              recipeDetail.diets.map((i) => {
                return (
                  <p className={`${removerCharDiets(i.name)}Detail`}>
                    {i.name}
                  </p>
                );
              })}
          </div>
        </div>
        <p className="summaryDetail">
          {recipeDetail.food_summary &&
            removerCaracteres(recipeDetail.food_summary)}
        </p>
        <div>
          <h2 className="ingredients">Ingredients: </h2>
          <ul>
            {recipeDetail.ingredients &&
              recipeDetail.ingredients.map((i) => {
                return (
                  <li className="ingredientsDetail">{`${i.name} (${Math.ceil(
                    i.amount
                  )} ${i.unitShort ? i.unitShort : "units"})`}</li>
                );
              })}
          </ul>
        </div>
        <div>
          <h2>Instructions</h2>
          {recipeDetail.instructions &&
            recipeDetail.instructions.map((step) => {
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
    </div>
      // <div className="detail">
      //   <Link to="/home">
      //     <button className="btnDetail">← To Back</button>
      //   </Link>
      //   {recipeDetail.map((e) => {
      //     return (
      //       <div>
      //         <h1 className="nameDetail">{e.name}</h1>
      //         <p className="idDetails">#{e.id}</p>
      //         <div className="imgAndDietDetail">
      //           <div>
      //             <img src={e.image} alt={e.name} className="imgDetail" />
      //           </div>
      //           <div>
      //             {e.diets.map((i) => {
      //               return (
      //                 <p className={`${removerCharDiets(i.name)}Detail generalDiet`}>
      //                   {i.name}
      //                 </p>
      //               );
      //             })}
      //           </div>
      //         </div>
      //         <p className="summaryDetail">
      //           {e.food_summary && removerCaracteres(e.food_summary)}
      //         </p>
      //         <div>
      //           <h2 className="ingredients">Ingredients: </h2>
      //           <ul>
      //             {e.ingredients.map((i) => {
      //               return (
      //                 <li className="ingredientsDetail">{`${i.name} (${
      //                   i.amount
      //                 } ${i.unitShort ? i.unitShort : "units"})`}</li>
      //               );
      //             })}
      //           </ul>
      //         </div>
      //         <div>
      //           <h2>Instructions</h2>
      //           {e.instructions.map((step) => {
      //             return (
      //               <div className="instructionDetail">
      //                 <p>
      //                   <span className="instructionNumber">{step.number}</span> -{" "}
      //                   {step.step}
      //                 </p>
      //               </div>
      //             );
      //           })}
      //         </div>
      //       </div>
      //     );
      //   })}
      // </div>
  );
}
