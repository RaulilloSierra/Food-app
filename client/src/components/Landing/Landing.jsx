import React from "react";
import { Link } from "react-router-dom";
import image from "../../images/imagen landing.jpeg";
import style from "./Landing.module.css";

export default function Landing() {
  return (
    <div className={style.landing}>
      <div>
        <img src={image} alt="imagen Landing" className={style.imageLanding} />
      </div>
      <div className={style.textLanding}>
        <h1>THE PASSION OF COOKING</h1>
        <p>
          Cooking is an art that connects us with our flavors and traditions.
          Discover the joy of creating unique dishes and delight your senses
          with each bite. Join our online community and spark your culinary
          creativity. Delight yourself with our recipes, the pleasure is in each
          flavor!
        </p>
        <Link to={'/home'}>
          <button className={style.buttonLanding}>Start now →</button>
        </Link>
      </div>
    </div>
  );
}
