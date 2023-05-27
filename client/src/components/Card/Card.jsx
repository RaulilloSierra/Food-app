import React from "react";
import style from "./Card.module.css";
// import {Link} from 'react-router-dom'

export default function Card(props) {
  const {id, name, health_score, image } = props;
  return (
    <div key={id} className={style.cardContainer}>
      <p className={style.idCard}>#{id}</p>
      <img className={style.imageCard} src={image} alt={name} />
      <h1 className={style.nameCard}>{name}</h1>
      <p className={style.healthCard}>Health score: {health_score}</p>
      <button className={style.btnCard}>See more</button>
    </div>
  );
}
