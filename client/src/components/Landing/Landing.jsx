import React from "react";
import { Link } from "react-router-dom";
import image from "../../images/logo2.png";
import "./Landing.css";

export default function Landing() {
  return (
    <div className='landing'>
      <div>
        <img src={image} alt="imagen Landing" className='imageLanding' />
      </div>
      <div className='textLanding'>
        <h1>THE PASSION OF COOKING</h1>
        <p>
          Cooking is an art that connects us with our flavors and traditions.
          Discover the joy of creating unique dishes and delight your senses
          with each bite. Join our online community and spark your culinary
          creativity. Delight yourself with our recipes, the pleasure is in each
          flavor!
        </p>
        <Link to={'/home'}>
          <button className='buttonLanding'>Start now →</button>
        </Link>
      </div>
    </div>
  );
}
