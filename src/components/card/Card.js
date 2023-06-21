
import React from "react";
import "./card.css";

const Card = () => {
  return (
    <div className="card" > 
      <img src='../../img/glassesimoji.png' alt='' /> 
      <span>Developer</span>
      <span>Html Css javascript Reactjs</span>
      <button className="c-button">LEARN MORE</button>
      <div className="card-ch1">
      <img src='../../img/glassesimoji.png' alt='' /> 
      <span>Designer</span>
      <span>Html Css javascript Reactjs</span>
      <button className="c-button">LEARN MORE</button>
      </div>
      <div className="card-ch2" style={{  top: "12rem"}}>
      <img src='../../img/glassesimoji.png' alt='' /> 
      <span>D</span>
      <span>Html Css javascript Reactjs</span>
      <button className="c-button">LEARN MORE</button>
      </div>
    </div>
  );
};

export default Card;