import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check Out Some Of My Favorite Indie Games!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/4.png"
              title="Hollow Knight"
              text="Explore the Hollownest kingdom ,fight epic Bosses and restore Peace"
              label="Adventure , Mystery, SoulsLike"
              path="/discover"
            />

            <CardItem
              src="images/5.jpg"
              title="Spiritfarer"
              text="Lead a hand and grant a friend his last wish"
              label="Managment, Advanture"
              path="/discover"
            />

            <CardItem
              src="images/6.jpg"
              title="Spiritfarer"
              text="Colorful Advanture"
              label="Advanture"
              path="/discover"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
